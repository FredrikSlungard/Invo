var condition = function(params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { 
  params.Navigation.switchOrNavigateTo(params.ctx._spPageContextInfo.webServerRelativeUrl, "/home.aspx", "InvoAllProjects", false); 
}

return {
	"Title": "Alle prosjekter",
	"Id": "InvoAllProjects",
	Order: 300,
	"ImageUrl": "https://invocdn.azureedge.net/images/modern2/projects.svg",
	"Type": "Function",
	"Condition": condition,
	"RunFunction": runFunction,
	"GroupTitle": "",
	GroupOrder: 100,
	"GroupType": "Upper"
};