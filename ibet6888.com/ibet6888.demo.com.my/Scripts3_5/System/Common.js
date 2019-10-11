/*
 * Ajax 傳送函式(接收JSON 格式)
 * 
 */

function AjaxPostFunc(sUrl, objData, successfuncc, errorfuncc) {

    //傳輸型態設定
    var _ContentType, _objData;

    _ContentType = 'application/json; charset=utf-8';
    _objData = JSON.stringify(objData);

    //時間戳記
    var _TimeStamp;
    try {
        _TimeStamp = Date.now().toString();
    }
    catch (e) {
        _TimeStamp = new Date().getTime();
    }

    var postUrl;

    if (sUrl.indexOf("?") >= 0) {
        postUrl = sUrl + "&TimeStamp" + _TimeStamp + "=" + _TimeStamp;
    }
    else {
        postUrl = sUrl + "?TimeStamp" + _TimeStamp + "=" + _TimeStamp;
    }

    $.ajax({
        url: postUrl,
        type: 'POST',
        dataType: 'json',
        data: _objData,
        contentType: _ContentType,
        success: successfuncc,
        error: errorfuncc
    });
}

/*
 * Ajax 傳送函式(接收HTML 格式)
 * 
 */

function AjaxPostFuncHtml(sUrl, objData, successfuncc, errorfuncc) {

    //傳輸型態設定
    var _ContentType, _objData;

    _ContentType = 'application/json; charset=utf-8';
    _objData = JSON.stringify(objData);

    //時間戳記
    var _TimeStamp;
    try {
        _TimeStamp = Date.now().toString();
    }
    catch (e) {
        _TimeStamp = new Date().getTime();
    }

    var postUrl;

    if (sUrl.indexOf("?") >= 0) {
        postUrl = sUrl + "&TimeStamp" + _TimeStamp + "=" + _TimeStamp;
    }
    else {
        postUrl = sUrl + "?TimeStamp" + _TimeStamp + "=" + _TimeStamp;
    }

    $.ajax({
        url: postUrl,
        type: 'POST',
        dataType: 'html',
        data: _objData,
        contentType: _ContentType,
        success: successfuncc,
        error: errorfuncc
    });
}

//更新訊息數
function setmessagenum() {
    SearchData = {
    };
    var url = "/AlreadyLogin/setmessagemembernum";

    var successfunc = function (context) {
        try {
            if (!CheckAjaxJsonSystemCode(context)) {
            }
        } catch (e) {
            alert(e.toString())
        }
    }
    var errorfunc = function () {
        alert("error");
    }
    AjaxPostFunc(url, SearchData, successfunc, errorfunc)
}

//改變語系
function ChangeCulture(culture) {
    //$('#Countries :selected').value();
    var url = "/NoneLogin/ChangeCulture";
    var DataObject = { chgculture: culture };
    var successfun = function (context) {
        location.reload();
    }
    var errorfun = function () {
        //alert(Hom_TopResx.ajaxerror);
    }
    //bindAjaxWithData(url, DataObject, successfun, errorfun);
    AjaxPostFunc(url, DataObject, successfun, errorfun);
}

$(function () {
    setLang();
});

function setLang() {
    //取得語系
    var deflan = $("#defultlan").val();
    //取得語系名稱
    var deflan_name = $('#lang_' + deflan).val();
    //取得語系圖片CSS
    var deflan_LogoCss = $('#lang_logoCss_' + deflan).val();

    //組合顯示的語系圖片
    var logo = "<span class=\"cpn-inBlock bg-lang " + deflan_LogoCss + "\"></span>";

    var _langBtn_name = $('#lnk-lang-name');
    _langBtn_name.html(logo + deflan_name + " <span class=\"cpn-inBlock bg-lang-arrow\"></span>");
}

//判斷是否為行動裝置
function CheckMobilesClient() {
    var mobiles = new Array
        (
        "midp", "j2me", "avant", "docomo", "novarra", "palmos", "palmsource",
        "240x320", "opwv", "chtml", "pda", "windows ce", "mmp/",
        "blackberry", "mib/", "symbian", "wireless", "nokia", "hand", "mobi",
        "phone", "cdm", "up.b", "audio", "sie-", "sec-", "samsung", "htc",
        "mot-", "mitsu", "sagem", "sony", "alcatel", "lg", "eric", "vx",
        "NEC", "philips", "mmm", "xx", "panasonic", "sharp", "wap", "sch",
        "rover", "pocket", "benq", "java", "pt", "pg", "vox", "amoi",
        "bird", "compal", "kg", "voda", "sany", "kdd", "dbt", "sendo",
        "sgh", "gradi", "jb", "dddi", "moto", "iphone", "android",
        "iPod", "incognito", "webmate", "dream", "cupcake", "webos",
        "s8000", "bada", "googlebot-mobile"
        )
    var ua = navigator.userAgent.toLowerCase();
    var isMobile = false;
    for (var i = 0; i < mobiles.length; i++) {
        if (ua.indexOf(mobiles[i]) > 0) {
            isMobile = true;
            break;
        }
    }
    return isMobile;
}

