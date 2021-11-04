var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl !== params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { 
    Invo.Forms.UE.List.show({ Id: params.siteItem.values.ID });
}
return {
    "Title": "UE",
    "Order": 400,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/company_small.svg",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "",
    "GroupOrder": 100,
    "GroupType": "Upper"
};