// https://asconsolvo.sharepoint.com/sites/project/Lists/InvoSettingsList/AllItems.aspx?OR=Teams%2DHL&CT=1635509871299&sortField=LinkTitle&isAscending=true&viewid=4690fd60%2Da47c%2D4ce6%2Dbb94%2Dc4f2f281046a

var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl === params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) { 
    alert('Her blir du tatt til motimate eller annet kurs som viser hvordan du bruker Invo'); 
}
return {
    "Title": "Slik bruker du Invo",
    "Id": "InvoHelp",
    Order: 100,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/projects.svg",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "Veiledning",
    GroupOrder: 900,
    "GroupType": "Upper"
};