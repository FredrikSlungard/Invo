// Visningen i navigasjonen for fremdriftsplanen
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl !== params.ctx._spPageContextInfo.siteServerRelativeUrl; };
var runFunction = function (params) { 
    let sitePath = params.ctx._spPageContextInfo.webServerRelativeUrl;
    const folderMainpath = '/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fproject%2F'; //Mappebane for query til dokumentsamling i prosjektet
    let siteName = params.ctx._spPageContextInfo.webTitle; // Tittelen til sidesamling, tilsvarer prosjektnavnet
    const fremdriftFlr = '%2FShared%20Documents%2FProsjekt%2F07%20%2D%20Fremdriftsplan' // Konstant til prosjektmappebane, denne delen vil være den samme i alle prosjekter
    let destination = sitePath + folderMainpath+ siteName + fremdriftFlr;

    // Navierer til fremdritfsplan
    params.Navigation.switchOrNavigateTo(destination, "", "", true);
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