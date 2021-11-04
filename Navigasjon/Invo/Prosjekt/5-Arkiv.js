var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { Invo.TreeView.Funcs.toggleElem("InvoArchivedProjects"); }
return {
    "Title": "Arkiv",
    "Id": "InvoArchivedProjects",
    Order: 500,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/archived.svg",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "",
    GroupOrder: 100,
    "GroupType": "Upper"
};