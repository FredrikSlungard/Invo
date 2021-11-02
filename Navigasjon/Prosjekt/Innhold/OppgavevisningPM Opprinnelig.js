// Hva som vises i navigasjonen med oppgaver
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl !== params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { return params.ctx._spPageContextInfo.webAbsoluteUrl + "/Lists/Tasks"; }
return {
    "Title": "Oppgave",
    "TitleResourceKey": "Tasks",
    Order: 300,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/tasks_outline.svg",
    "Type": "Navigation",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "",
    GroupOrder: 100,
    "GroupType": "Upper"
};