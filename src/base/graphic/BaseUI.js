let BaseUI = cc.Node.extend({
    _child: null,
    _width: 0,
    _height: 0,

    ctor: function(uiJson) {
        this._super();
        this._uiJson = uiJson;
        this.syncAllChild();
    },

    getWidth: function () {
        return this._width;
    },

    getHeight: function () {
        return this._height;
    },

    syncAllChild: function () {
        this._child = ccs.load(this._uiJson, "").node;
        this.addChild(this._child);
    },

    setLeftAnchorPoint: function () {
        this._child.setPosition(this._width * 0.5, this._height * 0.5);
    }
});