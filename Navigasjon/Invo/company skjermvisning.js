// Viser kontaktene i skjemavindu
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { Invo.Forms.Company.List.show(); }
return {
    "Title": "Firma",
    Order: 400,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/company.svg",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "Invo",
    GroupOrder: 100,
    "GroupType": "Upper"
};