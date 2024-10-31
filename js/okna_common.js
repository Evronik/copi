(function(){

/*****************/

   /** Р·Р°РєСЂС‹С‚СЊ С„РѕСЂРјСѓ */
    /*$('#s_close, .modal-overlay').click(function(){

        $('.f_spasibo').addClass("closed");
        $('.modal-overlay').addClass("closed");
        $('.stars').addClass("closed");
    });*/

/*9 3. РѕРїСЂРѕСЃ*/    /*1 РїРѕР»Рµ*/
$('#smartquiz__btn_test1').click(function(ev){

    var tel=$('#smartquiz__btn_phone').val();
    var type=$('#smartquiz__btn_price').val();
    var hiddenphone="lleevv2020@yandex.ru";
    var code_strana=$('#smartquiz__btn_code').val();
     var variantcheckbox=$('.variant-checkbox').val();
    var variantcheckbox2=$('.variant-checkbox');//.attr("checked") != 'checked').val();
    var variantcheckbox_arr = [];
    console.log("jjjhgh");
    $.each(variantcheckbox2, function( key, value ) {
      // РІС‹РІРµРґРµРј РёРјСЏ СЃРІРѕР№СЃС‚РІР° Рё РµРіРѕ Р·РЅР°С‡РµРЅРёРµ РІ РєРѕРЅСЃРѕР»СЊ
        if($(value).prop("checked") == true){
            
            variantcheckbox_arr.push(value.value);
            console.log( 'РЎРІРѕР№СЃС‚РІРѕ: ' +key + '; Р—РЅР°С‡РµРЅРёРµ: ' + value );
        }
    });
    variantcheckbox = variantcheckbox_arr;

    $.ajax({
       type: "POST",
       url: "/forms5.php",
       data: { 'tel': tel,
               'f' : type,
               'hiddenphone' : hiddenphone,
               'codestrana' : code_strana,
               'variantcheckbox' : variantcheckbox
             },
       success: function(data){ 
            if (data=='ok') {
                $('#lychie-ceni-phone2').val('');

                //$('.red-button').css({'pointer-events' : 'none'});
                $('body').removeClass("modal-open");
                
                $('.stars').toggleClass("closed");
                $('.modal-overlay').toggleClass("closed");
                $('.f_spasibo').toggleClass("closed");
                $('#smartquizLayout').toggleClass("closed");
                var el_smartquizLayout = document.getElementById("smartquizLayout");
                el_smartquizLayout.style.display = "none";
            }
            else {
                alert ('РћС€РёР±РєР° РїСЂРё РѕС‚РїСЂР°РІР»РµРЅРёРё. Р’РѕР·РјРѕР¶РЅРѕ Р’С‹ РЅРµРїСЂР°РІРёР»СЊРЅРѕ Р·Р°РїРѕР»РЅРёР»Рё РїРѕР»СЏ.');
            };
        } 
     });
}); 
    

})();