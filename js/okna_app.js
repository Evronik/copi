function AppQuizWidget() {
    var f = this;
    f.prop = {

    }
    f.vid = null;
    f.wid = null;
    f.sess = null;
    function init() {
        f.sess = guid();
        f.fields = new _fields();
        f.get = new _sender();
        f.steps = new _steps();
        window.addEventListener("message",f.message);
    }
    f.message = function(e) {
        if (e.data.visitor_id) {
            f.vid = +e.data.visitor_id;
            if (isNaN(f.vid)) f.vid = null;
        }
        if (e.data.widget_id) {
            f.wid = +e.data.widget_id;
            if (isNaN(f.wid)) f.wid = null;
        }
        if (e.data.target_open) {
            f.openFrame(e.data.target_open);
        }
    }
    f.getDataAction = function(action,data) {
        return {
            "data":[{
                action: action,
                data: data,
                visitor_id: f.vid,
                widget_id: f.wid,
                session_guid: f.sess,
                timestamp: Date.now()
            }],
            "countTry":0
        };
    }
    f.openFrame = function(name) {
        $('#smartquizLayout .smartquiz__window').css('transform', 'none');
        var data = f.getDataAction("openQuiz", {
            target: name || 'unknown'
        });
        var url = f.steps.getUrl();
        if (!url) return false;
        f.get.query(url, data);
    }
    f.closeFrame = function(name, callback) {
        var data = f.getDataAction("closeQuiz", {
            target: name
        });
        var url = f.steps.getUrl();
        if (!url) return false;
        f.get.query(url, data, callback);
    }

    /**
     * Р¤СѓРЅРєС†РёСЏ СЂР°Р±РѕС‚С‹ СЃ С€Р°РіР°РјРё
     */
    function _steps() {
        var e = this;
        e.prop = {
            box: '#smartquizLayout',
            nosend: 'smartquiz__layout-shown',
            final: 'smartquiz__final-step',
            attr: {
                action: 'data-save-action'
            }
        };
        e.controls = {};
        function events() {
            
        }
        e.getUrl = function() {
            var box = $(e.prop.box);
            return box.attr(e.prop.attr.action);
        }
        e.saving = function(num, data, success, error) {
            var box = $(e.prop.box);
            if (!box.length) return false;
            if (box.hasClass(e.prop.nosend)) {
                f.get.exec({}, success);
                return false;
            }
            var url = box.attr(e.prop.attr.action);
            if (!url) return false;
            f.get.query(url, data, function(res) {
                if (res.status==200&&res.responseJSON) {
                    e.controls[num] = JSON.stringify(data);
                    f.get.exec(res.responseJSON, success);
                } else f.get.exec(res, error);
            });
        }
        e.save = function(num, box, success, error) {
            if (!box.length) return false;
            var data = f.fields.get(box);
            if (!data) return false;
            var i = false;
            for (var i in data) break;
            if (i===false) return false;
            var send = true,
                new_data = JSON.stringify(data);
            if (num in e.controls) {
                var old_data = e.controls[num];
                if (old_data===new_data) send = false;
            }
            var action = 'answer';
            if (box.hasClass(e.prop.final)){ 
                action = 'quizForm';
                if (send) e.saving(num, f.getDataAction(action, data), function(data){
                    parent.postMessage({quiz_event_form_send:true},'*');
                    try{
                        f.get.exec(data, success);
                    }catch(err){}
                }, error);
            }else{
                if (send) e.saving(num, f.getDataAction(action, data), success, error);    
            }
            
        }
        events();
    }
    /**
     * Р¤СѓРЅРєС†РёСЏ РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ РїРѕР»СЏРјРё
     */
    function _fields() {
        var e = this;
        e.prop = {
            attr: {
                option: 'data-option',
                required: 'data-required'
            },
            emptyClass: 'empty',
            inputs: ['INPUT','SELECT','TEXTAREA']
        }
        e.call = {
            status: true,
            data: {}
        }
        /**
         * РџРѕР»СѓС‡РµРЅРёРµ РґР°РЅРЅС‹С… РїРѕР»РµР№ РІРЅСѓС‚СЂРё СѓРєР°Р·Р°РЅРЅРѕРіРѕ JQuery-СЌР»РµРјРµРЅС‚Р°
         * @param {object} box 
         */
        e.get = function(box) {
            if (!box) box = $(document.body);
            var fields = box.find('['+e.prop.attr.option+']');
            e.call = {status:true,data:{}};
            fields.each(e.getField);
            if (!e.call.status) return false;
            return e.call.data;
        }
        /**
         * РџРѕР»СѓС‡РµРЅРёРµ Р·РЅР°С‡РµРЅРёРµ РїРѕР»РµР№ (РїРµСЂРµР±РѕСЂ РІ e.get)
         */
        e.getField = function() {
            var fieldBox = $(this),
                input = $(this),
                tag = input[0].tagName;
            if (e.prop.inputs.indexOf(tag)<0) {
                input = fieldBox.find(e.prop.inputs.join(','));
            }
            var data = {};
            input.each(function() {
                var name = $(this)[0].name,
                    type = $(this)[0].type,
                    altername = name;
                if (name.indexOf('[')>-1) {
                    altername = name.split('[')[0];
                }
                var _alt_array_name = name.match( new RegExp('^([^\\[\\]]+)\\[(.+)\\]$','i') );
                if(_alt_array_name){
                    _alt_array_name = _alt_array_name[2];
                }
                var value = "";
                switch (type) {
                    case 'checkbox':
                        if (!$(this).prop('checked')) return;
                        name = altername;
                        value = e.val($(this), name);
                        break;
                    case 'file':
                        value = this.files;
                        break;
                    case 'radio':
                        if (!$(this).prop('checked')) return;
                    case 'text':
                        name = altername;

                        value = $(this).val();
                        break;
                    default:
                        name = altername;
                        value = e.val($(this), name);
                }
                if(!_alt_array_name){
                    data[name] = value;
                }else{
                    data[name] = {};
                    data[name][_alt_array_name] = value;
                }
            });
            if (e.checkOptions(fieldBox, data)) {
                for (var i in data) {
                    if (e.call.data[i] instanceof Array) {
                        e.call.data[i] = e.call.data[i].concat(data[i]);
                    } else if (e.call.data[i] instanceof Object) {
                        if (typeof data[i]=='object') {
                            if (!data[i]) continue;
                            for (var k in data[i]) e.call.data[i][k] = data[i][k];
                        }
                    } else {
                        e.call.data[i] = data[i];
                    }
                }
                return;
            }
            e.call.status = false;
        }
        e.val = function(el, field) {
            var input =  el.serializeObject();
            if (!input) return null;
            if (!(field in input)) return null;
            return input[field];
        }
        /**
         * РџСЂРѕРІРµСЂРєР° Рё РІС‹РїРѕР»РЅРµРЅРёРµ РЅРµРѕР±С…РѕРґРёРјС‹С… РґРµР№СЃС‚РІРёР№ РїРѕ РѕРїС†РёСЏРј РІ Р°С‚С‚СЂРёР±СѓС‚Р°С…
         * @param {object} box 
         * @param {object} data 
         */
        e.checkOptions = function(box, data) {
            var options = box.attr(e.prop.attr.option),
                list = [];
            box.removeClass(e.prop.emptyClass);
            if (options.indexOf(':')>-1) list = options.split(':');
            else list.push(options);
            if (!list.length) return true;
            var correct = true;
            for (var i=0,func,result; i<list.length; i++) {
                func = e.options[list[i]];
                if (typeof func!='function') continue;
                result = func(box, data);
                if (!result) correct = false;
            }
            return correct;
        }
        /**
         * РЎРїРёСЃРѕРє РѕРїС†РёРё, РєРѕС‚РѕСЂС‹Рµ СѓРєР°Р·Р°РЅС‹ РґР»СЏ РєР°Р¶РґРѕРіРѕ РїРѕР»СЏ
         * РљР°Р¶РґР°СЏ С„СѓРЅРєС†РёСЏ РґРѕР»Р¶РЅР° РІРѕР·РІСЂР°С‰Р°С‚СЊ true, РµСЃР»Рё СѓСЃРїС€РµРЅРѕ РѕР±СЂР°Р±РѕС‚Р°РЅРѕ
         * Р»РёР±Рѕ false, РµСЃР»Рё РїСЂРѕРІРµСЂРєР°/РІС‹РїРѕР»РЅРµРЅРёРµ РЅРµ РїСЂРѕРґРµРЅРѕ
         * @return {boolean}
         */
        e.options = {
            /**
             * РџСЂРѕРІРµСЂРєР° РЅР° РѕР±СЏР·Р°С‚РµР»СЊРЅРѕРµ РїРѕР»Рµ
             * Р’С‹РІРѕРґ СѓРІРµРґРѕРјР»РµРЅРёСЏ, РµСЃР»Рё РЅРµ Р·Р°РїРѕР»РЅРµРЅРѕ РїРѕР»Рµ
             * @param {object} box 
             * @param {object} data 
             */
            required: function(box, data) {
                var empty = false;
                for (var i in data) {
                    if (!data[i]) empty = i;
                }
                if (empty) {
                    box.addClass(e.prop.emptyClass);
                    var message = box.attr(e.prop.attr.required);
                    if (!message) message = 'РќРµ Р·Р°РїРѕР»РЅРµРЅРѕ РїРѕР»Рµ &laquo;'+empty+'&raquo;';
                    f.notice.show(message, 1);
                }
                return !empty;
            }
        }
    }
    /**
     * Р¤СѓРЅРєС†РёСЏ Р·Р°РїСЂРѕСЃРѕРІ РЅР° СЃРµСЂРІРµСЂ
     */
    function _sender() {
        var e = this;
        e.prop = {
            
        }
        function init() {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
        }
        /**
         * Р’С‹РїРѕР»РЅРµРЅРёРµ ajax-Р·Р°РїСЂРѕСЃР°, РїРѕСЃР»Рµ РІС‹Р·С‹РІР°РµС‚СЃСЏ callback, РµСЃР»Рё СѓРєР°Р·Р°РЅ
         * @param {string} url 
         * @param {object} data 
         * @param {function} callback 
         */
        e.query = function(url, data, callback) {
            var fd = new FormData();
            e.form_data(fd, data);
            /*
            for (var i in data) {
                if (data[i] instanceof Array) {
                    if (data[i].length) {
                        for (var j=0,value; j<data[i].length; j++) {
                            if (!data[i][j]) continue;
                            if (typeof data[i][j]=="object") {
                                if (data[i][j].file instanceof File) {
                                    value = data[i][j].file;
                                } else continue;
                            } else value = data[i][j];
                            fd.append(i+'[]', value);
                        }
                    }
                } else fd.append(i, data[i]);
            }*/
            $.ajax({
                url: url,
                data: fd,
                type: 'POST',
                cache: false,
                contentType: false,
                processData: false,
                dataType: 'json',
                complete: function(res) {
                    e.exec(res, callback);
                }
            });
        }
        e.form_data = function(fd, value, key) {
            if (value instanceof Array) {
                if (!value.length) return;
                for (var j=0; j<value.length; j++) {
                    if (!value[j]) continue;
                    var _v = value[j];
                    if (typeof value[j]=="object") {
                        if (value[j].file instanceof File) _v = value[j].file;
                    }
                    e.form_data(fd, _v, key+'['+j+']');
                }
            } else if (value instanceof Object) {
                if (!value) return;
                var new_k = '';
                for (var i in value) {
                    if (key) new_k = key+'['+i+']';
                    else new_k = i;
                    e.form_data(fd, value[i], new_k);
                }
            } else {
                if (!key) return;
                fd.append(key, value);
            }
        }
        /**
         * Р’С‹Р·РѕРІ callback-С„СѓРЅРєС†РёРё РїРѕСЃР»Рµ РѕС‚РІРµС‚Р° СЃРµСЂРІРµСЂР°
         * @param {object} res
         * @param {function} callback
         */
        e.exec = function(res, callback) {
            if (typeof callback!='function') return false;
            try {
                callback(res);
            }catch(e){console.error('Cannot perform callback');console.warn(e)}
        }
        init();
    }
    init();
}

