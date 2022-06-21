let TreasurePopup = BaseUI.extend({
    ctor: function () {
        this._super(LOBBY_UI.HOME_TAB.TREASURE_POPUP);

        let node = this._child;

        this._background = node.getChildByName("background");
        this._treasureShelf = node.getChildByName("shelf_image");
        this._mapNameLabel = node.getChildByName("map_name");
        this._treasureTypeLabel = node.getChildByName("treasure_type");
        this._closeButton = node.getChildByName("close_button");
        this._treasure = node.getChildByName("treasure_image");
        this._treasureX = this._treasure.getPosition().x;
        this._treasureY = this._treasure.getPosition().y;

        this._width = this._background.width * this._background.getScaleX();
        this._height = this._background.height * this._background.getScaleY();

        this.addClickEvent();
    },

    _touchListener: cc.EventListener.create({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: function (touch, event) {
            let target = event.getCurrentTarget();
            if(target.visible === false) {
                return false;
            }

            let locationInNode = target.convertToNodeSpace(touch.getLocation());
            let rect = cc.rect(-target.getWidth() / 2, -target.getHeight() / 2, target.getWidth(), target.getHeight());

            if (cc.rectContainsPoint(rect, locationInNode)) {
                return true;
            }
            return false;
        },
    }),

    getTouchListener: function () {
        return this._touchListener;
    },

    runAnimation: function () {
        let moveUp = cc.moveTo(1, cc.p(this._treasureX, this._treasureY + 10));
        let moveDown = cc.moveTo(1, cc.p(this._treasureX, this._treasureY));
        this._treasure.runAction(new cc.Sequence(moveUp, moveDown).repeatForever());
    },

    addClickEvent: function () {
        this._closeButton.addTouchEventListener((sender, type) => {
            let animationTime = 0.05;

            let callback = cc.CallFunc(() => {
                this._treasure.stopAllActions();
                LobbyController.getInstance().setTreasurePopUpVisible(false);
                this._closeButton.setScale(1);
            });

            let scaleTo =  cc.scaleTo(animationTime, 0.8);
            this._closeButton.runAction(new cc.Sequence(scaleTo, callback));
        });
    }
});