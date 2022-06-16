let Header = cc.Node.extend({
    ctor: function () {
        this._super();
        this._background = new ccui.ImageView(MAIN_SCENE.HEADER.background);
        this._resourceBarScale = 0.8;

        this._width = this._background.width;
        this._height = this._background.height;

        this.addChild(this._background);
        this.addResourceBars();
    },

    getWidth: function () {
        return this._width;
    },

    getHeight: function () {
        return this._height;
    },

    addResourceBars: function () {
        this._resourceBars = [];

        let configs = MAIN_SCENE.HEADER.resources;
        for(let i = 0; i < configs.length; i++) {
            let resourceBar = new ResourceBar(configs[i]);
            resourceBar.setScale(this._resourceBarScale);

            this._resourceBars.push(resourceBar);
            this.addChild(resourceBar);
        }

        cc.log(this._resourceBars[0].width * this._resourceBarScale);
        this._resourceBars[0].setPosition(-1 * (this._resourceBars[0].getWidth() * this._resourceBarScale + MAIN_SCENE.HEADER.distanceBetweenResources) / 2, 5);
        this._resourceBars[1].setPosition((this._resourceBars[0].getWidth() * this._resourceBarScale + MAIN_SCENE.HEADER.distanceBetweenResources) / 2, 5);
    },
});