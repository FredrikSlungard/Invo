// Visningen i navigasjonen for fremdriftsplanen
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl !== params.ctx._spPageContextInfo.siteServerRelativeUrl; };
var runFunction = function (params) { 
    //params.Navigation.switchOrNavigateTo(params.ctx._spPageContextInfo.webAbsoluteUrl + "/SitePages/home.aspx", "/home.aspx", "InvoTasksUI", true);
    const destination = 'https://project.microsoft.com/?org=org4368b851.crm4.dynamics.com#/taskgrid?projectId=8699bacb-2774-433e-a6d0-2bd4ab245e14'
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