var condition = function(params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { 
  params.Navigation.switchOrNavigateTo(params.ctx._spPageContextInfo.webServerRelativeUrl, "/home.aspx", "InvoContacts", false); 
}
return {
	"Title": "Kontakter",
	"Id": "InvoContacts",
	Order: 200,
	"ImageUrl": "https://invocdn.azureedge.net/images/modern2/contact_small.svg",
	"Type": "Function",
	"Condition": condition,
	"RunFunction": runFunction,
	"GroupTitle": "Sperrede",
	GroupOrder: 200,
	"GroupType": "Upper"
};