$(function(){setInterval(function(){KeepUserOnline();},keepInterval);});var keepOnline;var keepInterval=60000;function KeepUserOnline(){var DataObject={};var url="/AlreadyLogin/KeepUserOnline/";var successfun=function(context){if(context=="Maintenance")
{window.top.location="/NoneLogin/Maintenance/";}
else
{}}
var errorfun=function(){}
AjaxPostFunc(url,DataObject,successfun,errorfun);}