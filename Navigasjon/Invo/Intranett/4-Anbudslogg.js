// Navigasjonen til anbudslogg fra intranettsiden
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { 
    const destination = 'https://asconsolvo.sharepoint.com/sites/project/SitePages/Anbudslogg.aspx';
    params.Navigation.switchOrNavigateTo(destination, "", "", true); 
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