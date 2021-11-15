// Viser kontaktene i skjemavindu
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { Invo.Forms.PMS.Display.show(); }
return {
    "Title": "Prosjektmodul",
    Order: 600,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/PSM.svg",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "",
    GroupOrder: 100,
    "GroupType": "Upper"
};