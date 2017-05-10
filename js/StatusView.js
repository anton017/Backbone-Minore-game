var StatusView = Backbone.View.extend({

    /**Reset
     * @see Backbone.Events
     */
    events: {
        'click .btn__yes': 'onYesClick',
        'click .btn__no': 'onNoClick'
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
     * @return {ContolsView}
     */
    render: function() {
        this.$el.html(tpl.render("Status", {
            isGameFinished: this.model.get('isGameFinished'),
            isWin: this.model.get('isWin'),
            isLoose: this.model.get('isLoose'),
            WIN_TEXT: "Вы выиграли! Хотите сыграть ещё?",
            LOOSE_TEXT: "Вы проиграли! Хотите сыграть ещё?",
        }));
    },

    onYesClick: function() {
        this.model.set('isWin', false);
        this.model.set('isLoose', false);
        this.model.set('changeCollection', true);
    },

    onNoClick: function() {
        this.model.set('isWin', false);
        this.model.set('isLoose', false);
        this.render();
    }

});
