import React from "react"

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  // Add GTM script to head
  setHeadComponents([
    <script
      key="google-tag-manager-head"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-K885L6');
        `,
      }}
    />,
  ])

  // Add GTM noscript iframe immediately after opening body tag
  setPostBodyComponents([
    <noscript key="google-tag-manager-noscript">
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-K885L6"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>,
  ])
}
