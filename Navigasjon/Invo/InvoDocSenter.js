// Navigasjon til Invo Dokumentsenter
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
  const parentSite = 'https://asconsolvo.sharepoint.com/sites';
  const moduleSite = '/docucenter/SitePages/home.aspx';
  location.href = parentSite + moduleSite;
}
return {
  "Title": "Dokumentsenter",
  "Id": "InvonavDocCenter",
  Order: 200,
  "ImageUrl": "https://invocdn.azureedge.net/images/document2.png",
  "Type": "Function",
  "Condition": condition,
  "RunFunction": runFunction,
  "GroupTitle": "Invo",
  GroupOrder: 100,
  "GroupType": "Upper"
};