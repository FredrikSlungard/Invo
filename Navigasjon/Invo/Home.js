// Navigasjon til Invo QMS
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
  const parentSite = 'https://asconsolvo.sharepoint.com/sites';
  const moduleSite = '/home/SitePages/home.aspx';
  location.href = parentSite + moduleSite;
}
return {
  "Title": "Intranett",
  "Id": "InvoNavHome",
  Order: 100,
  "ImageUrl": "https://invocdn.azureedge.net/images/modern2/home.svg",
  "Type": "Function",
  "Condition": condition,
  "RunFunction": runFunction,
  "GroupTitle": "Invo",
  GroupOrder: 100,
  "GroupType": "Upper"
};