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
    }

    addFixedHeaderOnScroll() {
        if ($(window).width() > 480) {
            if ($(window).scrollTop() >= ($(window).innerHeight() - 110)) {
                $('body').addClass('fixed-header');
            } else {
                $('body').removeClass('fixed-header');
            }
        }
    }

    addFixedHeaderOnSmallestScreens() {
        if ($(window).width() < 480) {
            console.log('test');
            $('body').addClass('fixed-header');
        }
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }
}

export default FixedHeader;