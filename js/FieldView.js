var FieldView = Backbone.View.extend({

    initialize: function() {
        this.listenTo(this.model.fieldCollection, 'change:isOpened', this.onOpened);
        this.listenTo(this.model.fieldCollection, 'change:isBoom', this.onBoom);
        this.listenTo(this.model.fieldCollection, 'reset', this.onReset);
    },

    /**
     * Render View for all cells
     */
    render: function () {
        this.$el.empty();
        this.model.fieldCollection.each(function(cellModel) {
            var cellView = new CellView({ 
                model: cellModel,
            });
            cellView.render();
            this.$el.append(cellView.el);
        }.bind(this));
    },

    /**
     * Render isOpened
     */
    onOpened: function() {
        if(!this.model.get('isGameFinished')) {
            this.render();
        }
    },

    /**
     * Render isBoom
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
        this.model.fieldCollection.create(this.model.get('width'), this.model.get('height'), this.model.get('mineCount'));
        this.render();
        this.model.set({
            isWin: false,
            isLoose: false
        });
    }
});
