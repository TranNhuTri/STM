let Card = cc.Class.extend({
    _level: null,
    _rank: null,
    _type: null,
    _cumulativeFragments: null,

    ctor: function (type, level, cumulativeFragments) {
        this._type = type;
        this._level = level;
        this._cumulativeFragments = cumulativeFragments;
    },

    setLevel: function (level) {
        this._level = level;
    },

    getLevel: function () {
        return this._level;
    },

    setType: function (type) {
        this._type = type;
    },

    getType: function () {
        return this._type;
    }
})