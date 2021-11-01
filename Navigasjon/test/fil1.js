var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { params.Navigation.switchOrNavigateTo(params.ctx._spPageContextInfo.webServerRelativeUrl, "/home.aspx", "InvoMyDocumentsLarge", false); }
return {
	"Title": "Documents",
	"Id": "InvoMyDocumentsLarge",
	Order: 100,
	"ImageUrl": "https://invocdn.azureedge.net/images/modern2/document_outline.svg",
	"Type": "Function",
	"Condition": condition,
	"RunFunction": runFunction,
	"GroupTitle": "My",
	GroupOrder: 200,
	"GroupType": "Upper"
};
