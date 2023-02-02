// ==UserScript==
// @name CheckIfShopify
// @namespace http://tampermonkey.net/
// @version 0.1
// @description Check if the current website is hosted by Shopify or is a Shopify store.
// @author Vinny Goeijenbier
// ==/UserScript==

(function() {
    'use strict';

    // Check if the current website is hosted by Shopify or is a Shopify store
    if (window.Shopify) {
        alert("This website is hosted by Shopify or is a Shopify store!");
    } else {
        alert("This website is not hosted by Shopify or is not a Shopify store.");
    }
})();
