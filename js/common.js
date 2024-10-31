//JQuery функциz, которая будет подгружать изображения в буфер
jQuery.preloadImages = function()
 {
  for(var i = 0; i < arguments.length; i++)
  {
   jQuery("<img>").attr("src", arguments[ i ]);
  }
 };






$(function(){
 
// меню    
    $('.s_menu').click(function(){
        $(this).hide();
        $('.ul_menu ').show();
        $('.div_close').show();
        $('.div_menu').css('background','rgba(255,234,0,1');
        
    })
    
    
     $('.div_close').click(function(){
         $(this).hide();
         $('.s_menu').attr('style','');
         $('.ul_menu ').attr('style','');
         $('.div_menu').attr('style','');
     })
	
/*****************/

// маски
$(".tel_mask").inputmask("+7 (999) 999-99-99");


/**********************/

// оконные системы
var bannerCarousel = $(".carousel-sys");
bannerCarousel.owlCarousel({
        items : 3,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                960:{
                    items:3
                },

            }
});


// оконные системы
var bannerCarousel = $(".carousel-comp");
bannerCarousel.owlCarousel({
        items : 3,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                960:{
                    items:3
                },

            }
});


var bannerCarousel = $(".carousel-dop");
bannerCarousel.owlCarousel({
        items : 3,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                960:{
                    items:3
                },

            }
});

var bannerCarousel = $(".carousel-gal");
bannerCarousel.owlCarousel({
        items : 3,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                960:{
                    items:3
                },

            }
});

var bannerCarousel = $(".carousel-dop_balkon");
bannerCarousel.owlCarousel({
        items : 3,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                960:{
                    items:3
                },

            }
});

var bannerCarousel = $(".carousel-otd");
bannerCarousel.owlCarousel({
        items : 3,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                960:{
                    items:3
                },

            }
});

var bannerCarousel = $(".carousel-color");
bannerCarousel.owlCarousel({
        items : 4,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
       responsive : {
                0:{
                    items:2
                },
                480:{
                    items:4
                },
                960:{
                    items:2
                },
                1200:{
                    items:4
                },

            }
          
});

var bannerCarousel = $(".carousel-sing");
bannerCarousel.owlCarousel({
        items : 4,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
       responsive : {
                0:{
                    items:2
                },
                480:{
                    items:4
                },
                960:{
                    items:2
                },
                1200:{
                    items:4
                },

            }
});


var bannerCarousel = $(".carousel-wirk");
bannerCarousel.owlCarousel({
        items : 1,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
/*        responsive:{
                0:{
                    items:1
                },
                960:{
                    items:3
                },

            }
         */
});

var bannerCarousel = $(".carousel-sim_balkon");
bannerCarousel.owlCarousel({
        items : 2,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                1200:{
                    items:2
                },

            }
         
});

var podCarousel = $(".carousel-pod1");
podCarousel.owlCarousel({
        items : 1,
        loop:true,
        dots:true,
        nav:false,
		dotsContainer: ".dots1",
        navText: ['',''],
/*        responsive:{
                0:{
                    items:1
                },
                960:{
                    items:3
                },

            }
         */
});

var podCarousel = $(".carousel-pod2");
podCarousel.owlCarousel({
        items : 1,
        loop:true,
        dots:true,
        nav:false,
		dotsContainer: ".dots2",
        navText: ['',''],
/*        responsive:{
                0:{
                    items:1
                },
                960:{
                    items:3
                },

            }
         */
});
var podCarousel = $(".carousel-pod3");
podCarousel.owlCarousel({
        items : 1,
        loop:true,
        dots:true,
        nav:false,
		dotsContainer: ".dots3",
        navText: ['',''],
/*        responsive:{
                0:{
                    items:1
                },
                960:{
                    items:3
                },

            }
         */
});
var podCarousel = $(".carousel-pod4");
podCarousel.owlCarousel({
        items : 1,
        loop:true,
        dots:true,
        nav:false,
		dotsContainer: ".dots4",
        navText: ['',''],
/*        responsive:{
                0:{
                    items:1
                },
                960:{
                    items:3
                },

            }
         */
});

