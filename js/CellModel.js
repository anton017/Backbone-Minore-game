var CellModel = Backbone.Model.extend({
    defaults: {
        x: 0,
        y: 0,
        haveMines: false,
        numberAround: '',
        isOpened: false,
        isBoom: false,
    }
});
