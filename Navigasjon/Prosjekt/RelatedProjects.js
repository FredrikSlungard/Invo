// Viser hovedprosjekter og andre underprosjekter
var condition = function (params) { return params.ctx._spPageContextInfo.webServerRelativeUrl !== params.ctx._spPageContextInfo.siteServerRelativeUrl; }
var runFunction = function (item) { Invo.Forms.Project.View.show({ Id: item.ID }); }
return {
    "Title": "Related Projects",
    Order: 400,
    "ParentHeader": "Hovedprosjekt",
    "AdjacentHeader": "Underprosjekter",
    "ChildHeader": "Sub projects",
    "Type": "SiteRelation",
    "Condition": condition,
    "RunFunction": runFunction,
    "GroupTitle": "",
    GroupOrder: 400,
    "GroupType": "Upper",
    "ListName": "sitelist",
    "ListRelativeUrl": "/sites/project"
};