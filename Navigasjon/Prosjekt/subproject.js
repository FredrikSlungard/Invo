var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl != params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (params) {
    var opts = opts || {};
    opts.clickFunc = function (item) { Invo.Forms.Project.View.show({ Id: item.ID }); }
    opts.getCreateText = function (item) { return "Oppretter prosjekt: " + item.Title; }
    opts.getCreatedText = function (item) { return "Opprettet prosjekt: " + item.Title; }
    opts.getErrorText = function (item) { return "Feil ved oppretting av prosjekt: " + item.Title; }
    var onOk = function () { params.NotificationHandler.addItemNotification("SiteLink", "Sitelist", window.location.origin + Invo.Globals.ProjectSiteRelativeUrl, opts); }
    params.FormDialog.showNewFormDialog(window.location.origin + Invo.Globals.ProjectSiteRelativeUrl+"/Lists/Sitelist/NewForm.aspx", undefined, { ParentSiteID: params.siteItem.values.ID, ParentSite: params.siteItem.values.Title, SiteCompany: params.siteItem.values.SiteCompany, SiteCompanyID: params.siteItem.values.SiteCompanyID }, undefined, "750px", undefined, onOk, undefined, true, true);
}
return {
    "Title": "New sub project",
    Order: 100,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/new.svg",
    "Type": "Function",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "",
    GroupOrder: 100,
    "GroupType": "Lower"
};