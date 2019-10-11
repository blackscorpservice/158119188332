function clearSubscribeErrorMsg(){$('#subscription_error').html('');}
function SubscribeNewsFeed(){var isMobile=CheckMobilesClient();$('#subscription_error').html('');var s=$("#membermail_Subscribe").val();var regu="^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$"
var re=new RegExp(regu);if(s.search(re)!=-1){loadingOn();var url="/VUC/MailModel_Ajax/";var DataObject={mail:$("#membermail_Subscribe").val()};var successfun=function(context){if(context=="0"){isMobile?OpenDialog(MailModel.Success):OpenDialog(MailModel.Success,true);$("#membermail_Subscribe").val("");}
else{$('#subscription_error').html(MailModel.MailAlready);$("#membermail_Subscribe").focus();$("#membermail_Subscribe").select();}
loadingOff();}
var errorfun=function(){$('#subscription_error').html(MailModel.ErrorMail);$("#membermail_Subscribe").focus();$("#membermail_Subscribe").select();loadingOff();}
AjaxPostFunc(url,DataObject,successfun,errorfun);}
else{$('#subscription_error').html(MailModel.ErrorMail);$("#membermail_Subscribe").focus();$("#membermail_Subscribe").select();return false;}}
function SubscribeNewsFeed_StaticPage(){$('#subscription_error').html('');var s=$("#membermail").val();var regu="^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$"
var re=new RegExp(regu);if(s.search(re)!=-1){loadingOn();var url="/VUC/MailModel_Ajax/";var DataObject={mail:$("#membermail").val()};var successfun=function(context){if(context=="0"){alert(MailModel.Success);$("#membermail").val("");}
else{$('#subscription_error').html(MailModel.MailAlready);$("#membermail").focus();$("#membermail").select();}
loadingOff();}
var errorfun=function(){$('#subscription_error').html(MailModel.ErrorMail);$("#membermail").focus();$("#membermail").select();loadingOff();}
AjaxPostFunc(url,DataObject,successfun,errorfun);}
else{$('#subscription_error').html(MailModel.ErrorMail);$("#membermail").focus();$("#membermail").select();return false;}}