let HomeTab = Tab.extend({
    _numberOfTreasureSlots: 4,
    _offset: 30,

    ctor: function (width, height) {
        this._super(width, height);
    },

    initUI: function () {
        this.addPlayerInfo();
        this.addTreasureSlots();
        this.addFightButton();
        this.addMap();
    },

    addMap: function () {
        this._map = new MapUI();
        this._map.setPosition(0, this._fightButton.y + (this._fightButton.getHeight() + this._map.getHeight()) / 2 + this._offset);
        this.addChild(this._map);
    },

    addFightButton: function () {
        this._fightButton = new FightButton();
        let treasureSlot = this._treasureSlots[0];

        this._fightButton.setPosition(0, treasureSlot.y + treasureSlot.getHeight() + this._fightButton.getHeight() / 2 + this._offset / 2);
        this.addChild(this._fightButton);
    },

    addPlayerInfo: function () {
        this._playerInfo = new PlayerInfo();
        this._playerInfo.setPosition(0, this._height / 2 - this._playerInfo.getHeight() / 2 + 10);
        this.addChild(this._playerInfo);
    },

    addTreasureSlots: function () {
        this._treasureSlots = [];
        let startPos = -cc.winSize.width / 2, space = cc.winSize.width;

        for(let i = 0; i < this._numberOfTreasureSlots; i++) {
            let treasureSlot = new TreasureSlot();

            cc.eventManager.addListener(treasureSlot.getTouchListener().clone(), treasureSlot);
            space -= treasureSlot.getWidth();

            this._treasureSlots.push(treasureSlot);
            this.addChild(treasureSlot);
        }

        space = space / (this._numberOfTreasureSlots + 1);
        for(let i = 0; i < this._numberOfTreasureSlots; i++) {
            this._treasureSlots[i].setPosition(startPos + space, -1 * this._height / 2 + this._offset);
            startPos = startPos + this._treasureSlots[i]._width + space;
        }
    },
});