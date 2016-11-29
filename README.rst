
No cross-domain referer
===============================

This simple add-on changes Firefox settings such that the referer(referrer) header is sent only within a domain, not when linking to other domain. This prevents websites from knowing how you reached them, which might be desirable for privacy reasons, without breaking most websites that check referer header.

It changes these Firefox settings:

* ``network.http.referer.XOriginPolicy`` = 1; this sends referer headers only within the same base domain. For example, it will send from ``alpha.site.com`` to ``beta.site.com``, but not ``site.com`` to ``another.net``.
* ``network.http.referer.trimmingPolicy`` = 2; this sends the url ``https://demo.site.com/path/to/thing.html?arg=value`` as ``https://demo.site.com``.

It does not change ``network.http.referer.spoofSource``, since some websites rely on referers for security (CSRF protection). Spoofing this would bypass that protection, whereas the current scheme works within the site and fails between sites (failure being preferable to security vulnerabilities). It also does not change ``network.http.sendRefererHeader`` (so referer does not depend on media type).



