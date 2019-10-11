$(function(){GetNewVcode('TopLoginVCode','#TopLoginVCodeImg');})
function SubmitCallbackConsult_StaticPage(){var isMobile=CheckMobilesClient();var name=$('#cbs_name').val();var phone=$('#cbs_phone').val();var c_item=$('#ddl_ConsultItem').val();var vcode=$('#cbs_validation_code').val();var reg=/^((\+?(\d{2,})?[\s\-]?)\(?\d{1,}\)?[\s\-]?)?\d{3,}[\s\-]?\d{3,}[\s\-]?\#?\d{1,}?$/;if(name==''){$('#cbs_name').focus();msg=SiteFloatingModel.RequireName
alert(msg);return false;}
if(phone==''){$('#cbs_phone').focus();msg=SiteFloatingModel.RequirePhone;alert(msg);return false;}
else{if(phone!=''&&!reg.test(phone)){msg=SiteFloatingModel.PhoneFormatError;alert(msg);$('#cbs_phone').focus().select();return false;}}
if(c_item==''){$('#ddl_ConsultItem').focus();msg=SiteFloatingModel.RequireConsultItem;alert(msg);return false;}
if(vcode==""){$('#cbs_validation_code').focus();msg=SiteFloatingModel.RequireValidationCode;alert(msg);return false;}
else{result=FloatingVCodeCheck(vcode);if(!result){$('#cbs_validation_code').val('').focus();msg=SiteFloatingModel.ValidationCodeError;alert(msg);return false;}}
$("#cbs_msg").text('');var url='/Floating/CallbackServiceSubmit';var DataObject={'Name':name,'Phone':phone,'Item':c_item,'VCode':vcode}
var SuccessFunc=function(context){try{if(!CheckAjaxJsonSystemCode(context)){if(context.Result){alert(SiteFloatingModel.CallbackServiceSubmitSuccess);$('#callbackModal').hide();CleanCallbackServiceModal_StaticPage();loadingOff();$('#callbackModal').modal('hide')}
else{if(isMobile){alert(SiteFloatingModel.CallbackServiceSubmitError);}
else{alert(SiteFloatingModel.CallbackServiceSubmitError);}
loadingOff();$('#callbackModal').modal('hide')}}}catch(e){alert(e.toString())}}
var ErrorFun=function(){CleanCallbackServiceModal_StaticPage();loadingOff();$('#callbackModal').modal('hide')}
AjaxPostFunc(url,DataObject,SuccessFunc,ErrorFun);}
function CleanCallbackServiceModal_StaticPage(){var obj=FloatingGetMemberInfo();$('#cbs_name').val(obj===undefined?'':(obj.IsLogin?obj.Name:'')).focus();$('#cbs_phone').val(obj===undefined?'':(obj.IsLogin?obj.Phone:''));$('#ddl_ConsultItem').val('');$('#ddl_ConsultItem').selectpicker('val','请选择');$('#cbs_validation_code').val('');$('#cbs_msg').text('');GetNewVcode('CBScode','#VcodeImg_CallbackService');}
function OpinionSubmit(){var isMobile=CheckMobilesClient();var msg=$('#OpinionMsg');var satisfiction=isMobile?$('#satisfaction li.active').attr('data-bind'):$('#complaintsModal a.satisfiction.active').attr('data-bind');var opinion_type=$('#ddl_OpinionType').val();var contact_info=$('#txtOpinionContact').val();var opinions=$('#txtOpinion').val();msg.html('');if(satisfiction===undefined){isMobile?alert(SiteFloatingModel.PleaseSelectSatisfaction):msg.html(SiteFloatingModel.PleaseSelectSatisfaction);return false;}
if(opinion_type==''||opinion_type=='-1'||opinion_type===undefined){isMobile?alert(SiteFloatingModel.PleaseSelectOpinionType):msg.html(SiteFloatingModel.PleaseSelectOpinionType);return false;}
if(contact_info==''){isMobile?alert(SiteFloatingModel.PleaseInputContactInfo):msg.html(SiteFloatingModel.PleaseInputContactInfo);$('#txtOpinionContact').focus();return;}
else{var reg_email=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;var reg_phone=/^((\+?(\d{2,})?[\s\-]?)\(?\d{1,}\)?[\s\-]?)?\d{3,}[\s\-]?\d{3,}[\s\-]?\#?\d{1,}?$/;if(!reg_email.test(contact_info)&&!reg_phone.test(contact_info)){$('#txtOpinionContact').focus().select();isMobile?alert(SiteFloatingModel.PleaseInputValidPhoneOrEmail):msg.html(SiteFloatingModel.PleaseInputValidPhoneOrEmail);return;}}
if(opinions.trim()==''||opinions.replace('　','').trim()==''){isMobile?alert(SiteFloatingModel.PleaseLeaveYourOpinion):msg.html(SiteFloatingModel.PleaseLeaveYourOpinion);$('#txtOpinion').focus();return;}
msg.html('');var url='/Floating/OpinionSubmit/';var objData={"Satisfiction":satisfiction,"Type":opinion_type,"Contact":contact_info,"Opinion":opinions.trim()};var successFunc=function(context){try{if(!CheckAjaxJsonSystemCode(context)){if(context.Result){loadingOff();$('#complaintsModal').modal('hide')
if(isMobile){alert(SiteFloatingModel.OpinionSubmitSuccess);}
else{alert(SiteFloatingModel.OpinionSubmitSuccess);$('#complaintsModal').hide();}
CleanOpinionServiceModal();}
else{if(isMobile){alert(context.Msg);}
else{alert(context.Msg);}
loadingOff();$('#complaintsModal').modal('hide')}}}catch(e){alert(e.toString());}};var errorFunc=function(){isMobile?alert('Error'):alert('Error');loadingOff();$('#complaintsModal').modal('hide')};AjaxPostFunc(url,objData,successFunc,errorFunc);}
function CleanOpinionServiceModal(){var isMobile=CheckMobilesClient();var obj=FloatingGetMemberInfo();if(isMobile){$('ul#satisfaction li').removeClass('active');}
else{$('#complaintsModal a.satisfiction').removeClass('active');}
$('#ddl_OpinionType').val('');$('#ddl_OpinionType').trigger('change');$('#txtOpinionContact').val(obj===undefined?'':(obj.IsLogin?obj.Email:''));$('#txtOpinion').val('');$('#OpinionMsg').html('');}
function FloatingGetMemberInfo(){var obj;$.ajax({url:'/Floating/GetMemberDefaultValue/',data:' ',dataType:'json',async:false,success:function(data){obj=data;}});return obj;}
function FloatingVCodeCheck(value){var result=false;if(value!==undefined){$.ajax({url:'/Floating/VcodeCheck',data:'Vcode='+value+' ',dataType:'json',async:false,success:function(data){result=data.IsMatch;}});}
return result;}