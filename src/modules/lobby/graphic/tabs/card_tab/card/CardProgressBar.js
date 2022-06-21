let CardProgressBar = BaseUI.extend({
    ctor: function (card) {
        this._super(LOBBY_UI.CARD_TAB.CARD_PROGRESS_BAR);

        let node = this._child;

        this._background = node.getChildByName("background");
        this._progress = node.getChildByName("progress");
        this._text = node.getChildByName("text");

        this._width = this._background.width;
        this._height = this._background.height;

        if(card !== undefined) {
            if(card.progress !== undefined) {
                if(progress === 100) {
                    this._progress.loadTexture(LOBBY_UI.CARD_TAB.CARD.MAX_PROGRESS);
                }
                this._progress.setScaleX(progress / 100);
            }
        }
    }
});