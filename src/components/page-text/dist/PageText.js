"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RoleSwitcher_1 = require("../role-switcher/RoleSwitcher");
var PageText = function () {
    var role = react_1.useContext(RoleSwitcher_1.RoleSwitchContext).role;
    return (react_1["default"].createElement("div", { className: "flex flex-col gap-1" },
        react_1["default"].createElement("h3", { className: "text-lg font-medium" }, "All verifications submitted"),
        react_1["default"].createElement("p", null,
            "Showing for: ",
            react_1["default"].createElement("b", { className: "capitalize" }, role + "s"))));
};
exports["default"] = PageText;
