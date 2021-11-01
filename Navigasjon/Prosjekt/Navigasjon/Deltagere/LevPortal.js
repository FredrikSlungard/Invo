// Navigasjon til AF sin leverandørportal
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
  location.href = 'https://prosjekter.afgruppen.no/supplier';
}
return {
  "Title": "AF portal",
  "Id": "AfSupplierPortal",
  Order: 300,
  "ImageUrl": "https://invocdn.azureedge.net/images/modern2/company.svg",
  "Type": "Function",
  "Condition": condition,
  "RunFunction": runFunction,
  "GroupTitle": "Deltagere",
  GroupOrder: 100,
  "GroupType": "Upper"
};