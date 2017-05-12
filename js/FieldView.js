var FieldView = Backbone.View.extend({

    /**
     * Initialize component
     * @see Backbone.View.initialize
     */
    initialize: function() {
        this.listenTo(this.model.fieldCollection, 'change:isOpened', this.render);
        this.listenTo(this.model.fieldCollection, 'change:isBoom', this.onBoom);
        this.listenTo(this.model, 'change:changeCollection', this.onReset);
    },

    /**
     * Render View for all cells
     */
    render: function () {
        if (!this.model.get("isGameFinished")) {
            this.$el.empty();
            this.model.fieldCollection.each(function(cellModel) {
                var cellView = new CellView({ 
                    model: cellModel,
                });
                cellView.render();
                this.$el.append(cellView.el);
            }.bind(this));
        }
    },

    /**
     * Render IsBoom
     */
    onBoom: function() {
        this.render();
        this.model.set({
            isLoose: true,
            isGameFinished: true
        });
    },

    /**
     * Render Reset
     */
    onReset: function() {
        this.model.fieldCollection.reset();
        this.model.fieldCollection.create(this.model.get('width'), this.model.get('height'), this.model.get('mineCount'));
        this.render();
        this.model.set('changeCollection', false);
    }
});
