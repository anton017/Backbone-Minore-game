/**
 * Base application view
 */
var AppView = Backbone.View.extend({

    /**
     * @see Region
     */
    regions: {
        controls: '#controls',
        status: '#status',
        field: '#field'
    },

    /**
     * Initialize component
     * @see Backbone.View.initialize
     */
    initialize: function() {
        this.listenTo(this.model.fieldCollection, 'change:isOpened', this.openedNumber);
        this.listenTo(this.model.fieldCollection, 'reset', this.isReset);
    },

    /**
     * Render ContolsView and FieldView
     * @return {AppView}
     */
    render: function() {
        this.$el.html(tpl.render('App',{
            width: this.model.get('width') * 40 + 4,
            height: this.model.get('height') * 40 + 4
        }));
        this.regions.controls.render(ContolsView, {
            model: this.model
        });
        this.regions.status.render(StatusView, {
            model: this.model
        });
        this.regions.field.render(FieldView, {
            model: this.model
        });
        return this;
    },

    /**
     * Render openedNumber
     */
    openedNumber: function() {
        if (!this.model.get('isGameFinished')) {
            var openedNumber = this.model.get('openedNumber');
            openedNumber++;
            this.model.set('openedNumber', openedNumber);
            this.checkForWin(openedNumber);
        }
    },

    checkForWin: function(openedNumber) {
        if (openedNumber === this.model.get('width') * this.model.get('height') - this.model.get('mineCount')) {
            this.model.set('isWin', true);
        }
    },

    isReset: function() {
        this.model.set('openedNumber', 0);
        this.model.set('isGameFinished', false);
    }
});
