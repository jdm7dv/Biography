(function(k){var m=window.AmazonUIPageJS||window.P,v=m._namespace||m.attributeErrors,b=v?v("AmazonSmileAUIAssets",""):m;b.guardFatal?b.guardFatal(k)(b,window):b.execute(function(){k(b,window)})})(function(k,m,v){k.when("A","a-modal-factory","pldn-dynamic-campaign","pldn-log","PaladinHistoryModifier","ready").register("PaladinDynamicCampaign",function(b,d,a,h,c){if(a){var n=b.$("#pldn-dynamic-modal-displayed");if("0"===n.val()){n.val(1);n=b.$('\x3cspan style\x3d"display:none;"\x3e\x3c/span\x3e');b.$("body").append(n);
var g=d.create(n,a),p=function(f){f=g.getContent().find(".opt-out:checked, .opt-out input:checked");0<f.length&&(b.ajax("/gp/ch/campaign/opt-out/ref\x3d"+a.optOutRef,{method:"post",params:{campaign:a.campaign,creativeTreatment:a.creativeTreatment,token:a.candidateToken}}),b.trigger("pldn:campaign:opt-out",{popover:g,optElement:f}))};b.on("a:popover:show:"+a.name,function(f){g.$container.delegate(".dismiss","click",function(f){var e=b.$(this).attr("name"),h=b.$(this).hasClass("opt-out-link");(e||h)&&
g.attrs("close",a.dismissRef.replace("{{name}}",e||"dbt"));h&&(b.ajax("/gp/ch/campaign/opt-out/ref\x3d"+a.optOutRef,{method:"post",params:{campaign:a.campaign,creativeTreatment:a.creativeTreatment,token:a.candidateToken}}),b.trigger("pldn:campaign:opt-out",{popover:g,optElement:b.$(this)}));g.hide();f.preventDefault();f.stopPropagation();return!1}).delegate("a","click",function(a){b.trigger("pldn:campaign:link",{popover:g,link:b.$(this)});p()});a.modalCSSClass&&f.popover.$popover.addClass(a.modalCSSClass);
b.ajax("/gp/ch/campaign/count/ref\x3d"+a.countRef,{method:"post",params:{campaign:a.campaign,creativeTreatment:a.creativeTreatment,candidateToken:a.candidateToken}});c.pushState({modalShown:!0},null,"mdlOpen")});var l=b.$.Deferred();b.on("a:popover:dismiss:"+a.name,function(f){a.disButtonRef&&g.attrs("close",a.disButtonRef);b.off("a:popover:dismiss:"+a.name)});b.on("a:popover:afterHide:"+a.name,function(f){f=g.attrs("close")||a.dismissRef.replace("{{name}}","dbg");b.ajax("/gp/charity/ajax/track.html/ref\x3d"+
f,{method:"post",params:{campaign:a.campaign,creativeTreatment:a.creativeTreatment}});p();c.cleanup()});var f=b.state("pldn-campaign-airy-player");f&&k.when("Airy").execute("initAiryPlayer",function(a){var c=g.$container.find(".video-player"),e;f.streamingUrls||(f.streamingUrls=[c.data("video-url")],f.slateImages={preloadSlate:c.data("slate-image")});f.shouldStartHidden=!0;f.parentElement=c.get(0);e=a.embed(f);l.then(function(){e.show()});b.each("loadvideo play pause replay seek ended primary.viewedDuration fullscreen normalscreen audioon audiooff changevolume decodeerror networkerror undefinederror videounsupported".split(" "),
function(b,a){e.bind(b,h.event("airy",b))})});g.attrs("data",a);a.modalCSSClass&&b.off("a:popover:afterHide:"+a.name,function(b){setTimeout(function(){b.popover.$popover.removeClass(a.modalCSSClass)},500)});b.on("a:popover:show:"+a.name,function(b){l.resolve()});c.onChange(function(b){a.backDismissRef&&g.attrs("close",a.backDismissRef);g.hide()});if(a.autoShow)try{g.show()}catch(u){g.hide()}return g}}});k.when("A","a-modal","a-button","ready").register("PaladinEmail",function(b,d,a){function h(b){try{a("#"+
e.elements.submitButtonId)[b?"enable":"disable"]()}catch(f){r.find("#"+e.elements.submitButtonId)[b?"removeClass":"addClass"]("a-button-disabled")}r.find(":input").not(':input[type\x3d"submit"]').prop("disabled",!b)}function c(a){a=a.replace(/[,;]\s*/g,", ");a=a.replace(/^(,|;|\s)+/,"");a=a.replace(/(,|;|\s)+$/,"");a=b.$.trim(a);a=a.split(/[,;\s]+/);var f=[];b.each(a,function(a){a=b.$.trim(a);""!==a&&0>b.indexOfArray(f,a)&&f.push(a)});return f}function n(a){var f=[];a&&(a=c(a),b.each(a,function(b){b.match(/^[_a-zA-Z0-9\-+]+(\.[_a-zA-Z0-9\-+]+)*@[a-zA-Z0-9\-+]+(\.[a-zA-Z0-9\-+]+)*(\.[a-zA-Z]{2,4})$/)||
f.push(b)}));return f}function g(a){h(!0);r.find("#"+e.elements.errBoxId).show().find("p").html(a);b.$(m).resize()}function p(b){h(!0);t.html(b)}function l(a){h(!0);(a=b.$(a.responseText))&&0<a.find(".responseText").length&&g(a.find(".responseText").text())}function f(){r.submit(function(a){a.preventDefault();h(!1);a=r.find("#"+e.elements.recipientsId).val();var f=r.find("#"+e.elements.carbonCopyId).is(":checked"),d=r.find("#"+e.elements.messageId);d.length&&d.val();if(!a&&!f)return g(e.noRecipient),
!1;f=n(a);if(0<f.length)return g(e.badAddress+"\n"+f.join(", ")),!1;if(c(a).length>e.emailLimit)return g(e.maxRecipients),!1;a=r.find("#"+e.elements.recipientsId);f=r.find("#"+e.elements.carbonCopyId);a=c(a.val());f={subjectId:e.email.subjectStringId,recipients:a.join(", "),ccSender:f.is(":checked")?1:0,htmlTemplate:e.email.htmlTemplate,subCategory:e.email.subCategory,fromName:e.email.fromName,data:e.email.data,token:e.email.token};if(d=r.find("#"+e.elements.messageId))f.message=d.val();a=e.link(a.length);
b.$.post(a,{data:JSON.stringify(f)},p).error(l)}).find("#"+e.elements.errBoxId).hide()}function u(a,f,e){var c=[];if(!a)return console.log(e+" missing."),!1;b.each(f,function(b,f){a.hasOwnProperty(b)||(console.log(b),c.push(b))});c.length&&console.log(e+" missing element(s): "+c.join(", "));return 0===c.length}function x(){var a=[];b.each(["recipientsId","carbonCopyId"],function(b,f){var c=e.elements[b];c&&0!==r.find(":input#"+c).length||a.push(b)});a.length&&console.log("Email form missing element(s): "+
a.join(", "));return 0===a.length}var q=b.state("pldn-email");if(q){var e;e={emailLimit:10,noRecipient:"No Recipients",maxRecipients:"Max Recipients: 10",badAddress:"Bad Address",url:"",link:function(a){return this.url.replace(/_COUNT_/,a)}};b.$.extend(e,q);if(u(e,["emailLimit","noRecipient","maxRecipients","badAddress","url"],"Config")&&u(e.email,["htmlTemplate","data","subCategory","fromName","token"],"Email")&&u(e.popover,["popoverName","triggerId","header","width"],"Popover")){var k,t=b.$("#"+
e.popover.popoverName),r=t.children("form"),q=b.$("#"+e.popover.triggerId);if(1===t.length&&1===r.length&&1===q.length&&x()){var w={name:e.popover.popoverName,activate:"onclick",header:e.popover.header,width:e.popover.width};e.popover.label&&(w.popoverLabel=e.popover.label);d.create(q,w);q.click(function(){k?(r.unbind(),t.empty().html(k),r=t.children("form")):k=t.html();f()})}}}});k.when("A","pldn-log","ready").register("pldn-storage",function(b,d){function a(a){this.storageKey="amazonSmile"+a.substring(0,
1).toUpperCase()+a.substring(1)}a.prototype.log=function(a,b){b=b||{};b.key=this.storageKey;d.log("PaladinStorage",a,b)};a.prototype.error=function(a,b){this.log("error",{call:a,data:b})};a.prototype.getValue=function(){if(!b.capabilities.localStorage)return this.log("localStorageUnavailable"),{};try{return localStorage[this.storageKey]?b.parseJSON(localStorage[this.storageKey]):{}}catch(a){return this.error("get"),{}}};a.prototype.setValue=function(a){if(b.capabilities.localStorage)try{localStorage[this.storageKey]=
JSON.stringify(a)}catch(c){this.error("save",a)}else this.log("localStorageUnavailable")};return a});k.when("A","ready").register("pldn-log",function(b){var d=b.state("pldn-log-state"),a=function(a){return b.$.extend(a,d)},h=(new Date).getTime(),c=m.ue;c||(c=d&&1==d.internal?{log:function(a,b,c){console.debug({info:a,channel:b,options:c})}}:{log:function(a,b,c){}});var n=function(){var a=(new Date).getTime(),b=c.t0||h,n=(new Date(d.serverDateTime)).getTime();return(new Date(a-b+n)).toUTCString()};
return{event:function(b,d){return function(h,f){c.log(a({eventType:b,eventName:d,eventDateTime:n(),eventContext:f}),"paladin")}},log:function(d,h,l){d=b.$.extend({},{eventType:d,eventName:h,eventDateTime:n()});l&&(d.eventData=l);c.log(a(d),"paladin")}}});k.when("A","pldn-log","pldn-storage","ready").register("SmileCampaign",function(b,d,a){function h(a,b,c){this.date=a?new Date(a):new Date;this.date.setSeconds(0);this.date.setMinutes(0);this.date.setHours(0);this.redirect=!!b;this.optOut=!!c}function c(a){this.campaigns=
{};a&&this.extend(a)}function n(a){var b=new c;b.addCampaign({hits:[],optOut:!1},a);return b}function g(a){var c=this;this.campaignType=a.campaignType;this.logType="SmileCampaign-"+this.campaignType;var g=b.$.extend({},k,a.campaignConfig),q=function(b){d.log(c.logType,b?"show":"noshow");return a.callback&&"function"==typeof a.callback&&a.callback(b)||b};if(b.capabilities.localStorage){var e=n(this.campaignType);e.extend(l.getValue());this.campaign=e.campaigns[this.campaignType];if(this.campaign.optOut)q(!1);
else{var m=g.showOnFirstHit;if(0<this.campaign.hits.length){var m=this.campaign.hits.length-g.showOnFirstHit?0:1,t=this.campaign.hits[this.campaign.hits.length-1].date,r=864E5*g.resetDeltaDays;t&&t<new Date-r?(m=!0,this.campaign.hits=[]):m=t<new Date-864E5*g.redisplayDeltaDays&&m<g.maxDisplays;m&&(this.currentHit=new h(new Date,!1,!1),this.campaign.hits.push(this.currentHit))}else this.currentHit=new h(new Date,!1,!1),this.campaign.hits.push(this.currentHit),d.log(this.logType,"noLocalHistory");l.setValue(e.campaigns);
q(m)}}else l.log("localStorageUnavailable"),q(g.showOnFirstHit)}var k={maxDisplays:3,redisplayDeltaDays:7,resetDeltaDays:90,showOnFirstHit:!1},l=new a("campaigns");c.prototype.addCampaign=function(a,c){this.campaigns[c]={optOut:!!a.optOut,hits:b.$.isArray(a.hits)?b.map(a.hits,function(a){return new h(a.date,a.redirect,a.optOut)}):[]}};c.prototype.extend=function(a){var c=this;b.each(a,function(a,b){c.addCampaign(a,b)})};g.prototype.customerResponse=function(a){a=a||{};d.log(this.logType,"response",
a);this.currentHit?(this.currentHit.redirect=!!a.redirect,this.currentHit.optOut=!!a.optOut):(this.currentHit=new h(new Date,!!a.redirect,!!a.optOut,!0),this.campaign.hits.push(this.currentHit));a.optOut&&(this.campaign.optOut=!!a.optOut);var b=n(this.campaignType);b.extend(l.get("campaigns"));b.campaigns[this.campaignType]=this.campaign;l.setValue(b.campaigns);return a.callback&&"function"==typeof a.callback&&a.callback()};return g});k.when("A","PaladinDynamicCampaign","SmileCampaign").execute("pldn-ucol-check",
function(b,d,a){function h(a){a&&(d.show(),b.trigger("rw:overlay:displayed"))}if(d){var c=d.attrs("data");c&&!c.autoShow&&new a({campaignType:c.campaign,campaignConfig:c.campaignConfig||{},callback:h})}});k.when("A").register("PldnCampaignTracker",function(b){function d(a,d){var c={};b.each(d,function(b){a[b]&&(c[b]=a[b])});return c}return{track:function(a,h){b.ajax("/gp/charity/ajax/track.html/ref\x3d"+a,{method:"post",params:d(h,"campaign creativeTreatment customer_id session_id request_id domain server ubid page_type sub_page_type internal prime".split(" "))})}}});
k.when("A").register("PaladinHistoryModifier",function(b){var d=0,a,h,c;b.$(m).bind("popstate",function(a){d--});m.history&&m.history.pushState?(a=function(a,c,h){b.equals(m.history.state,a)||m.history.pushState(a,c,null);d++},h=function(a){b.$(m).bind("popstate",a)},c=function(){0<d&&m.history.go(-d)}):a=h=c=function(){};return{pushState:a,onChange:h,cleanup:c}});k.when("A","ready").execute("pldn-load-dynamic-campaign",function(b){if(b.state("pldn-dynamic-campaign"))k.register("pldn-dynamic-campaign",
function(){return b.state("pldn-dynamic-campaign")});else b.on("a:state:update:pldn-dynamic-campaign",function(d){k.register("pldn-dynamic-campaign",function(){return b.state("pldn-dynamic-campaign")})})});k.when("A","PldnFocusHelper","ready").register("PaladinDropsheet",function(b,d){function a(a){0<b.$(a.target).closest(".pldn-aui-dropsheet").length||(a.preventDefault(),h("dbg"))}function h(c){g||(g=!0,n&&(n.stop(),p.unbind()),p.slideUp("normal"),p.attr("aria-hidden","true"),(c=l.refTagPrefix+"_"+
c+"_smi"+f)&&b.post("/gp/charity/ajax/track.html/ref\x3d"+c,{params:{pageType:l.pageType}}),b.$(document).unbind("click",a))}function c(a,b){var c,e,d=b;this.start=function(){e=new Date;c=m.setTimeout(a,d)};this.stop=function(){clearTimeout(c)};this.hoverOn=function(){this.stop()};this.hoverOff=function(){var a=new Date-e;d=a<b?b-a:500;this.start()};this.start()}var n,g,p=b.$(".pldn-aui-dropsheet"),l=b.state("pldn-dropsheet");if(l&&0!==p.length){var f=l.refTagSuffix?"_"+l.refTagSuffix:"";k.when("nav.navDimensions",
"PaladinUtils").execute("PaladinDropsheetRender",function(g,k){var q=b.$("#pldn-dropsheet-displayed"),e=new d(p);if("1"===q.val())return!1;b.$("body").prepend(p.css({width:"auto"==l.width?"inherit":l.width,top:g().bottom}));p.get(0).style.left=b.$(m).width()/2-p.width()/2+"px";p.keydown(function(a){27===a.which&&h("esc")});p.slideDown("slow",function(){var a=l.refTagPrefix+"_cnt_smi"+f;a&&b.post("/gp/ch/campaign/count/ref\x3d"+a,{params:{pageType:l.pageType,campaign:l.campaign,creativeTreatment:l.treatment,
candidateToken:l.candidateToken}});p.attr("aria-hidden","false");b.$(":focus");b.$(".nav-input")&&b.$(".nav-input").is(":focus")||(e.getFirstFocusedItem().focus(),e.trapTab())});q.val(1);b.declarative("pldn-close-dropsheet","click",function(a){h("dis")});l.bkgDismiss&&b.$(document).click(a);q=l.autoDismiss;0<q&&(n=new c(function(){h("dtm")},q),p.hover(function(){n.hoverOn()},function(){n.hoverOff()}));q=k.debounce(function(){p.get(0).style.left=b.$(m).width()/2-p.width()/2+"px"},150);b.$(m).resize(q)})}});
k.register("PaladinUtils",function(){return{debounce:function(b,d){var a;return function(){var h=this,c=arguments;clearTimeout(a);a=setTimeout(function(){a=null;b.apply(h,c)},d)}}}});k.when("A").register("PldnFocusHelper",function(b){function d(a){this.$el=a}d.prototype.getFirstFocusedItem=function(){return this.$el.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(":visible").first()};
d.prototype.trapTab=function(){var a=this.$el;a.bind("keydown",function(d){if(9===d.which){var c=a.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(":visible"),k=b.$(":focus"),g=c.length,k=c.index(k);d.shiftKey?0===k&&(c.get(g-1).focus(),d.preventDefault()):k===g-1&&(c.get(0).focus(),d.preventDefault())}})};return d});k.when("A").execute("SmilePopoverTracker",
function(b){var d={};b.on("a:popover:show",function(a){a.popover.data&&(a=a.popover.data.hoverRef)&&(1<=d[a]||(b.ajax("/gp/charity/ajax/track.html/ref\x3d"+a,{method:"post"}),d[a]=(d[a]||0)+1))})})});