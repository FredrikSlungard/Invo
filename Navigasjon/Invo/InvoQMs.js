// Navigasjon til Invo QMS
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
  const parentSite = 'https://asconsolvo.sharepoint.com/sites';
  const moduleSite = '/home/quality/default.aspx';
  location.href = parentSite + moduleSite;
}
return {
  "Title": "QMS",
  "Id": "InvoNavQualityAssurance",
  Order: 300,
  "ImageUrl": "https://invocdn.azureedge.net/images/modern2/quality.svg",
  "Type": "Function",
  "Condition": condition,
  "RunFunction": runFunction,
  "GroupTitle": "Invo",
  GroupOrder: 100,
  "GroupType": "Upper"
};