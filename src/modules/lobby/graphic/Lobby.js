let MainScene = cc.Scene.extend({
    ctor: function () {
        this._super();

        this._background = ccui.ImageView(MAIN_SCENE.BACKGROUND);
        this._background.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(this._background);

        this.addHeader();

        this.addNavBar();

        this.addLobby();
    },

    addHeader: function () {
      this._header = new Header();

      this._header.setPosition(cc.winSize.width / 2, cc.winSize.height - this._header.getHeight() / 2);
      this.addChild(this._header, 0);
    },

    addNavBar: function () {
        this._navBar = new NavBar();

        this._navBar.setPosition((cc.winSize.width - this._navBar.getWidth())/ 2, 0)
        this.addChild(this._navBar, 0);
    },

    addLobby: function () {
        let lobby = new Lobby();
        lobby.setWidth(cc.winSize.width);
        lobby.setHeight(cc.winSize.height - this._navBar.getHeight() - this._header.getHeight());

        lobby.initUI();

        lobby.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(lobby, 1);
    }
});