var ContolsView = Backbone.View.extend({

    /**
     * @see Backbone.Events
     */
    events: {
        'click .btn': 'onResetClick'
    },

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
