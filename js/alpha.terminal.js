jQuery(function($) {
    $('body').terminal({
        help: function() {
            this.clear();
            this.echo(help);
        },
        stats: function() {
            this.clear();
            this.echo(`${showStats()}\n`);
        },
        fight: function(id, level) {
            this.clear()
            this.echo(fight(id, level))
        },
        run: function() {
            this.clear();
            this.echo(run())
        },
        attack: function() {
            this.clear()
            this.echo(attack())
        },
        shop: function() {
            this.clear()
            this.echo(openShop())
        },
        buy: function(item) {
            this.clear();
            this.echo(buy(item))
        },
        use: function(item) {
            this.clear();
            this.echo(use(items[item]))
        },
        f: function(id, level) {
            this.clear()
            this.echo(fight(id, level))
        },
        r: function() {
            this.clear();
            this.echo(run())
        },
        a: function() {
            this.clear()
            this.echo(attack())
        },
        inv: function(page) {
            this.clear();
            if (page === undefined) page = 1
            this.echo(invList(page))
        },
        craft: function(item) {
            this.clear();
            if (item === undefined) this.echo(`${red}{ERROR} Please specify a item to craft\n${showStats()}\n`)
            else {
                this.echo(craft(items[item]))
            }
            refresh()
        },
        recipes: function() {
            this.clear();
            this.echo(recipes())
            refresh()
        },
        equip: function(item) {
            this.clear();
            if (item === undefined) this.echo(`${red}{ERROR} Please specify a item to equip\n${showStats()}\n`)
            else {
                this.echo(equip(items[item]))
            }
            refresh()
        },
        unequip: function(item) {
            this.clear();
            if (item === undefined) this.echo(`${red}{ERROR} Please specify a item to unequip\n${showStats()}\n`)
            else {
                this.echo(unequip(items[item]))
            }
            refresh()
        },
        sell: function(item) {
            this.clear();
            if (item === undefined) this.echo(`${red}{ERROR} Please specify a item to sell\n${showStats()}\n`)
            else {
                this.echo(sell(items[item]))
            }
            refresh()
        },
        inspect: function(item) {
            this.clear();
            if (item === undefined) this.echo(`${red}{ERROR} Please specify a item to sell\n${showStats()}\n`)
            else {                
                this.echo(inspect(items[item]))
            }
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
        },
        give: function(item) {
            if (devMode == true) {
                this.echo(additem(items[item]))
            }
        }
    }, {
        greetings: `${showStats()}\n`,
        prompt: `${white}>>> `,
        checkArity: false
    });
});