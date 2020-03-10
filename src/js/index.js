import $ from "jquery";
import formstyler from './jquery.formstyler.min.js';
import { Swiper, Navigation } from 'swiper/js/swiper.esm.js';

Swiper.use([Navigation]);

$(function() {

    $('select').styler();

    $('.apartment-detail__show-all').click(function(){

        $(this).toggleClass('apartment-detail__show-all_active');
        $(this).prev().toggleClass('active');
    });

    new Swiper ('.apartment-slider__slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
    })
});