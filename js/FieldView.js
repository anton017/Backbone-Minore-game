var FieldView = Backbone.View.extend({

    /**
     * Initialize component
     * @see Backbone.View.initialize
     */
    initialize: function() {
        this.listenTo(this.model.fieldCollection, 'change:isOpened', this.render);
        this.listenTo(this.model.fieldCollection, 'change:isBoom', this.renderIsBoom);
        this.listenTo(this.model, 'change:changeCollection', this.isReset);
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
    renderIsBoom: function() {
        this.render();
        this.model.set('isLoose', true);
        this.model.set('isGameFinished', true);
    },

    /**
     * Render Reset
     */
    isReset: function() {
        this.model.fieldCollection.reset();
        var width = this.model.get('width');
        var height = this.model.get('height');
        var mineCount = this.model.get('mineCount');
        this.model.fieldCollection.render(width, height, mineCount);
        this.render();
        this.model.set('changeCollection', false);
    }
});
