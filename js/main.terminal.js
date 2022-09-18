jQuery(function($) {
    $('body').terminal({
        start: function() {
            this.clear();
            redirect('/game')
        },
        alpha: function() {
            this.clear();
            redirect('/alpha')
        }
    }, {
        greetings: tutorial,
        prompt: `${white}>>> `,
    });
});