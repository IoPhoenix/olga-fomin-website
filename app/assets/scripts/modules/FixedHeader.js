import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class FixedHeader {
    constructor() {
        this.headerLinks = $('.primary-nav a');
        this.logoLink = $('.site-header__logo-link');
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
        // offset: site header minus its bottom border
        this.headerLinks.smoothScroll({offset: -85});
        this.logoLink.smoothScroll();
    }
}

export default FixedHeader;