var condition = function (params) { 
    return params.ctx._spPageContextInfo.webServerRelativeUrl !== params.ctx._spPageContextInfo.siteServerRelativeUrl; 
}
var runFunction = function (params) { 
    return params.ctx._spPageContextInfo.webAbsoluteUrl; 
}
return {
    "Title": "Hjem",
    "Id": "InvoDocumentsRecent",
    Order: 100,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/home_small.svg",
    "Type": "Navigation",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "",
    GroupOrder: 100,
    "GroupType": "Upper"
};