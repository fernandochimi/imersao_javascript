var MY_PROJECT = MY_PROJECT || {}
MY_PROJECT.dom = MY_PROJECT.dom || {
    resizeElements: function() {
        if (window.navigator.userAgent.match(/iPad|iPhone/)) {
            MY_PROJECT.dom.resizeElements = function() {
                // code for iPod/iPhone...
            };
        } else {
                // code for generic...
            };
    }
};

MY_PROJECT.dom.resizeElements();