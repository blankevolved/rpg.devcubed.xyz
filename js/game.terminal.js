jQuery(function($) {
    $('body').terminal({
        help: function() {
            this.clear();
            this.echo(help);
        },
        stats: function() {
            this.clear();
            this.echo(stats);
        },
        fight: function() {
            this.clear()
            if (level <= 2) {
                this.echo(fight(0, level));
            }
        },
        attack: function() {
            this.clear()
            this.echo(attack())
        },
        inv: function() {
            this.clear();
            this.echo(invList())
        },
        equip: function(item) {
            this.clear();
            this.echo(equip(weapons[item]))
            refresh()
        },
        inspect: function(item) {
            this.clear();
            this.echo(inspect(weapons[item]))
        },
        listItems: function() {
            this.clear();
            this.echo(listAllItems())
        },
        save: function() {
            this.clear();
            save();
            this.echo('Saved Game');
        },
        title: function(set) { 
            title(set)
        },
        dev: function(pass) {
            if (pass == decode('cGFzcw==')) {
                devMode = true
                this.echo('dev mode activated')
            }
        },
        addcoins: function(num) {
            if (devMode == true) {
                addcoins(num)
                this.clear();
                this.echo(stats);
            }
        },
        addxp: function(num) {
            if (devMode == true) {
                addxp(num)
                this.clear();
                this.echo(stats);
            }
        }
    }, {
        greetings: stats,
        prompt: `${white}>>> `,
    });
});