var podCarousel = $(".carousel-oby");
podCarousel.owlCarousel({
        items : 1,
        loop:true,
        dots:true,
        nav:false,
	//	dotsContainer: ".oby_dots",
        //        margin:15,
        navText: ['',''],
/*        responsive:{
                0:{
                    items:1
                },
                960:{
                    items:3
                },

            }
         */
});


// было - стало 
var bsCarousel = $(".carousel-bs");
bsCarousel.owlCarousel({
        items : 1,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
        responsive:{
                0:{
                    items:1
                },
                960:{
                    items:1
                },

            }
});


// калькулятор балконов
var bannerCarousel = $(".carousel-b");
bannerCarousel.owlCarousel({
        items : 3,
        autoWidth:true,
        margin:15,
        loop:true,
        dots:false,
        nav:true,
        navText: ['',''],
       
});





/*****************/


    $('.close-button').click(function(){
        $('.modal-overlay').toggleClass("closed");
       // $('.close-button').parent().removeClass("closed");
        //$('.close-button').parent().addClass("closed");
     //   $('.callback_form').toggleClass("closed");
        $('.callback_form').addClass("closed");
        $('.callback_day').addClass("closed");
        $('.stars').addClass("closed");
        $('.procent').addClass("closed");

    })
    
    $('#s_close').click(function(){

        $('.f_spasibo').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");
        $('.stars').addClass("closed");

    })    
    
// Вам перезвонить?
 $('#callback1').click(function(){

        $(".callback_form h2").html('Вам перезвонить?');
        $(".callback_form #send").html('Перезвонить');
        $(".callback_form .sender").html('call');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    })
	
// Вам перезвонить?
 $('#callback2').click(function(){

        $(".callback_form h2").html('Вам перезвонить?');
        $(".callback_form #send").html('Перезвонить');
        $(".callback_form .sender").html('call');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    })


// Замерщик
 $('.zamer_btn1').click(function(){

        $(".callback_form h2").html('Весплатный вызов замерщика!');
        $(".callback_form #send").html('Вызвать замерщика');
        $(".callback_form .sender").html('zamer');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    })
    
// В рассрочку
 $('.rassr_send').click(function(){

        $(".callback_form h2").html('Хотите окно в рассрочку?');
        $(".callback_form #send").html('Узнать условия');
        $(".callback_form .sender").html('o_rassr');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    })
    
// Беседки
 $('.bes_send').click(function(){

        $(".callback_form h2").html('Цены на беседки, веранды, террасы');
        $(".callback_form #send").html('Узнать цену');
        $(".callback_form .sender").html('bes');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    })
    
// Заказать со скидкой
 $('.skidrf_send').click(function(){

        $(".callback_form h2").html('Заказать со скидкой');
        $(".callback_form #send").html('Заказать');
        $(".callback_form .sender").html('sk');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    })
    
// Заказать мебели по акции
 $('.ac_send').click(function(){

        $(".callback_form h2").html('Заказать по акции');
        $(".callback_form #send").html('Заказать');
        $(".callback_form .sender").html('ak');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    })
    
// Вызов менеджера
 $('.manager_send').click(function(){

        $(".callback_form h2").html('Выберите удобное время');
        $(".callback_form #send").html('Вызвать менеджера');
        $(".callback_form .sender").html('manager');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    })
    

// Заказать со скидкой
 $('.okno_send').click(function(){

        $(".callback_form h2").html('Заказать со скидкой');
        $(".callback_form #send").html('Заказать');
        $(".callback_form .sender").html('calc_o');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    })
    
