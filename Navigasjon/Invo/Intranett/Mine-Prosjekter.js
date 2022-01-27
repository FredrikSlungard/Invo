// Navigasjon til Invo prosjektmodul
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
  const parentSite = 'https://asconsolvo.sharepoint.com/sites';
  const moduleSite = '/project/SitePages/home.aspx';
  window.open(parentSite + moduleSite);
}
return {
  "Title": "Prosjektmodul",
  "Id": "InvoNavProject",
  Order: 100,
  "ImageUrl": "https://invocdn.azureedge.net/images/modern2/projects.svg",
  "Type": "Function",
  "Condition": condition,
  "RunFunction": runFunction,
  "GroupTitle": "Invo",
  GroupOrder: 400,
  "GroupType": "Upper"
};