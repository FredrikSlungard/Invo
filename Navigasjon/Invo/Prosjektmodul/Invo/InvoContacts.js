// Navigasjon til Invo kontakter
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
  const parentSite = 'https://asconsolvo.sharepoint.com/sites';
  const moduleSite = '/contact/SitePages/home.aspx';
  window.open(parentSite + moduleSite);
}
return {
  "Title": "Kontakter",
  "Id": "InvoNavContacts",
  Order: 400,
  "ImageUrl": "https://invocdn.azureedge.net/images/modern2/company.svg",
  "Type": "Function",
  "Condition": condition,
  "RunFunction": runFunction,
  "GroupTitle": "Invo",
  GroupOrder: 100,
  "GroupType": "Upper"
};