//判斷瀏覽器類別
function CheckBrowserClient() {

    var pgwBrowser = $.pgwBrowser();

    var BrowserName = "Other";

    BrowserName = pgwBrowser.browser.group;

    if (BrowserName == "Chrome" && pgwBrowser.userAgent.indexOf('OPR') > 0) {
        BrowserName = "Opera";
    }

    return BrowserName;
}

//判斷作業系統
function CheckOSClient() {

    var pgwBrowser = $.pgwBrowser();

    var OSName = "Other";

    OSName = pgwBrowser.os.group;

    return OSName;
}

//處理中遮罩 - 開啟
function loadingOn() {
    $('body').css('overflow', 'hidden');
    $(".lay-loading").show();
}
//處理中遮罩 - 關閉
function loadingOff() {
    $('body').css('overflow', '')
    $(".lay-loading").hide();
}

function OpenDialog(msg, status, btnTxt, url, func, showClose) {

    status = status || false;
    url = url || "";
    func = func || "";
    btnTxt = btnTxt || ""
    showClose = showClose || false;

    //console.log(status, msg, url, func, btnTxt)
    $("#modalMsg").html(msg)
    if (status) {
        $("#modalSuccessTitle").show()
        $("#modalFailTitle").hide()
        $("#modalMark").removeClass("bg-failed")
        $("#modalMark").addClass("bg-success")
        $("#modalHeader").removeClass("failed-header")
        $("#modalHeader").addClass("success-header")
    }
    else {
        $("#modalSuccessTitle").hide()
        $("#modalFailTitle").show()
        $("#modalMark").removeClass("bg-success")
        $("#modalMark").addClass("bg-failed")
        $("#modalHeader").removeClass("success-header")
        $("#modalHeader").addClass("failed-header")
    }
    var msgModal = document.getElementById("msgModal");
    //都是空的代表要要有X，沒有按鈕
    if (url === "" && func === "" && btnTxt === "") {

        if ($("#msgModal").length > 0) {
            msgModal.style.display = "flex";
            msgModal.addEventListener("click", ModelEventControl);
        }
        $("#modalCloseIcon").show()
        $("#modalBtn").hide()
    } else {
        if ($("#msgModal").length > 0) {
            msgModal.style.display = "flex";
            msgModal.removeEventListener("click", ModelEventControl);
        }
        $("#modalBtn").show()
        $("#modalCloseIcon").hide()
    }

    if (url != "") {
        $("#modalBtn").attr('href', url)
    } else {
        $("#modalBtn").removeAttr('href')
    }

    if (func != "") {
        func = func + "CloseDialog();";
        $("#modalBtn").attr('onclick', func);
    } else {
        $("#modalBtn").removeAttr('onclick');
    }
    if (btnTxt != "") {
        $("#modalBtn").html(btnTxt)
    } else {
        $("#modalBtn").html(SystemRes.AlertCloseButton)
    }

    if (showClose)
    {
        msgModal.style.display = "flex";
        msgModal.addEventListener("click", ModelEventControl);
        $("#modalCloseIcon").show();
    }

    $("#msgModal").show();
}

function CloseDialog() {
    $("#msgModal").hide();
}

//Confirm 光箱(雙按鈕)
function OpenConfirmDialog(msg, TitleTxt, url, func) {

    if ($("#msgConfirmModal").length == 0) {
        return;
    }

    var url = url || "";
    var func = func || "";
    var TitleTxt = TitleTxt || "";

    //console.log(status, msg, url, func, btnTxt)
    $("#modalConfirmMsg").html(msg)
    $("#modalConfirmTitle").html(TitleTxt)

    var msgModal = document.getElementById("msgConfirmModal");
    msgModal.style.display = "flex";

    if (url != "") {
        $("#modalConfirmBtn").attr('href', url)
    } else {
        $("#modalConfirmBtn").removeAttr('href')
    }

    if (func != "") {
        func = func + ";CloseConfirmDialog();";
        $("#modalConfirmBtn").attr('onclick', func);
    } else {
        $("#modalConfirmBtn").attr('onclick', "CloseConfirmDialog();");
    }

    $("#msgConfirmModal").show();
}

