import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class FullHeightHeader {
    constructor() {
        this.header = $('.site-header');
        this.events();
    }

    events() {
        // scroll to portfolio section when clicked anywhere on home page
        this.header.on('click', this.scrollToPortfolio);
    }

    scrollToPortfolio(e) {
        // do not scroll if header is fixed (user has already scrolled past home page)
        if ($('body').hasClass('fixed-header')) return;
        
        // do not scroll if links or social icons are clicked
		if (e.target.nodeName === 'LI' || e.target.nodeName === 'I' || e.target.nodeName === 'A') return;

        $.smoothScroll({
            offset: -85,
            scrollTarget: '#portfolio'
          });
    }
}

export default FullHeightHeader;