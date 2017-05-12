var ContolsView = Backbone.View.extend({

    /**Reset
     * @see Backbone.Events
     */
    events: {
        'click .btn': 'onResetClick'
    },

    /**
     * Initialize component
     * @see Backbone.View.initialize
     */
    initialize: function() {
        this.listenTo(this.model, 'change:openedNumber', this.render);
    },

    /**
     * Render Controls
     * @return {ContolsView}
     */
    render: function() {
        this.$el.html(tpl.render("Controls", {
            openedNumber: this.model.get('openedNumber')
        }));

        return this;
    },

    /**
     * Сhanging attributes
     */
    onResetClick: function() {
        this.model.set({
            isWin: false,
            isLoose: false,
            changeCollection: true
        });
    }

});
