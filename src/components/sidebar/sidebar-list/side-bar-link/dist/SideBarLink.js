"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var SideBarLink = function (_a) {
    var path = _a.path, title = _a.title, linkText = _a.linkText, className = _a.className, children = _a.children;
    return (react_1["default"].createElement(link_1["default"], { href: path, title: title, className: className },
        children,
        linkText));
};
exports["default"] = SideBarLink;
