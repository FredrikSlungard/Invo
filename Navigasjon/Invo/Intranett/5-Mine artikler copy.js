var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
  let site = params.ctx._spPageContextInfo.webAbsoluteUrl;
  let list = '/quality/Lists/QaArticles/My%20Items.aspx';
  params.Navigation.switchOrNavigateTo(site+list, "", "", true);
}
return {
	"Title": "Artikler",
	Order: 500,
	"ImageUrl": "https://invocdn.azureedge.net/images/modern2/quality.svg",
	"Type": "Function",
	"Condition": condition,
	"RunFunction": runFunction,
	"GroupTitle": "Mine",
	GroupOrder: 200,
	"GroupType": "Upper"
};