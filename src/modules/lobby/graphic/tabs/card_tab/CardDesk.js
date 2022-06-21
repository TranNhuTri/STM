let CardDesk = BaseUI.extend({
    ctor: function () {
        this._super(LOBBY_UI.CARD_TAB.CARD_DESK);

        let node = this._child;

        this._background = node.getChildByName("background");
        this._title = node.getChildByName("title");

        this._width = this._background.width * this._background.getScaleX();
        this._height = this._background.height * this._background.getScaleY();
    },

    addCards: function (cards) {
        for(let i = 0; i < cards.length; i++) {
            let card = new CardUI(cards[i]);
            this.addChild(card);
        }
    }
});