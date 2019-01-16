import $ from 'jquery';
import slick from 'slick-carousel';

class ProjectContent {
    constructor() {
        this.portfolioItems = document.getElementsByClassName('portfolio-item');
        this.projectContents = $('.project-content');
        this.projectCloseButton = $('.project-content__close-button');
        this.projectMagicButton = $('.project-content__magic-button');
        this.events();
    }

    events() {
        $(document).ready(this.activateSlickSlider);

        // open project content when clicking on porfolio item
        // use js as temp workaround since slick slider behavior does not allow jquery?
        [...this.portfolioItems].forEach(item => item.addEventListener('click', this.openProjectContent));

        // close project content when clicking the x close button
        this.projectCloseButton.click(this.closeProjectContent.bind(this));

        // close project content when clicking the magic spell button
        this.projectMagicButton.click(this.closeProjectContent.bind(this));

        // close project content on escape key
         $(document).keyup(this.keyPressHandler.bind(this));
    }

    activateSlickSlider() {
        $('.slick-slider').slick({
            dots: true,
            accessibility: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            mobileFirst: true,
            responsive: [{
           
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  dots: true
                }
        
              }, {
           
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: true
                }
        
              }, {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                  }
           
              }]
        });
    }

    openProjectContent() {
        console.log('Project is clicked!');
        const currentProject = $(this).data('project');
        $('#' + currentProject).addClass('is-visible');
        $('body').addClass('noscroll');
    }

    closeProjectContent() {
        this.projectContents.removeClass('is-visible');
        $('body').removeClass('noscroll');
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeProjectContent();
        }
    }
}

export default ProjectContent;