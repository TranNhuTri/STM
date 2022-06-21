let PlayerInfo = BaseUI.extend({
    _playerName: null,
    _numberOfCups: 0,

    ctor: function () {
        this._super(LOBBY_UI.HOME_TAB.PLAYER_INFO);

        let node = this._child;

        this._background = node.getChildByName("background");
        this._playerNameLabel = node.getChildByName("player_name");
        this._numberOfCupsLabel = node.getChildByName("numberOfCups");

        this._width = this._background.width * this.getScaleX();
        this._height = this._background.height * this.getScaleY();
    },

    getNumberOfCups: function () {
        return this._numberOfCups;
    },

    setNumberOfCups: function (value) {
        this._numberOfCups = value;
        this._numberOfCupsLabel.setString(Helper.convertIntToString(value));
    },

    setPlayerName: function (playerName) {
        this._playerName = playerName;
        this._playerName.setString(this._playerName);
    },

    getPlayerName: function () {
        return this._playerName;
    }
})