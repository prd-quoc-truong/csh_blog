/**
 * Created by thqbop on 08/08/2018.
 */


;(function ($) {

    'use strict';

    window.Index = {

        init: function () {
            this.initEvents();
            this.setHeightBanner();
        },

        initEvents: function () {
            this.clickMenuBtn();
        },

        setHeightBanner: function () {
            var height_banner = $('#myCarousel').height();
            if (height_banner > window.innerHeight){
                $('#myCarousel').find('.slide-img').height(window.innerHeight);
            }
        },

        clickMenuBtn: function () {
            $('.icon-menu').on('click', function (e) {
                var nav_menu = $('.nav-menu');
                if(nav_menu.is(":visible")){
                    nav_menu.hide();
                }else{
                    nav_menu.show();
                }
            });

            $('.nav-menu>li>a').on('click', function (e) {
                $('.nav-menu>li>a').removeClass('active');
                $(this).addClass('active');
            });
        }
    };

    $(document).ready(function () {
        Index.init();
    });
})(jQuery);