let CountdownTreasureSlot = BaseUI.extend({
    _gemValue: 0,
    _countdownTime: 0,

    ctor: function () {
      this._super(LOBBY_UI.TREASURE_SLOTS.COUNT_DOWN_UI);

      let node = this._child;

      this._background = node.getChildByName("background");
      this._gemValueLabel = node.getChildByName("gem");
      this._countdownTimeTxt = node.getChildByName("count_down_time");

      this._width = this._background.width * this.getScaleX();
      this._height = this._background.height * this.getScaleY();
    },

    setGemValue: function (value) {
        this._gemValue = value
        this._gemValueLabel.setString(Helper.convertIntToString(this._gemValue));
    },

    getGemValue: function () {
        return this._gemValue;
    },

    setCountDownTime: function () {

    },
});