var MY_PROJECT = MY_PROJECT || {}
MY_PROJECT.dom = MY_PROJECT.dom || {/* ... */};

if (window.navigator.userAgent.match(/iPad|iPhone/)) {
    MY_PROJECT.dom.resizeElements = function() {
        // code for iPod/iPhone...
    };
} else {
    MY_PROJECT.dom.resizeElements = function() {
        // code for generic...
    };
}