var _appQW = new AppQuizWidget();

(function($){
    $.fn.serializeObject = function(){

        var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key":      /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push":     /^$/,
                "fixed":    /^\d+$/,
                "named":    /^[a-zA-Z0-9_]+$/
            };


        this.build = function(base, key, value){
            base[key] = value;
            return base;
        };

        this.push_counter = function(key){
            if(push_counters[key] === undefined){
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function(){

            // skip invalid keys
            if(!patterns.validate.test(this.name)){
                return;
            }

            var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while((k = keys.pop()) !== undefined){

                // adjust reverse_key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                // push
                if(k.match(patterns.push)){
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }

                // fixed
                else if(k.match(patterns.fixed)){
                    merge = self.build([], k, merge);
                }

                // named
                else if(k.match(patterns.named)){
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
})(jQuery);


/**
 * GUID generation
 */
function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
function sayHi() {
    console.log("kkk" );
    var el_smartquizLayout = document.getElementById("smartquizLayout");
    el_smartquizLayout.style.display = "block";
  }
  
 //setTimeout(sayHi, 15000); // 

  if (!$.cookie('quiz')){

    setTimeout(function(){
        sayHi();        
        $.cookie('quiz', true, {  
            expires: 1,  
            path: '/'  
        });   

        },40000);

}

$("#smartquiz__btn_phone").keyup(function () {
   if ($(this).val().length > 8) {
      $(".smartquiz__btn-submit").show();
       $(".smartquiz__btn-submit2").hide();
   }
   else {
      $(".smartquiz__btn-submit").hide();
       $(".smartquiz__btn-submit2").show();
   }
});