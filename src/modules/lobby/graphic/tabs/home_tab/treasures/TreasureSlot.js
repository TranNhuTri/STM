let TREASURE_SLOT_STATE = {
    EMPTY: 0,
    LOCKED: 1,
    COUNTDOWN: 2,
    FINISHED: 3
}

let TreasureSlot = cc.Node.extend({
    _state: TREASURE_SLOT_STATE.EMPTY,
    ctor: function () {
        this._super();
        this.addLayers();
        this.switchLayer();
    },

    addLayers: function () {
        this._layers = [];

        this._emptyLayer = new EmptyTreasureSlot();
        this._layers.push(this._emptyLayer);
        this.addChild(this._emptyLayer);

        this._lockedLayer = new LockedTreasureSlot();
        this._layers.push(this._lockedLayer);
        this.addChild(this._lockedLayer);

        this._countdownLayer = new CountdownTreasureSlot();
        this._layers.push(this._countdownLayer);
        this.addChild(this._countdownLayer);

        this._finishedLayer = new FinishTreasureSlot();
        this._layers.push(this._finishedLayer);
        this.addChild(this._finishedLayer);

        for(let i = 0; i < this._layers.length; i++) {
            this._layers[i].setPosition(this._layers[i].getWidth() / 2, this._layers[i].getHeight() / 2);
        }

        this._width = this._emptyLayer.getWidth();
        this._height = this._emptyLayer.getHeight();
    },

    getWidth: function () {
        return this._width;
    },

    getHeight: function () {
        return this._height;
    },

    switchLayer: function () {
        for(let i = 0; i < this._layers.length; i++) {
            this._layers[i].setVisible(false);
        }

        switch (this._state) {
            case TREASURE_SLOT_STATE.EMPTY:
                this._emptyLayer.setVisible(true);
                break;
            case TREASURE_SLOT_STATE.LOCKED:
                this._lockedLayer.setVisible(true);
                break;
            case TREASURE_SLOT_STATE.COUNTDOWN:
                this._countdownLayer.setVisible(true);
                break;
            case TREASURE_SLOT_STATE.FINISHED:
                this._finishedLayer.setVisible(true);
                break;
        }
    },

    handleClick: function () {
        // this._state = (this._state + 1) % 4;
        // this.switchLayer();
        LobbyController.getInstance().setTreasurePopUpVisible(true);
    },

    _touchListener: cc.EventListener.create({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: function (touch, event) {
            let target = event.getCurrentTarget();

            let locationInNode = target.convertToNodeSpace(touch.getLocation());
            let rect = cc.rect(0, 0, target.getWidth(), target.getHeight());

            if (cc.rectContainsPoint(rect, locationInNode)) {
                target.handleClick();
                return true;
            }
            return false;
        },
    }),

    getTouchListener: function () {
        return this._touchListener;
    }
});