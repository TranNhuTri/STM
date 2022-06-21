let Tab = cc.Node.extend({
    ctor: function (width, height) {
        this._super();
        this._width = (width !== undefined ? width : 0);
        this._height = (height !== undefined ? height : 0);
    },

    setWidth: function (width) {
        this._width = width;
    },

    getWidth: function () {
        return this._width;
    },

    setHeight: function (height) {
        this._height = height;
    },

    getHeight: function () {
        return this._height;
    },
});