function CloseConfirmDialog() {
    $("#msgConfirmModal").hide();
}

function ModelEventControl(evt) {
    if (evt.target.className == "modal-bg" || evt.target.className == "close bg-cancel-white") {
        this.style.display = "none";
    }
}


////訊息光箱
//function OpenDialog(msg) {
//    var commonModal = document.getElementById("commonModal");
//    if ($("#commonModal").length > 0) {
//        commonModal.style.display = "flex";
//        commonModal.addEventListener("click", function (evt) {
//            if (evt.target.className == "modal-bg" || evt.target.className == "close bg-cancel-white") {
//                this.style.display = "none";
//            }
//        });
//    }
//    $('#commonModal').find('.status-txt').html(msg);
//    //$("#alertCloseBtn").text(SystemRes.AlertCloseButton);
//    //$("#commonModal").css('display', 'flex');
//    $("#commonModal").show();

//}

////關閉訊息光箱
//function CloseDialog() {
//    $('#commonModal').hide();
//}

////訊息光箱2(帶入訊息&路徑)
//function OpenDialog2(msg, closeUrl) {
//    $('#commonModal2').find('.status-txt').html(msg);
//    $("#commonModalClose").attr('href', closeUrl);
//    $("#commonModal2").css('display', 'flex');
//    $("#commonModal2").show();
//}

////訊息光箱3(帶入訊息&路徑)
//function OpenDialog3(msg, func) {
//    func = func + "CloseDialog3();";
//    $('#commonModal3').find('.status-txt').html(msg);
//    $("#commonModal3Close").attr('onclick', func);
//    $("#commonModal3").css('display', 'flex');
//    $("#commonModal3").show();
//}
////訊息光箱4(帶入訊息&路徑&按鈕訊息)
//function OpenDialog4(msg, closeUrl, btnMsg) {
//    $('#commonModal4').find('.status-txt').html(msg);
//    $("#commonModal4Close").attr('href', closeUrl);
//    $("#commonModal4Close").html(btnMsg)
//    $("#commonModal4").css('display', 'flex');
//    $("#commonModal4").show();
//}

//function CloseDialog3() {
//    $('#commonModal3').hide();
//}

function OpenDialog_GameDownload(num) {
    $('#qrcodeModal' + num).css('display', 'flex');
    $('#qrcodeModal' + num).show();
    InitialTabs();
}

function CloseDialog_GameDownload(num) {
    $('#qrcodeModal' + num).hide();
}

function closeSuccessModal() {
    $('#successModal').hide();
}

//帳號暫停提示訊息
function ShowStatusMsg(s) {
    if (s == 1) {
        $.colorbox.close();
        OpenDialog(ResStatus.StatusMsg)
    }
    else {
        OpenDialog(ResStatus.StatusMsg)
    }
    return false;
}

//重新載入accountbox區塊
function runAjaxPostAccountBox() {

    loadingOn();
    for (var i = 0; i <= parseInt($("#gamenum").val()) ; i++) {
        $("#game" + i).html("loading");
        $("#boxgame" + i).html("loading");
    }
    var DataObject = {
    };
    var url = "/Games/PointUpdate/";
    var successfun = function (context) {
        try {
            if (!CheckAjaxJsonSystemCode(context)) {
                SearchData = {
                };
                var url = '/Profile/AccountBox/';

                //點數更新成功後更新頁面
                var successfunc = function (context) {
                    $("#userinfo").html(context);
                    //pie.js
                    bindValidateRateChart()
                    //modal.js 
                    //2018.01.12 Modify:只重新綁定AccountBox內的元件，避免重複綁定開啟多層光箱。
                    BindMoadlLightBox(true)
                    loadingOff();
                }
                var errorfunc = function (xhr, ajaxOptions, thrownError) {
                    loadingOff();
                }
                AjaxPostFuncHtml(url, SearchData, successfunc, errorfunc)
            }
        } catch (e) {
            alert(e.toString())
        }
    }
    var errorfun = function () {
        loadingOff();
    }
    //更新點數
    AjaxPostFunc(url, DataObject, successfun, errorfun);
}

//重新載入GameRedirect區塊
function runAjaxPostGameRedirect() {
    SearchData = {
    };
    var url = '/Games/GameCredit/';

    var successfunc = function (context) {
        $("#GameRedirectdiv").html(context);
        loadingOff();
    }
    var errorfunc = function () {
        OpenDialog(Withdrawal.Error);
        loadingOff();
    }
    AjaxPostFuncHtml(url, SearchData, successfunc, errorfunc)
}

