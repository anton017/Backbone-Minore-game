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
        var haveMines = this.model.get('haveMines');
        var x = this.model.get('x');
        var y = this.model.get('y');
        if (haveMines) {
            this.model.set('isBoom', true);
            return;
        } 
        this.model.set('isOpened', true);
    },
});
