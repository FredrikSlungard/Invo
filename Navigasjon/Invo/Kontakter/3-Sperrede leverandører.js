var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { 
  params.Navigation.switchOrNavigateTo(params.ctx._spPageContextInfo.webServerRelativeUrl, "/home.aspx", "InvoCompany", false); 
}

return {
	"Title": "Leverandører",
	"Id": "InvoBlockedCompany",
	Order: 100,
	"ImageUrl": "https://invocdn.azureedge.net/images/modern2/company_small.svg",
	"Type": "Function",
	"Condition": condition,
	"RunFunction": runFunction,
	"GroupTitle": "Sperrede",
	GroupOrder: 200,
	"GroupType": "Upper"
};