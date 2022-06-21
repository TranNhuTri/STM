let ResourceBar = BaseUI.extend({
    ctor: function (config) {
        this._super(LOBBY_UI.RESOURCE_BAR);

        let node = this._child;

        this._value = Math.floor(Math.random() * 10000 + 1);

        this._background = node.getChildByName('background');
        this._button = node.getChildByName('button');
        this._icon = node.getChildByName('icon');
        this._text = node.getChildByName('value');

        this._text.setString(Helper.convertIntToString(this._value));

        this._width = this._background.width * this._background.getScaleX();
        this._height = this._background.height;

        this._icon.loadTexture(config.icon);

        this._button.addTouchEventListener((sender, type) => {
            if(type === ccui.Widget.TOUCH_BEGAN) {
                this.handleClick();
            }
        });
    },

    getWidth: function () {
        return this._width;
    },

    getHeight: function () {
        return this._height;
    },

    handleClick: function () {
        this._value += 100;
        this._text.setString(Helper.convertIntToString(this._value));
    },
});