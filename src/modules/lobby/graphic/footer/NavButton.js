let NavTab = BaseUI.extend({
    ctor: function (config) {
        this._super(MAIN_UI.NAV_TAB_UI);

        this._isActive = false;
        this._isRunningAnimation = false;

        this._config = config;

        this.id = this._config.id;
        this.name = this._config.name;
        this._animationTime = 0.1;

        this._changeIconPositionSpeed = -25 / this._animationTime;

        let node = this._child;

        this._button = node.getChildByName('button');
        this._icon = node.getChildByName('icon');
        this._content = node.getChildByName('text');

        this._width = this._button.width - 2 * MAIN_SCENE.NAV_BAR.offset;
        this._height = this._button.height;

        this._iconY = this._icon.y;

        this.setLeftAnchorPoint();

        this._button.loadTextures(this._config.background, this._config.background);
        this._icon.loadTexture(this._config.icon);
        this._content.setString(this._config.text);

        this._content.setVisible(false);
    },

    isRunningAnimation: function () {
        return this._isRunningAnimation;
    },

    setContentVisible: function (visible) {
        this._content.setVisible(visible);
    },

    setCallbackHandleClick: function (callback){
        this._button.addTouchEventListener((sender, type) => {
            if(type === ccui.Widget.TOUCH_BEGAN) {
                callback(sender, type);
            }
        });
    },

    changeWidth: function (dt) {
        this._button.width += this._changeWidthSpeed * dt;
        this._width += this._changeWidthSpeed * dt;

        if(this._width >= this._activeWidth) {
            this._button.width = this._activeWidth;
            this._width = this._activeWidth;
            this.unschedule(this.changeWidth);
        }
    },

    changeIconPosition: function (dt) {
        this._icon.y += dt * this._changeIconPositionSpeed;
        let sign = this._changeIconPositionSpeed / Math.abs(this._changeIconPositionSpeed)
        if(sign * this._icon.y >= sign * this._iconY) {
            this._icon.y = this._iconY;
            this.unschedule(this.changeIconPosition);

            this._isRunningAnimation = false;
        }
    },

    setActive: function (isActive) {
        if(isActive === undefined){
            this._isActive = !this._isActive;
        } else {
            if(this._isActive === isActive) {
                return;
            }
            this._isActive = isActive;
        }

        if(this._isActive) {
            this._button.loadTextures(MAIN_SCENE.NAV_BAR.activeTabBackgroud, MAIN_SCENE.NAV_BAR.activeTabBackgroud);

            this._activeWidth = this._button.width;
            this._button.width = this._width + 2 * MAIN_SCENE.NAV_BAR.offset;
            this._changeWidthSpeed = (this._activeWidth - this._width) / this._animationTime;
            this._iconY += 25;

            this.schedule(this.changeWidth);
        } else {
            this._button.loadTextures(this._config.background, this._config.background);
            this._iconY -= 25;

            this._width = this._button.width - 2 * MAIN_SCENE.NAV_BAR.offset;
        }
        this._button.height = this._height;
        this._changeIconPositionSpeed *= -1;

        this._isRunningAnimation = true;

        this.schedule(this.changeIconPosition);

        this.setLeftAnchorPoint();
        this.setContentVisible(this._isActive);
    },
});