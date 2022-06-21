let CardTab = Tab.extend({
    ctor: function (width, height) {
        this._super(width, height);
    },

    initUI: function () {
        this._scrollView = new ccui.ScrollView();
        this._scrollView.setDirection(ccui.ScrollView.DIR_VERTICAL);
        this._scrollView.setTouchEnabled(true);
        this._scrollView.setBounceEnabled(true);
        this._scrollView.setContentSize(this._width, this._height);

        this.addChild(this._scrollView);
        this.addCardDesk();
    },

    addCardDesk: function () {
        this._cardDesk = new CardDesk();

        let cards = [new Card(CARD_TYPE.TOWER.CANNON_OWL, 20, 10)];
        this._cardDesk.addCards(cards);

        this._cardDesk.setPosition(this.getWidth() / 2, this.getHeight() - this._cardDesk.getHeight() / 2);
        this._scrollView.addChild(this._cardDesk);
    }
});