import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class FixedHeader {
    constructor() {
        this.headerLinks = $('.primary-nav a');
        this.addSmoothScrolling();
        this.events();
    }

    events() {
        $(window).scroll(this.addFixedHeaderOnScroll);
    }

    addFixedHeaderOnScroll() {
        if ($(window).scrollTop() >= ($(window).innerHeight() - 110)) {
            $('body').addClass('fixed-header');
        } else {
            $('body').removeClass('fixed-header');
        }
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }
}

export default FixedHeader;