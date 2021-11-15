// Viser kontaktene i skjemavindu
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { Invo.Forms.Contact.List.show(); }
return {
    "Title": "Kontakter",
    Order: 500,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/contact_small.svg",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "Invo",
    GroupOrder: 100,
    "GroupType": "Upper"
};

