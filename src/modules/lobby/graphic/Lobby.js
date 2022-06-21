let Lobby = cc.Scene.extend({
    ctor: function () {
        this._super();
        this.initBackground();
        this.initUI();
    },

    initBackground: function () {
        this._background = ccui.ImageView(LOBBY.BACKGROUND);
        this._background.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(this._background);
    },

    initUI: function () {
        this.addHeader();
        this.addNavBar()
        this.addPageView();
        this.addPopUpBackground();
        this.addTreasurePopUp();
    },

    addHeader: function () {
        let header = new Header();
        header.setPosition(cc.winSize.width / 2, cc.winSize.height - header.getHeight() / 2);
        this.addChild(header, 1);

        LobbyController.getInstance().setUI("header", header);
    },

    addNavBar: function () {
        let navBar = new NavBar();
        navBar.setPosition((cc.winSize.width - navBar.getWidth())/ 2, 0)
        this.addChild(navBar, 1);

        LobbyController.getInstance().setUI("navBar", navBar);
    },

    addHomeTab: function () {
        let homeTab = new HomeTab(cc.winSize.width, cc.winSize.height - this._navBar.getHeight() - this._header.getHeight());
        homeTab.initUI();
        homeTab.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(homeTab, 1);
    },

    initPageView: function (width, height) {
        let pageView = ccui.PageView();

        pageView.setContentSize(width, height);

        let middlePageIndex = Math.floor(LOBBY.NAV_BAR.tabs.length / 2);
        for(let i = 0; i < LOBBY.NAV_BAR.tabs.length; i++) {
            let layout = ccui.Layout();
            // if(i !== middlePageIndex && i != ) {
            //     layout.setBackGroundColor(cc.color(0, (i + 1) * 100, 0));
            //     layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            // }
            pageView.addPage(layout);
        }

        let cardTab = new CardTab(width, height);
        cardTab.initUI();
        pageView.getPage(1).addChild(cardTab);

        let homeTab = new HomeTab(width, height);
        homeTab.initUI();
        homeTab.setPosition(width / 2, height / 2);
        pageView.getPage(middlePageIndex).addChild(homeTab);

        pageView.scrollToPage(middlePageIndex)

        return pageView;
    },

    handleTurning: function (sender, eventType) {
        if(eventType === ccui.PageView.EVENT_TURNING) {
            let currentIndex = LobbyController.getInstance().getUI("pageView").getCurPageIndex();
            LobbyController.getInstance().getUI("navBar").setTabActive(currentIndex);
        }
    },

    addPageView: function () {
        let navBar = LobbyController.getInstance().getUI("navBar");
        let header = LobbyController.getInstance().getUI("header");
        let pageViewWidth = cc.winSize.width, pageViewHeight = cc.winSize.height - navBar.getHeight() - header.getHeight();

        let pageView = this.initPageView(pageViewWidth, pageViewHeight);

        pageView.setPosition(0, navBar.getHeight());
        pageView.setCustomScrollThreshold(10);
        pageView.addEventListener(this.handleTurning.bind(this));

        this.addChild(pageView, 0);
        LobbyController.getInstance().setUI("pageView", pageView);
    },

    addPopUpBackground: function () {
        let popUpBackground = new PopUpBackground();

        popUpBackground.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        popUpBackground.setVisible(false);
        cc.eventManager.addListener(popUpBackground.getTouchListener(), popUpBackground);

        this.addChild(popUpBackground, 100);
        LobbyController.getInstance().setUI("popUpBackground", popUpBackground);
    },

    addTreasurePopUp: function () {
        let treasurePopUp = new TreasurePopup();

        treasurePopUp.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        treasurePopUp.setVisible(false);
        cc.eventManager.addListener(treasurePopUp.getTouchListener(), treasurePopUp);

        this.addChild(treasurePopUp, 100);
        LobbyController.getInstance().setUI("treasurePopUp", treasurePopUp);
    }
});