export const DEMO_PAGE = `
<!DOCTYPE html><html lang="en"><!--[if lt IE 7]><html class="no-js ie6 oldie" lang="en"></html><![endif]--><!--[if IE 7]><html class="no-js ie7 oldie" lang="en"></html><![endif]--><!--[if IE 8]><html class="no-js ie8 oldie" lang="en"></html><![endif]--><!--[if gte IE 8]><html class="no-js" lang="en"></html><![endif]--><head><title>Abase | Definition of Abase by Oxford Dictionary on Lexico.com also meaning of Abase</title>
<meta name="description" content="What is the definition of abase? What is the meaning of abase? How do you use abase in a sentence? What are synonyms for abase?">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Abase | Definition of Abase by Oxford Dictionary on Lexico.com also meaning of Abase">
<meta name="twitter:description" content="What is the definition of abase? What is the meaning of abase? How do you use abase in a sentence? What are synonyms for abase?">
<meta name="twitter:image" content="https://www.lexico.com/lexico-logo.png">
<meta property="og:title" content="Abase | Definition of Abase by Oxford Dictionary on Lexico.com also meaning of Abase">
<meta property="og:description" content="What is the definition of abase? What is the meaning of abase? How do you use abase in a sentence? What are synonyms for abase?">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.lexico.com/definition/abase">
<meta property="og:site_name" content="Lexico Dictionaries | English">
<meta property="og:image" content="https://www.lexico.com/lexico-logo.png"><meta charset="utf-8" /><meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" /><meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
<script>window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"804d4e6e59","applicationID":"282108191","transactionName":"cl5ZQUsLXVpXRkkPWF9eW1xXA0RXXmsRDUVVQhhGUQtG","queueTime":1,"applicationTime":107,"agent":""}</script>
<script>(window.NREUM||(NREUM={})).loader_config={licenseKey:"804d4e6e59",applicationID:"282108191"};window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var i=n[t]={exports:{}};e[t][0].call(i.exports,function(n){var i=e[t][1][n];return r(i||n)},i,i.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<t.length;i++)r(t[i]);return r}({1:[function(e,n,t){function r(){}function i(e,n,t){return function(){return o(e,[u.now()].concat(f(arguments)),n?null:this,t),n?void 0:this}}var o=e("handle"),a=e(4),f=e(5),c=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",d=l+"ixn-";a(p,function(e,n){s[n]=i(l+n,!0,"api")}),s.addPageAction=i(l+"addPageAction",!0),s.setCurrentRouteName=i(l+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,i="function"==typeof n;return o(d+"tracer",[u.now(),e,t],r),function(){if(c.emit((i?"":"no-")+"fn-start",[u.now(),r,i],t),i)try{return n.apply(this,arguments)}catch(e){throw c.emit("fn-err",[arguments,this,e],t),e}finally{c.emit("fn-end",[u.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=i(d+n)}),newrelic.noticeError=function(e,n){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,n])}},{}],2:[function(e,n,t){function r(e,n){var t=e.getEntries();t.forEach(function(e){"first-paint"===e.name?c("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&c("timing",["fcp",Math.floor(e.startTime)])})}function i(e,n){var t=e.getEntries();t.length>0&&c("lcp",[t[t.length-1]])}function o(e){if(e instanceof s&&!l){var n,t=Math.round(e.timeStamp);n=t>1e12?Date.now()-t:u.now()-t,l=!0,c("timing",["fi",t,{type:e.type,fid:n}])}}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var a,f,c=e("handle"),u=e("loader"),s=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){a=new PerformanceObserver(r),f=new PerformanceObserver(i);try{a.observe({entryTypes:["paint"]}),f.observe({entryTypes:["largest-contentful-paint"]})}catch(p){}}if("addEventListener"in document){var l=!1,d=["click","keydown","mousedown","pointerdown","touchstart"];d.forEach(function(e){document.addEventListener(e,o,!1)})}}},{}],3:[function(e,n,t){function r(e,n){if(!i)return!1;if(e!==i)return!1;if(!n)return!0;if(!o)return!1;for(var t=o.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var i=null,o=null,a=/Version\\/(\\S+)\\s+Safari/;if(navigator.userAgent){var f=navigator.userAgent,c=f.match(a);c&&f.indexOf("Chrome")===-1&&f.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}n.exports={agent:i,version:o,match:r}},{}],4:[function(e,n,t){function r(e,n){var t=[],r="",o=0;for(r in e)i.call(e,r)&&(t[o]=n(r,e[r]),o+=1);return t}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],5:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,i=t-n||0,o=Array(i<0?0:i);++r<i;)o[r]=e[n+r];return o}n.exports=r},{}],6:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function i(e){function n(e){return e&&e instanceof r?e:e?c(e,f,o):o()}function t(t,r,i,o){if(!l.aborted||o){e&&e(t,r,i);for(var a=n(i),f=v(t),c=f.length,u=0;u<c;u++)f[u].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function d(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return p[e]=p[e]||i(t)}function w(e,n){u(e,function(e,t){n=n||"feature",y[t]=n,n in s||(s[n]=[])})}var h={},y={},b={on:d,addEventListener:d,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:w,abort:a,aborted:!1};return b}function o(){return new r}function a(){(s.api||s.feature)&&(l.aborted=!0,s=l.backlog={})}var f="nr@context",c=e("gos"),u=e(4),s={},p={},l=n.exports=i();l.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(i.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[n]=r,r}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){i.buffer([e],r),i.emit(e,n,t)}var i=e("ee").get("handle");n.exports=r,r.ee=i},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!x++){var e=E.info=NREUM.info,n=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();u(y,function(n,t){e[n]||(e[n]=t)}),c("mark",["onload",a()+E.offset],null,"api");var t=d.createElement("script");t.src="https://"+e.agent,n.parentNode.insertBefore(t,n)}}function i(){"complete"===d.readyState&&o()}function o(){c("mark",["domContent",a()+E.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(f=Math.max((new Date).getTime(),f))-E.offset}var f=(new Date).getTime(),c=e("handle"),u=e(4),s=e("ee"),p=e(3),l=window,d=l.document,m="addEventListener",v="attachEvent",g=l.XMLHttpRequest,w=g&&g.prototype;NREUM.o={ST:setTimeout,SI:l.setImmediate,CT:clearTimeout,XHR:g,REQ:l.Request,EV:l.Event,PR:l.Promise,MO:l.MutationObserver};var h=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1169.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),E=n.exports={offset:f,now:a,origin:h,features:{},xhrWrappable:b,userAgent:p};e(1),e(2),d[m]?(d[m]("DOMContentLoaded",o,!1),l[m]("load",r,!1)):(d[v]("onreadystatechange",i),l[v]("onload",r)),c("mark",["firstbyte",f],null,"api");var x=0,O=e(6)},{}],"wrap-function":[function(e,n,t){function r(e){return!(e&&e instanceof Function&&e.apply&&!e[a])}var i=e("ee"),o=e(5),a="nr@original",f=Object.prototype.hasOwnProperty,c=!1;n.exports=function(e,n){function t(e,n,t,i){function nrWrapper(){var r,a,f,c;try{a=this,r=o(arguments),f="function"==typeof t?t(r,a):t||{}}catch(u){l([u,"",[r,a,i],f])}s(n+"start",[r,a,i],f);try{return c=e.apply(a,r)}catch(p){throw s(n+"err",[r,a,p],f),p}finally{s(n+"end",[r,a,c],f)}}return r(e)?e:(n||(n=""),nrWrapper[a]=e,p(e,nrWrapper),nrWrapper)}function u(e,n,i,o){i||(i="");var a,f,c,u="-"===i.charAt(0);for(c=0;c<n.length;c++)f=n[c],a=e[f],r(a)||(e[f]=t(a,u?f+i:i,o,f))}function s(t,r,i){if(!c||n){var o=c;c=!0;try{e.emit(t,r,i,n)}catch(a){l([a,t,r,i])}c=o}}function p(e,n){if(Object.defineProperty&&Object.keys)try{var t=Object.keys(e);return t.forEach(function(t){Object.defineProperty(n,t,{get:function(){return e[t]},set:function(n){return e[t]=n,n}})}),n}catch(r){l([r])}for(var i in e)f.call(e,i)&&(n[i]=e[i]);return n}function l(n){try{e.emit("internal-error",n)}catch(t){}}return e||(e=i),t.inPlace=u,t.flag=a,t}},{}]},{},["loader"]);</script><meta itemprop="copyrightHolder" content="Lexico Dictionaries" /><meta itemprop="copyrightYear" content="2020" /><meta itemprop="inLanguage" content="en" /><meta itemprop="publisher" content="Lexico Dictionaries" /><link href="https://www.lexico.com" rel="publisher" /><link href="/opensearch/en_dictionary.xml" rel="search" title="Lexico UK Dictionary search" type="application/opensearchdescription+xml" /><link href="/opensearch/noad.xml" rel="search" title="Lexico US Dictionary search" type="application/opensearchdescription+xml" /><link href="/opensearch/thesaurus.xml" rel="search" title="Lexico Thesaurus search" type="application/opensearchdescription+xml" /><link href="/opensearch/en_grammar.xml" rel="search" title="Lexico English Grammar search" type="application/opensearchdescription+xml" /><link href="/opensearch/es_dictionary.xml" rel="search" title="Lexico Spanish search" type="application/opensearchdescription+xml" /><link href="/opensearch/to_english.xml" rel="search" title="Lexico Spanish - English search" type="application/opensearchdescription+xml" /><link href="/opensearch/from_english.xml" rel="search" title="Lexico English - Spanish search" type="application/opensearchdescription+xml" /><link href="/opensearch/es_grammar.xml" rel="search" title="Lexico Spanish Grammar search" type="application/opensearchdescription+xml" /><script src="/assets/intersection-observer-1ff3c94fe5b24a64c6ce5ea8d4ff814dabf7b32421f7918696ac8164f7f91e32.js"></script><link rel="preconnect" href="//ads.pubmatic.com" /><link rel="preconnect" href="//securepubads.g.doubleclick.net" /><link rel="preconnect" href="//cm.g.doubleclick.net" /><link rel="preconnect" href="//pagead2.googlesyndication.com" /><link rel="preconnect" href="//ib.adnxs.com" /><link rel="preconnect" href="//ce.lijit.com" /><link rel="preconnect" href="//ap.lijit.com" /><link rel="preconnect" href="//us-u.openx.net" /><script>var isEU = false;
var adlerGeo = "ROWLOpacific";
var detectedDevice = "Desktop";
var site = "lexi";
var page = "SERP";

var mupFpbConfiguration = {
  adlerGeo: adlerGeo,
  detectedDevice: detectedDevice,
  mupFpbApiEndpoint: "https://irene.lexico.com/mup-fpb/v1",
  site: site
};

var rtfFpbApiEndpoint = "https://irene.lexico.com/v1";

var rtfFpbConfig = {
  adlerGeo: adlerGeo,
  detectedDevice: detectedDevice,
  rtfFpbApiEndpoint: rtfFpbApiEndpoint,
  site: site
};

var pageTargeting = {
  loc: adlerGeo,
  tx1: "results",
  tx2: "serp",
  ptype: "content",
  ld: "1"
};

// slotConfigs, lazySlotConfigs
var slotConfigs = [{"placement":"lexi_serp_dkt_atf_728x90_10","code":"/23219321/lexico","sizes":[[728,90]],"targeting":{"pos":"top","pos2":"10"},"ad_uuid":"lexi_serp_dkt_atf_728x90_10"},{"placement":"lexi_serp_dkt_atf_160x600_1","code":"/23219321/lexico","sizes":[[160,600],[300,600]],"targeting":{"pos":"top","pos2":"1"},"ad_uuid":"lexi_serp_dkt_atf_160x600_1"},{"placement":"lexi_serp_dkt_btf_300x250_20","code":"/23219321/lexico","sizes":[[300,250]],"targeting":{"pos":"bot","pos2":"20"},"ad_uuid":"lexi_serp_dkt_btf_300x250_20"}];
var lazySlotConfigs = [{"placement":"lexi_serp_dkt_atf_300x250_30","code":"/23219321/lexico","sizes":[[300,250]],"targeting":{"pos":"bot","pos2":"30"},"ad_uuid":"lexi_serp_dkt_atf_300x250_30"}];



window.adlerData = {
  mup: { values: null, processed: false },
  rtf: { values: null, processed: false }
};


var generateFormattedTime = function generateFormattedTime() {
  var date = new Date();
  var formattedMilliseconds = "".concat(date.getMilliseconds());
  while (formattedMilliseconds.length < 3) {
    formattedMilliseconds = "0".concat(formattedMilliseconds);
  }
  var formattedSeconds = "".concat(date.getSeconds());
  while (formattedSeconds.length < 2) {
    formattedSeconds = "0".concat(formattedSeconds);
  }
  return ""
    .concat(date.getHours(), ":")
    .concat(date.getMinutes(), ":")
    .concat(formattedSeconds, ".")
    .concat(formattedMilliseconds);
};
var generateSessionId = function generateSessionId() {
  var sessionId = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 32; i += 1) {
    sessionId += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return sessionId;
};
var sessionId = generateSessionId();
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "oneTrustScriptLoaded",
  timing: generateFormattedTime(),
  sessionId: sessionId
});
if (typeof window.__cmp === "function") {
  window.__cmp("getVendorConsents", {}, function(c) {
    window.dataLayer.push({
      event: "cmpDoesExist",
      timing: generateFormattedTime(),
      consents: JSON.stringify(c),
      sessionId: sessionId
    });
  });
} else {
  window.dataLayer.push({
    event: "cmpDoesNotExist",
    timing: generateFormattedTime(),
    sessionId: sessionId
  });
}
window.performance.mark("adStackStart");
var PWT = {};

/**-------------- Page level ad targeting configs --------------*/





pageTargeting.dow = new Date().getDay().toString();

var allSlotConfigs = filterSize((slotConfigs || []).concat(lazySlotConfigs));
// To prevent the 300 wide ad from displaying on smaller screens
function filterSize(sizes){
  var temp_sizes = [];
  for (var i = sizes.length - 1; i >= 0; i--) {
    if ( (sizes[i].placement.indexOf("_160x600_") > -1) && (sizes[i].sizes.join("_").indexOf("300,600") > -1) && window.innerWidth < 1540) {
      sizes[i].sizes = [160, 600];
    }
    temp_sizes.push(sizes[i]);
  }
  return temp_sizes;
}


var determineConsent = function determineConsent() {
  /*
      FPB
      Determine IAB consent for ad personalization, and set for GPT. 
      Default for EU is false, and default for non-EU is true.
      */
  if (isEU) {
    try {
      if (typeof __cmp === "function") {
        __cmp("getVendorConsents", {}, function(c) {
          var consent = false;

          if (Array.isArray(c.purposeConsents)) {
            consent = c.purposeConsents.indexOf("3:true") !== -1;
          } else if (typeof c.purposeConsents === "object") {
            consent = c.purposeConsents[3];
          }

          if (consent !== false && consent !== true) consent = false;
          setFpbGPTPersonalization(consent);
        });
      } else {
        setFpbGPTPersonalization(false);
      }
    } catch (error) {
      console.error("personalization: ", error);
      setFpbGPTPersonalization(false);
    }
  } else {
    setFpbGPTPersonalization(true);
  }
};

var setFpbGPTPersonalization = function setFpbGPTPersonalization(
  personalized,
  googletag
) {
  /*
      FPB
      Wait until DFP is ready and push personalization to DPT.
      */
  googletag = googletag || window.googletag;
  googletag.cmd.push(function() {
    if (!window.dfpReady) {
      console.log("Awaiting DFP setup.");
      setTimeout(setFpbGPTPersonalization, 100, personalized);
    } else {
      console.log("Doing personalization.");

      if (personalized) {
        googletag.pubads().setRequestNonPersonalizedAds(0);
      } else {
        googletag.pubads().setRequestNonPersonalizedAds(1);
      }
    }
  });
};
/**-------------- Targeting runtime setup --------------*/
pageTargeting.ref =
  window.document.referrer.search(
    "dictionary.com|thesaurus.com|reference.com|lexico.com"
  ) > -1
    ? "organic"
    : "direct";
pageTargeting.lang =
  window.navigator.userLanguage || window.navigator.language;
pageTargeting.pv =
  typeof SCCookie !== "undefined" ? SCCookie.getPageViewCount() + "" : "";
pageTargeting.rpv = Math.floor(Math.random() * 100 + 1).toString();
pageTargeting.sid = "";
pageTargeting.bid = "";

var bidRpvThreshold = 4;
      window.adlerData.shouldSetLoki = pageTargeting.rpv > bidRpvThreshold;

var apstagSlots = (function(slotConfigs) {
  var slots = slotConfigs.reduce(function(accumulator, currentValue) {
    accumulator.push({
      slotID: currentValue.placement,
      sizes: currentValue.sizes
    });
    return accumulator;
  }, []);
  return slots;
})(slotConfigs);

var FAILSAFE_TIMEOUT = 5000; // this timeout should be more than OpenWrap timeout

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var adSlots = adSlots || {
  slots: {}
};

</script><script>window.performance.mark('gptLoadStart');</script><script async="async" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" onload="(function() {
window.performance.mark(&#39;gptLoadEnd&#39;);
window.performance.measure(&#39;gptLoad&#39;, &#39;gptLoadStart&#39;, &#39;gptLoadEnd&#39;);
var timing = window.performance.getEntriesByName(&#39;gptLoad&#39;)[0].duration;
window.dataLayer.push({
event: &#39;gptLoad&#39;,
page: page,
timing: timing
});
})()"></script><script type="text/javascript" src="https://ads.pubmatic.com/AdServer/js/pwt/103207/1483/pwt.js"></script><script>determineConsent();
window.dataLayer.push({
  event: "initialDetermineConsentInvocationComplete",
  timing: generateFormattedTime(),
  sessionId: sessionId
});

function initAdserver(wasCalledByFailsafe) {
  if (
    window.initAdserverFlag !== true &&
    (wasCalledByFailsafe === true ||
      (PWT.a9_BidsReceived &&
        PWT.ow_BidsReceived &&
        window.adlerData.mup.values &&
        window.adlerData.rtf.values))
  ) {
    window.dataLayer.push({
      event: "initAdServerRun",
      timing: generateFormattedTime(),
      sessionId: sessionId
    });

    window.initAdserverFlag = true;

    if (!PWT.ow_Bids) {
      var owBackup = [];
      for (var i = 0; i < slotConfigs.length; i++) {
        owBackup.push({
          adUnitIndex: "" + i,
          adUnitId: slotConfigs[i].code,
          bidData: { kvp: {} },
          code: slotConfigs[i].placement,
          divId: slotConfigs[i].placement
        });
      }
      PWT.ow_Bids = owBackup;
    }

    if (!PWT.a9_Bids) {
      PWT.a9_Bids = [];
    }

    processMupFpbValues(PWT.ow_Bids);
    processRtfFpbValues(PWT.ow_Bids, PWT.a9_Bids, allSlotConfigs, window.adlerData.shouldSetLoki);
    PWT.addKeyValuePairsToGPTSlots(PWT.ow_Bids);

    PWT.a9_BidsReceived = PWT.ow_BidsReceived = false;
    PWT.a9_Bids = PWT.ow_Bids = undefined;

    googletag.pubads().refresh(PWT.requestBidSlots);
    window.performance.mark("adStackEnd");
    window.performance.measure("adStack", "adStackStart", "adStackEnd");
    window.performance.clearMarks();
    window.performance.clearMeasures();
  }
}
googletag.cmd.push(function() {
  window.dataLayer.push({
    event: "setupDFP",
    timing: generateFormattedTime(),
    sessionId: sessionId
  });

  /**-------------- Set page level targeting for DFP --------------*/
  (function setPageLevelTargeting(googletag) {
    /*
          Both Bidders
          Set targeting params pertaining to all slots on page.
          */
    googletag = googletag || window.googletag;
    Object.keys(pageTargeting).forEach(function(pageTarget) {
      if (
        Object.prototype.hasOwnProperty.call(pageTargeting, pageTarget)
      ) {
        (function(key, value) {
          googletag.cmd.push(function() {
            googletag.pubads().setTargeting(key, value);
          });
        })(pageTarget, pageTargeting[pageTarget]);
      }
    });
    googletag.cmd.push(function() {
      googletag.pubads().setTargeting('odo_l', 'en');
googletag.pubads().setTargeting("odo_hw", "abase");
googletag.pubads().setTargeting('odo_c', ['']);
googletag.pubads().setTargeting('odo_t', ['']);

    });
  })(googletag);

  /**-------------- Set ad slot level targeting for DFP --------------*/
  if (typeof slotConfigs === "object") {
    (function setAdSlotTargeting(googletag) {
      /*
              Both Bidders
              1. Define initial (static) slots for DPT.
              2. Add listeners for events relevant to analytics.
              3. Set targeting params pertaining to individual slots.
              */
      var adSlotRenderPeriods = {};
      googletag = googletag || window.googletag;
      slotConfigs.forEach(function(slot) {
        googletag.cmd.push(function() {
          adSlots.slots[slot.placement] = googletag
            .defineSlot(slot.code, slot.sizes, slot.placement)
            .addService(googletag.pubads());
          googletag
            .pubads()
            .addEventListener("slotRenderEnded", function(event) {
              if (event.slot === adSlots.slots[slot.placement]) {
                adSlotRenderPeriods[slot.placement] = Date.now();
              }
            });
          googletag
            .pubads()
            .addEventListener("slotOnload", function(event) {
              if (event.slot === adSlots.slots[slot.placement]) {
                window.dataLayer.push({
                  event: "gptSlotRenderPeriod",
                  page: page,
                  slotId: slot.placement,
                  code: slot.code,
                  position: slot.targeting.pos,
                  position2: slot.targeting.pos2,
                  time: Date.now() - adSlotRenderPeriods[slot.placement]
                });
              }
            });
          googletag
            .pubads()
            .addEventListener("impressionViewable", function(event) {
              if (event.slot === adSlots.slots[slot.placement]) {
                window.dataLayer.push({
                  event: "gptImpressionViewable",
                  page: page,
                  slotId: slot.placement,
                  code: slot.code,
                  position: slot.targeting.pos,
                  position2: slot.targeting.pos2
                });
              }
            });
          Object.keys(slot.targeting).forEach(function(target) {
            if (
              Object.prototype.hasOwnProperty.call(slot.targeting, target)
            ) {
              adSlots.slots[slot.placement].setTargeting(
                target,
                slot.targeting[target]
              );
            }
          });
          adSlots.slots[slot.placement].setTargeting("adrefresh", "n");
        });
      });
    })(googletag);
  }
  (function pushAdSlots(googletag) {
    googletag = googletag || window.googletag;
    googletag.cmd.push(function() {
      googletag.pubads().enableSingleRequest();
      googletag.pubads().disableInitialLoad();
      googletag.enableServices();
      window.dfpReady = true;
    });
  })(googletag);
  googletag.display();

  PWT.requestBidSlots = googletag.pubads().getSlots();
  if (typeof PWT.requestBids === "function") {
    const config = PWT.generateConfForGPT(
      PWT.requestBidSlots
    );
    PWT.requestBids(config, function(adUnitsArray) {
      PWT.ow_Bids = adUnitsArray;
      PWT.ow_BidsReceived = true;
      initAdserver(false);
    });
  }

  setTimeout(function() {
    initAdserver(true);
  }, FAILSAFE_TIMEOUT);
});


/**-------------------- A9 --------------------*/
function a9Q(c, r) {
  window[a9]._Q.push([c, r]);
}

window.apstag = {
  init: function init() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    a9Q('i', args);
  },
  fetchBids: function fetchBids() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    a9Q('f', args);
  },
  setDisplayBids: function setDisplayBids() {},
  _Q: []
};
window.performance.mark('apstagLoadStart');
</script><script type="text/javascript" src="https://c.amazon-adsystem.com/aax2/apstag.js"></script><script>window.performance.mark('apstagLoadEnd');
window.performance.measure('apstagLoad', 'apstagLoadStart', 'apstagLoadEnd');
var timing = window.performance.getEntriesByName('apstagLoad')[0].duration;
window.dataLayer.push({
  event: 'apstagLoad',
  page: page,
  timing: timing
});
/**----------------- Initialize apstag (A9) -----------------*/
apstag.init({
  pubID: "3067",
  adServer: "googletag",
  bidTimeout: 1000
});
window.dataLayer.push({
  event: "initialA9RequestInitiated",
  timing: generateFormattedTime(),
  sessionId: sessionId
});
apstag.fetchBids(
  {
    slots: apstagSlots,
    timeout: 1000 // Make sure this timeout is less than or equal to OpenWrap TimeOut
  },
  function(bids) {
    googletag.cmd.push(function() {
      apstag.setDisplayBids();
      PWT.a9_Bids = bids;
      PWT.a9_BidsReceived = true;
      initAdserver(false);
    });
  }
);

/**-------------------------- Mup Fpb integration --------------------------*/

var MAGIC = 0xbeefcafe;
function getMupFpbParams(mupFpbSlotConfigs, mupFpbConfig) {
  var mupParams = {};
  mupFpbSlotConfigs.forEach(function(slotConfig) {
    try {
      mupParams[slotConfig.placement] = {
        site: mupFpbConfig.site,
        geo: mupFpbConfig.adlerGeo || "",
        platform: mupFpbConfig.detectedDevice,
        sizes: slotConfig.sizes,
        position: slotConfig.targeting.pos
      };
    } catch (error) {
      console.log("Error forming mup params:", error.message);
      return false;
    }
    return true;
  });
  return mupParams;
}
function getAdlerKey(size) {
  var keyMap = {
    "970x250": "adler_a",
    "300x600": "adler_a",
    "320x100": "adler_a",
    "970x90": "adler_b",
    "728x90": "adler",
    "300x250": "adler",
    "320x50": "adler",
    "160x600": "adler"
  };
  return keyMap[size];
}
function parseMupResponse(mupFpbAjaxCall) {
  try {
    window.adlerData.mup.values = JSON.parse(mupFpbAjaxCall.responseText);
    initAdserver(false);
  } catch (err) {
    console.log("Error parsing mupResponse: ".concat(err.message));
  }
}
function processMupFpbValues(adUnitsArray) {
  if (!window.adlerData.mup.values) return false;
  var mupFpbValues = window.adlerData.mup.values;
  adUnitsArray.forEach(function(adUnit) {
    if (adUnit.bidData.kvp.pwtsz) {
      try {
        var adlerKey = getAdlerKey(adUnit.bidData.kvp.pwtsz);

        if (
          adlerKey === null ||
          !mupFpbValues[adUnit.code] ||
          !mupFpbValues[adUnit.code][adlerKey]
        ) {
          return false;
        }

        var markup = mupFpbValues[adUnit.code][adlerKey];
        var deobfuscatedMarkup = deobMup(markup.adler);
        var muv = 100 + deobfuscatedMarkup;
        var centPwtecp = parseInt(
          adUnit.bidData.kvp.pwtecp.replace(".", ""),
          10
        );
        var adjustedPwtecp = (centPwtecp * muv) / 10000;
        adUnit.bidData.kvp.pwtecp = adjustedPwtecp.toFixed(2);
        adUnit.bidData.kvp.mup = "".concat(deobfuscatedMarkup);
      } catch (error) {
        console.log("Error applying mup for:", adUnit.code);
        return false;
      }
    }

    return true;
  });
  window.adlerData.mup.processed = true;
  return true;
}
function callMupFpb(slotConfigs, mupFpbConfig) {
  var mupFpbReq = new XMLHttpRequest();
  mupFpbReq.addEventListener(
    "load",
    parseMupResponse.bind(null, mupFpbReq)
  );
  mupFpbReq.open("POST", mupFpbConfig.mupFpbApiEndpoint, true);
  mupFpbReq.timeout = 1000;
  mupFpbReq.send(
    JSON.stringify(getMupFpbParams(slotConfigs, mupFpbConfig))
  );
}
function reverse(n) {
  var x = new Uint32Array(1);
  x[0] = n;
  x[0] = ((x[0] & 0x0000ffff) << 16) | ((x[0] & 0xffff0000) >>> 16);
  x[0] = ((x[0] & 0x55555555) << 1) | ((x[0] & 0xaaaaaaaa) >>> 1);
  x[0] = ((x[0] & 0x33333333) << 2) | ((x[0] & 0xcccccccc) >>> 2);
  x[0] = ((x[0] & 0x0f0f0f0f) << 4) | ((x[0] & 0xf0f0f0f0) >>> 4);
  x[0] = ((x[0] & 0x00ff00ff) << 8) | ((x[0] & 0xff00ff00) >>> 8);
  return x[0];
}
function unflip(n) {
  return reverse(n ^ MAGIC);
}
function deobMup(encryptedMup) {
  if (!encryptedMup) {
    throw new Error(
      "Missing Mup. Please confirm value is being passed in."
    );
  }

  var decryptedMup = unflip(parseInt(encryptedMup, 10));
  return decryptedMup;
}
/**-------------- End of Mup Fpb integration --------------*/
/**--------------------- Rtf integration ------------------*/
function setRtfInstrumentationKV(rtfSlotConfigs, status, error) {
  rtfSlotConfigs.forEach(function(slotConfig) {
    slotConfig.targeting.adler_status = status;

    if (error) {
      slotConfig.targeting.adler_error = error;
    }
  });
}
function getRtfParams(rtfSlotConfigs, rtfFpbConfig) {
  var requestParams = {};
  var geo = rtfFpbConfig.adlerGeo || "";

  if (geo === "") {
    setRtfInstrumentationKV(rtfSlotConfigs, "nogeo", "nogeo");
  }

  rtfSlotConfigs.forEach(function(slotConfig) {
    try {
      requestParams[slotConfig.placement] = {
        site: rtfFpbConfig.site,
        geo: geo,
        platform: rtfFpbConfig.detectedDevice,
        sizes: slotConfig.sizes,
        position: slotConfig.targeting.pos
      };
    } catch (error) {
      console.log("Error forming rtf params:", error.message);
      return false;
    }

    return true;
  });
  return requestParams;
}
function rtfFallback(rtfSlotConfigs, event) {
  setRtfInstrumentationKV(rtfSlotConfigs, event.type);
}
function injectRtfValue(adUnit, rtfSlotConfigs) {
  var rtfFpbValues = window.adlerData.rtf.values;
  rtfSlotConfigs.forEach(function(slotConfig) {
    if (slotConfig.placement !== adUnit.code) return false;

    if (!rtfFpbValues[slotConfig.placement]) {
      slotConfig.targeting.adler_status = "nofloor";
    } else {
      slotConfig.targeting.adler =
        rtfFpbValues[slotConfig.placement].adler;
      slotConfig.targeting.adler_a =
        rtfFpbValues[slotConfig.placement].adler_a;
      slotConfig.targeting.adler_b =
        rtfFpbValues[slotConfig.placement].adler_b;
      slotConfig.targeting.adler_status = "ok";
    }

    return true;
  });
}
function parseRtfValues(rtfAjaxCall, rtfSlotConfigs) {
  try {
    window.adlerData.rtf.values = JSON.parse(rtfAjaxCall.responseText);
    initAdserver(false);
  } catch (err) {
    setRtfInstrumentationKV(rtfSlotConfigs, "parse", err.message);
  }
}
function processRtfFpbValues(
  pubmaticAdUnitsArray,
  a9BidsArray,
  rtfSlotConfigs,
  shouldSetLoki
) {
  if (!window.adlerData.rtf.values) return false;
  var rtfFpbValues = window.adlerData.rtf.values;
  var a9NoBidValues = ["0", "1", "2"];

  for (var i = 0; i < pubmaticAdUnitsArray.length; i += 1) {
    var adUnit = pubmaticAdUnitsArray[i];
    var noA9bidForSlot = false;

    for (var j = 0; j < a9BidsArray.length; j += 1) {
      var a9Bid = a9BidsArray[j];

      if (
        a9Bid.slotID === pubmaticAdUnitsArray[i].code &&
        (!a9Bid.amznbid || a9NoBidValues.indexOf(a9Bid.amznbid) !== -1)
      ) {
        noA9bidForSlot = true;
        break;
      }
    }

    if (
      !adUnit.bidData.kvp.pwtsz &&
      (noA9bidForSlot || a9BidsArray.length === 0) &&
      shouldSetLoki
    ) {
      try {
        if (!rtfFpbValues[adUnit.code]) {
          return false;
        }

        var rtfValue =
          rtfFpbValues[adUnit.code].adler_a ||
          rtfFpbValues[adUnit.code].adler;
        adUnit.bidData.kvp.pwtpid = "loki";
        adUnit.bidData.kvp.pwtecp = rtfValue;
        adUnit.bidData.kvp.pwtbst = "1";
        injectRtfValue(adUnit, rtfSlotConfigs);
      } catch (error) {
        console.log("Error applying rtf for:", adUnit.code);
      }
    }
  }

  window.adlerData.rtf.processed = true;
  return true;
}
function callRTFFpb(slotConfigs, rtfFpbConfig) {
  var rtfReq = new XMLHttpRequest();
  rtfReq.addEventListener(
    "load",
    parseRtfValues.bind(null, rtfReq, slotConfigs)
  );
  rtfReq.addEventListener("timeout", rtfFallback.bind(null, slotConfigs));
  rtfReq.addEventListener("error", rtfFallback.bind(null, slotConfigs));
  rtfReq.open("POST", rtfFpbConfig.rtfFpbApiEndpoint, true);
  rtfReq.timeout = 1000;
  rtfReq.send(JSON.stringify(getRtfParams(slotConfigs, rtfFpbConfig)));
}
/**------------------ End of Rtf integration ------------------*/
googletag.cmd.push(function() {
  callMupFpb(allSlotConfigs, mupFpbConfiguration);
  callRTFFpb(allSlotConfigs, rtfFpbConfig);
});
</script>
<script type="text/javascript">
var testAdParam = {};
var mupData = undefined;
var updatePageTargeting = function(pageTargeting, testParam) {
  pageTargeting.spe = 'n';
  pageTargeting.kw = '';
  pageTargeting.loc = mupFpbConfiguration && mupFpbConfiguration.adlerGeo ? mupFpbConfiguration.adlerGeo : '';
  pageTargeting.rpv = Math.floor(Math.random() * 100 + 1).toString();
  pageTargeting.evince = 'ad';
  pageTargeting.ref = 'organic';
  pageTargeting.lang = window.navigator.userLanguage || window.navigator.language;
  pageTargeting.dow = new Date().getDay().toString();
  pageTargeting.pv = typeof SCCookie !== "undefined" ? SCCookie.getPageViewCount() + "" : "";

  if (mupData) {
    pageTargeting.mup = mupData.profileNumber;
  }

  window.adlerData.shouldSetLoki = pageTargeting.rpv > bidRpvThreshold;

  const objs = [pageTargeting, testParam];
  const targeting = objs.reduce(function(r, o) {
    Object.keys(o).forEach(function(key) {
      r[key] = o[key];
    });
    return r;
  });

  return targeting;
}

function refreshAds(event) {
  var refreshSlotConfigs = event.detail.slotConfigs.concat(event.detail.lazySlotConfigs);
  var pageTargeting = updatePageTargeting(event.detail.pageTargeting, testAdParam);
  window.performance.mark('adStackStart');
  (function refreshLazySlots(lazySlotConfigs) {
    window.refreshLazyAds = lazySlotConfigs.map(function(slot) {
      return {
        placement: slot.placement,
        refresh: true
      };
    });
  })(event.detail.lazySlotConfigs);

  // Clear old state
  window.initAdserverFlag = false;

  // Delete old config
  googletag.destroySlots();

  callMupFpb(refreshSlotConfigs, mupFpbConfiguration);
  callRTFFpb(refreshSlotConfigs, rtfFpbConfig);

  determineConsent();
  /**---------- Set page level targeting for DFP ----------*/
  (function setPageLevelTargeting(googletag) {
    /*
       Both Bidders
       Set targeting params pertaining to all slots on page.
     */
    googletag = googletag || window.googletag;
    Object.keys(pageTargeting).forEach(function(pageTarget) {
      if (Object.prototype.hasOwnProperty.call(pageTargeting, pageTarget)) {
        (function(key, value) {
          googletag.cmd.push(function() {
            googletag.pubads().setTargeting(key, value);
          });
        })(pageTarget, pageTargeting[pageTarget]);
      }
    });
  })(googletag);

  /**---------- Set ad slot level targeting for DFP ----------*/
  if (typeof event.detail.slotConfigs === "object") {
    (function setSpecificAdSlotTargeting(googletag, specificSlotConfigs) {
      var refresh = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      /*
         FPB
         1. Define initial (static) slots for DPT.
         2. Add listeners for events relevant to analytics.
         3. Set targeting params pertaining to individual slots.
       */
      var adSlotRenderPeriods = {};
      googletag = googletag || window.googletag;
      specificSlotConfigs.forEach(function(slot) {
        googletag.cmd.push(function() {
          adSlots.slots[slot.placement] = googletag.defineSlot(slot.code, slot.sizes, slot.placement).addService(googletag.pubads());
          googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            if (event.slot === adSlots.slots[slot.placement]) {
              adSlotRenderPeriods[slot.placement] = Date.now();
            }
          });
          googletag.pubads().addEventListener('slotOnload', function(event) {
            if (event.slot === adSlots.slots[slot.placement]) {
              window.dataLayer.push({
                event: 'gptSlotRenderPeriod',
                page: page,
                slotId: slot.placement,
                code: slot.code,
                position: slot.targeting.pos,
                position2: slot.targeting.pos2,
                time: Date.now() - adSlotRenderPeriods[slot.placement]
              });
            }
          });
          googletag.pubads().addEventListener('impressionViewable', function(event) {
            if (event.slot === adSlots.slots[slot.placement]) {
              window.dataLayer.push({
                event: 'gptImpressionViewable',
                page: page,
                slotId: slot.placement,
                code: slot.code,
                position: slot.targeting.pos,
                position2: slot.targeting.pos2
              });
            }
          });
          Object.keys(slot.targeting).forEach(function(target) {
            if (Object.prototype.hasOwnProperty.call(slot.targeting, target)) {
              adSlots.slots[slot.placement].setTargeting(target, slot.targeting[target]);
            }
          });
          adSlots.slots[slot.placement].setTargeting('adrefresh', refresh ? 'y' : 'n');
        });
      });
    })(googletag, event.detail.slotConfigs, event.detail.isNotPageTransition);
  }
  (function pushAdSlots(googletag) {
    googletag = googletag || window.googletag;
    googletag.cmd.push(function() {
      googletag.pubads().enableSingleRequest();
      googletag.pubads().disableInitialLoad();
      googletag.enableServices();
      window.dfpReady = true;
    });
  })(googletag);
  googletag.display();

  PWT.requestBidSlots = googletag.pubads().getSlots();
  if (typeof PWT.requestBids === 'function') {
    const config = PWT.generateConfForGPT(PWT.requestBidSlots);
    PWT.requestBids(
      config,
      function(adUnitsArray) {
        PWT.ow_Bids = adUnitsArray;
        PWT.ow_BidsReceived = true;
        initAdserver(false);
      }
    );
  }

  apstag.fetchBids({
    slots: apstagSlots,
    timeout: 1000 // Make sure this timeout is less than or equal to OpenWrap TimeOut
  }, function(bids) {
    googletag.cmd.push(function() {
      apstag.setDisplayBids();
      PWT.a9_Bids = bids;
      PWT.a9_BidsReceived = true;
      initAdserver(false);
    });
  });
}

function requestLazyAd(event) {
  var results = {};
  var lazyInitAdserver = function(slot) {
    if (results.a9_BidsReceived && results.ow_BidsReceived && window.adlerData.mup.values && window.adlerData.rtf.values) {
      if (!results.ow_Bids) {
        var owBackup = [];
        for (var i = 0; i < slotConfigs.length; i++) {
          owBackup.push({
            adUnitIndex: '' + i,
            adUnitId: slotConfigs[i].code,
            bidData: {
              kvp: {}
            },
            code: slotConfigs[i].placement,
            divId: slotConfigs[i].placement,
          });
        }
        results.ow_Bids = owBackup;
      }
      if (!results.a9_Bids) {
        results.a9_Bids = [];
      }
      processMupFpbValues(results.ow_Bids);
      processRtfFpbValues(results.ow_Bids, results.a9_Bids, allSlotConfigs, window.adlerData.shouldSetLoki);
      PWT.addKeyValuePairsToGPTSlots(results.ow_Bids);
      googletag.display(slotConfig.placement);
      googletag.pubads().refresh([slot]);
    }
  }
  var slotConfig = lazySlotConfigs.find(
    (function(config) {
      return config.placement === event.detail;
    })
  );

  if (slotConfig && googletag) {
    var apstagSlot = (function formatApstagSlot(slot) {
      var slots = [{
        slotID: slot.placement,
        sizes: slot.sizes
      }];
      return slots;
    })(slotConfig);
    googletag.cmd.push(function() {
      googletag.destroySlots([adSlots.slots[slotConfig.placement]]);
      adSlots.slots[slotConfig.placement] = null;
      const slot = googletag.defineSlot(
        slotConfig.code,
        slotConfig.sizes,
        slotConfig.placement
      );
      if (slot) {
        adSlots.slots[slotConfig.placement] = slot.addService(
          googletag.pubads()
        );

        Object.keys(slotConfig.targeting).forEach(function(key) {
          adSlots.slots[slotConfig.placement].setTargeting(
            key,
            slotConfig.targeting[key]
          );
        });

        if (typeof PWT.requestBids === 'function') {
          const config = PWT.generateConfForGPT([slot]);
          PWT.requestBids(
            config,
            function(adUnitsArray) {
              results.ow_Bids = adUnitsArray;
              results.ow_BidsReceived = true;
              lazyInitAdserver(slot);
            }
          );
        }
        apstag.fetchBids(
          {
            slots: apstagSlot,
            timeout: 1000
          },
          (function(bids) {
            googletag.cmd.push(function() {
              apstag.setDisplayBids();
              results.a9_Bids = bids;
              results.a9_BidsReceived = true;
              lazyInitAdserver(slot);
            });
          })
        );
      }
    });
  }
};
window.addEventListener('refreshAds', refreshAds);
window.addEventListener('requestLazyAd', requestLazyAd);




var hasLazyLoaded = false;
function handler(entries, observer) {
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (entry.isIntersecting && !hasLazyLoaded) {
      hasLazyLoaded = true;
      requestLazyAd(new CustomEvent('requestLazyAd', { detail: lazySlotConfigs[0].placement }));
    }
  }
}

setTimeout(function(){
  var observer = new IntersectionObserver(handler);
  var hp_grammar = document.getElementById("grammar_section");
  if ( hp_grammar ) {
    observer.observe(hp_grammar);
  }
  var further_reading = document.getElementById("further_reading_section");
  if ( further_reading ) {
    observer.observe(further_reading);
  }
}, 3000);
</script>  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.lexico.com/en",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.lexico.com/en/definition/{search_term_string}",
    \t  "query-input": "required name=search_term_string"
      }
    }
  </script>
<link rel="canonical" href="https://www.lexico.com/definition/abase" /><link rel="alternate" hreflang="en" href="https://www.lexico.com/definition/abase" /><link rel="alternate" hreflang="en-US" href="https://www.lexico.com/en/definition/abase" /><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;
j.addEventListener('load', function() {
  var _ge = new CustomEvent('gtm_loaded', { bubbles: true });
  d.dispatchEvent(_ge);
});
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WDVJNM5');</script><meta itemprop="status" content="live" /><meta itemprop='headline' content='abase - meaning of abase in English by Lexico Dictionaries' />
<meta itemprop='headword' content='abase' />
<link rel="stylesheet" media="all" href="/assets/application_monolingual-97ff785b2a960d5387253642471431e9a9c925117a04fc34b670fdf069bc9c55.css" /><!--[if lt IE 9]
= javascript_include_tag 'ie'--><script src="/assets/head-264798560e9d1a1b4f47792a0a209d6ab450c9496fe6757c7d5ddd51ffe8c276.js"></script><script>head.load("/assets/application_monolingual-f2dede7accca99eea4d1b8db86145f711dade79397cf878eed9e4045363be91f.js");</script><link href="/apple-touch-icon.png" rel="apple-touch-icon" /><link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" /><link href="/android-chrome-192x192.png" rel="icon" sizes="192x192" type="image/png" /><link href="/android-chrome-256x256.png" rel="icon" sizes="256x256" type="image/png" /><link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" /><link href="/favicon.ico?v2" rel="shortcut icon" /><link href="/manifest.json" rel="manifest" /><link color="#50b46c" href="/safari-pinned-tab.svg" rel="mask-icon" /><meta content="#50b46c" name="msapplication-TileColor" /><meta content="/mstile-144x144.png" name="msapplication-TileImage" /><meta content="#50b46c" name="theme-color" /><meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="E/S7NftEeiYsyHgF0gCj/nseczDJbA+43aEXtrOXw13JnebuXlZnkioRx7aaXqehgGZxXjm0ssiu/xt7OLkupQ==" /><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Merriweather:400,700&amp;display=swap" rel="stylesheet" type="text/css" /><script>var controller = "monolingual_words";
var action = "show";
var csite = "EN";
var page_category = "";</script></head><body class="controller__monolingual_words action__show dictionary__odo dictionary__en  " lang="en" id=""><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDVJNM5" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><div id="wrapper"><header id="header"><div class="bg close transition"></div><div class="topHeader"><div class="container full"><div class="headerContent"><a class="logo" href="/"><img src="/assets/oup/logos/svg/lexico-logo-0c6251cf3d967d224d89038c50ebbb008c1dc05830dc25a674fb7dcdbe0ea7d5.svg" alt="Lexico logo" /></a></div><nav class="nav"><ul><li><a data-behaviour="ga-event-menu" data-value="DICTIONARY " href="/?search_filter=en_dictionary">DICTIONARY </a></li><li><a data-behaviour="ga-event-menu" data-value="THESAURUS " href="/?search_filter=ote">THESAURUS </a></li><li class="drop "><span><a data-behaviour="ga-event-menu" data-value="GRAMMAR " href="/grammar">GRAMMAR </a></span><ul><li><a data-behaviour="ga-event-menu" data-value="GRAMMAR  - GRAMMAR A-Z " href="/grammar/grammar-a-z">GRAMMAR A-Z </a></li><li><a data-behaviour="ga-event-menu" data-value="GRAMMAR  - SPELLING " href="/grammar/spelling">SPELLING </a></li><li><a data-behaviour="ga-event-menu" data-value="GRAMMAR  - PUNCTUATION " href="/grammar/punctuation">PUNCTUATION </a></li><li><a data-behaviour="ga-event-menu" data-value="GRAMMAR  - WRITING TIPS " href="/grammar/writing-help">WRITING TIPS </a></li><li><a data-behaviour="ga-event-menu" data-value="GRAMMAR  - USAGE " href="/grammar/usage">USAGE </a></li></ul></li><li class="drop mob"><span><a data-behaviour="ga-event-menu" data-value="EXPLORE " href="/explore">EXPLORE </a></span><ul><li><a data-behaviour="ga-event-menu" data-value="EXPLORE  - WORD ORIGINS " href="/explore/word-origins">WORD ORIGINS </a></li><li><a data-behaviour="ga-event-menu" data-value="EXPLORE  - LANGUAGE QUESTIONS " href="/explore/language-questions">LANGUAGE QUESTIONS </a></li><li><a data-behaviour="ga-event-menu" data-value="EXPLORE  - WORD LISTS" href="/explore/word-lists">WORD LISTS</a></li></ul></li><li class="mob"><a data-behaviour="ga-event-menu" data-value="SPANISH DICTIONARY" href="/es/">SPANISH DICTIONARY</a></li><li class="drop more"><span>More</span><ul><li class="drop mob"><span><a data-behaviour="ga-event-menu" data-value="EXPLORE " href="/explore">EXPLORE </a></span><ul><li><a data-behaviour="ga-event-menu" data-value="EXPLORE  - WORD ORIGINS " href="/explore/word-origins">WORD ORIGINS </a></li><li><a data-behaviour="ga-event-menu" data-value="EXPLORE  - LANGUAGE QUESTIONS " href="/explore/language-questions">LANGUAGE QUESTIONS </a></li><li><a data-behaviour="ga-event-menu" data-value="EXPLORE  - WORD LISTS" href="/explore/word-lists">WORD LISTS</a></li></ul></li><li class="mob"><a data-behaviour="ga-event-menu" data-value="SPANISH DICTIONARY" href="/es/">SPANISH DICTIONARY</a></li></ul></li></ul></nav><nav class="nav right items"><ul></ul></nav></div><span class="close"><svg enable-background="new -33 14 19.1 19.1" height="19" viewbox="-33 14 19.1 19.1" width="19" xmlns="http://www.w3.org/2000/svg"><path d="m-13.9 16.1l-2.1-2.1-7.4 7.4-7.5-7.4-2.1 2.1 7.4 7.5-7.4 7.4 2.1 2.1 7.5-7.4 7.4 7.4 2.1-2.1-7.4-7.4z" fill="#fff" /></svg></span></div><div class="mainHeader"><div class="container"><div class="headerContent"><a class="logo" href="/" data-behaviour="ga-event" data-value="Homepage anchor image"><img src="/assets/oup/logos/svg/lexico-logo-0c6251cf3d967d224d89038c50ebbb008c1dc05830dc25a674fb7dcdbe0ea7d5.svg" alt="Lexico logo" /></a><div class="searchField"><h1>Oxford English and Spanish Dictionary, Thesaurus, and Spanish to English Translator</h1><div class="beforeSearch"></div><div class="searchMain" data-locale="en"><form class="search" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><select name="filter" id="filter" class="dictionary" data-ga-language-indicator="EN"><option selected="selected" value="en_dictionary">UK Dictionary</option>
<option value="noad">US Dictionary</option>
<option value="thesaurus">Thesaurus</option>
<option value="en_grammar">English Grammar</option>
<option value="es_dictionary">Spanish</option>
<option value="to_english">Spanish - English</option>
<option value="from_english">English - Spanish</option>
<option value="es_grammar">Spanish Grammar</option></select><fieldset><input type="hidden" name="dictionary" id="dictionary" value="en" /><input type="hidden" name="s" id="s" value="t" /><label class="sr-only" for="query">Search</label><input type="text" name="query" id="query" value="abase" placeholder="Type word or phrase" autocomplete="off" maxlength="100" autocapitalize="none" class="autocomplete" /><div class="keyboard kBoxContent" data-behaviour="ga-event-search-scope" data-value="character keyboard"><svg enable-background="new 0 0 28 16.7" height="17" viewbox="0 0 28 16.7" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m26.5 0h-25c-.8 0-1.5.6-1.5 1.4v13.9c0 .8.7 1.4 1.5 1.4h25.1c.8 0 1.5-.6 1.5-1.4v-13.9c-.1-.8-.8-1.4-1.6-1.4m-10.1 2.8h2.9v2.8h-2.9v-2.8m4.3 4.1v2.8h-2.9v-2.8h2.9m-8.7-4.1h2.9v2.8h-2.9v-2.8m4.4 4.1v2.8h-2.9v-2.8h2.9m-8.8-4.1h2.9v2.8h-2.9v-2.8m4.4 4.1v2.8h-2.9v-2.8h2.9m-9-4.1h3.2v2.8h-3.2v-2.8m0 4.1h4.6v2.8h-4.6v-2.8m3.2 7h-3.2v-2.8h3.1v2.8zm13.1 0h-11.7v-2.8h11.6v2.8zm5.8 0h-4.4v-2.8h4.4v2.8m0-4.2h-2.9v-2.8h2.9v2.8m0-4.1h-4.4v-2.8h4.4v2.8" fill="#999" /></svg> <svg enable-background="new 0 0 14 7" height="7" viewbox="0 0 14 7" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 4.4 2.6 0 0 0 6.1 6.1 7 7 7.9 6.1 14 0 11.4 0z" fill="#989898" /></svg></div><button type="submit" data-behaviour="ga-event-search-scope" data-value="Launch search" aria-label="Launch search"><svg enable-background="new 0 0 22 22" height="30" viewbox="-0.5 -0.5 22 22" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m21.8 19.6l-4.5-4.5c2.7-3.7 2.3-8.9-1-12.3-3.7-3.7-9.8-3.7-13.5 0-3.7 3.7-3.7 9.7 0 13.5 3.4 3.4 8.6 3.7 12.3 1l4.5 4.5c.4.4 1 .3 1.5-.2l.5-.5c.5-.5.5-1.1.2-1.5m-7.6-5.3c-2.6 2.6-6.8 2.6-9.4 0-2.6-2.6-2.6-6.8 0-9.4 2.6-2.6 6.8-2.6 9.4 0 2.5 2.6 2.5 6.8 0 9.4" fill="#f77941" /></svg></button><div class="autocompleteBox"></div><div class="keyboardBox"><div class="kBoxContent"><ul><li><span>à</span></li><li><span>á</span></li><li><span>â</span></li><li><span>ä</span></li><li><span>ã</span></li><li><span>ă</span></li><li><span>ā</span></li><li><span>ç</span></li><li><span>č</span></li><li><span>è</span></li><li><span>é</span></li><li><span>ê</span></li><li><span>ë</span></li><li><span>ē</span></li><li><span>ģ</span></li><li><span>ì</span></li><li><span>í</span></li><li><span>î</span></li><li><span>ï</span></li><li><span>ī</span></li><li><span>ķ</span></li><li><span>ļ</span></li><li><span>ñ</span></li><li><span>ň</span></li><li><span>ņ</span></li><li><span>ò</span></li><li><span>ó</span></li><li><span>ô</span></li><li><span>ö</span></li><li><span>õ</span></li><li><span>ş</span></li><li><span>š</span></li><li><span>ţ</span></li><li><span>ù</span></li><li><span>ú</span></li><li><span>û</span></li><li><span>ü</span></li><li><span>ū</span></li><li><span>ý</span></li><li><span>ž</span></li><li><span>æ</span></li><li><span>œ</span></li><li><span>ß</span></li></ul><i class="upper"><svg enable-background="new 0 0 16.8 16" height="16" viewbox="0 0 16.8 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8.4 0l-8.4 8.4h5.1v7.6h6.6v-7.6h5.1z" fill="#2a2a2a" /></svg></i></div></div></fieldset></form></div></div></div><div class="burger"><img src="/assets/oup/svg/hamburger-menu-594799c23e03196ed910c5798976a15b1779b55f9c9824608c69cf0ff6191ee8.svg" height="18" width="28" alt="menu" /><span>menu</span></div></div></div></header><div id="main"><div class="errors__container headerHead"></div><div id="content" class="serp-ad-code"><div class="lex-container"><div class="banbox mobile_banner"><div class="container content-ban"><div class="banner adUnit"><div id="lexi_serp_dkt_atf_728x90_10"></div><div id="lexi_serp_mweb_atf_320x50_1"></div></div></div></div><div class="main-content"><div class="container layout"><div class="lex-content"><div class="lex-filling"><div class="entryWrapper"><div class="breadcrumbs layout"><p><a class="desktopCrumb home_breadcrumb_hide" href="/" data-behaviour="ga-event-breadcrumb" data-value="Homepage anchor">Home</a> <span class="home_breadcrumb_hide"></span><a class="desktopCrumb middle_crumb" href="/definition" data-behaviour="ga-event-breadcrumb" data-value="Primary root">UK English</a> <span></span> <a href="https://www.lexico.com/definition/abase">abase</a> </p></div><div class="entryHead primary_homograph" id="h69955504468240"><div id="audio-hover-preload"></div><header><h1>Meaning of <em>abase</em> in English:</h1><div class="socials"><ul><li><a class="ico-fb" href="https://www.facebook.com/dialog/share?app_id=292327308384887&amp;display=page&amp;href=https%3A%2F%2Fwww.lexico.com%2Fdefinition%2Fabase&amp;redirect_uri=https%3A%2F%2Fwww.lexico.com%2Fdefinition%2Fabase" target="_blank" rel="noopener" title="Share on Facebook" onclick="javascript:ga(&#39;send&#39;, &#39;event&#39;, &#39;share_this_entry&#39;, &#39;facebook&#39;, &#39;https://www.lexico.com/definition/abase&#39;);" data-behaviour="ga-event-entry-sharing" data-value="Facebook"><i class="transition"><svg enable-background="new 0 0 30 30" viewbox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="m15 0c-8.284 0-15 6.716-15 15 0 8.285 6.716 15 15 15 8.284 0 15-6.715 15-15 0-8.284-6.716-15-15-15m3.214 15.01h-2.102c0 3.357 0 7.495 0 7.495h-3.115c0 0 0-4.095 0-7.495h-1.482v-2.647h1.482v-1.714c0-1.227.582-3.144 3.143-3.144l2.307.009v2.571c0 0-1.404 0-1.676 0-.271 0-.66.136-.66.722v1.556h2.375l-.272 2.647" fill="#37589a" /></svg></i></a></li> <li><a class="ico-tw" href="https://twitter.com/intent/tweet?text=abase%20-%20Lexico.com&amp;url=https%3A%2F%2Fwww.lexico.com%2Fdefinition%2Fabase" target="_blank" rel="noopener" title="Share on Twitter" onclick="javascript:ga(&#39;send&#39;, &#39;event&#39;, &#39;share_this_entry&#39;, &#39;twitter&#39;, &#39;https://www.lexico.com/definition/abase&#39;);" data-behaviour="ga-event-entry-sharing" data-value="Twitter"><i class="transition"><svg enable-background="new 0 0 30 30" viewbox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="m15 0c-8.284 0-15 6.716-15 15 0 8.285 6.716 15 15 15 8.283 0 15-6.715 15-15 0-8.284-6.717-15-15-15m5.965 11.943c.006.132.001.264.001.397 0 4.066-3.095 8.755-8.757 8.755-1.738 0-3.356-.509-4.718-1.382.242.028.486.041.734.041 1.443 0 2.769-.489 3.821-1.314-1.345-.025-2.483-.916-2.874-2.136.188.033.38.053.579.053.281 0 .553-.039.81-.107-1.407-.284-2.468-1.527-2.468-3.02 0-.013 0-.026 0-.039.416.231.891.368 1.395.384-.825-.551-1.369-1.494-1.369-2.562 0-.564.152-1.093.417-1.547 1.517 1.863 3.786 3.087 6.342 3.215-.052-.226-.08-.459-.08-.701 0-1.699 1.377-3.076 3.079-3.076.885 0 1.685.374 2.246.97.699-.137 1.359-.394 1.955-.748-.232.719-.719 1.322-1.354 1.703.624-.073 1.217-.24 1.768-.483-.413.618-.936 1.16-1.536 1.595" fill="#38a8e0" /></svg></i></a></li> <li><a class="ico-lin" href="https://www.linkedin.com/cws/share?url=https%3A%2F%2Fwww.lexico.com%2Fdefinition%2Fabase" target="_blank" rel="noopener" title="Share on Linkedin+" onclick="javascript:window.open(this.href,&#39;&#39;, &#39;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600&#39;); ga(&#39;send&#39;, &#39;event&#39;, &#39;share_this_entry&#39;, &#39;linkedin&#39;, &#39;https://www.lexico.com/definition/abase&#39;); return false;" data-behaviour="ga-event-entry-sharing" data-value="LinkedIn"><i class="transition"><svg enable-background="new 0 0 32 32" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="#006799"><path d="m16.959 14.824v-.033c-.006.012-.015.023-.022.033h.022" /><path d="m16 0c-8.837 0-16 7.164-16 16 0 8.837 7.163 16 16 16 8.836 0 16-7.162 16-16 0-8.836-7.164-16-16-16m-4.367 23.646h-3.431v-10.316h3.431v10.316m-1.716-11.726h-.022c-1.151 0-1.895-.793-1.895-1.783 0-1.012.768-1.783 1.939-1.783 1.174 0 1.896.771 1.918 1.783 0 .99-.744 1.783-1.94 1.783m14.08 11.726h-3.43v-5.52c0-1.387-.496-2.333-1.738-2.333-.946 0-1.512.64-1.76 1.255-.091.221-.113.525-.113.836v5.762h-3.429c0 0 .044-9.349 0-10.316h3.429v1.461c.457-.705 1.271-1.703 3.092-1.703 2.256 0 3.949 1.473 3.949 4.642v5.916" /></g></svg></i></a></li> </ul></div> <h2 class="hwg"><span class="hw" data-headword-id="abase">abase</span></h2><div class="hwg"><div class="entryGroup" id="h69955504468240"><h3 class="pronunciations">Pronunciation <a class="ipaLink" href="/key-to-pronunciation" title="Key to pronunciations"></a><span class="phoneticspelling">/əˈbeɪs/</span> <a class="speaker" onclick="this.firstElementChild.play();"><audio src="https://lex-audio.useremarkable.com/mp3/abase_gb_1.mp3" preload="none"></audio></a></h3></div></div><p class="associatedTranslation">Translate <a href="/en-es/traducir/abase?locale=en">abase</a> into Spanish</p></header></div><section class="gramb"><h3 class="ps pos"><span class="pos">verb</span></h3><span class="transitivity"><span class="neutral">&#91;</span>with object<span class="neutral">&#93;</span></span><span class="form-groups">usually <strong>abase oneself</strong></span> <ul class="semb"><li><div class="trg"><p><span class="iteration"></span><span class="ind">Behave in a way that belittles or degrades (someone)</span></p><span class="indicators"></span><div class="exg"><div class="ex"><em>&lsquo;I watched my colleagues abasing themselves before the board of trustees&rsquo;</em></div></div><div class="examples"><div class="moreInfo"><button data-behaviour="ga-event" data-value="more example sentences">More example sentences</button></div><div class="exg"><ul class="english-ex"><li class="ex"><em>&lsquo;They find a secret delight in abasing themselves before men of violence.&rsquo;</em></li><li class="ex"><em>&lsquo;It's an icky daddy-daughter comedy featuring character actors abasing themselves horribly for the money.&rsquo;</em></li><li class="ex"><em>&lsquo;The more politics abases itself before the values of TV entertainment, the less it represents the real political process.&rsquo;</em></li><li class="ex"><em>&lsquo;I abased myself in such a way that it makes me cringe to even remember it.&rsquo;</em></li><li class="ex"><em>&lsquo;Their president abased himself with ritual abject apologies.&rsquo;</em></li><li class="ex"><em>&lsquo;But my brother abased himself intellectually the same way they all did.&rsquo;</em></li><li class="ex"><em>&lsquo;Eleven million people took to the streets last weekend to show their solidarity in the face of terror, and two days later voted to abase themselves before it.&rsquo;</em></li><li class="ex"><em>&lsquo;Come fall, the rich and the powerful abase themselves for a seat in the owner's box.&rsquo;</em></li><li class="ex"><em>&lsquo;Heand his lawyers will need to seriously abase themselves before the Committee if he's going to escape a similar fate.&rsquo;</em></li><li class="ex"><em>&lsquo;And please let me, or any other liberal, know if there is anything else we can do to abase ourselves.&rsquo;</em></li><li class="ex"><em>&lsquo;She recently remarked that the adoption of foreign accents ‘for jobs in call centres shows how easily an ancient civilisation can be made to abase itself completely’.&rsquo;</em></li><li class="ex"><em>&lsquo;Thus he enters the dining room ready to abase himself because he disdains everyone else.&rsquo;</em></li><li class="ex"><em>&lsquo;When Fosca abases herself in front of the hero crying, ‘one loves a dog, an animal ‘she is both using emotional blackmail and exposing her raw passion.’&rsquo;</em></li><li class="ex"><em>&lsquo;Countless bank executives have abased themselves at her feet.&rsquo;</em></li><li class="ex"><em>&lsquo;Generally, those of the lower orders abased themselves through prostration in front of those who outranked them.&rsquo;</em></li><li class="ex"><em>&lsquo;No, Cyril, you need not kneel and abase yourself.&rsquo;</em></li><li class="ex"><em>&lsquo;Some protest that this affirmation comes at a cost: you cannot receive it unless you first abase yourself as a hopeless and helpless sinner in need of redemption.&rsquo;</em></li><li class="ex"><em>&lsquo;How these gestures will be interpreted by the electorate is not clear, but it is clear that they will do anything, even abase themselves in public, to gain power.&rsquo;</em></li><li class="ex"><em>&lsquo;How easily an ancient civilization can be made to abase itself completely.&rsquo;</em></li><li class="ex"><em>&lsquo;One begins to wonder perversely whether the artist will soon utterly abase herself before our eyes.&rsquo;</em></li></ul></div></div><div class="synonyms"><div class="moreInfo"><button data-behaviour="ga-event-synonyms" data-value="expand/collapse">Synonyms</button></div><div class="exg"><div><strong class="syn">humble</strong><span class="syn">, humiliate, belittle, demean, lower, degrade, disgrace, disparage, debase, cheapen, discredit, mortify, bring low, demote, reduce</span></div><a data-behaviour="ga-event-synonyms" data-value="view synonyms" href="/synonym/abase">View synonyms</a></div></div></div></li></ul></section><section class="etymology etym"><h3><strong>Origin</strong></h3><div class="senseInnerWrapper"><p>Late Middle English from Old French abaissier, from a- (from Latin ad ‘to, at’) + baissier ‘to lower’, based on late Latin bassus ‘short of stature’. The spelling has been influenced by <a href="/definition/base">base</a>.</p></div></section></div></div></div><aside class="sideBanner"><div class="sideBannerWrap"><div class="banner adUnit"><div id="lexi_serp_dkt_atf_160x600_1"></div><div id=""></div></div></div></aside><aside id="sidebar" class="sidebar extend"><div class="sidebar-content"><div class="dayword"><section><div class="daywordmain"><span class="wotd-title">Word of the day</span><div class="word_spacer"></div><div><div><strong><a class="linkword" id="018acd31-80aa-4fc5-92e7-a35cd74c31cd" href="/definition/moggie" data-behaviour="ga-event-wotd" data-value="Word">moggie</a><div class="rsbtn"><a class="voice" onclick="document.getElementById(&#39;467c41ae-7c57-435c-8732-f4c0ffe0108d&#39;).play();" data-behaviour="ga-event-wotd" data-value="audio"><svg enable-background="new 0 0 42 42" height="42" viewbox="0 0 42 42" width="42" xmlns="http://www.w3.org/2000/svg"><g class="orn"><circle cx="21" cy="21" r="21" /><circle class="wh-s" cx="21" cy="21" r="17" stroke-miterlimit="10" stroke-width="2" /></g><g class="wh"><path d="m14.3 18h-3.8v6h3.8l4.9 4c0 0 1 .9 1 .1v-14.2c0-.7-.9.1-.9.1l-5 4" /><path d="m27.3 29.7c2.6-2.2 4.1-5.4 4.1-8.7s-1.5-6.6-4.1-8.7c-.3-.3-.9-.3-1.1.1-.2.1-.2.3-.2.5 0 .2.1.5.3.6 2.2 1.9 3.5 4.6 3.5 7.5 0 2.9-1.3 5.6-3.5 7.5-.2.2-.3.4-.3.6 0 .2.1.4.2.5.2.4.8.4 1.1.1" /><path d="m28.1 21c0-2.4-1.1-4.7-2.9-6.2-.3-.3-.9-.2-1.2.1-.1.2-.2.3-.2.5 0 .2.1.5.3.6 1.5 1.2 2.3 3.1 2.3 5 0 1.9-.9 3.7-2.3 5-.2.2-.3.4-.3.6 0 .2.1.4.2.5.3.3.8.4 1.2.1 1.9-1.5 2.9-3.8 2.9-6.2" /><path d="m24.8 21c0-1.4-.6-2.8-1.8-3.7-.3-.3-.9-.2-1.2.1-.1.2-.2.3-.2.5 0 .2.1.5.3.6.7.6 1.2 1.5 1.2 2.5 0 1-.4 1.9-1.2 2.5-.2.2-.3.4-.3.6 0 .2.1.4.2.5.3.3.8.4 1.2.1 1.2-.9 1.8-2.3 1.8-3.7" /></g></svg></a></div><audio id="467c41ae-7c57-435c-8732-f4c0ffe0108d" preload="none" src="https://lex-audio.useremarkable.com/mp3/moggie_gb_1.mp3"></audio></strong><p class="word_type phonetic_spelling">/ ˈmɒɡi /</p><p class="word_type pos">noun</p></div></div><div class="cta"><a id="467c41ae-7c57-435c-8732-f4c0ffe0108d" href="/definition/moggie" data-behaviour="ga-event-wotd" data-value="Word">See definitions &amp; examples</a></div></div></section></div><div class="news layout"><div class="banbox-mini"><div class="banner adUnit  "><div id="lexi_serp_dkt_btf_300x250_20"><script>googletag.cmd.push(function() { googletag.display("lexi_serp_dkt_btf_300x250_20"); });</script></div><div id="lexi_serp_mweb_btf_300x250_10"><script>googletag.cmd.push(function() { googletag.display("lexi_serp_mweb_btf_300x250_10"); });</script></div></div></div><section><a href="/explore/foreign-words-and-phrases" data-behaviour="ga-event" data-value="Sidebar - story 1"><div class="box-img" data-ratiox="2.35" data-ratioy="1"><img alt="Foreign words and phrases now used in english min" data-src="https://s3.amazonaws.com/lexico.useremarkable.com/production/images/uploads/7310/medium/foreign-words-and-phrases-now-used-in-english-min.jpg" class="lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" /></div><article><span class="article-title">These Foreign Words And Phrases Are Now Used In English</span></article></a></section><section><a href="/explore/does-english-have-most-words" data-behaviour="ga-event" data-value="Sidebar - story 2"><div class="box-img" data-ratiox="2.35" data-ratioy="1"><img alt="Language questions min" data-src="https://s3.amazonaws.com/lexico.useremarkable.com/production/images/uploads/7321/medium/language-questions-min.jpg" class="lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" /></div><article><span class="article-title">Does English Have More Words Than Any Other Language?</span></article></a></section></div><div class="quiz-panel-odo"><div class="quiz-panel" id="quiz_104"><div class="quizTitle">Types of Dog</div><form class="simple_form new_quiz_response" id="new_quiz_response" action="/quiz_responses" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="quiz_id" id="quiz_id" value="104" /><div class="questions"><div class="question first current"><p class="question-text">Which of the following is a type of dog?</p><ul class="options"><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6407" value="6407" /><label class="option_text" for="quiz_option_id_6407">fawnhound</label></li><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6406" value="6406" /><label class="option_text" for="quiz_option_id_6406">deerhound</label></li></ul></div><div class="question"><p class="question-text">Which of the following is a type of dog?</p><ul class="options"><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6429" value="6429" /><label class="option_text" for="quiz_option_id_6429">Queensland red</label></li><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6428" value="6428" /><label class="option_text" for="quiz_option_id_6428">Queensland blue</label></li></ul></div><div class="question"><p class="question-text">Which of the following is a type of dog?</p><ul class="options"><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6393" value="6393" /><label class="option_text" for="quiz_option_id_6393">maned collie</label></li><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6392" value="6392" /><label class="option_text" for="quiz_option_id_6392">bearded collie</label></li></ul></div><div class="question"><p class="question-text">Which of the following is a type of dog?</p><ul class="options"><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6424" value="6424" /><label class="option_text" for="quiz_option_id_6424">Pharaoh hound</label></li><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6425" value="6425" /><label class="option_text" for="quiz_option_id_6425">Emperor hound</label></li></ul></div><div class="question"><p class="question-text">Which of the following is a type of dog?</p><ul class="options"><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6441" value="6441" /><label class="option_text" for="quiz_option_id_6441">schnitzel</label></li><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6440" value="6440" /><label class="option_text" for="quiz_option_id_6440">schnauzer</label></li></ul></div><div class="question"><p class="question-text">Which of the following is a type of dog?</p><ul class="options"><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6447" value="6447" /><label class="option_text" for="quiz_option_id_6447">seeker</label></li><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6446" value="6446" /><label class="option_text" for="quiz_option_id_6446">pointer</label></li></ul></div><div class="question"><p class="question-text">Which of the following is a type of dog?</p><ul class="options"><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6434" value="6434" /><label class="option_text" for="quiz_option_id_6434">Rhodesian ridgeback</label></li><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6435" value="6435" /><label class="option_text" for="quiz_option_id_6435">Norwegian ridgeback</label></li></ul></div><div class="question"><p class="question-text">Which of the following is a type of dog?</p><ul class="options"><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6426" value="6426" /><label class="option_text" for="quiz_option_id_6426">Pomeranian</label></li><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6427" value="6427" /><label class="option_text" for="quiz_option_id_6427">chowhound</label></li></ul></div><div class="question"><p class="question-text">Which of the following is a type of dog?</p><ul class="options"><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6445" value="6445" /><label class="option_text" for="quiz_option_id_6445">beaver dog</label></li><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6444" value="6444" /><label class="option_text" for="quiz_option_id_6444">otter dog</label></li></ul></div><div class="question"><p class="question-text">Which of the following is a type of dog?</p><ul class="options"><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6415" value="6415" /><label class="option_text" for="quiz_option_id_6415">prairie dog</label></li><li class="radio question_option" data-behaviour="ga-event-quiz" data-value="clicks"><input type="radio" name="quiz_option_id" id="quiz_option_id_6414" value="6414" /><label class="option_text" for="quiz_option_id_6414">cattle dog</label></li></ul></div><div class="question last"><h3 class="score-message">You scored <span class="final-score"></span>/10 practise again?</h3><button class="retry-quiz">Retry</button></div></div></form><button name="button" type="button" data-behaviour="ga-event-quiz" data-value="next question" class="next-question" html="{:disabled=&gt;&quot;disabled&quot;}">Next</button><div class="score-counter"><span class="current-score">0</span>/10</div></div><br /></div><div class="trending-panel-odo sideTrendWrap"><div class="trend" lang="en"><section class="boxSizing"><span class="trend-title-wrapper"><span class="trend-title">Trending Words</span></span><div class="popular"><p><span>Most popular in the world</span></p></div><ol class="words_section"><li><a data-behaviour="ga-event-trending-words" data-value="word 1" href="/definition/mangy">mangy</a></li><li><a data-behaviour="ga-event-trending-words" data-value="word 2" href="/definition/winery">winery</a></li><li><a data-behaviour="ga-event-trending-words" data-value="word 3" href="/definition/stemmed">stemmed</a></li><li><a data-behaviour="ga-event-trending-words" data-value="word 4" href="/definition/quids_in">quids in</a></li><li><a data-behaviour="ga-event-trending-words" data-value="word 5" href="/definition/polyglossia">polyglossia</a></li></ol></section></div></div></div></aside></div></div></div><div class="violbox h-box lex"><div class="container full"><div class="further_reading" id="further_reading_section"><span>Are You Learning English? Here Are Our Top English Tips</span></div><div class="quizzes layout"><div class="quizze"><section><a href="/grammar/spelling" data-behaviour="ga-event" aria-label="Further reading - story 6" data-value="Further reading - story 6"><div class="box-img" data-ratiox="16" data-ratioy="9.5"><img alt="Generic 1 min" data-src="https://s3.amazonaws.com/lexico.useremarkable.com/production/images/uploads/7330/medium/generic-1-min.jpg" class="lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" /></div><article><div><span class="further_reading_article_title">Basic Guidelines For English Spellings</span><p></p></div><p class="tertiary-link">READ THESE ARTICLES</p></article></a></section></div><div class="banbox-mini"><div class="banner adUnit  marked-ad"><div id="lexi_serp_dkt_atf_300x250_30"><script>googletag.cmd.push(function() { googletag.display("lexi_serp_dkt_atf_300x250_30"); });</script></div><div id="lexi_serp_mweb_btf_300x250_20"><script>googletag.cmd.push(function() { googletag.display("lexi_serp_mweb_btf_300x250_20"); });</script></div></div></div><div class="quizze"><section><a href="/grammar/writing-help" data-behaviour="ga-event" aria-label="Further reading - story 6" data-value="Further reading - story 6"><div class="box-img" data-ratiox="16" data-ratioy="9.5"><img alt="Generic 3 min" data-src="https://s3.amazonaws.com/lexico.useremarkable.com/production/images/uploads/7333/medium/generic-3-min.jpg" class="lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" /></div><article><div><span class="further_reading_article_title">Here Are The Top English Writing Tips</span><p></p></div><p class="tertiary-link">READ THESE ARTICLES</p></article></a></section></div><div class="quizze"><section><a href="/grammar/usage" data-behaviour="ga-event" aria-label="Further reading - story 6" data-value="Further reading - story 6"><div class="box-img" data-ratiox="16" data-ratioy="9.5"><img alt="Going out min" data-src="https://s3.amazonaws.com/lexico.useremarkable.com/production/images/uploads/7338/medium/going-out-min.jpg" class="lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" /></div><article><div><span class="further_reading_article_title">The Best Articles To Improve Your English Language Usage </span><p></p></div><p class="tertiary-link">READ THESE ARTICLES</p></article></a></section></div><div class="quizze"><section><a href="/explore/word-lists" data-behaviour="ga-event" aria-label="Further reading - story 6" data-value="Further reading - story 6"><div class="box-img" data-ratiox="16" data-ratioy="9.5"><img alt="All right or alright min" data-src="https://s3.amazonaws.com/lexico.useremarkable.com/production/images/uploads/7316/medium/all-right-or-alright-min.jpg" class="lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" /></div><article><div><span class="further_reading_article_title">Fun English Word Lists To Explore</span><p></p></div><p class="tertiary-link">READ THESE ARTICLES</p></article></a></section></div><div class="quizze"><section><a href="/explore/language-questions" data-behaviour="ga-event" aria-label="Further reading - story 6" data-value="Further reading - story 6"><div class="box-img" data-ratiox="16" data-ratioy="9.5"><img alt="Algo min" data-src="https://s3.amazonaws.com/lexico.useremarkable.com/production/images/uploads/7326/medium/algo-min.jpg" class="lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" /></div><article><div><span class="further_reading_article_title">The Most Common English Language Questions</span><p></p></div><p class="tertiary-link">READ THESE ARTICLES</p></article></a></section></div></div></div></div></div></div><a id="feedbackTab" title="Tell us your opinion!" href="https://www.surveymonkey.com/r/D293BWP" target="_blank" rel="noopener">Feedback</a><footer id="footer"><div class="container"><div class="footerWrap"><div class="footerNav" lang="en"><nav class="inlineBlock"><p>Find Out More</p><ul><li><a data-behaviour="ga-event-footer" target="false" data-value="About " href="/about">About </a></li><li><a data-behaviour="ga-event-footer" target="false" data-value="Contact Us " href="/contact-us">Contact Us </a></li><li><a data-behaviour="ga-event-footer" target="false" data-value="Cookies, Terms, &amp; Privacy" href="/cookies-terms-privacy">Cookies, Terms, &amp; Privacy</a></li><li><a data-behaviour="ga-event-footer" target="false" data-value="Do Not Sell My Info" href="https://privacyportal.onetrust.com/webform/b7274337-1a89-410c-b2c8-1d563f27053a/b3f266b5-8ef7-4dab-9c34-63dbb80fb2d5">Do Not Sell My Info</a></li></ul></nav><nav class="inlineBlock"><p>More from Lexico.com</p><ul><li><a data-behaviour="ga-event-footer" target="false" data-value="Lexico.com" href="/">Lexico.com</a></li><li><a data-behaviour="ga-event-footer" target="false" data-value="Lexico.com Spanish " href="/es/">Lexico.com Spanish </a></li><li><a data-behaviour="ga-event-footer" target="false" data-value="Browse The English Dictionary" href="/list/0">Browse The English Dictionary</a></li><li><a data-behaviour="ga-event-footer" target="false" data-value="Browse The Spanish Dictionary" href="/es/list/0">Browse The Spanish Dictionary</a></li><li><a data-behaviour="ga-event-footer" target="false" data-value="Browse The English - Spanish Translations" href="/en-es/list/0">Browse The English - Spanish Translations</a></li><li><a data-behaviour="ga-event-footer" target="false" data-value="Browse The Spanish - English Translations" href="/es-en/list/0">Browse The Spanish - English Translations</a></li><li><a data-behaviour="ga-event-footer" target="false" data-value="Browse the Thesaurus" href="/synonym_list/0">Browse the Thesaurus</a></li><li><a data-behaviour="ga-event-footer" target="false" data-value="Browse Grammar" href="/grammar/list">Browse Grammar</a></li><li><a data-behaviour="ga-event-footer" target="false" data-value="Explore Articles" href="/explore/list">Explore Articles</a></li></ul></nav></div><p class="copyright">&copy; 2020 Lexico.com</p></div></div></footer></div><div id="autocompleteWrap"></div><script>head.ready("application_monolingual-f2dede7accca99eea4d1b8db86145f711dade79397cf878eed9e4045363be91f.js", function () {
  App.init();
  App.initCore();
  initOdoPage();
  ahoy.trackView(); ahoy.trackClicks();
  initAutocompleteSearch();
  autoHighlightSearchTerm();
  showMobileSelector();
  registerGAEvents();
  $('body').resize();
  initQuiz();
});

registerListener('load', setLazy);
registerListener('load', lazyLoad);
registerListener('scroll', lazyLoad);

var lazy = [];

function setLazy(){
  lazy = document.getElementsByClassName('lazy');
  console.log('Found ' + lazy.length + ' lazy images');
} 

function lazyLoad(){
  for(var i=0; i<lazy.length; i++){
    if(isInViewport(lazy[i])){
      if (lazy[i].getAttribute('data-src')){
        lazy[i].src = lazy[i].getAttribute('data-src');
        lazy[i].removeAttribute('data-src');
      }
    }
  }

  cleanLazy();
}

function cleanLazy(){
  lazy = Array.prototype.filter.call(lazy, function(l){ return l.getAttribute('data-src');});
}

function isInViewport(el){
  var rect = el.getBoundingClientRect();

  return (
    rect.bottom >= 0 && 
    rect.right >= 0 && 
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
   );
}

function registerListener(event, func) {
  if (window.addEventListener) {
    window.addEventListener(event, func)
  } else {
    window.attachEvent('on' + event, func)
  }
}

// Accessibility hack for selectbox, for Lighthouse purpose only
window.addEventListener('load', function () {
  document.querySelector('.sbToggle').innerHTML = "<span class='sr-only'>dropdown toggle</a>";
})</script><img class="daisy_tracker" src="https://track.lexico.com/main.gif?ab=0&amp;cb=14006204&amp;dc=Desktop&amp;ev=p&amp;pn=lexico&amp;rf=&amp;st=lexico" alt="Tiny transparent pixel" /></body></html>
`
