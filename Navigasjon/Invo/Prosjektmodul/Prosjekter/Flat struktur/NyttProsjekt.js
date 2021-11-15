var runFunc = function (opts) {
  var opts = opts || {}
  opts.clickFunc = function (item) { Invo.Forms.Project.View.show({ Id: item.ID }); }
  opts.getCreateText = function (item) { return "Creating: " + item.Title; }
  opts.getCreatedText = function (item) { return "Created: " + item.Title; }
  opts.getErrorText = function (item) { return "Error creating: " + item.Title; }
  var onOk = function () { opts.NotificationHandler.addItemNotification("SiteLink", "Sitelist", window.location.origin + Invo.Globals.ProjectSiteRelativeUrl, opts); }
  opts.FormDialog.showNewFormDialog(window.location.origin + Invo.Globals.ProjectSiteRelativeUrl +"/Lists/Sitelist/NewForm.aspx", undefined, { Title: "" }, undefined, "750px", undefined, onOk, undefined, true, true);
}
return {
  "Title": "Prosjekt",
  Order: 100,
  "RunFunction": runFunc
};