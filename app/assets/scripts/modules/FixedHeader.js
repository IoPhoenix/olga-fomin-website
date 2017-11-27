import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class FixedHeader {
    constructor() {
        this.headerContent = $('.site-header__text-content');
        this.headerLinks = $('.primary-nav a');
        this.addSmoothScrolling();
        this.events();
    }

    events() {
        $(window).scroll(this.addFixedHeaderOnScroll);

        $(document).ready(this.addFixedHeaderOnSmallestScreens);

        $(window).resize(this.addFixedHeaderOnResize);
    }

    addFixedHeaderOnScroll() {
        if ($(window).width() > 480) {
            if ($(window).scrollTop() >= ($(window).innerHeight() - 110)) {
                $('body').addClass('fixed-header');
            } else {
                $('body').removeClass('fixed-header');
            }
        } else {
            $('body').addClass('fixed-header');
        }
    }

    addFixedHeaderOnSmallestScreens() {
        if ($(window).width() < 480) {
            $('body').addClass('fixed-header');
        }
    }

    // addFixedHeaderOnResize() {
    //     if ($(window).width() < 480) {
    //         $('body').addClass('fixed-nav');
    //     } else {
    //         $('body').removeClass('fixed-nav');
    //     } 
    // }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }
}

export default FixedHeader;