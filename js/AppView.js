/**
 * Base application view
 */
var AppView = Backbone.View.extend({

    CELL_SIZE: 40,
    CELL_BORDER: 4,

    /**
     * @see Region
     */
    regions: {
        controls: '#controls',
        status: '#status',
        field: '#field'
    },

    /**
     * Render ContolsView and FieldView
     * @return {AppView}
     */
    render: function() {
        this.$el.html(tpl.render('App'));
        this.setFieldSize();
        this.regions.controls.render(ContolsView, {
            model: this.model
        });
        this.regions.field.render(FieldView, {
            model: this.model
        });
        this.regions.status.render(StatusView, {
                model: this.model
            });
        return this;
    },

    /**
     * Styles Field
     */
    setFieldSize: function() {
      this.regions.field.$el().css({
        width: this.model.get('width') * this.CELL_SIZE + this.CELL_BORDER,
        height: this.model.get('height') * this.CELL_SIZE + this.CELL_BORDER
      });
    }
    
});