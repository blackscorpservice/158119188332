/* 設定站台別(A=馬來,B=大陸,C=泰國) */
var settingSyscode = function () {
    var syscode = getParameterName('syscode');
    switch(syscode){
        case 'A':
            window.localStorage["syscode"] = 'my';
            break;
        case 'B':
            window.localStorage["syscode"] = 'cn';
            break;
        case 'C':
            window.localStorage["syscode"] = 'th';
            break;
        case 'D':
            window.localStorage["syscode"] = 'hl8';
            break;
        default:
            //如果已經設定過不再設定
            if(typeof(window.localStorage["syscode"]) == 'undefined'){
                window.localStorage["syscode"] = 'cn';
            }
    }

    $('body').addClass('syscode-' + window.localStorage["syscode"]);
}


// 時鐘
var localeTimeClock = function (){
    moment.locale();
    setInterval(function(){
        var time = moment().format('DD/MM/YYYY hh:mm:ss ([GMT]ZZ)');
        $('#time-text').text(time);
    },1000)
}


// 註冊漢堡按鈕,將其可收合展開
var toogleNavMenu = function(){
    $('#btn-hamburger').on('click',function(){
        $('#min-nav').toggle();
    })
}

// QR code
var openQRCode = function(){
    $('.js-launch-join-wechat').colorbox({
        href: "#join-wechat-wrap",
        width: 300,
        height: 300,
        transition: "elastic",
        inline: !0,
        escKey: !0,
        scrolling: !1,
        closeButton: !1,
        overlayClose: !0
    });
}



//設定網頁favicon
function changFavicon(url) {
    var link = document.querySelector("link[rel*='shortcut icon']");
    link.href = url;
}


//設定CSS
function setCss() {
    var lang = getParameterName("syscode");

    if (lang === 'A') {
        changFavicon('../common/img/favicon.ico');
    }else if (lang === 'B') {
        changFavicon('../common/img/favicon.ico');
    }else if (lang === 'C') {
        changFavicon('../common/img/favicon-th.ico');
    }else if (lang === 'D') {
        changFavicon('../common/img/favicon-hl8.png');
    } else{
        changFavicon('../common/img/favicon.ico');
    }
}


//9KING VIP 舊網址頁面轉至新的ezapp-mobile頁面
var checkRedirect = function () {
    var newLocation = 'https://www.9king.app/ezapp-mobile';
    if(document.domain === "www.9king.app") {
        document.location.href = newLocation;
    };
}


var appInit = function () {
    checkRedirect();
    settingSyscode();
    localeTimeClock();
    toogleNavMenu();
    openQRCode();
    setCss();
}

appInit();

// new Vue({
//     el: '#txt-join',
//     template:' <span>{{ body_class  ? "愛博" : "iBET"}}</span>',
//     data: {
//         body_class: true,
//     },
//     mounted(){
//         if(window.localStorage["syscode"]=='cn')
//             this.body_class=true;
//         else
//             this.body_class=false;
//     },
// })

// en-us 電腦版vip優惠連結
new Vue({
    el: '#link-vip',
    template:' <a v-if="bodyClass===\'cn\'" href="index.html?syscode=B"></a><a v-else-if="bodyClass===\'my\'" href="index.html?syscode=A">VIPcourtesy</a><a v-else="bodyClass===\'th\'" href="index.html?syscode=C">VIP courtesy</a>',
    computed: {
        bodyClass: function () {
            return window.localStorage["syscode"];
        }
    },
})

// zh-cn 電腦版vip優惠連結
new Vue({
    el: '#link-vip-cn',
    template:' <a v-if="bodyClass===\'cn\'" href="index.html?syscode=B">VIP优惠</a><a v-else-if="bodyClass===\'my\'" href="index.html?syscode=A">VIP优惠</a><a v-else="bodyClass===\'th\'" href="index.html?syscode=C">VIP优惠</a>',
    computed: {
        bodyClass: function () {
            return window.localStorage["syscode"];
        }
    },
})

// en-us 手機版vip優惠連結
new Vue({
    el: '#link-vip-mobile',
    template:' <a v-if="bodyClass===\'cn\'" href="index.html?syscode=B"></a><a v-else-if="bodyClass===\'my\'" href="index.html?syscode=A">VIP courtesy</a><a v-else="bodyClass===\'th\'" href="index.html?syscode=C">VIP courtesy</a>',
    computed: {
        bodyClass: function () {
            return window.localStorage["syscode"];
        }
    },
})

// zh-cn 手機版vip優惠連結
new Vue({
    el: '#link-vip-mobile-cn',
    template:' <a v-if="bodyClass===\'cn\'" href="index.html?syscode=B">VIP优惠</a><a v-else-if="bodyClass===\'my\'" href="index.html?syscode=A">VIP优惠</a><a v-else-if="bodyClass===\'hl8\'" href="index.html?syscode=D">VIP优惠</a><a v-else="bodyClass===\'th\'" href="index.html?syscode=C"></a>',
    computed: {
        bodyClass: function () {
            return window.localStorage["syscode"];
        }
    },
})


new Vue({
    el: '#txt-join',
    template:' <span v-if="bodyClass===\'cn\'">愛博</span><span v-else-if="bodyClass===\'my\'">iBET</span><span v-else-if="bodyClass===\'hl8\'">HL8</span><span v-else="bodyClass===\'th\'">TBet</span>',
    computed: {
        bodyClass: function () {
            return window.localStorage["syscode"];
        }
    },
})

new Vue({
    el: '#txt-join-mobile',
    template:' <span v-if="bodyClass===\'cn\'">愛博</span><span v-else-if="bodyClass===\'my\'">iBET</span><span v-else-if="bodyClass===\'hl8\'">HL8</span><span v-else="bodyClass===\'th\'">TBet</span>',
    computed: {
        bodyClass: function () {
            return window.localStorage["syscode"];
        }
    },
})


new Vue({
    el: '#txt-go',
    template:' <span v-if="bodyClass===\'cn\'">愛博</span><span v-else-if="bodyClass===\'my\'">iBET</span><span v-else="bodyClass===\'th\'">TBet</span>',
    computed: {
        bodyClass: function () {
            return window.localStorage["syscode"];
        }
    },
})

new Vue({
    el: '#txt-add-app',
    template:' <span v-if="bodyClass===\'cn\'">微信</span><span v-else-if="bodyClass===\'my\'">Wechat</span><span v-else="bodyClass===\'th\'">Line</span>',
    computed: {
        bodyClass: function () {
            return window.localStorage["syscode"];
        }
    },
})

new Vue({
    el: '#title-app',
    template:' <span v-if="bodyClass===\'cn\'">微信</span><span v-else-if="bodyClass===\'my\'">Wechat</span><span v-else="bodyClass===\'th\'">Line</span>',
    computed: {
        bodyClass: function () {
            return window.localStorage["syscode"];
        }
    },
})

new Vue({
    el: '#txt-copyright',
    template:' <p v-if="bodyClass===\'cn\'">© 2019年 爱博娱乐城保留所有权利。</p><p v-else-if="bodyClass===\'my\'">© 2019年iBET.uk.com保留所有权利</p><p v-else-if="bodyClass===\'hl8\'">© 2019 HL8 All rights reserved.</p><p v-else="bodyClass===\'th\'">ⓒ 2019 tBET.uk.com All rights reserved.</p>',
    computed: {
        bodyClass: function () {
            return window.localStorage["syscode"];
        }
    },
})






