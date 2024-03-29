var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { 
    const parenSite = params.ctx._spPageContextInfo.webServerRelativeUrl;
    const anbudsloggPath = '/SitePages/Anbudslogg.aspx';
    params.Navigation.switchOrNavigateTo(parenSite+anbudsloggPath, "", "", true); 
  }
return {
    "Title": "Anbudslogg",
    "Id": "Anbudslogg",
    Order: 400,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/document_outline.svg",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "",
    GroupOrder: 100,
    "GroupType": "Upper"
}