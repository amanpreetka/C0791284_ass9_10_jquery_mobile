function init()
{
var currentuser=-1;
var mycart=[];
sessionStorage.setItem("mycart", JSON.stringify(mycart));

//defining array for users
var fnames=["Admin"];
var lnames=[""];
var pwds=["lcit123"];
var usermails=["admin@lcit.com"];
var birthdates=["25-04-21"];
var citys=["Toronto"];

    sessionStorage.setItem("fnames", JSON.stringify(fnames));
	sessionStorage.setItem("lnames", JSON.stringify(lnames));
	sessionStorage.setItem("usermails", JSON.stringify(usermails));
	sessionStorage.setItem("pwds", JSON.stringify(pwds));
	sessionStorage.setItem("birthdates", JSON.stringify(birthdates));
	sessionStorage.setItem("citys", JSON.stringify(citys));
}


