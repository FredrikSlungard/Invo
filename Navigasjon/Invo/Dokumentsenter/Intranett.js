// Navigasjon til intranett fra dokumentsenteret i Quicklaunch
var runFunction = function (params) { 
  const site = 'https://asconsolvo.sharepoint.com/sites/home/SitePages/home.aspx';
  params.Navigation.switchOrNavigateTo(site, "", "", true); 
}
return {
    "Title": "Intranett",
    Order: 100,
    "ImageUrl": "https://invocdn.azureedge.net/images/modern2/home_small.svg",
    "Type": "Function",
    "RunFunction": runFunction,
    "GroupType": "Quicklaunch"
};