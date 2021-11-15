// Navigasjon til Invo QMS i Prosjektmodul
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
  Invo.Forms.Qms.View.show();
}
return {
  "Title": "QMS",
  "Id": "InvoNavQualityAssurance",
  Order: 200,
  "ImageUrl": "https://invocdn.azureedge.net/images/modern2/quality.svg",
  "Type": "Function",
  "Condition": condition,
  "RunFunction": runFunction,
  "GroupTitle": "Invo",
  GroupOrder: 100,
  "GroupType": "Upper"
};


// Navigasjon til Invo QMS i Intranettet
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
  Invo.Forms.Qms.View.show();
}
return {
  "Title": "QMS",
  "Id": "InvoNavQualityAssurance",
  Order: 100,
  "ImageUrl": "https://invocdn.azureedge.net/images/modern2/quality.svg",
  "Type": "Function",
  "Condition": condition,
  "RunFunction": runFunction,
  "GroupTitle": "Invo",
  GroupOrder: 400,
  "GroupType": "Upper"
};