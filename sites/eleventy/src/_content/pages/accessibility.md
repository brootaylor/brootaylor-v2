---
title: "Accessibility statement."
# Populates the `meta description` for a page
summary: "This website is committed to providing a usable experience for anyone visiting it, regardless of technology or ability."
bodyClass: "accessibility"

tags: "page" # This `page` tag is here so that the service worker picks them up. These pages are picked up in the `mainnav` or `footernav` loops

date: 2023-07-25T19:06:00

changefreq: "yearly"
---

This website is committed to providing a usable experience for anyone visiting it, regardless of technology or ability. It strives to meet the level AA standards outlined in the [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/). This guide helps to explain how to make web content easier to use for disabled people.

---

## Accessibility features

The code powering this website is [standards-compliant HTML, CSS, and JavaScript](https://www.w3.org/standards/).

The pages are structured with semantic elements like `header`, `nav`, `main` and `footer`. Hopefully this will help you move around more quickly. Heading `h1` elements mark the main content area of each page, and each page’s structure should follow a logical heading order from there.

Every page on this website has a “*skip to the main content*” link at the top and bottom, as well as a “*back to top*" link at the very bottom which will return you to the start of this page / document.

Images and inline SVGs are described with text equivalents, to ensure everyone can access graphical content. You should be able to zoom each page up to at least 300% without any issues.

All form `label` and associated `input` fields use a unique value for their respective `for` and `id` attributes.

There are no `javascript:` pseudo-links. All links can be followed in any browser, even if scripting is turned off. There are no links that open new windows without warning.

---

## Testing

This website has been tested on modern browsers, with occasional checks in older devices or browsers to make sure it’s usable. I frequently test my work with the [VoiceOver](https://www.apple.com/accessibility/vision/) screen reader as well as the built in screenreader for [Microsoft Edge](https://support.microsoft.com/en-us/microsoft-edge/accessibility-features-in-microsoft-edge-4c696192-338e-9465-b2cd-bd9b698ad19a). I occasionally run accessibility audits in [aXe](https://www.deque.com/axe/) and [WAVE](https://wave.webaim.org/).

---

## Known issues

Sometimes I embed media in my posts, like audio or video. Some of these posts may have media that isn't adequately described. I plan to correct this, but if you encounter confusing media, please [email me](/contact) to let me know.

---

## Send me feedback

I do care about accessibility but am still learning new things about it most days. If there are any issues with this site's accessibility please let me know by submitting a [GitHub issue](https://github.com/brootaylor/brootaylor-v2/issues), or by [emailing me directly](/contact). I will try to remedy the problem as quickly as time allows. I honestly would welcome your feedback or suggestions.
