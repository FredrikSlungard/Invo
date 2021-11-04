// Navigasjon til Invo QMS
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
  Invo.Forms.Qms.View.show();
  //const parentSite = 'https://asconsolvo.sharepoint.com/sites';
  //const moduleSite = '/home/quality/default.aspx';
  //window.open(parentSite + moduleSite);
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