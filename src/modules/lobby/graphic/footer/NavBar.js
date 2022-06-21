let NavBar = cc.Node.extend({
    ctor: function () {
        this._super();
        this.addNavTabs();
        this.setTabPosition();

        if(this._tabs.length !== 0) {
            this._height = this._tabs[0].getHeight();
        }
    },

    getWidth: function () {
        return this._width;
    },

    getHeight: function () {
        return this._height;
    },

    addNavTabs: function () {
        this._tabs = [];

        let tabConfigs = LOBBY.NAV_BAR.tabs;
        for(let i = 0; i < tabConfigs.length; i++) {
            let navTab= new NavButton(tabConfigs[i]);

            if(navTab.name === "home") {
                navTab.setActive(true);
                this._clickedTabIndex = 2;
            }

            this._tabs.push(navTab);
            this.addChild(navTab);
        }

        for(let i = 0; i < this._tabs.length; i++) {
            let index = i;
            this._tabs[i].setCallbackHandleClick(function (sender, type){
                this.handleClick(sender, type, index);
            }.bind(this));
        }
    },

    setTabPosition: function () {
        let distance = 0, nTabs = this._tabs.length;
        let space = cc.winSize.width - nTabs * this._tabs[0].getWidth();
        for(let i = 0; i < this._tabs.length; i++) {
            if(i === this._clickedTabIndex) {
                distance += space / 2;
            }
            this._tabs[i].setPosition(distance, 0);
            distance += this._tabs[i].getWidth() + (this._tabs[i].id === this._clickedTabIndex ? space / 2 : 0);
        }

        if(this._width === undefined)
            this._width = distance;
    },

    isTabRunningAnimation: function () {
        for(let i = 0; i < this._tabs.length; i++) {
            if(this._tabs[i].isRunningAnimation())
                return true;
        }
        return false;
    },

    setTabActive: function (index) {
        if(index === this._clickedTabIndex) {
            return;
        }
        for(let i = 0; i < this._tabs.length; i++) {
            if(i !== index) {
                this._tabs[i].setActive(false);
                continue;
            }
            this._tabs[i].setActive(true);
            this._clickedTabIndex = i;
        }
        this.setTabPosition();
    },

    handleClick: function (sender, type, index) {
        if(type === ccui.Widget.TOUCH_BEGAN) {
            if(this.isTabRunningAnimation())
                return;
            this.setTabActive(index);
        }
    }
});