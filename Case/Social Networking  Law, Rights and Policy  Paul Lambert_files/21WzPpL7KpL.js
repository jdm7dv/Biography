(function(n){var b=window.AmazonUIPageJS||window.P,k=b._namespace||b.attributeErrors,f=k?k("AuthorFollowAssets",""):b;f.guardFatal?f.guardFatal(n)(f,window):f.execute(function(){n(f,window)})})(function(n,b,k){function f(c){b.ue&&b.ue.tag&&b.ue.count&&(b.ue.tag(c,"authorFollow"),b.ue.count(c+"count",1))}function x(){var b=arguments[0],f=Array.prototype.slice.call(arguments,1);return b.replace(/\{(\d+)\}/g,function(b,a){var c=parseInt(a,10);return f[c]})}var H=b.location.protocol+"//"+b.location.hostname+
(b.location.port?":"+b.location.port:"")+"/ap/signin",I=/^(?:(?:(?:(\w\w)-)?pre-prod)|(?:.+))\.amazon.(?:(\w\w)|(com)|(?:co\.(?:(\w\w)))|(?:com\.(?:(\w\w))))?$/,J={au:"A39IBJ37TRP1C6",br:"A2Q3Y263D00KWC",ca:"A2EUQ1WTGCTBG2",cn:"AAHKV2X7AFYLW",de:"A1PA6795UKMFR9",es:"A1RKKUPIHCS9HS",fr:"A13V1IB3VIYZZH","in":"A21TJRUUN4KGV",it:"APJ6JRA9NG5V4",jp:"A1VC38T7YXB528",mx:"A1AM78C64UM0Y8",nl:"A1805IZSGTT6HS",ru:"AD2EMQ3L3PG8S",uk:"A1F83G8C2ARO7P",com:"ATVPDKIKX0DER"},K={A39IBJ37TRP1C6:"auflex",A2Q3Y263D00KWC:"brflex",
A2EUQ1WTGCTBG2:"caflex",AAHKV2X7AFYLW:"cnflex",A1PA6795UKMFR9:"deflex",A1RKKUPIHCS9HS:"esflex",A13V1IB3VIYZZH:"frflex",A21TJRUUN4KGV:"inflex",APJ6JRA9NG5V4:"itflex",A1VC38T7YXB528:"jpflex",A1AM78C64UM0Y8:"mxflex",A1805IZSGTT6HS:"nlflex",AD2EMQ3L3PG8S:"ruflex",A1F83G8C2ARO7P:"gbflex",ATVPDKIKX0DER:"usflex"};n.when("jQuery").register("followButtonJS",function(c){function k(a){function B(){var g;(g=!C)||(g=/author-follow=([^#&]+)/.exec(b.location.search),g=(g&&2===g.length?g[1]:void 0)!==e);if(g||"undefined"===
typeof sessionStorage)return!1;g=sessionStorage.followKey;sessionStorage.removeItem("followKey");return g===e}function m(){a.closest(".hide").removeClass("hide")}function D(){n.when("A","a-modal").execute(function(g,a){var d=c("#followErrorPopoverTrigger"),b=a.create(d,{name:"followErrorPopover",closeButton:!1,hideHeader:!0,popoverLabel:"followErrorPopover"});g.declarative("closeErrorDialog","click",function(){b.hide()});b.show()})}function E(g){var a=c(".author-follow-button");"undefined"!==typeof a&&
a.each(function(){var a=c(this).find("button"),b=a.attr("data-followingtext");"undefined"===typeof b&&(b="✓");var z=a.attr("data-followtext");"undefined"===typeof z&&(z="+");"undefined"!==typeof a&&a.attr("data-authorasin")===e&&(g?(a.html(b),a.attr("data-isFollowing","true")):(a.html(z),a.attr("data-isFollowing","false")))})}function L(){"undefined"!==typeof F&&"undefined"!==typeof t&&c.ajax({type:"GET",url:M,data:{per_result_recommendations_limit:3,scale_width:50,facet:"low",results_limit:1},success:function(a){var b=
c("#a-popover-"+F),d=JSON.parse(c("#"+t).attr("data-a-popover"));delete d.height;c("#"+t).attr("data-a-popover",JSON.stringify(d));for(var f=0,d=0;3>d;d++){var e,k,p="#similarAuthorRow_"+d,h=b.find(p),p=b.find(p+" + .a-divider-normal");try{e=a.results[0].recommendations[d].entity_data,k=a.results[0].recommendations[d].entity_id}catch(B){h.hide();p.hide();continue}f++;var p=e.name,m=e.url,q="",l;for(l=0;l<e.data.length;l++)q+=e.data[l].name,l<e.data.length-1&&(q+=", ");h.find("img").attr("src",e.image_url);
h.find(".authorImageLink").attr("href",m);l=h.find(".similarAuthorNameLink");l.attr("href",m);l.html(p);h.find(".inlineBibliography").html(q);h=h.find("button");h.attr("data-authorasin",k);"undefined"!==typeof r&&h.attr("data-followRef",r+"_i"+d);"undefined"!==typeof A&&h.attr("data-unfollowRef",A+"_i"+d)}0!==f&&(y(),n.when("a-popover").execute(function(a){a.get(c("#"+t)).show()}))},error:function(a){f("SimilarAuthorsRequestError")}})}function N(b){c.ajax({type:"DELETE",url:O+"?"+c.param({authenticity_token:b,
ref:A}),success:function(b){a.html(u);a.attr("data-isFollowing","false");E(!1)},error:function(a){f("AuthorUnfollowError");D()}})}function G(b){c.ajax({type:"POST",url:P,data:JSON.stringify({authenticity_token:b,entity_id:e,category:"author",ref:r}),dataType:"json",contentType:"application/json; charset\x3dutf-8",success:function(){a.html(v);a.attr("data-isFollowing","true");m();E(!0);L()},error:function(a){f("AuthorFollowError");D()}})}function Q(){c.ajax({type:"GET",url:R,data:{},success:function(b){b.isFollowable&&
(b.isFollowing?(a.html(v),m(),a.attr("data-isFollowing","true")):B()?G(b.csrf):(a.html(u),m(),a.attr("data-isFollowing","false")),a.click(function(){"true"===a.attr("data-isFollowing")?N(b.csrf):G(b.csrf)}))},error:function(a){f("AuthorFollowStatusError")}})}var e=a.attr("data-authorasin");if("undefined"!==typeof e){var r=a.attr("data-followref"),A=a.attr("data-unfollowref"),u=a.attr("data-followtext");"undefined"===typeof u&&(u="+");var v=a.attr("data-followingtext");"undefined"===typeof v&&(v="✓");
var S=r.replace("fa","df"),w="/follow/";a.attr("data-authorfollowendpoint")&&"undefined"!==typeof a.attr("data-authorfollowendpoint")&&(w=a.attr("data-authorfollowendpoint"));var R=w+e+"_author/?ref\x3d"+S,P=w+"?ref\x3d"+r,O=w+e+"_author/",M="/follow/v2/recommendations/author/"+e+"?recommenders[]\x3dsimilarities\x26entity_types[]\x3dauthor",C=a.attr("data-issignedin"),t=a.attr("data-similarauthorspopoverid"),F=a.attr("data-similarauthorspopovercontentname");"true"===C?void 0===a.attr("data-followLogicExecuted")&&
(a.attr("data-followLogicExecuted","true"),Q()):(m(),a.click(function(){var a=x("{0}\x3d{1}","author-follow",e),a=x("https://{0}{1}{2}",b.location.hostname,b.location.pathname,(b.location.search?b.location.search+"\x26":"?")+a);"undefined"!==typeof sessionStorage&&(sessionStorage.followKey=e);var c;a:{if(c=b.location.hostname.match(I))for(var d=1;d<c.length;d++)if(void 0!==c[d]){c=J[c[d]];break a}c="ATVPDKIKX0DER"}d=H.replace(/^https?:\/\//,"https://");a=x("{0}?openid.assoc_handle\x3d{1}\x26openid.claimed_id\x3d{2}\x26openid.identity\x3d{2}\x26openid.mode\x3dcheckid_setup\x26openid.ns\x3d{3}\x26openid.ns.pape\x3d{4}\x26openid.pape.max_auth_age\x3d0\x26openid.return_to\x3d{5}",
d,K[c],encodeURIComponent("http://specs.openid.net/auth/2.0/identifier_select"),encodeURIComponent("http://specs.openid.net/auth/2.0"),encodeURIComponent("http://specs.openid.net/extensions/pape/1.0"),encodeURIComponent(a));b.location.href=a}))}}function y(){var a=c(".author-follow-button");"undefined"!==typeof a&&a.each(function(){var a=c(this).find("button");"undefined"!==typeof a&&k(a)})}y();return{enableFollowButtons:y}})});