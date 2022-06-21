let MapUI = BaseUI.extend({
    ctor: function () {
        this._super(LOBBY_UI.HOME_TAB.MAP);

        this.setScale(0.6, 0.6);

        let node = this._child;
        this._image = node.getChildByName("image");
        this._name = node.getChildByName("name");

        this._width = this._image.width * this.getScaleX();
        this._height = this._image.height * this.getScaleY();
    },
});