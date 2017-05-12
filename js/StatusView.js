var StatusView = Backbone.View.extend({

    WIN_TEXT: "Вы выиграли! Хотите сыграть ещё?",
    LOOSE_TEXT: "Вы проиграли! Хотите сыграть ещё?",

    /**Reset
     * @see Backbone.Events
     */
    events: {
        'click ._statusButtonYes': 'onYesClick',
        'click ._statusButtonNo': 'onNoClick'
    },

    /**
     * Initialize component
     * @see Backbone.View.initialize
     */
    initialize: function() {
        this.listenTo(this.model, 'change:isGameFinished', this.render);
        this.listenTo(this.model, 'change:isWin', this.render);
    },

    /**
     * Render Controls
     * @returns {ContolsView}
     */
    render: function() {
        this.$el.html(tpl.render("Status", {
            isWinner: this.model.get('isWin'),
            isLoose: this.model.get('isLoose'),
            title: this.model.get('isWin') ? this.WIN_TEXT : this.LOOSE_TEXT
        }));
    },

    onYesClick: function() {
        this.model.set({
            isWin: false,
            isLoose: false,
            changeCollection: true
        });
    },

    onNoClick: function() {
        this.model.set({
            isWin: false,
            isLoose: false
        });
        this.render();
    }

});
