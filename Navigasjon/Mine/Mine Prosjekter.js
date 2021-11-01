// https://asconsolvo.sharepoint.com/sites/project/Lists/InvoSettingsList/AllItems.aspx?OR=Teams%2DHL&CT=1635509871299&sortField=LinkTitle&isAscending=true&viewid=4690fd60%2Da47c%2D4ce6%2Dbb94%2Dc4f2f281046a
// Hentet fra Intranettet sin settings list, der er det en egen samling med mine
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl == params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { params.Navigation.switchOrNavigateTo(params.ctx._spPageContextInfo.webServerRelativeUrl, "/home.aspx", "InvoMyProjects", false); }
return {
	"Title": "Prosjekter",
	"Id": "InvoMyProjects",
	Order: 300,
	"ImageUrl": "https://invocdn.azureedge.net/images/modern2/projects.svg",
	"Type": "Function",
	"Condition": condition,
	"RunFunction": runFunction,
	"GroupTitle": "Mine",
	GroupOrder: 100,
	"GroupType": "Upper"
};