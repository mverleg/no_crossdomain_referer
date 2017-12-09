
No cross-domain referer
===============================

*Status*: This addon is discontinued for the time being. It appears_ that WebExtensions don't offer a way to change preferences, which is all this addon does. There seem to be no plans to change this (as there is presumably a reason for this change). You will have to achieve the same effect by hand, as follows:

Go to ``about:config`` and change:

* Only send the referer header within the same base domain: ``network.http.referer.userControlPolicy = 1``.
* Only include the domain name in the referer header: ``network.http.referer.trimmingPolicy = 2``.

Description
---------------------------------------

This simple add-on changes Firefox settings such that the referer(referrer) header is sent only within a domain, not when linking to other domain. This prevents websites from knowing how you reached them, which might be desirable for privacy reasons, without breaking most websites that check referer header.

It changes these Firefox settings:

* ``network.http.referer.XOriginPolicy`` = 1; this sends referer headers only within the same base domain. For example, it will send from ``alpha.site.com`` to ``beta.site.com``, but not ``site.com`` to ``another.net``.
* ``network.http.referer.trimmingPolicy`` = 2; this sends the url ``https://demo.site.com/path/to/thing.html?arg=value`` as ``https://demo.site.com``.

It does not change ``network.http.referer.spoofSource``, since some websites rely on referers for security (CSRF protection). Spoofing this would bypass that protection, whereas the current scheme works within the site and fails between sites (failure being preferable to security vulnerabilities). It also does not change ``network.http.sendRefererHeader`` (so referer does not depend on media type).

Contributions
---------------------------------------

Any additional blocking rules are most welcome! You can request them at https://github.com/mverleg/no_crossdomain_referer/issues

License
---------------------------------------

Revised BSD License, see https://github.com/mverleg/no_crossdomain_referer/blob/master/LICENSE.txt. You can use the addon as you choose, without warranty. The code is also available, see Contributors.

Other addons
---------------------------------------

* `Block 'read more'`_ removes distracting 'read more' sections on a select number of websites.
* `Block comments`_ removes comments on a select number of websites where they're known to be particularly bad.
* `Quora unfade`_ removes the fading effect and login box that Quora forces upon its visitors.
* `No cross-domain referer`_ changes a few settings to limit the use of cross-domain referer headers, which enhances your online privacy.

.. _Block comments: https://addons.mozilla.org/en-US/firefox/addon/block-comments/
.. _Block 'read more': https://addons.mozilla.org/en-US/firefox/addon/block_read_more/
.. _Quora unfade: https://addons.mozilla.org/en-US/firefox/addon/quora-unfade/
.. _No cross-domain referer: https://addons.mozilla.org/en-US/firefox/addon/no-cross-domain-referer/

.. _appears: https://discourse.mozilla.org/t/setting-browser-preferences-when-using-webextensions-api/8561


