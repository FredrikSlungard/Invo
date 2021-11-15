// Åpner hurtigvisning for endring av prosjektinformasjon
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl !== params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
    var obj = {};
    obj.layout = [["SiteNo", "StartDate", "TaskDueDate", "SiteManager", "SiteCompany", "ContactPerson", "SiteDescription", "UseRestrictedAccess", "ReadPermissionUsers", "ModifyPermissionUsers"]];
    obj.minFreeWidth = 205;
    obj.getParentFreeWidth = function () {
        //console.log("get free width!")
        var main = document.querySelector(".CanvasComponent");
        if (main && main.clientWidth) {
            var section = document.querySelector(".CanvasSection");
            if (section && section.clientWidth) {
                if (main.clientWidth - section.clientWidth) {
                    return main.clientWidth - section.clientWidth;
                }
            }
        }
        return -1;
    }
    var main = document.querySelector(".CanvasComponent");
    if (main && main.clientWidth) {
        var section = document.querySelector(".CanvasSection");
        if (section && section.clientWidth) {
            if (main.clientWidth - section.clientWidth) {
                obj.parentFreeWidth = main.clientWidth - section.clientWidth;
                obj.displayOnLoadIfPossible = true;
            }
        }
    }
    return obj;
}
return {
    "Title": "Prosjektinformasjon",
    "EditTitle": "(Endre)",
    Order: 200,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/info.svg",
    "Type": "SiteInformation",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "",
    GroupOrder: 100,
    "GroupType": "Lower"
};