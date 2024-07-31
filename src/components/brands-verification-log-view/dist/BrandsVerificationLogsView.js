"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
// import { getBrandsVerificationDetails } from "@/utils/dataFetch";
var swr_1 = require("swr");
// const fetcher = (...args: [RequestInfo, RequestInit?]) =>
//   fetch(...args).then((res) => res.json());
var fetcher = function (url, init) {
    return fetch(url, __assign(__assign({}, init), { headers: __assign({}, init === null || init === void 0 ? void 0 : init.headers) })).then(function (res) { return res.json(); });
};
/*  const { data, error } = useSWR<User>(
    ['/api/user', { headers: { Authorization: 'Bearer YOUR_TOKEN_HERE' } }],
    fetcher
  );*/
var BrandsVerificationLogsView = function () {
    var accessToken = localStorage.getItem("accessToken");
    var _a = swr_1["default"]([
        process.env.NEXT_PUBLIC_API_ADMIN_BASE_URL + "/brand-verification-details/",
        {
            headers: {
                Authorization: "Bearer " + accessToken
            }
        },
    ], function (url, options) { return fetcher(url, options); }), data = _a.data, error = _a.error;
    // if (error) console.log(error);
    console.log(data);
    return react_1["default"].createElement("div", null, "BrandsVerificationLogsView");
};
exports["default"] = BrandsVerificationLogsView;
