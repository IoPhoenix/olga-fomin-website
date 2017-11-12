import $ from 'jquery';

class ProjectContent {
    constructor() {
        this.portfolioItems = $('.portfolio-item');
        this.projectContents = $('.project-content');
        this.projectCloseButton = $('.project-content__close-button');
        this.projectMagicButton = $('.project-content__magic-spell');
        this.events();
    }

    events() {
        // open project content when clicking on porfolio item
        this.portfolioItems.click(this.openProjectContent);

        // close project content when clicking the x close button
        this.projectCloseButton.click(this.closeProjectContent.bind(this));

        // close project content when clicking the magic spell button
        this.projectMagicButton.click(this.closeProjectContent.bind(this));

        // close project content on esc key
         $(document).keyup(this.keyPressHandler.bind(this));
    }

    openProjectContent() {
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