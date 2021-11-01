var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl !== params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { 
  const destination = 'https://prosjekter.afgruppen.no/supplier'
  window.open(destination)
}
return {
    "Title": "AF portal",
    "Order": 300,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/company_small.svg",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "Deltagere",
    "GroupOrder": 100,
    "GroupType": "Upper"
};