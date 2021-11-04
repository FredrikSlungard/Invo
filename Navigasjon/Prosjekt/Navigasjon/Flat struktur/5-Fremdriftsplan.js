// Visningen i navigasjonen for fremdriftsplanen
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl !== params.ctx._spPageContextInfo.siteServerRelativeUrl; };
var runFunction = function (params) { 
    //params.Navigation.switchOrNavigateTo(params.ctx._spPageContextInfo.webAbsoluteUrl + "/SitePages/home.aspx", "/home.aspx", "InvoTasksUI", true);
    const destination = 'https://asconsolvo.sharepoint.com/sites/Invo/Lists/Oppgaver/AllItems.aspx'
    window.open(destination)
};

return {
    "Title": "Fremdriftsplan",
    "Id": "InvoFremdrift",
    "Order": 500,
    "ImageUrl": "https://img.icons8.com/ios/50/000000/ms-project.png",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "",
    "GroupOrder": 100,
    "GroupType": "Upper"
};