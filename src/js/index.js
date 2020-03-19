import $ from "jquery";
import formstyler from './jquery.formstyler.min.js';
import range from './range.slider.min.js';
import multiselect from './multiselect.min.js';
import { Swiper, Navigation } from 'swiper/js/swiper.esm.js';

Swiper.use([Navigation]);

window.jQuery = $;
window.$ = $;

require('@fancyapps/fancybox');

function numberWithSpaces(x)
{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

$(function() {

    $('select:not(.multiselect)').styler({
        selectSmartPositioning: false
    });

    document.multiselect('#multiselect');

    $('.apartment-detail__show-all').click(function(){

        $(this).toggleClass('apartment-detail__show-all_active');
        $(this).prev().toggleClass('active');
    });

    new Swiper ('.apartment-slider__slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        slideActiveClass: 'apartment-slider__slide_active',
        navigation: {
            nextEl: '.apartment-slider__next',
            prevEl: '.apartment-slider__prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    });

    if ($("#price-range").length > 0)
    {
        $("#price-range").ionRangeSlider({
            type: "double",
            grid: false,
            min: $('#price-range-from').val().replace(/\s+/g,''),
            max: $('#price-range-to').val().replace(/\s+/g,''),
            from: $('#price-range-from').val().replace(/\s+/g,''),
            to: $('#price-range-to').val().replace(/\s+/g,''),
            onChange: function (data) {

                $('#price-range-from').val(numberWithSpaces(data.from));
                $('#price-range-to').val(numberWithSpaces(data.to));
            }
        });
    }

    $('[data-fancybox]').fancybox({
        'touch' : false,
		'modal' : false,
    });

    $('.search-filter-btn').click(function(){

        $('.search-filter').toggleClass('search-filter_active');
    });
});