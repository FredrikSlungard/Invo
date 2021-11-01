// Visningen i navigasjonen
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl !== params.ctx._spPageContextInfo.siteServerRelativeUrl; };
var runFunction = function (params) { params.Navigation.switchOrNavigateTo(params.ctx._spPageContextInfo.webAbsoluteUrl + "/SitePages/home.aspx", "/home.aspx", "InvoTasksUI", true); };
return {
    "Title": "Alle Oppgaver",
    "Id": "InvoTasksUI",
    "Order": 100,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/tasks_outline.svg",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "Oppgavestyring",
    "GroupOrder": 200,
    "GroupType": "Upper"
};