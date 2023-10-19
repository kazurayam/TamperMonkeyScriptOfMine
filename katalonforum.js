// ==UserScript==
// @name         Hide Trending Topics in Katalon Forum
// @version      0.1
// @description as suggested by Russ_Thomas at https://forum.katalon.com/t/trending-topics-banner-does-not-render-titles-correctly/87066/5
// @match        https://forum.katalon.com/*
// @match        https://forum.katalon.com/*/*
// ==/UserScript==

(function() {
    'use strict';
    if(window !== window.top) return;
    var $ = window.jQuery, styBig, stySmall;
    insertStyles();
})();

function insertStyles() {
    var style = `
<style>
/* Hide the custom search banner */
div.custom-search-banner-wrap h3 {
    display: none;
}
/* Hide the trending topics div */
div#ember9 h1, div#ember9 p {
    display:none;
}
div.hot-topic-container {
    display:none;
}
div#ember11, div#ember12 {
    display:none;
}
div.tc-right-sidebar {
    display:none;
}
div.consent_banner {
    display:none;
}
table > tbody > tr[data-topic-id="89762"]  td,
table > tbody > tr[data-topic-id="67591"]  td,
table > tbody > tr[data-topic-id="78531"]  td,
table > tbody > tr[data-topic-id="87264"]  td,
table > tbody > tr[data-topic-id="87970"]  td,
table > tbody > tr[data-topic-id="89118"]  td,
table > tbody > tr[data-topic-id="88349"]  td,
table > tbody > tr[data-topic-id="91038"]  td,
table > tbody > tr[data-topic-id="87756"]  td,
table > tbody > tr[data-topic-id="88550"]  td,
table > tbody > tr[data-topic-id="87765"]  td,
table > tbody > tr[data-topic-id="92374"]  td,
table > tbody > tr[data-topic-id="92712"]  td,
table > tbody > tr[data-topic-id="88539"]  td,
table > tbody > tr[data-topic-id="90872"]  td,
table > tbody > tr[data-topic-id="92984"]  td,
table > tbody > tr[data-topic-id="93099"] td,
table > tbody > tr[data-topic-id="93920"] td,
table > tbody > tr[data-topic-id="94351"] td,
table > tbody > tr[data-topic-id="94322"] td,
table > tbody > tr[data-topic-id="94517"] td,
table > tbody > tr[data-topic-id="94099"] td,
table > tbody > tr[data-topic-id="94133"] td,
table > tbody > tr[data-topic-id="95189"] td,
table > tbody > tr[data-topic-id="94627"] td,
table > tbody > tr[data-topic-id="93954"] td,
table > tbody > tr[data-topic-id="80889"] td,
table > tbody > tr[data-topic-id="95350"] td,
table > tbody > tr[data-topic-id="93118"] td,
table > tbody > tr[data-topic-id="93344"] td,
table > tbody > tr[data-topic-id="97688"] td,
table > tbody > tr[data-topic-id="97799"] td,
table > tbody > tr[data-topic-id="97311"] td,
table > tbody > tr[data-topic-id="97761"] td,
table > tbody > tr[data-topic-id="97323"] td,
table > tbody > tr[data-topic-id="98081"] td,
table > tbody > tr[data-topic-id="98168"] td,
table > tbody > tr[data-topic-id="98310"] td,
table > tbody > tr[data-topic-id="89057"] td,
table > tbody > tr[data-topic-id="86898"] td,
table > tbody > tr[data-topic-id="98760"] td,
table > tbody > tr[data-topic-id="９７３２０"] td,
table > tbody > tr[data-topic-id="98927"] td,
table > tbody > tr[data-topic-id="98296"] td,
table > tbody > tr[data-topic-id="99243"] td,
table > tbody > tr[data-topic-id="99043"] td,
table > tbody > tr[data-topic-id="99265"] td,
table > tbody > tr[data-topic-id=""] td,
table > tbody > tr[data-topic-id="90872"] td {
    display:none;
}
</style>`
    $('body').append(style);
}
