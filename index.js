
var self = require("sdk/self");
var prefs = require('sdk/preferences/service');


// Only send the referer header within the same base domain.
prefs.set('network.http.referer.XOriginPolicy', 1);

// Only include the domain name in the referer header.
prefs.set('network.http.referer.trimmingPolicy', 2);

// Do not send pings for anchors that request them (already default).
// prefs.set('browser.send_pings', false);

// Hide battery status.
// prefs.set('dom.battery.enabled', false);

// Add the 'do not track' header.
// prefs.set('privacy.donottrackheader.enabled', true);

// Turn on tracking protection.
// prefs.set('privacy.trackingprotection.enabled', true);

// Hiding user agent has too many downsides
// general.useragent.override


