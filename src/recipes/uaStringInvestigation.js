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
            const keywords = ['edge', 'chrome', 'browser', 'unsupported', 'ie', 'internet explorer', 'google'];
            const patterns = [/edge/gi, /chrome/gi, /browser/gi, /unsupported/gi, /ie/gi, /internet ?explorer/gi, /google/gi];

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