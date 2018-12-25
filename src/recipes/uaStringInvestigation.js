/* 
    RECIPE: UA String Investigation
    -------------------------------------------------------------
    Author: Sertay Sener
    Description: Looks for keywords within the text content.

*/


void function () {
    var hasLogged = false;

    window.CSSUsage.StyleWalker.recipesToRun.push(function uaStringInvestigation(element, results) {

        if (hasLogged) {
            return results;
        } else {
            const keywords = ['edge', 'chrome', 'browser', 'unsupported', 'ie', 'internet explorer', 'google', 
          'switch_phrase', 'supported_phrase', 'support?_your_browser', 'chrome_version_plus', 'google_chrome'];
            const patterns = [/edge/gi, /chrome/gi, /browser/gi, /unsupported/gi, /ie/gi, /internet ?explorer/gi, /google/gi,
              new RegExp("((?:Switch|Upgrade|Update to|Get|Download|Install)(?:\\w|\\s)+(?:Google|Chrome|Safari|firefox|Opera|Internet Explorer|IE))","i"),
              new RegExp("((?:browser|Edge)(?:\\w|\\s)+(?:isn't|not|no longer)(?:\\w|\\s)+(?:supported|compatible))", "i"),
              /(support)? your|this ?browser/gi, /(google)? chrome \d+?/gi, /google chrome/gi
            ];

            for (var i = 0; i < patterns.length; i++) {
                var found = document.body.textContent.match(patterns[i]);

                if (found) {
                    results[keywords[i]] = { hits: found.length };
                } else {
                    results[keywords[i]] = { hits: 0 };
                }
            }

            hasLogged = true;
            return results;
        }

    });

}();