// Заказать со скидкой
 $('.balkon_send').click(function(){

        $(".callback_form h2").html('Заказать со скидкой');
        $(".callback_form #send").html('Заказать');
        $(".callback_form .sender").html('calc_b');
        $('.callback_form').toggleClass("closed");
        $('.stars').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

    })










 $('#send').click(function(){

                    var name=$('#call_name').val();
                    var tel=$('#call_tel').val();
                    var type=$('.sender').html();

                    $.ajax({
                               type: "POST",
                               url: "forms.php",
                               data: { 'name' : name,
                                       'tel': tel,
                                       'f' : type
                                     },
                               success: function(data){ 
                                    if (data=='ok')
                                    {
										SendComagic(name,tel,type,'');
ym(48972827,'reachGoal','lead');
                                        $('#call_name').val('');
                                        $('#call_tel').val('');
                                        $('.callback_form').toggleClass("closed");
                                        $('.stars').toggleClass("closed");
                                        $('.f_spasibo').toggleClass("closed");
                                    }
                                    else
                                    {
                                        alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                                    };

                                } 
                     });

    })
    
 $('#rks_btn').click(function(){

                    var name=$('#rks_name').val();
                    var tel=$('#rks_phone').val();
                    var type='rsk';

                    $.ajax({
                               type: "POST",
                               url: "forms.php",
                               data: { 'name' : name,
                                       'tel': tel,
                                       'f' : type
                                     },
                               success: function(data){ 
                                    if (data=='ok')
                                    {
										SendComagic(name,tel,type,'');
ym(48972827,'reachGoal','lead');
                                        $('#rks_name').val('');
                                        $('#rks_phone').val('');
                                        
                                        $('.stars').toggleClass("closed");
                                        $('.modal-overlay').toggleClass("closed");
                                        $('.f_spasibo').toggleClass("closed");
                                    }
                                    else
                                    {
                                        alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                                    };

                                } 
                     });

    })
    
 $('.price_send').click(function(){

                    var name='price';
                    var tel=$('#fp_tel').val();
                    var type='price';

                    $.ajax({
                               type: "POST",
                               url: "forms.php",
                               data: { 'name' : name,
                                       'tel': tel,
                                       'f' : type
                                     },
                               success: function(data){ 
                                    if (data=='ok')
                                    {
										SendComagic(name,tel,type,'');
ym(48972827,'reachGoal','lead');
                                        $('#rks_name').val('');
                                        $('#rks_phone').val('');
                                        
                                        $('.stars').toggleClass("closed");
                                        $('.modal-overlay').toggleClass("closed");
                                        $('.f_spasibo').toggleClass("closed");
                                    }
                                    else
                                    {
                                        alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                                    };

                                } 
                     });

    })


 $('#send_day').click(function(){

                    var name=$('#d_call_name').val();
                    var tel=$('#d_call_tel').val();
                    var type='day';

                    $.ajax({
                               type: "POST",
                               url: "forms.php",
                               data: { 'name' : name,
                                       'tel': tel,
                                       'f' : type
                                     },
                               success: function(data){ 
                                    if (data=='ok')
                                    {
										SendComagic(name,tel,type,'');
ym(48972827,'reachGoal','lead');
                                        $('#d_call_name').val('');
                                        $('#d_call_tel').val('');
                                        $('.callback_day').toggleClass("closed");
                                        $('.procent').toggleClass("closed");
                                        $('.f_spasibo').toggleClass("closed");
                                    }
                                    else
                                    {
                                        alert ('Ошибка при отправлении. Возможно Вы неправильно заполнили поля.');
                                    };

                                } 
                     });

    })



if (!$.cookie('was')){

setTimeout(function(){
    
           $('.callback_day').toggleClass("closed");
        $('.procent').toggleClass("closed");
        $('.modal-overlay').toggleClass("closed");

$.cookie('was', true, {  
			expires: 1,  
			path: 'default.htm'  
		  });   

},30000);

}




    
})



function alignCenter(elem) {
    elem.css({
    left: ($(window).width() - elem.width()) / 2  + 'px',
    top: 50 + 'px'   
    })
}

/*
$(window).scroll( function(){
  
	if($(window).width()<450){
		if ($(this).scrollTop() > 175){
		 $('.top_menu').addClass('header_fixed');
		 $('.fake_menu').addClass('header_fixed_f');
		
		 
		}else{
			$('.top_menu').removeClass('header_fixed');
			$('.fake_menu').removeClass('header_fixed_f');
		
		}
	}else{
		$('.top_menu').removeClass('header_fixed');
		$('.fake_menu').removeClass('header_fixed_f');
		
	}
	
}) 
*/

function SendComagic(name,tel,type,txt){
    try {
        if (txt==''){		
            Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: type }]);
        }else{
            Comagic.push(['addOfflineRequest', {name: name,  phone: tel, email: txt , message: type }]);
        }

    } catch(err){
        return false;
    }	
}