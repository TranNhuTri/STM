let LobbyController = cc.Class.extend({
    ctor: function () {
        this._uiMap = new Map();
    },

    setUI: function (uiName, ui) {
        this._uiMap.set(uiName, ui);
    },

    getUI: function (uiName) {
        return this._uiMap.get(uiName);
    },

    scrollTab: function (index) {
        let pageView = this.getUI("pageView");
        if(Math.abs(index - pageView.getCurPageIndex()) === 1) {
            pageView.scrollToPage(index);
            return;
        }
        pageView.setCurPageIndex(index);
    },

    setTreasurePopUpVisible: function (visible) {
        if(visible === undefined)
            return;

        let treasurePopUp = this.getUI("treasurePopUp");
        let popUpBackground = this.getUI("popUpBackground");

        popUpBackground.setVisible(visible);
        treasurePopUp.setVisible(visible);

        treasurePopUp.setScale(0.8);
        let scale = cc.ScaleTo(0.4, 1).easing(cc.easeBackInOut());
        treasurePopUp.runAction(scale);
        if(visible)
            treasurePopUp.runAnimation();
    }
});

LobbyController.instance = null;

LobbyController.getInstance = function () {
    if(LobbyController.instance === null) {
        LobbyController.instance = new LobbyController();
    }
    return LobbyController.instance;
};




