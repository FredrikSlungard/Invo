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
  "ImageUrl": "https://invocdn.azureedge.net/images/modern2/document_outline.svg",
  "Type": "Function",
  "Condition": condition,
  "RunFunction": runFunction,
  "GroupTitle": "Invo",
  GroupOrder: 400,
  "GroupType": "Upper"
};