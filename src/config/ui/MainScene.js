var MAIN_SCENE = MAIN_SCENE || {};

MAIN_SCENE.BACKGROUND = "res/images/lobby/lobby_background.png";

MAIN_SCENE.NAV_BAR = {
    offset: 1.5,
    tabs: [
        {
            id: 0,
            name: "shop",
            background: "res/images/lobby/lobby_page_btn_0.png",
            icon: "res/images/lobby/lobby_page_icon_shop.png",
            text: "Cửa Hàng"
        },
        {
            id: 1,
            name: "card",
            background: "res/images/lobby/lobby_page_btn_1.png",
            icon: "res/images/lobby/lobby_page_icon_cards.png",
            text: "Thẻ"
        },
        {
            id: 2,
            name: "home",
            background: "res/images/lobby/lobby_page_btn_0.png",
            icon: "res/images/lobby/lobby_page_icon_home.png",
            text: "Chiến Đấu"
        },
        {
            id: 3,
            name: "friend",
            background: "res/images/lobby/lobby_page_btn_1.png",
            icon: "res/images/lobby/lobby_page_icon_social.png",
            text: "Bạn Bè"
        },
        {
            id: 4,
            name: "event",
            background: "res/images/lobby/lobby_page_btn_0.png",
            icon: "res/images/lobby/lobby_page_icon_clan.png",
            text: "Sự Kiện"
        }
    ],
    activeTabBackgroud: "res/images/lobby/lobby_page_btn_selecting.png",
};

MAIN_SCENE.HEADER = {
    resources: [
        {
            name: "gem",
            icon: "res/images/common/common_icon_gold_small.png",
        },
        {
            name: "gold",
            icon: "res/images/common/common_icon_g_small.png",
        },
    ],
    background: "res/images/lobby/lobby_currency_background.png",
    distanceBetweenResources: 50,
}