//Ajax Session判斷機制
function CheckAjaxJsonSystemCode(context) {
    var status = false;

    if (typeof (context) == "string" && context.indexOf("errorcode:") > -1) {
        context = JSON.parse(context.replace(/\\'/g, "'"));
    }
    var IsTokenLoginActive = $("#hidIsTokenLoginActive").val();

    if (IsTokenLoginActive == "1") {
        switch (context.errorcode) {
            case "error01":
            case "error02":
            case "error03":
            case "error04":
                top.location.href = '/AlreadyLogin/iBetTokenLogout/';
                status = true;
                break;

            default:
                break;
        }
    }
    else {
        switch (context.errorcode) {
            case "error01":
                top.location.href = '/Login/Logout/?lus=1';
                status = true;
                break;

            case "error02":
                top.location.href = '/Login/Logout/?lus=2';
                status = true;
                break;

            case "error03":
                top.location.href = '/Login/Logout/?lus=3';
                status = true;
                break;

            case "error04":
                top.location.href = '/Login/Logout/?lus=4';
                status = true;
                break;

            default:
                break;
        }
    }

    return status;
}

function MM_openBrWindow(theURL, winName, win_width, win_height) {
    var PosX = (screen.width - win_width) / 2;
    var PosY = (screen.height - win_height) / 2;

    features = "width=" + win_width + ",height=" + win_height + ",top=" + PosY + ",left=" + PosX;
    var newwin = window.open(theURL, winName, features);
}

//Beta預覽提示訊息
function ShowBetaMsg() {
    OpenDialog(BetaRes.Hint)
    return false;
}


//取得新的驗證碼
function GetNewVcode(vcodeId, vcodeImgId) {
    /// <summary>取得新的驗證碼</summary>
    /// <param name="vocdeId">string: 驗證碼資料識別碼</param>
    /// <param name="vcodeImgId">string: 驗證碼圖片ID</param>

    var DataObject = {};
    var url = "/NoneLogin/Vcode?key=" + vcodeId;
    var successfun = function (context) {
        $(vcodeImgId).attr('src', url + '&code=' + parseInt(1000 * Math.random()));
    }
    var errorfun = function () {
        $(vcodeImgId).attr('src', url + '&code=' + parseInt(1000 * Math.random()));
    }
    AjaxPostFunc(url, DataObject, successfun, errorfun);
}

function ScrollToProfileMenu() {
    if ($(".personalNav").length) {
        $("html,body").animate({ scrollTop: $(".personalNav").offset().top - 100 }, 500);
    }
}

function ScrollForPromoMenu() {
    if ($(".personalNav").length) {
        $("html,body").animate({ scrollTop: $(".personalNav").offset().top + (-100) }, 500);
    }
}

function SetNavigatorIsMobile() {
    var IsMobileValue, BrowserValue, OSValue;

    IsMobileValue = CheckMobilesClient();
    BrowserValue = CheckBrowserClient();
    OSValue = CheckOSClient();

    var DataObject = {
        IsMobile: IsMobileValue,
        Browser: BrowserValue,
        OS: OSValue,
        URL: location.protocol + '//' + location.hostname
    };
    var url = "/NoneLogin/SetNavigatorIsMobile";

    var successfun = function (context) {
        //var obj = JSON.parse(context);
    }
    var errorfun = function () {

    }
    AjaxPostFunc(url, DataObject, successfun, errorfun);
}

//获取get方式的请求参数值
function getUrlParam(name) {
    //构造一个含有目标参数的正则表达式对象  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数  
    var r = window.location.search.substr(1).match(reg);
    //返回参数值  
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}

//是否站台維護中
function CheckIsMaintenance() {
    var DataObject = {};
    var url = "/NoneLogin/CheckIsMaintenance";

    var successfun = function (context) {
        if (context.Result){
            window.location = "/NoneLogin/Maintenance/";
        }
    }
    var errorfun = function () {        
    }

    AjaxPostFunc(url, DataObject, successfun, errorfun);
}

//設定cookie
function setCookie(cookieName, cookieValue, exdays) {
    if (document.cookie.indexOf(cookieName) >= 0) {
        var expD = new Date();
        expD.setTime(expD.getTime() + (-1 * 24 * 60 * 60 * 1000));
        var uexpires = "expires=" + expD.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + "; " + uexpires;
    }
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + expires;
}

//取得cookie
function getCookie(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

//删除cookie
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

// 取得亂數_數字
function randomusefloor(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 取得亂數_英文(小寫)
function makerandomletter(max) {
    var text = "";
    var possible = "abcdefghijkmnpqrstuvwxyz";

    for (var i = 0; i < max; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}