let PopUpBackground = BaseUI.extend({
    ctor: function () {
        this._super(LOBBY_UI.POP_UP_BACKGROUND);

        let node = this._child;

        this._background = node.getChildByName("background");

        this.width = this._background.width * this._background.getScaleX();
        this.height = this._background.height * this._background.getScaleY();
    },

    _touchListener: cc.EventListener.create({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: function (touch, event) {
            let target = event.getCurrentTarget();
            if(target.visible === false)
                return false;
            LobbyController.getInstance().setTreasurePopUpVisible(false);
            return true;
        }
    }),

    getTouchListener: function () {
        return this._touchListener;
    }
});