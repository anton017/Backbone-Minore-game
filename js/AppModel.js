/**
 * Global AppModel
 */
var AppModel = Backbone.Model.extend({
    defaults: {
        width: 5,
        height: 5,
        mineCount: 1,
        openedNumber: 0,
        isWin: false,
        isLoose: false,
        isGameFinished: false,
        changeCollection: false
    },

    /**
     * Create a collection
     */
    initialize: function() {
        var width = this.defaults.width;
        var height = this.defaults.height;
        var mineCount = this.defaults.mineCount;
        this.fieldCollection = new FieldCollection();
        this.fieldCollection.render(width, height, mineCount);
    }
});
