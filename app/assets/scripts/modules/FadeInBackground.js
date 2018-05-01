import $ from 'jquery';

class FadeInBackground {
    constructor() {
        this.headerBackground = $('.fade-in-background');
        this.events();
    }

    events() {
        $(document).ready(this.showBackground);
    }

    showBackground() {
        // fade in background image for home page slowly
        $('.fade-in-background').animate({opacity: 0}, 0)
                            .css({'background-image':
        'linear-gradient(rgba(24, 41, 86, .5), rgba(24, 41, 86, .7)), url(../../assets/images/flowers.jpeg)'})
                        .animate({opacity: 1}, 2500);
    }
}

export default FadeInBackground;