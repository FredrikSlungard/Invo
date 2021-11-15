var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl !== params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl + "/Shared Documents"; }
return {
    "Title": "Libraries",
    Order: 200,
    "Type": "Explorer",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "",
    GroupOrder: 100,
    "GroupType": "Upper"
};