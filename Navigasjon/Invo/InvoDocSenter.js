// Navigasjon til Invo Dokumentsenter
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
  const parentSite = 'https://asconsolvo.sharepoint.com/sites';
  const moduleSite = '/docucenter/SitePages/home.aspx';
  window.open(parentSite + moduleSite);
}
return {
  "Title": "Dokumentsenter",
  "Id": "InvoNavDocCenter",
  Order: 300,
  "ImageUrl": "https://invocdn.azureedge.net/images/document2.png",
  "Type": "Function",
  "Condition": condition,
  "RunFunction": runFunction,
  "GroupTitle": "Invo",
  GroupOrder: 100,
  "GroupType": "Upper"
};