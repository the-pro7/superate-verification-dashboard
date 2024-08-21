"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Sidebar_module_css_1 = require("./Sidebar.module.css");
var SideBarList_1 = require("./sidebar-list/SideBarList");
var image_1 = require("next/image");
var ExpandSidebarButton_1 = require("../expand-sidebar/ExpandSidebarButton");
var rx_1 = require("react-icons/rx");
var Sidebar = function () {
    var expandSidebar = react_1.useContext(ExpandSidebarButton_1.SideBarContext).expandSidebar;
    return (react_1["default"].createElement("aside", { className: Sidebar_module_css_1["default"].container + " " + (expandSidebar && "w-3/4 col-span-2") + " z-50 dark:bg-gray-900 bg-gray-200  w-2/5 p-4 flex items-center flex-col gap-3 relative" },
        react_1["default"].createElement(ExpandSidebarButton_1["default"], null),
        react_1["default"].createElement("div", { className: "flex gap-2 items-center justify-start mr-auto " + (!expandSidebar && "gap-0 justify-normal") },
            react_1["default"].createElement("div", { className: "w-16 h-16 rounded-full overflow-clip bg-white relative " },
                react_1["default"].createElement(image_1["default"], { src: "/logo.png", fill: true, alt: "Superate logo", className: "object-cover" })),
            expandSidebar && (react_1["default"].createElement("h1", { className: "text-2xl font-black tracking-wider" }, "Superate"))),
        react_1["default"].createElement(SideBarList_1["default"], null),
        react_1["default"].createElement("button", { title: "logout", type: "button", className: "mt-auto p-5 rounded-lg hover:bg-white rotate-180 " + (expandSidebar && "ml-auto") },
            react_1["default"].createElement(rx_1.RxExit, { className: "text-xl" }))));
};
exports["default"] = Sidebar;
