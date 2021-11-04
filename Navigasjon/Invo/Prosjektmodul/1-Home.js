var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { Invo.TreeView.Funcs.toggleElem("Dash"); }
return {
    "Title": "Hjem",
    "Id": "Dash",
    Order: 100,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/home_small.svg",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "",
    GroupOrder: 100,
    "GroupType": "Upper"
};