var CellView = Backbone.View.extend({

    events: {
        'click': 'onCellClick'
    },

    /**
     * Render Cell with attributes
     * @return {Cell}
     * @param {object} model
     */
    render: function () {
        this.setElement(tpl.render("Cell", {
            isBoom: this.model.get('isBoom'),
            numberAround: this.model.get('numberAround'),
            isOpened: this.model.get('isOpened')
        }));
    },

    /**
     * Processing clicking on a cell
     * @protected
     */
    onCellClick: function() {
        if (this.model.get('haveMines')) {
            this.model.set('isBoom', true);
            return;
        } 
        this.model.set('isOpened', true);
    }
});
