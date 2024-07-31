"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SideBarLink_1 = require("./side-bar-link/SideBarLink");
var hi_1 = require("react-icons/hi");
var ExpandSidebarButton_1 = require("@/components/expand-sidebar/ExpandSidebarButton");
var fa6_1 = require("react-icons/fa6");
var go_1 = require("react-icons/go");
var SideBarList = function () {
    // Use sidebar context from provider
    var expandSidebar = react_1.useContext(ExpandSidebarButton_1.SideBarContext).expandSidebar;
    return (react_1["default"].createElement("div", { className: "flex flex-col items-center " + (!expandSidebar && "items-center justify-center ml-0") + " gap-6 mt-3 -ml-7" },
        react_1["default"].createElement("button", { type: "button", title: "Dashboard", className: "flex items-center gap-2 w-full " + (!expandSidebar && "w-fit") + " rounded-lg overflow-clip" },
            react_1["default"].createElement(SideBarLink_1["default"], { path: "/admin/dashboard", title: "Dashboard", linkText: "" + (!expandSidebar ? "" : "Dashboard"), className: "inline-flex items-center flex-row gap-3 p-3 hover:bg-purple-500 hover:text-white transition-all bg-white w-full" },
                react_1["default"].createElement(hi_1.HiHome, { className: "text-xl " + (!expandSidebar && "text-center text-2xl") }))),
        react_1["default"].createElement("button", { type: "button", title: "sdsds", className: "flex items-center gap-2 rounded-lg overflow-clip transition-all w-full " + (!expandSidebar && "w-fit") },
            react_1["default"].createElement(SideBarLink_1["default"], { path: "/admin/dashboard/verification-overview?role=brand", title: "Overview", linkText: "" + (!expandSidebar ? "" : "Overview"), className: "inline-flex items-center flex-row gap-3 bg-white w-full p-3 hover:bg-purple-500 hover:text-white" },
                react_1["default"].createElement(go_1.GoChecklist, { className: (!expandSidebar && "text-2xl text-center") + " text-xl" }))),
        react_1["default"].createElement("button", { type: "button", title: "sdsds", className: "flex items-center justify-center gap-2 rounded-lg overflow-clip w-full " + (!expandSidebar && "w-fit") },
            react_1["default"].createElement(SideBarLink_1["default"], { path: "/verification", title: "Dashboard", linkText: "" + (!expandSidebar ? "" : "Unapproved Verifications"), className: "inline-flex items-center flex-row justify-center gap-3  p-3 bg-white hover:bg-purple-500 hover:text-white transition-all w-full" },
                react_1["default"].createElement(fa6_1.FaUserCheck, { className: (!expandSidebar && "text-2xl text-center") + " text-xl" }))),
        react_1["default"].createElement("button", { type: "button", title: "sdsds", className: "flex items-center  gap-2 rounded-lg overflow-clip w-full " + (!expandSidebar && "w-fit") },
            react_1["default"].createElement(SideBarLink_1["default"], { path: "/verification", title: "Dashboard", linkText: "" + (!expandSidebar ? "" : "Approved Verifications"), className: "inline-flex items-center flex-row gap-3 p-3  bg-white hover:bg-purple-500 hover:text-white transition-all w-full" },
                react_1["default"].createElement(fa6_1.FaUserXmark, { className: (!expandSidebar && "text-2xl text-center") + " text-xl" })))));
};
exports["default"] = SideBarList;
