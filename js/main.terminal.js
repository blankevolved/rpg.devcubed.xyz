jQuery(function($) {
    $('body').terminal({
        start: function() {
            this.clear();
            redirect('game/');
        }
    }, {
        greetings: tutorial,
        prompt: `${white}>>> `,
    });
});