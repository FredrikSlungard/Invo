var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
  let site = params.ctx._spPageContextInfo.webAbsoluteUrl;
  let list = '/DocumentTemplates/Forms/AllItems.aspx?viewid=e63f4734-a5d8-42e4-93b2-931642d44720';
  params.Navigation.switchOrNavigateTo(site+list, "", "", true); 
}
return {
	"Title": "QMS maler",
	Order: 400,
	"ImageUrl": "https://invocdn.azureedge.net/images/modern2/quality.svg",
	"Type": "Function",
	"Condition": condition,
	"RunFunction": runFunction,
	"GroupTitle": "Mine",
	GroupOrder: 200,
	"GroupType": "Upper"
};