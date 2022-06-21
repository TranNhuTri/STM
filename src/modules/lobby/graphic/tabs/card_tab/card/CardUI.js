let CardUI = BaseUI.extend({
    ctor: function (card) {
        this._super(LOBBY_UI.CARD_TAB.CARD.UI);

        let node = this._child;

        this._background = node.getChildByName("background");
        this._border = node.getChildByName("border");
        this._energyLabel = node.getChildByName("energy");
        this._levelLabel = node.getChildByName("level");
        this._cardImage = node.getChildByName("card_image");

        this._width = this._border.width;
        this._height = this._border.height;

        if(card.energy !== null) {
            this._energyLabel.setString(Helper.convertIntToString(card.energy));
        }
        cc.log(card.level);
        if(card.level !== null) {
            this._levelLabel.setString("Lv." + Helper.convertIntToString(card.level));
        }

        this.addProgressBar();
    },

    addProgressBar: function () {
        this._progressBar = new CardProgressBar();
    }
});