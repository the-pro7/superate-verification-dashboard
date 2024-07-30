"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var swr_1 = require("swr");
var fetcher = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return fetch.apply(void 0, args).then(function (res) { return res.json(); });
};
var BrandsVerificationLogsView = function () {
    var _a = swr_1["default"](process.env.NEXT_PUBLIC_API_ADMIN_BASE_URL + "/brands-verification-details", fetcher), data = _a.data, error = _a.error;
    if (error)
        console.log(error);
    console.log(data);
    return react_1["default"].createElement("div", null, "BrandsVerificationLogsView");
};
exports["default"] = BrandsVerificationLogsView;
