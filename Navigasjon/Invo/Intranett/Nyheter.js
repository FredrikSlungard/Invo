var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl == params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { 
  params.Navigation.switchOrNavigateTo(params.ctx._spPageContextInfo.webServerRelativeUrl, "/home.aspx", "InvoNewsLarge", false); 
}
return {
	"Title": "Nyheter",
	"Id": "InvoNewsLarge",
	Order: 100,
	"ImageUrl": "https://invocdn.azureedge.net/images/modern2/news.svg",
	"Type": "Function",
	"Condition": condition,
	"RunFunction": runFunction,
	"GroupTitle": "",
	GroupOrder: 100,
	"GroupType": "Upper"
};