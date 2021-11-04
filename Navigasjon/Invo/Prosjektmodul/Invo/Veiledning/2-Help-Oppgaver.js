// https://asconsolvo.sharepoint.com/sites/project/Lists/InvoSettingsList/AllItems.aspx?OR=Teams%2DHL&CT=1635509871299&sortField=LinkTitle&isAscending=true&viewid=4690fd60%2Da47c%2D4ce6%2Dbb94%2Dc4f2f281046a

var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { 
    alert('Her blir du tatt til en video/app som viser hvordan du bruker oppgavene'); 
}
return {
    "Title": "Oppgavestyring",
    "Id": "InvoHelpNewProject",
    Order: 100,
    "ImageUrl": "https://img.icons8.com/material-outlined/24/000000/help.png",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "Veiledning",
    GroupOrder: 900,
    "GroupType": "Upper"
};