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

    initialize: function() {
        this.listenTo(this.model, 'change:isGameFinished change:isWin', this.create);
    },

    create: function() {
        if (this.model.get('isGameFinished') || this.model.get('isWin')) {
            this.$el.empty();
            this.$el.html(tpl.render("Status", {
                isWinner: this.model.get('isWin'),
                isLoose: this.model.get('isLoose'),
                title: this.model.get('isWin') ? this.WIN_TEXT : this.LOOSE_TEXT
            }));
        }
    },

    onYesClick: function() {
        this.$el.empty();
        this.model.fieldCollection.reset();
    },

    onNoClick: function() {
        this.model.set({
            isWin: false,
            isLoose: false
        });
        this.render();
    }

});
