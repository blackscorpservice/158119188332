$.fn.imModal=function(settings){var $this=$(this);var imModal;var html=$this.attr('data-html');var ajaxUrl=$this.attr('data-ajaxUrl');var iframe=$this.attr('data-iframe');var defaultSetting={touchmove:true,cancel:false,bgClose:true,title:$this.attr('data-title'),html:$this.attr('data-html'),ajaxUrl:$this.attr('data-ajaxUrl'),iFrame:iframe,handler:function(){},openComplite:function(){},template:function(title,content){return `<div class="im-modal">
        
        <div class="im-modal-content shadow-none">
            <div class="title">
            ${title}
            <a href="javascript:;" class="btn-close bg-cancel-white"></a>
            </div>
            <div class="content">
            ${content}
            </div>
        </div>
        <div class="im-modal-bg"></div>
      </div>`;}}
var _settings=$.extend(defaultSetting,settings);var _handler=function(){if(_settings.html){if($(_settings.html).length==0){_settings.cancel=true;}
var title=_settings.title?_settings.title:$(_settings.html).attr('data-title');imModal=$(_settings.html).html(_settings.template(title,$(_settings.html).html())).find('.im-modal');var bgClose='';if(_settings.bgClose){bgClose=',.im-modal-bg';}
imModal.find('.btn-close,.im-modal-close-handle'+bgClose).on('click',function(){closeModal();})
_settings.handler();}
$this.on('click',function(){if(_settings.html){$('.im-modal').removeClass('.im-modal-open');openModal();}else if(_settings.ajaxUrl){$('.im-modal-box').remove();$.blockUI();var title=_settings.title?_settings.title:$(_settings.html).attr('data-title');$.get(_settings.ajaxUrl,function(html){$.unblockUI();imModal=$("<div/>",{"class":'im-modal-box',"html":_settings.template(title,html)}).appendTo("body").find('.im-modal');openModal();})}else if(_settings.iFrame){$('.im-modal-box').remove();$.blockUI();$.unblockUI();imModal=$("<div/>",{"class":'im-modal-box',"html":iFrameHtml(_settings.iFrame),}).appendTo("body").find('.im-modal');openModal();}})};var _preventDefaultFn=function(event){if(_settings.touchmove){event.preventDefault();}}
var openModal=function(){if(_settings.cancel==false){imModal.addClass('im-modal-open');$('body').css('overflow','hidden').on('touchmove',_preventDefaultFn);if(_settings.ajaxUrl||_settings.iFrame){imModal.find('.btn-close,.im-modal-bg').on('click',function(){closeModal();})}
_settings.openComplite();}}
var iFrameHtml=function(src){return `<div class="im-modal">
                  <div class="im-modal-content shadow-none helper-content">
                    <iframe class="iframe-help" id="mainframe" src="${src}" onload="javascript:setIframeHeight()"><iframe/>
                  </div>
                  <div class="im-modal-bg bg-helper"></div>
              </div>`;}
var closeModal=function(){imModal.removeClass('im-modal-open');$('body').css('overflow','scroll').off('touchmove',_preventDefaultFn);if($('#popup-youtube-player').length>0){$('#popup-youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"'+'stopVideo'+'","args":""}','*');}
if(_settings.ajaxUrl){$('.im-modal-box').remove();}}
return this.each(_handler);};function setIframeHeight(){var iframeid=document.getElementById("mainframe");if(document.getElementById){if(iframeid&&!window.opera){if(iframeid.contentDocument&&iframeid.contentDocument.body.offsetHeight){iframeid.height=iframeid.contentDocument.body.offsetHeight;}else if(iframeid.Document&&iframeid.Document.body.scrollHeight){iframeid.height=iframeid.Document.body.scrollHeight;}}}}