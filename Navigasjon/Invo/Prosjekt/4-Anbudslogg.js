var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { 
    const parentSite = params.ctx._spPageContextInfo.webServerRelativeUrl;
    const moduleSite = '/SitePages/Tender.aspx';
    window.open(parentSite + moduleSite);
}
return {
    "Title": "Anbudslogg",
    "Id": "Anbudslogg",
    Order: 400,
    "ImageUrl": "https://invocdn.azureedge.net/images/document2.png",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "",
    GroupOrder: 100,
    "GroupType": "Upper"
};