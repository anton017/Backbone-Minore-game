var FieldCollection = Backbone.Collection.extend({
    model: CellModel,

    initialize: function() {
        this.listenTo(this, 'change:isOpened', this.onCellOpen);
    },

    create: function(width, height, mineCount) {
        this.width = width;
        this.height = height;
        this.mineCount = mineCount;
        this.renderCell();
        this.setInitialMines();
        this.setNumbersAroundMines();
    },

    /**
     * Cells in collection
     */
    renderCell: function() {
        for (var m = 0; m < this.height; m++) {
            for (var n = 0; n < this.width; n++) {
                this.add([{
                    x: n,
                    y: m,
                    haveMines: false,
                    numberAround: 0,
                    isOpened: false
                }]);
            }
        }
    },

     /**
     * The placed mines on the field
     * @protected
     */
    setInitialMines: function() {
        for (var mines = 1; mines <= this.mineCount; mines++) {
            var cellWithMine = Math.floor(Math.random() * this.width * this.height);;
            var haveMines = this.models[cellWithMine].get('haveMines');
            if (haveMines) {
                mines--;
            }
            else {
                this.models[cellWithMine].set('haveMines', true);
            }
        }
    },

    /**
     * Puts the numbers for the cells around the haveMines
     * @protected
     */
    setNumbersAroundMines: function() {
        var modelKey = 0;
        for (var p = 0; p < this.length; p++) {
            var cellMines = this.models[modelKey].get('haveMines');
            var counter = 0;
            var n = this.models[modelKey].get('x');
            var m = this.models[modelKey].get('y');
            if (!cellMines) {
                var start = {
                    y: (m-1 > -1) ? m-1 : m,
                    x: (n-1 > -1) ? n-1 : n
                };
                var end = {
                    y: (m+1 === this.height) ? m : m+1,
                    x: (n+1 === this.width) ? n : n+1
                };
                for (var i = start.y; i <= end.y; i++) {
                    for (var j = start.x; j <= end.x; j++) {
                        var cellModel = this.findWhere({'y': i , 'x': j});
                        if (cellModel.get('haveMines')) {
                            counter++;
                        }
                    }
                }
                this.models[modelKey].set('numberAround', counter);
            }
            if (counter === 0) {
                this.models[modelKey].set('numberAround', '');
            }
            modelKey++;
        }
    },

    /**
     * Processing clicking on a cell if it's empty
     * @protected
     */
    onCellOpen: function(model) {
        var numberAround = model.get('numberAround');
        if (!numberAround) {
            var x = model.get('x');
            var y = model.get('y');
            var start = {
                y: (y-1 > -1) ? y-1 : y,
                x: (x-1 > -1) ? x-1 : x
            };
            var end = {
                y: (y+1 === this.height) ? y : y+1,
                x: (x+1 === this.width) ? x : x+1
            };
            for (var i = start.y; i <= end.y; i++) {
                for (var j = start.x; j <= end.x; j++) {
                    var cellModel = this.findWhere({'y': i , 'x': j});
                    var isOpened = cellModel.get('isOpened');
                    if (!isOpened) {
                        cellModel.set('isOpened', true);
                    }
                }
            }
        }
    },
});
