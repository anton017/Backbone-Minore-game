/**
 * Global AppModel
 */
var AppModel = Backbone.Model.extend({
    defaults: {
        width: 3,
        height: 3,
        mineCount: 1,
        openedNumber: 0,
        isWin: false,
        isLoose: false,
        isGameFinished: false
    },

    /**
     * Create a collection
     */
    initialize: function() {
        this.fieldCollection = new FieldCollection();
        this.fieldCollection.create(this.get('width'), this.get('height'), this.get('mineCount'));
        this.listenTo(this.fieldCollection, 'change:isOpened', this.onOpenedNumberChange);
        this.listenTo(this.fieldCollection, 'reset', this.onFieldCollectionReset);
    },

    /**
     * Render onOpenedNumberChange
     */
    onOpenedNumberChange: function() {
        if (!this.get('isGameFinished')) {
            var openedNumber = this.get('openedNumber');
            openedNumber++;
            this.set('openedNumber', openedNumber);
            if (openedNumber === this.get('width') * this.get('height') - this.get('mineCount')) {
                this.set('isWin', true);
            }
        }
    },

    onFieldCollectionReset: function() {
        this.set({
            openedNumber: 0,
            isGameFinished: false
        });
    }
});
