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

    initialize: function() {
        this.listenTo(this.model.fieldCollection, 'reset', this.onFieldCollectionReset);
        this.listenTo(this.model, 'change:isGameFinished change:isWin', this.onFinished);
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
        return this;
    },

    /**
     * Сheck for end of game
     */
    onFinished: function() {
        if (this.model.get('isGameFinished') || this.model.get('isWin')) {
            var statusView = new StatusView({ 
                model: this.model,
            });
            statusView.render();
            this.regions.status.$el().append(statusView.el);
        }
    },

    /**
     * Styles Field
     */
    setFieldSize: function() {
      this.regions.field.$el().css({
        width: this.model.get('width') * this.CELL_SIZE + this.CELL_BORDER,
        height: this.model.get('height') * this.CELL_SIZE + this.CELL_BORDER
      });
    },

    onFieldCollectionReset: function() {
        this.model.set({
            openedNumber: 0,
            isGameFinished: false
        });
    }
});