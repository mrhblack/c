!function(){function t(t){k.set(t)}function e(t){if(100!=t.get(wn)&&b(It(t,nn))%1e4>=100*Ct(t,wn))throw"abort"}function n(t){if(et(It(t,sn)))throw"abort"}function i(){var t=J.location.protocol;if("http:"!=t&&"https:"!=t)throw"abort"}function a(e){try{Y.navigator.sendBeacon?t(42):Y.XMLHttpRequest&&"withCredentials"in new Y.XMLHttpRequest&&t(40)}catch(t){}e.set($e,T(e),!0),e.set(Jt,Ct(e,Jt)+1);var n=[];jt.map(function(t,i){i.F&&void 0!=(t=e.get(t))&&t!=i.defaultValue&&("boolean"==typeof t&&(t*=1),n.push(i.F+"="+L(""+t)))}),n.push("z="+xt()),e.set(Xt,n.join("&"),!0)}function r(t){var e=It(t,In)||pt()+"/collect",n=It(t,Yt);if(!n&&t.get(Wt)&&(n="beacon"),n){var i=It(t,Xt),a=t.get(Kt);a=a||A,"image"==n?wt(e,i,a):"xhr"==n&&yt(e,i,a)||"beacon"==n&&bt(e,i,a)||mt(e,i,a)}else mt(e,It(t,Xt),t.get(Kt));e=t.get(sn),n=(e=kt(e)).hitcount,e.hitcount=n?n+1:1,e=t.get(sn),delete kt(e).pending_experiments,t.set(Kt,A,!0)}function o(t){(Y.gaData=Y.gaData||{}).expId&&t.set(je,(Y.gaData=Y.gaData||{}).expId),(Y.gaData=Y.gaData||{}).expVar&&t.set(Ee,(Y.gaData=Y.gaData||{}).expVar);var e=t.get(sn);if(e=kt(e).pending_experiments){var n=[];for(i in e)e.hasOwnProperty(i)&&e[i]&&n.push(encodeURIComponent(i)+"."+encodeURIComponent(e[i]));var i=n.join("!")}else i=void 0;i&&t.set(Ie,i,!0)}function s(){if(Y.navigator&&"preview"==Y.navigator.loadPurpose)throw"abort"}function c(t){var e=Y.gaDevIds;j(e)&&0!=e.length&&t.set("&did",e.join(","),!0)}function u(t){if(!t.get(sn))throw"abort"}function l(e){var n=Ct(e,Ae);500<=n&&t(15);var i=It(e,Bt);if("transaction"!=i&&"item"!=i){i=Ct(e,De);var a=(new Date).getTime(),r=Ct(e,Le);if(0==r&&e.set(Le,a),0<(r=Math.round(2*(a-r)/1e3))&&(i=Math.min(i+r,20),e.set(Le,a)),0>=i)throw"abort";e.set(De,--i)}e.set(Ae,++n)}function f(e,n,i,a){n[e]=function(){try{return a&&t(a),i.apply(this,arguments)}catch(t){throw _t("exc",e,t&&t.name),t}}}function g(){var t,e;if((e=(e=Y.navigator)?e.plugins:null)&&e.length)for(var n=0;n<e.length&&!t;n++){var i=e[n];-1<i.name.indexOf("Shockwave Flash")&&(t=i.description)}if(!t)try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");t=a.GetVariable("$version")}catch(t){}if(!t)try{t="WIN 6,0,21,0",(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")).AllowScriptAccess="always",t=a.GetVariable("$version")}catch(t){}if(!t)try{t=(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}catch(t){}return t&&(a=t.match(/[\d]+/g))&&3<=a.length&&(t=a[0]+"."+a[1]+" r"+a[2]),t||void 0}function h(t,e,n){"none"==e&&(e="");var i=[],a=nt(t);t="__utma"==t?6:2;for(var r=0;r<a.length;r++){var o=(""+a[r]).split(".");o.length>=t&&i.push({hash:o[0],R:a[r],O:o})}if(0!=i.length)return 1==i.length?i[0]:d(e,i)||d(n,i)||d(null,i)||i[0]}function d(t,e){if(null==t)var n=t=1;else n=b(t),t=b(I(t,".")?t.substring(1):"."+t);for(var i=0;i<e.length;i++)if(e[i].hash==n||e[i].hash==t)return e[i]}function p(t,e){var n=new Date,i=Y.navigator,a=i.plugins||[];for(t=[t,i.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e],e=0;e<a.length;++e)t.push(a[e].description);return b(t.join("."))}function v(t,e){var n=new Date,i=Y.navigator,a=n.getHours()+Math.floor((n.getMinutes()+e)/60);return b([t,i.userAgent,i.language||"",n.getTimezoneOffset(),n.getYear(),n.getDate()+Math.floor(a/24),(24+a)%24,(60+n.getMinutes()+e)%60].join("."))}function m(t,e){if(e==J.location.hostname)return!1;for(var n=0;n<t.length;n++)if(t[n]instanceof RegExp){if(t[n].test(e))return!0}else if(0<=e.indexOf(t[n]))return!0;return!1}function w(t,e){return e!=p(t,0)&&e!=p(t,-1)&&e!=p(t,-2)&&e!=v(t,0)&&e!=v(t,-1)&&e!=v(t,-2)}function y(t){return 0<=t.indexOf(".")||0<=t.indexOf(":")}function b(t){var e,n=1;if(t)for(n=0,e=t.length-1;0<=e;e--){var i=t.charCodeAt(e);n=0!=(i=266338304&(n=(n<<6&268435455)+i+(i<<14)))?n^i>>21:n}return n}var _=function(t){this.w=t||[]};_.prototype.set=function(t){this.w[t]=!0},_.prototype.encode=function(){for(var t=[],e=0;e<this.w.length;e++)this.w[e]&&(t[Math.floor(e/6)]^=1<<e%6);for(e=0;e<t.length;e++)t[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e]||0);return t.join("")+"~"};var k=new _,O=function(t,e){var n=new _(x(t));n.set(e),t.set(Pe,n.w)},T=function(t){t=x(t),t=new _(t);for(var e=k.w.slice(),n=0;n<t.w.length;n++)e[n]=e[n]||t.w[n];return new _(e).encode()},x=function(t){return t=t.get(Pe),j(t)||(t=[]),t},S=function(t){return"function"==typeof t},j=function(t){return"[object Array]"==Object.prototype.toString.call(Object(t))},E=function(t){return void 0!=t&&-1<(t.constructor+"").indexOf("String")},I=function(t,e){return 0==t.indexOf(e)},C=function(t){return t?t.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""},R=function(){for(var t=Y.navigator.userAgent+(J.cookie?J.cookie:"")+(J.referrer?J.referrer:""),e=t.length,n=Y.history.length;0<n;)t+=n--^e++;return[Tt()^2147483647&b(t),Math.round((new Date).getTime()/1e3)].join(".")},N=function(t){var e=J.createElement("img");return e.width=1,e.height=1,e.src=t,e},A=function(){},L=function(e){return encodeURIComponent instanceof Function?encodeURIComponent(e):(t(28),e)},D=function(e,n,i,a){try{e.addEventListener?e.addEventListener(n,i,!!a):e.attachEvent&&e.attachEvent("on"+n,i)}catch(e){t(27)}},$=/^[\w\-:/.?=&%!]+$/,P=function(t,e,n,i){t&&(n?(i="",e&&$.test(e)&&(i=' id="'+e+'"'),$.test(t)&&J.write("<script"+i+' src="'+t+'"><\/script>')):(n=J.createElement("script"),n.type="text/javascript",n.async=!0,n.src=t,i&&(n.onload=i),e&&(n.id=e),(t=J.getElementsByTagName("script")[0]).parentNode.insertBefore(n,t)))},M=function(){return"https:"==J.location.protocol},U=function(t,e){return G(J.location[e?"href":"search"],t)},G=function(t,e){return(t=t.match("(?:&|#|\\?)"+L(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==t.length?t[1]:""},V=function(){var t=""+J.location.hostname;return 0==t.indexOf("www.")?t.substring(4):t},F=function(t,e){var n=t.indexOf(e);return!(5!=n&&6!=n||"/"!=(t=t.charAt(n+e.length))&&"?"!=t&&""!=t&&":"!=t)},H=function(t,e){var n=J.referrer;if(/^(https?|android-app):\/\//i.test(n)){if(t)return n;if(t="//"+J.location.hostname,!F(n,t))return e&&(e=t.replace(/\./g,"-")+".cdn.ampproject.org",F(n,e))?void 0:n}},q=function(t,e){if(1==e.length&&null!=e[0]&&"object"==typeof e[0])return e[0];for(var n={},i=Math.min(t.length+1,e.length),a=0;a<i;a++){if("object"==typeof e[a]){for(var r in e[a])e[a].hasOwnProperty(r)&&(n[r]=e[a][r]);break}a<t.length&&(n[t[a]]=e[a])}return n},z=function(){this.keys=[],this.values={},this.m={}};z.prototype.set=function(t,e,n){this.keys.push(t),n?this.m[":"+t]=e:this.values[":"+t]=e},z.prototype.get=function(t){return this.m.hasOwnProperty(":"+t)?this.m[":"+t]:this.values[":"+t]},z.prototype.map=function(t){for(var e=0;e<this.keys.length;e++){var n=this.keys[e],i=this.get(n);i&&t(n,i)}};var B,K,X,W,Y=window,J=document,Z=function(t,e){return setTimeout(t,e)},Q=window,tt=document,et=function(t){var e=Q._gaUserPrefs;if(e&&e.ioo&&e.ioo()||t&&!0===Q["ga-disable-"+t])return!0;try{var n=Q.external;if(n&&n._gaUserPrefs&&"oo"==n._gaUserPrefs)return!0}catch(t){}t=[],e=tt.cookie.split(";"),n=/^\s*AMP_TOKEN=\s*(.*?)\s*$/;for(var i=0;i<e.length;i++){var a=e[i].match(n);a&&t.push(a[1])}for(e=0;e<t.length;e++)if("$OPT_OUT"==decodeURIComponent(t[e]))return!0;return!1},nt=function(t){var e=[],n=J.cookie.split(";");t=new RegExp("^\\s*"+t+"=\\s*(.*?)\\s*$");for(var i=0;i<n.length;i++){var a=n[i].match(t);a&&e.push(a[1])}return e},it=function(t,e,n,i,a,r){if(!(a=!et(a)&&!(ot.test(J.location.hostname)||"/"==n&&rt.test(i))))return!1;if(e&&1200<e.length&&(e=e.substring(0,1200)),n=t+"="+e+"; path="+n+"; ",r&&(n+="expires="+new Date((new Date).getTime()+r).toGMTString()+"; "),i&&"none"!=i&&(n+="domain="+i+";"),i=J.cookie,J.cookie=n,!(i=i!=J.cookie))t:{for(t=nt(t),i=0;i<t.length;i++)if(e==t[i]){i=!0;break t}i=!1}return i},at=function(t){return encodeURIComponent?encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29"):t},rt=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ot=/(^|\.)doubleclick\.net$/i,st=/^https?:\/\/[^/]*cdn\.ampproject\.org\//,ct=[],ut=function(){Fi.D([A])},lt=function(e,n){var i=nt("AMP_TOKEN");return 1<i.length?(t(55),!1):"$OPT_OUT"==(i=decodeURIComponent(i[0]||""))||"$ERROR"==i||et(n)?(t(62),!1):st.test(J.referrer)||"$NOT_FOUND"!=i?void 0!==W?(t(56),Z(function(){e(W)},0),!0):B?(ct.push(e),!0):"$RETRIEVING"==i?(t(57),Z(function(){lt(e,n)},1e3),!0):(B=!0,i&&"$"!=i[0]||(ht("$RETRIEVING",3e4),setTimeout(gt,3e4),i=""),!!ft(i)&&(ct.push(e),!0)):(t(68),!1)},ft=function(e){if(!window.JSON)return t(58),!1;var n=Y.XMLHttpRequest;if(!n)return t(59),!1;var i=new n;return"withCredentials"in i?(i.open("POST","https://ampcid.google.com/v1/publisher:getClientId?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM",!0),i.withCredentials=!0,i.setRequestHeader("Content-Type","text/plain"),i.onload=function(){if(B=!1,4==i.readyState){try{200!=i.status&&(t(61),dt("","$ERROR",3e4));var e=JSON.parse(i.responseText);e.optOut?(t(63),dt("","$OPT_OUT",31536e6)):e.clientId?dt(e.clientId,e.securityToken,31536e6):(t(64),dt("","$NOT_FOUND",36e5))}catch(e){t(65),dt("","$ERROR",3e4)}i=null}},n={originScope:"AMP_ECID_GOOGLE"},e&&(n.securityToken=e),i.send(JSON.stringify(n)),K=Z(function(){t(66),dt("","$ERROR",3e4)},1e3),!0):(t(60),!1)},gt=function(){B=!1},ht=function(t,e){if(void 0===X){X="";for(var n=Wn(),i=0;i<n.length;i++){var a=n[i];if(it("AMP_TOKEN",encodeURIComponent(t),"/",a,"",e))return void(X=a)}}it("AMP_TOKEN",encodeURIComponent(t),"/",X,"",e)},dt=function(t,e,n){for(K&&clearTimeout(K),e&&ht(e,n),W=t,e=ct,ct=[],n=0;n<e.length;n++)e[n](t)},pt=function(){return(Ft||M()?"https:":"http:")+"//www.google-analytics.com"},vt=function(t){this.name="len",this.message=t+"-8192"},mt=function(t,e,n){if(n=n||A,2036>=e.length)wt(t,e,n);else{if(!(8192>=e.length))throw _t("len",e.length),new vt(e.length);bt(t,e,n)||yt(t,e,n)||wt(t,e,n)}},wt=function(t,e,n){var i=N(t+"?"+e);i.onload=i.onerror=function(){i.onload=null,i.onerror=null,n()}},yt=function(t,e,n){var i=Y.XMLHttpRequest;if(!i)return!1;var a=new i;return"withCredentials"in a&&(t=t.replace(/^http:/,"https:"),a.open("POST",t,!0),a.withCredentials=!0,a.setRequestHeader("Content-Type","text/plain"),a.onreadystatechange=function(){4==a.readyState&&(n(),a=null)},a.send(e),!0)},bt=function(t,e,n){return!!Y.navigator.sendBeacon&&(!!Y.navigator.sendBeacon(t,e)&&(n(),!0))},_t=function(t,e,n){1<=100*Math.random()||et("?")||(t=["t=error","_e="+t,"_v=j64","sr=1"],e&&t.push("_f="+e),n&&t.push("_m="+L(n.substring(0,100))),t.push("aip=1"),t.push("z="+Tt()),wt(pt()+"/collect",t.join("&"),A))},kt=function(t){var e=Y.gaData=Y.gaData||{};return e[t]=e[t]||{}},Ot=function(){this.M=[]};Ot.prototype.add=function(t){this.M.push(t)},Ot.prototype.D=function(t){try{for(var e=0;e<this.M.length;e++){var n=t.get(this.M[e]);n&&S(n)&&n.call(Y,t)}}catch(t){}(e=t.get(Kt))!=A&&S(e)&&(t.set(Kt,A,!0),setTimeout(e,10))};var Tt=function(){return Math.round(2147483647*Math.random())},xt=function(){try{var t=new Uint32Array(1);return Y.crypto.getRandomValues(t),2147483647&t[0]}catch(t){return Tt()}},St=function(){this.data=new z},jt=new z,Et=[];St.prototype.get=function(t){var e=At(t),n=this.data.get(t);return e&&void 0==n&&(n=S(e.defaultValue)?e.defaultValue():e.defaultValue),e&&e.Z?e.Z(this,t,n):n};var It=function(t,e){return t=t.get(e),void 0==t?"":""+t},Ct=function(t,e){return t=t.get(e),void 0==t||""===t?0:1*t};St.prototype.set=function(t,e,n){if(t)if("object"==typeof t)for(var i in t)t.hasOwnProperty(i)&&Rt(this,i,t[i],n);else Rt(this,t,e,n)};var Rt=function(t,e,n,i){if(void 0!=n)switch(e){case sn:Oi.test(n)}var a=At(e);a&&a.o?a.o(t,e,n,i):t.data.set(e,n,i)},Nt=function(t,e,n,i,a){this.name=t,this.F=e,this.Z=i,this.o=a,this.defaultValue=n},At=function(t){var e=jt.get(t);if(!e)for(var n=0;n<Et.length;n++){var i=Et[n],a=i[0].exec(t);if(a){e=i[1](a),jt.set(e.name,e);break}}return e},Lt=function(t){var e;return jt.map(function(n,i){i.F==t&&(e=i)}),e&&e.name},Dt=function(t,e,n,i,a){return t=new Nt(t,e,n,i,a),jt.set(t.name,t),t.name},$t=function(t,e){Et.push([new RegExp("^"+t+"$"),e])},Pt=function(t,e,n){return Dt(t,e,n,void 0,Mt)},Mt=function(){},Ut=E(window.GoogleAnalyticsObject)&&C(window.GoogleAnalyticsObject)||"ga",Gt=/^(?:utma\.)?\d+\.\d+$/,Vt=/^amp-[\w.-]{22,64}$/,Ft=!1,Ht=Pt("apiVersion","v"),qt=Pt("clientVersion","_v");Dt("anonymizeIp","aip");var zt=Dt("adSenseId","a"),Bt=Dt("hitType","t"),Kt=Dt("hitCallback"),Xt=Dt("hitPayload");Dt("nonInteraction","ni"),Dt("currencyCode","cu"),Dt("dataSource","ds");var Wt=Dt("useBeacon",void 0,!1),Yt=Dt("transport");Dt("sessionControl","sc",""),Dt("sessionGroup","sg"),Dt("queueTime","qt");var Jt=Dt("_s","_s");Dt("screenName","cd");var Zt=Dt("location","dl",""),Qt=Dt("referrer","dr"),te=Dt("page","dp","");Dt("hostname","dh");var ee=Dt("language","ul"),ne=Dt("encoding","de");Dt("title","dt",function(){return J.title||void 0}),$t("contentGroup([0-9]+)",function(t){return new Nt(t[0],"cg"+t[1])});var ie=Dt("screenColors","sd"),ae=Dt("screenResolution","sr"),re=Dt("viewportSize","vp"),oe=Dt("javaEnabled","je"),se=Dt("flashVersion","fl");Dt("campaignId","ci"),Dt("campaignName","cn"),Dt("campaignSource","cs"),Dt("campaignMedium","cm"),Dt("campaignKeyword","ck"),Dt("campaignContent","cc");var ce=Dt("eventCategory","ec"),ue=Dt("eventAction","ea"),le=Dt("eventLabel","el"),fe=Dt("eventValue","ev"),ge=Dt("socialNetwork","sn"),he=Dt("socialAction","sa"),de=Dt("socialTarget","st"),pe=Dt("l1","plt"),ve=Dt("l2","pdt"),me=Dt("l3","dns"),we=Dt("l4","rrt"),ye=Dt("l5","srt"),be=Dt("l6","tcp"),_e=Dt("l7","dit"),ke=Dt("l8","clt"),Oe=Dt("timingCategory","utc"),Te=Dt("timingVar","utv"),xe=Dt("timingLabel","utl"),Se=Dt("timingValue","utt");Dt("appName","an"),Dt("appVersion","av",""),Dt("appId","aid",""),Dt("appInstallerId","aiid",""),Dt("exDescription","exd"),Dt("exFatal","exf");var je=Dt("expId","xid"),Ee=Dt("expVar","xvar"),Ie=Dt("exp","exp"),Ce=Dt("_utma","_utma"),Re=Dt("_utmz","_utmz"),Ne=Dt("_utmht","_utmht"),Ae=Dt("_hc",void 0,0),Le=Dt("_ti",void 0,0),De=Dt("_to",void 0,20);$t("dimension([0-9]+)",function(t){return new Nt(t[0],"cd"+t[1])}),$t("metric([0-9]+)",function(t){return new Nt(t[0],"cm"+t[1])}),Dt("linkerParam",void 0,void 0,function(e){var n=e.get(nn),i=e.get(_n)||"";if(n="_ga=2."+L(v(i+n,0)+"."+i+"-"+n),(i=e.get(Tn))&&e.get(En)){var a=Ct(e,xn);1e3*a+Ct(e,Sn)<=(new Date).getTime()?(t(76),e=""):(t(44),e="&_gac=1."+L([v(i,0),a,i].join(".")))}else e="";return n+e},Mt);var $e=Dt("usage","_u"),Pe=Dt("_um");Dt("forceSSL",void 0,void 0,function(){return Ft},function(e,n,i){t(34),Ft=!!i});var Me=Dt("_j1","jid"),Ue=Dt("_j2","gjid");$t("\\&(.*)",function(t){var e=new Nt(t[0],t[1]),n=Lt(t[0].substring(1));return n&&(e.Z=function(t){return t.get(n)},e.o=function(t,e,i,a){t.set(n,i,a)},e.F=void 0),e});var Ge=Pt("_oot"),Ve=Dt("previewTask"),Fe=Dt("checkProtocolTask"),He=Dt("validationTask"),qe=Dt("checkStorageTask"),ze=Dt("historyImportTask"),Be=Dt("samplerTask"),Ke=Dt("_rlt"),Xe=Dt("buildHitTask"),We=Dt("sendHitTask"),Ye=Dt("ceTask"),Je=Dt("devIdTask"),Ze=Dt("timingTask"),Qe=Dt("displayFeaturesTask"),tn=Dt("customTask"),en=Pt("name"),nn=Pt("clientId","cid"),an=Pt("clientIdTime"),rn=Pt("storedClientId"),on=Dt("userId","uid"),sn=Pt("trackingId","tid"),cn=Pt("cookieName",void 0,"_ga"),un=Pt("cookieDomain"),ln=Pt("cookiePath",void 0,"/"),fn=Pt("cookieExpires",void 0,63072e3),gn=Pt("cookieUpdate",void 0,!0),hn=Pt("legacyCookieDomain"),dn=Pt("legacyHistoryImport",void 0,!0),pn=Pt("storage",void 0,"cookie"),vn=Pt("allowLinker",void 0,!1),mn=Pt("allowAnchor",void 0,!0),wn=Pt("sampleRate","sf",100),yn=Pt("siteSpeedSampleRate",void 0,1),bn=Pt("alwaysSendReferrer",void 0,!1),_n=Pt("_gid","_gid"),kn=Pt("_gcn"),On=Pt("useAmpClientId"),Tn=Pt("_gclid"),xn=Pt("_gt"),Sn=Pt("_ge",void 0,7776e6),jn=Pt("_gclsrc"),En=Pt("storeGac",void 0,!0),In=Dt("transportUrl"),Cn=Dt("_r","_r"),Rn=function(t,e){this.V=1e4,this.fa=t,this.$=!1,this.oa=e,this.ea=1},Nn=function(t,e){var n;if(t.fa&&t.$)return 0;if(t.$=!0,e){if(t.oa&&Ct(e,t.oa))return Ct(e,t.oa);if(0==e.get(yn))return 0}return 0==t.V?0:(void 0===n&&(n=xt()),0==n%t.V?Math.floor(n/t.V)%t.ea+1:0)},An=function(t){var e=Math.min(Ct(t,yn),100);return!(b(It(t,nn))%100>=e)},Ln=function(t){var e={};if(Dn(e)||$n(e)){var n=e[pe];void 0==n||1/0==n||isNaN(n)||(0<n?(Pn(e,me),Pn(e,be),Pn(e,ye),Pn(e,ve),Pn(e,we),Pn(e,_e),Pn(e,ke),Z(function(){t(e)},10)):D(Y,"load",function(){Ln(t)},!1))}},Dn=function(t){var e=Y.performance||Y.webkitPerformance;if(!(e=e&&e.timing))return!1;var n=e.navigationStart;return 0!=n&&(t[pe]=e.loadEventStart-n,t[me]=e.domainLookupEnd-e.domainLookupStart,t[be]=e.connectEnd-e.connectStart,t[ye]=e.responseStart-e.requestStart,t[ve]=e.responseEnd-e.responseStart,t[we]=e.fetchStart-n,t[_e]=e.domInteractive-n,t[ke]=e.domContentLoadedEventStart-n,!0)},$n=function(t){if(Y.top!=Y)return!1;var e=Y.external,n=e&&e.onloadT;return e&&!e.isValidLoadTime&&(n=void 0),2147483648<n&&(n=void 0),0<n&&e.setPageReadyTime(),void 0!=n&&(t[pe]=n,!0)},Pn=function(t,e){var n=t[e];(isNaN(n)||1/0==n||0>n)&&(t[e]=void 0)},Mn=function(t){return function(e){if("pageview"==e.get(Bt)&&!t.I){t.I=!0;var n=An(e),i=0<G(e.get(Zt),"gclid").length;(n||i)&&Ln(function(e){n&&t.send("timing",e),i&&t.send("adtiming",e)})}}},Un=!1,Gn=function(e){if("cookie"==It(e,pn)){if(e.get(gn)||It(e,rn)!=It(e,nn)){var n=1e3*Ct(e,fn);Vn(e,nn,cn,n)}if(Vn(e,_n,kn,864e5),e.get(En)){var i=e.get(Tn);if(i){var a=Math.min(Ct(e,Sn),1e3*Ct(e,fn));a=Math.min(a,1e3*Ct(e,xn)+a-(new Date).getTime()),e.data.set(Sn,a);var r=e.get(xn),o=e.get(jn);n=Yn(It(e,ln));var s=Xn(It(e,un));e=It(e,sn),o&&"aw.ds"!=o||(i=["1",r,at(i)].join("."),0<a&&it("_gac_"+at(e),i,n,s,e,a)),Zn({})}}else t(75)}},Vn=function(e,n,i,a){var r=qn(e,n);if(r){i=It(e,i);var o=Yn(It(e,ln)),s=Xn(It(e,un)),c=It(e,sn);if("auto"!=s)it(i,r,o,s,c,a)&&(Un=!0);else{t(32);for(var u=Wn(),l=0;l<u.length;l++)if(s=u[l],e.data.set(un,s),r=qn(e,n),it(i,r,o,s,c,a))return void(Un=!0);e.data.set(un,"auto")}}},Fn=function(t){if("cookie"==It(t,pn)&&!Un&&(Gn(t),!Un))throw"abort"},Hn=function(e){if(e.get(dn)){var n=It(e,un),i=It(e,hn)||V(),a=h("__utma",i,n);a&&(t(19),e.set(Ne,(new Date).getTime(),!0),e.set(Ce,a.R),(n=h("__utmz",i,n))&&a.hash==n.hash&&e.set(Re,n.R))}},qn=function(t,e){e=at(It(t,e));var n=Xn(It(t,un)).split(".").length;return 1<(t=Jn(It(t,ln)))&&(n+="-"+t),e?["GA1",n,e].join("."):""},zn=function(t,e){return Bn(e,It(t,un),It(t,ln))},Bn=function(e,n,i){if(!e||1>e.length)t(12);else{for(var a=[],r=0;r<e.length;r++){var o=e[r],s=o.split("."),c=s.shift();("GA1"==c||"1"==c)&&1<s.length?(1==(o=s.shift().split("-")).length&&(o[1]="1"),o[0]*=1,o[1]*=1,s={H:o,s:s.join(".")}):s=Vt.test(o)?{H:[0,0],s:o}:void 0,s&&a.push(s)}if(1==a.length)return t(13),a[0].s;if(0!=a.length)return t(14),1==(a=Kn(a,Xn(n).split(".").length,0)).length?a[0].s:(1<(a=Kn(a,Jn(i),1)).length&&t(41),a[0]&&a[0].s);t(12)}},Kn=function(t,e,n){for(var i,a=[],r=[],o=0;o<t.length;o++){var s=t[o];s.H[n]==e?a.push(s):void 0==i||s.H[n]<i?(r=[s],i=s.H[n]):s.H[n]==i&&r.push(s)}return 0<a.length?a:r},Xn=function(t){return 0==t.indexOf(".")?t.substr(1):t},Wn=function(){var t=[],e=V().split(".");if(4==e.length){var n=e[e.length-1];if(parseInt(n,10)==n)return["none"]}for(n=e.length-2;0<=n;n--)t.push(e.slice(n).join("."));return t.push("none"),t},Yn=function(t){return t?(1<t.length&&t.lastIndexOf("/")==t.length-1&&(t=t.substr(0,t.length-1)),0!=t.indexOf("/")&&(t="/"+t),t):"/"},Jn=function(t){return t=Yn(t),"/"==t?1:t.split("/").length},Zn=function(e){e.ta&&t(77),e.na&&t(74),e.pa&&t(73),e.ua&&t(69),e.sa&&t(78)},Qn=new RegExp(/^https?:\/\/([^\/:]+)/),ti=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,ei=/(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/,ni=function(e){t(48),this.target=e,this.T=!1};ni.prototype.ca=function(t,e){if(t.tagName){if("a"==t.tagName.toLowerCase())return void(t.href&&(t.href=ii(this,t.href,e)));if("form"==t.tagName.toLowerCase())return ai(this,t)}if("string"==typeof t)return ii(this,t,e)};var ii=function(t,e,n){var i=ti.exec(e);i&&3<=i.length&&(e=i[1]+(i[3]?i[2]+i[3]:"")),(i=ei.exec(e))&&3<=i.length&&(e=i[1]+(i[3]?i[2]+i[3]:"")),t=t.target.get("linkerParam");var a=e.indexOf("?");return i=e.indexOf("#"),n?e+=(-1==i?"#":"&")+t:(n=-1==a?"?":"&",e=-1==i?e+(n+t):e.substring(0,i)+n+t+e.substring(i)),e=e.replace(/&+_ga=/,"&_ga="),e=e.replace(/&+_gac=/,"&_gac=")},ai=function(t,e){if(e&&e.action)if("get"==e.method.toLowerCase()){t=t.target.get("linkerParam").split("&");for(var n=0;n<t.length;n++){var i=t[n].split("="),a=i[1];i=i[0];for(var r=e.childNodes||[],o=!1,s=0;s<r.length;s++)if(r[s].name==i){r[s].setAttribute("value",a),o=!0;break}o||((r=J.createElement("input")).setAttribute("type","hidden"),r.setAttribute("name",i),r.setAttribute("value",a),e.appendChild(r))}}else"post"==e.method.toLowerCase()&&(e.action=ii(t,e.action))};ni.prototype.S=function(e,n,i){function a(i){try{t:{var a=(i=i||Y.event).target||i.srcElement;for(i=100;a&&0<i;){if(a.href&&a.nodeName.match(/^a(?:rea)?$/i)){var o=a;break t}a=a.parentNode,i--}o={}}("http:"==o.protocol||"https:"==o.protocol)&&m(e,o.hostname||"")&&o.href&&(o.href=ii(r,o.href,n))}catch(e){t(26)}}var r=this;this.T||(this.T=!0,D(J,"mousedown",a,!1),D(J,"keyup",a,!1)),i&&D(J,"submit",function(t){if(t=t||Y.event,(t=t.target||t.srcElement)&&t.action){var n=t.action.match(Qn);n&&m(e,n[1])&&ai(r,t)}})};var ri,oi=/^(GTM|OPT)-[A-Z0-9]+$/,si=/;_gaexp=[^;]*/g,ci=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,ui=/^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,li=function(t){function e(t,e){e&&(n+="&"+t+"="+L(e))}var n="https://www.google-analytics.com/gtm/js?id="+L(t.id);return"dataLayer"!=t.B&&e("l",t.B),e("t",t.target),e("cid",t.clientId),e("cidt",t.ka),e("gac",t.la),e("aip",t.ia),t.sync&&e("m","sync"),e("cycle",t.G),t.qa&&e("gclid",t.qa),ui.test(J.referrer)&&e("cb",String(Tt())),n},fi=function(t,e,n){this.U=Me,this.aa=e,(e=n)||(e=(e=It(t,en))&&"t0"!=e?vi.test(e)?"_gat_"+at(It(t,sn)):"_gat_"+at(e):"_gat"),this.Y=e},gi=function(t,e){var n=e.get(Xe);e.set(Xe,function(e){hi(t,e,t.U),hi(t,e,Ue);var i=n(e);return di(t,e),i});var i=e.get(We);e.set(We,function(e){var n=i(e);return pi(t,e),n})},hi=function(t,e,n){e.get(n)||("1"==nt(t.Y)[0]?e.set(n,"",!0):e.set(n,""+Tt(),!0))},di=function(t,e){e.get(t.U)&&it(t.Y,"1",e.get(ln),e.get(un),e.get(sn),6e4)},pi=function(t,e){if(e.get(t.U)){var n=new z,i=function(t){At(t).F&&n.set(At(t).F,e.get(t))};i(Ht),i(qt),i(sn),i(nn),i(on),i(t.U),i(Ue),i(_n),n.set(At($e).F,T(e));var a=t.aa;n.map(function(t,e){a+=L(t)+"=",a+=L(""+e)+"&"}),a+="z="+Tt(),N(a),e.set(t.U,"",!0)}},vi=/^gtm\d+$/,mi=function(t,e){if(!(t=t.b).get("dcLoaded")){O(t,29);var n;(e=e||{})[cn]&&(n=at(e[cn])),e=new fi(t,"https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&",n),gi(e,t),t.set("dcLoaded",!0)}},wi=function(t){if(!t.get("dcLoaded")&&"cookie"==t.get(pn)){O(t,51);var e=new fi(t);hi(e,t,e.U),hi(e,t,Ue),di(e,t),t.get(e.U)&&(t.set(Cn,1,!0),t.set(In,pt()+"/r/collect",!0))}},yi=function(){var t=Y.gaGlobal=Y.gaGlobal||{};return t.hid=t.hid||Tt()},bi=function(t,e,n){if(!ri){var i=J.location.hash,a=Y.name,r=/^#?gaso=([^&]*)/;(a=(i=(i=i&&i.match(r)||a&&a.match(r))?i[1]:nt("GASO")[0]||"")&&i.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))&&(it("GASO",""+i,n,e,t,0),window._udo||(window._udo=e),window._utcp||(window._utcp=n),t=a[1],P("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(t?"prefix="+t+"&":"")+Tt(),"_gasojs")),ri=!0}},_i=function(t){return t?(1*t).toFixed(3):"0"},ki=function(e){var n=Y.performance;if(n&&n.getEntriesByName){t(35);var i="https://www.google-analytics.com/analytics.js?wpid="+e;P(i,void 0,void 0,function(){try{var a=1,r=n.getEntriesByName("https://www.google-analytics.com/analytics.js");r&&0!=r.length||(r=n.getEntriesByName("http://www.google-analytics.com/analytics.js"),a=0);var o=n.getEntriesByName(i);if(r&&1==r.length&&o&&1==o.length){t(37);var s=r[0],c=o[0],u={tid:e,ad:_i(s.duration),bd:_i(c.duration),ar:_i(s.responseEnd-s.requestStart),br:_i(c.responseEnd-c.requestStart),an:_i(s.domainLookupEnd-s.domainLookupStart),bn:_i(c.domainLookupEnd-c.domainLookupStart),ac:_i(s.connectEnd-s.connectStart),bc:_i(c.connectEnd-c.connectStart),as:a};(a=[]).push("_v=j64"),a.push("id=10");for(var l in u)u.hasOwnProperty(l)&&a.push(l+"="+L(u[l]));a.push("z="+Tt()),wt("https://www.google-analytics.com/u/d",a.join("&"),A)}}catch(t){}})}},Oi=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,Ti=function(t){function f(t,e){h.b.data.set(t,e)}function g(t,e){f(t,e),h.filters.add(t)}var h=this;this.b=new St,this.filters=new Ot,f(en,t[en]),f(sn,C(t[sn])),f(cn,t[cn]),f(un,t[un]||V()),f(ln,t[ln]),f(fn,t[fn]),f(gn,t[gn]),f(hn,t[hn]),f(dn,t[dn]),f(vn,t[vn]),f(mn,t[mn]),f(wn,t[wn]),f(yn,t[yn]),f(bn,t[bn]),f(pn,t[pn]),f(on,t[on]),f(an,t[an]),f(On,t[On]),f(En,t[En]),f(Ht,1),f(qt,"j64"),g(Ge,n),g(tn,A),g(Ve,s),g(Fe,i),g(He,u),g(qe,Fn),g(ze,Hn),g(Be,e),g(Ke,l),g(Ye,o),g(Je,c),g(Qe,wi),g(Xe,a),g(We,r),g(Ze,Mn(this)),Si(this.b),xi(this.b,t[nn]),this.b.set(zt,yi()),bi(this.b.get(sn),this.b.get(un),this.b.get(ln)),this.ra=new Rn(!0,"gaexp10")},xi=function(e,n){var i=It(e,cn);if(e.data.set(kn,"_ga"==i?"_gid":i+"_gid"),"cookie"==It(e,pn)){if(Un=!1,i=nt(It(e,cn)),!(i=zn(e,i))){i=It(e,un);var a=It(e,hn)||V();void 0!=(i=h("__utma",a,i))?(t(10),i=i.O[1]+"."+i.O[2]):i=void 0}if(i&&(Un=!0),a=i&&!e.get(gn))if(2!=(a=i.split(".")).length)a=!1;else if(a=Number(a[1])){var r=Ct(e,fn);a=a+r<(new Date).getTime()/1e3}else a=!1;if(a&&(i=void 0),i&&(e.data.set(rn,i),e.data.set(nn,i),i=nt(It(e,kn)),(i=zn(e,i))&&e.data.set(_n,i)),e.get(En)&&(i=e.get(Tn),a=e.get(jn),!i||a&&"aw.ds"!=a)){i={},a=[],r=J.cookie.split(";");for(var o=/^\s*_gac_(UA-\d+-\d+)=\s*(.+)\s*$/,s=0;s<r.length;s++){var c=r[s].match(o);c&&3==c.length&&a.push({ja:c[1],value:c[2]})}if(r={},a&&0!=a.length){for(o=0;o<a.length;o++)"1"!=(s=a[o].value.split("."))[0]||3!=s.length?i&&(i.na=!0):s[1]&&(r[a[o].ja]?i&&(i.pa=!0):r[a[o].ja]=[],r[a[o].ja].push({timestamp:s[1],qa:s[2]}));Object.keys&&1<Object.keys(r).length&&i&&(i.sa=!0)}a=r[It(e,sn)],Zn(i),a&&0!=a.length&&(i=a[0],e.data.set(xn,i.timestamp),e.data.set(Tn,i.qa))}}if(e.get(gn))t:if(a=U("_ga",e.get(mn)))if(e.get(vn))if(-1==(i=a.indexOf(".")))t(22);else{if(r=a.substring(0,i),o=a.substring(i+1),i=o.indexOf("."),a=o.substring(0,i),o=o.substring(i+1),"1"==r){if(i=o,w(i,a)){t(23);break t}}else{if("2"!=r){t(22);break t}if(i=o.indexOf("-"),r="",0<i?(r=o.substring(0,i),i=o.substring(i+1)):i=o.substring(1),w(r+i,a)){t(53);break t}r&&(t(2),e.data.set(_n,r))}t(11),e.data.set(nn,i),(i=U("_gac",e.get(mn)))&&(i=i.split("."),"1"!=i[0]||4!=i.length?t(72):w(i[3],i[1])?t(71):(e.data.set(Tn,i[3]),e.data.set(xn,i[2]),t(70)))}else t(21);n&&(t(9),e.data.set(nn,L(n))),e.get(nn)||((n=(n=Y.gaGlobal&&Y.gaGlobal.vid)&&-1!=n.search(Gt)?n:void 0)?(t(17),e.data.set(nn,n)):(t(8),e.data.set(nn,R()))),e.get(_n)||(t(3),e.data.set(_n,R())),Gn(e)},Si=function(e){var n=Y.navigator,i=Y.screen,a=J.location;if(e.set(Qt,H(e.get(bn),e.get(On))),a){var r=a.pathname||"";"/"!=r.charAt(0)&&(t(31),r="/"+r),e.set(Zt,a.protocol+"//"+a.hostname+r+a.search)}i&&e.set(ae,i.width+"x"+i.height),i&&e.set(ie,i.colorDepth+"-bit"),i=J.documentElement;var o=(r=J.body)&&r.clientWidth&&r.clientHeight,s=[];if(i&&i.clientWidth&&i.clientHeight&&("CSS1Compat"===J.compatMode||!o)?s=[i.clientWidth,i.clientHeight]:o&&(s=[r.clientWidth,r.clientHeight]),i=0>=s[0]||0>=s[1]?"":s.join("x"),e.set(re,i),e.set(se,g()),e.set(ne,J.characterSet||J.charset),e.set(oe,n&&"function"==typeof n.javaEnabled&&n.javaEnabled()||!1),e.set(ee,(n&&(n.language||n.browserLanguage)||"").toLowerCase()),e.data.set(Tn,U("gclid",!0)),e.data.set(jn,U("gclsrc",!0)),e.data.set(xn,Math.round((new Date).getTime()/1e3)),a&&e.get(mn)&&(n=J.location.hash)){for(n=n.split(/[?&#]+/),a=[],i=0;i<n.length;++i)(I(n[i],"utm_id")||I(n[i],"utm_campaign")||I(n[i],"utm_source")||I(n[i],"utm_medium")||I(n[i],"utm_term")||I(n[i],"utm_content")||I(n[i],"gclid")||I(n[i],"dclid")||I(n[i],"gclsrc"))&&a.push(n[i]);0<a.length&&(n="#"+a.join("&"),e.set(Zt,e.get(Zt)+n))}};Ti.prototype.get=function(t){return this.b.get(t)},Ti.prototype.set=function(t,e){this.b.set(t,e)};var ji={pageview:[te],event:[ce,ue,le,fe],social:[ge,he,de],timing:[Oe,Te,Se,xe]};Ti.prototype.send=function(t){if(!(1>arguments.length)){if("string"==typeof arguments[0])var e=arguments[0],n=[].slice.call(arguments,1);else e=arguments[0]&&arguments[0][Bt],n=arguments;e&&(n=q(ji[e]||[],n),n[Bt]=e,this.b.set(n,void 0,!0),this.filters.D(this.b),this.b.data.m={},Nn(this.ra,this.b)&&ki(this.b.get(sn)))}},Ti.prototype.ma=function(t,e){var n=this;$i(t,n,e)||(Mi(t,function(){$i(t,n,e)}),Pi(String(n.get(en)),t,void 0,e,!0))};var Ei,Ii,Ci,Ri,Ni=function(t){return"prerender"!=J.visibilityState&&(t(),!0)},Ai=function(e){if(!Ni(e)){t(16);var n=!1,i=function(){if(!n&&Ni(e)){n=!0;var t=i,a=J;a.removeEventListener?a.removeEventListener("visibilitychange",t,!1):a.detachEvent&&a.detachEvent("onvisibilitychange",t)}};D(J,"visibilitychange",i)}},Li=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,Di=function(t){if(S(t[0]))this.u=t[0];else{var e=Li.exec(t[0]);if(null!=e&&4==e.length&&(this.c=e[1]||"t0",this.K=e[2]||"",this.C=e[3],this.a=[].slice.call(t,1),this.K||(this.A="create"==this.C,this.i="require"==this.C,this.g="provide"==this.C,this.ba="remove"==this.C),this.i&&(3<=this.a.length?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(E(this.a[1])?this.X=this.a[1]:this.W=this.a[1]))),e=t[1],t=t[2],!this.C)throw"abort";if(this.i&&(!E(e)||""==e))throw"abort";if(this.g&&(!E(e)||""==e||!S(t)))throw"abort";if(y(this.c)||y(this.K))throw"abort";if(this.g&&"t0"!=this.c)throw"abort"}};Ei=new z,Ci=new z,Ri=new z,Ii={ec:45,ecommerce:46,linkid:47};var $i=function(t,e,n){e==Hi||e.get(en);var i=Ei.get(t);return!!S(i)&&(e.plugins_=e.plugins_||new z,!!e.plugins_.get(t)||(e.plugins_.set(t,new i(e,n||{})),!0))},Pi=function(e,n,i,a,r){if(!S(Ei.get(n))&&!Ci.get(n)){if(Ii.hasOwnProperty(n)&&t(Ii[n]),oi.test(n)){if(t(52),!(e=Hi.j(e)))return!0;a={id:n,B:(i=a||{}).dataLayer||"dataLayer",ia:!!e.get("anonymizeIp"),sync:r,G:!1},e.get("&gtm")==n&&(a.G=!0);var o=String(e.get("name"));"t0"!=o&&(a.target=o),et(String(e.get("trackingId")))||(a.clientId=String(e.get(nn)),a.ka=Number(e.get(an)),i=i.palindrome?ci:si,i=(i=J.cookie.replace(/^|(; +)/g,";").match(i))?i.sort().join("").substring(1):void 0,a.la=i,a.qa=G(e.b.get(Zt)||"","gclid")),e=a.B,i=(new Date).getTime(),Y[e]=Y[e]||[],i={"gtm.start":i},r||(i.event="gtm.js"),Y[e].push(i),i=li(a)}!i&&Ii.hasOwnProperty(n)?(t(39),i=n+".js"):t(43),i&&(i&&0<=i.indexOf("/")||(i=(Ft||M()?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+i),a=Vi(i),e=a.protocol,i=J.location.protocol,("https:"==e||e==i||("http:"!=e?0:"http:"==i))&&Gi(a)&&(P(a.url,void 0,r),Ci.set(n,!0)))}},Mi=function(t,e){var n=Ri.get(t)||[];n.push(e),Ri.set(t,n)},Ui=function(t,e){Ei.set(t,e),e=Ri.get(t)||[];for(var n=0;n<e.length;n++)e[n]();Ri.set(t,[])},Gi=function(t){var e=Vi(J.location.href);return!!I(t.url,"https://www.google-analytics.com/gtm/js?id=")||!(t.query||0<=t.url.indexOf("?")||0<=t.path.indexOf("://"))&&(t.host==e.host&&t.port==e.port||(e="http:"==t.protocol?80:443,!("www.google-analytics.com"!=t.host||(t.port||e)!=e||!I(t.path,"/plugins/"))))},Vi=function(t){function e(t){var e=(t.hostname||"").split(":")[0].toLowerCase(),n=(t.protocol||"").toLowerCase();return n=1*t.port||("http:"==n?80:"https:"==n?443:""),t=t.pathname||"",I(t,"/")||(t="/"+t),[e,""+n,t]}var n=J.createElement("a");n.href=J.location.href;var i=(n.protocol||"").toLowerCase(),a=e(n),r=n.search||"",o=i+"//"+a[0]+(a[1]?":"+a[1]:"");return I(t,"//")?t=i+t:I(t,"/")?t=o+t:!t||I(t,"?")?t=o+a[2]+(t||r):0>t.split("/")[0].indexOf(":")&&(t=o+a[2].substring(0,a[2].lastIndexOf("/"))+"/"+t),n.href=t,i=e(n),{protocol:(n.protocol||"").toLowerCase(),host:i[0],port:i[1],path:i[2],query:n.search||"",url:t||""}},Fi={ga:function(){Fi.f=[]}};Fi.ga(),Fi.D=function(t){var e=Fi.J.apply(Fi,arguments);for(e=Fi.f.concat(e),Fi.f=[];0<e.length&&!Fi.v(e[0])&&(e.shift(),!(0<Fi.f.length)););Fi.f=Fi.f.concat(e)},Fi.J=function(t){for(var e=[],n=0;n<arguments.length;n++)try{var i=new Di(arguments[n]);i.g?Ui(i.a[0],i.a[1]):(i.i&&(i.ha=Pi(i.c,i.a[0],i.X,i.W)),e.push(i))}catch(t){}return e},Fi.v=function(t){try{if(t.u)t.u.call(Y,Hi.j("t0"));else{var e=t.c==Ut?Hi:Hi.j(t.c);if(t.A){if("t0"==t.c&&null===(e=Hi.create.apply(Hi,t.a)))return!0}else if(t.ba)Hi.remove(t.c);else if(e)if(t.i){if(t.ha&&(t.ha=Pi(t.c,t.a[0],t.X,t.W)),!$i(t.a[0],e,t.W))return!0}else if(t.K){var n=t.C,i=t.a,a=e.plugins_.get(t.K);a[n].apply(a,i)}else e[t.C].apply(e,t.a)}}catch(t){}};var Hi=function(e){t(1),Fi.D.apply(Fi,[arguments])};Hi.h={},Hi.P=[],Hi.L=0,Hi.answer=42;var qi=[sn,un,en];Hi.create=function(e){var n=q(qi,[].slice.call(arguments));n[en]||(n[en]="t0");var i=""+n[en];if(Hi.h[i])return Hi.h[i];t:{if(n[On]){if(t(67),n[pn]&&"cookie"!=n[pn]){var a=!1;break t}if(void 0!==W)n[nn]||(n[nn]=W);else{e:{a=String(n[un]||V());var r=String(n[ln]||"/"),o=nt(String(n[cn]||"_ga"));if(!(a=Bn(o,a,r))||Gt.test(a))a=!0;else if(0==(a=nt("AMP_TOKEN")).length)a=!0;else{if(1==a.length&&("$RETRIEVING"==(a=decodeURIComponent(a[0]))||"$OPT_OUT"==a||"$ERROR"==a||"$NOT_FOUND"==a)){a=!0;break e}a=!1}}if(a&&lt(ut,String(n[sn]))){a=!0;break t}}}a=!1}return a?null:(n=new Ti(n),Hi.h[i]=n,Hi.P.push(n),n)},Hi.remove=function(t){for(var e=0;e<Hi.P.length;e++)if(Hi.P[e].get(en)==t){Hi.P.splice(e,1),Hi.h[t]=null;break}},Hi.j=function(t){return Hi.h[t]},Hi.getAll=function(){return Hi.P.slice(0)},Hi.N=function(){"ga"!=Ut&&t(49);var e=Y[Ut];if(!e||42!=e.answer){Hi.L=e&&e.l,Hi.loaded=!0;var n=Y[Ut]=Hi;if(f("create",n,n.create),f("remove",n,n.remove),f("getByName",n,n.j,5),f("getAll",n,n.getAll,6),n=Ti.prototype,f("get",n,n.get,7),f("set",n,n.set,4),f("send",n,n.send),f("requireSync",n,n.ma),n=St.prototype,f("get",n,n.get),f("set",n,n.set),!M()&&!Ft){t:{n=J.getElementsByTagName("script");for(var i=0;i<n.length&&100>i;i++){var a=n[i].src;if(a&&0==a.indexOf("https://www.google-analytics.com/analytics")){t(33),n=!0;break t}}n=!1}n&&(Ft=!0)}M()||Ft||!Nn(new Rn)||(t(36),Ft=!0),(Y.gaplugins=Y.gaplugins||{}).Linker=ni,n=ni.prototype,Ui("linker",ni),f("decorate",n,n.ca,20),f("autoLink",n,n.S,25),Ui("displayfeatures",mi),Ui("adfeatures",mi),e=e&&e.q,j(e)?Fi.D.apply(Hi,e):t(50)}},Hi.da=function(){for(var t=Hi.getAll(),e=0;e<t.length;e++)t[e].get(en)};var zi=Hi.N,Bi=Y[Ut];Bi&&Bi.r?zi():Ai(zi),Ai(function(){Fi.D(["provide","render",A])})}(window);
