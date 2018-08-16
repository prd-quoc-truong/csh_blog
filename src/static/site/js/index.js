/**
 * Created by thqbop on 08/08/2018.
 */


;(function ($) {

    'use strict';

    window.Index = {
        slide_div: null,
        index_slide: 1,
        init: function () {
            var self = this;
            self.slide_div = $('#banner');
            self.initSlide();
            self.initEvents();
            self.setHeightBanner();
            var id = self.initEventHoverBanner();
            self.slide_div.hover(function () {
                window.clearInterval(id);
            },
            function () {
                id = self.initEventHoverBanner();
            })
        },

        initEvents: function () {
            this.clickMenuBtn();
        },

        setHeightBanner: function () {
            var height_banner = this.slide_div.height();
            if (height_banner > window.innerHeight){
                this.slide_div.find('.slide-img').height(window.innerHeight);
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
        },

        initSlide: function () {
            this.showSlide(this.index_slide);
        },

        initEventHoverBanner: function () {
            var self = this;
            return setInterval(function () {
                self.index_slide = self.index_slide + 1;
                self.showSlide(self.index_slide)
            }, 5000);
        },

        showSlide: function (index) {
            var slides = this.slide_div.find(".carousel-inner > .item");
            var dots = this.slide_div.find(".index-slide");
            if (index > slides.length) {index = 1}
            if (index < 1) {index = slides.length}
            this.index_slide = index;
            slides.removeClass('active');
            dots.removeClass('active');
            $(slides[this.index_slide-1]).addClass('active');
            $(dots[this.index_slide-1]).addClass('active');
        },

        currentSlide: function (index) {
            this.showSlide(index);
        },

        preSlide: function () {
            this.showSlide(this.index_slide - 1);
        },

        nextSlide: function () {
            this.showSlide(this.index_slide + 1);
        }

    };

    $(document).ready(function () {
        Index.init();
    });
})(jQuery);