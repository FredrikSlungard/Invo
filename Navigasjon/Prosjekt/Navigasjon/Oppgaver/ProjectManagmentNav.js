// Åpner prosjektstyringen
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl !== params.ctx._spPageContextInfo.siteServerRelativeUrl; };
var runFunction = function (params) { params.Navigation.switchOrNavigateTo(params.ctx._spPageContextInfo.webServerRelativeUrl + "/SitePages/process.aspx", "/process.aspx", "InvoProcessUI", true); };
return {
    "Title": "Prosjektstyring",
    "Id": "InvoProcessUI",
    "Order": 200,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/PSM.svg",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "Oppgavestyring",
    "GroupOrder": 200,
    "GroupType": "Upper"
};