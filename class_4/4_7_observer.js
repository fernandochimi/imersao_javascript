var MY_PROJECT = MY_PROJECT || {};
MY_PROJECT.pubsub = MY_PROJECT.pubsub || {};

(function() {
    var topics = {};

    MY_PROJECT.pubsub.subscribe = function(topicName, action) {
        if (!topics[topicName]) {
            topics[topicName] = [];
        }
        topics[topicName].push(action);
    };

    MY_PROJECT.pubsub.publish = function(topicName, args) {
        if (!topics[topicName]) {
            return false;
        }
        for (var i = 0; i < topics[topicName].length; i++) {
            topics[topicName][i].apply(null, args);
        }
        return true;
    };
})();

var testSubscriptionOne = function() {
    console.log("testSubscriptionOne will be start with: ", arguments);
};

var testSubscriptionTwo = function() {
    console.log("testSubscriptionTwo will be start with: ", arguments);
};

var testSubscriptionThree = function() {
    console.log("testSubscriptionThree will be start with: ", arguments);
};

MY_PROJECT.pubsub.subscribe("Subscribe One", testSubscriptionOne);
MY_PROJECT.pubsub.subscribe("Subscribe Two", testSubscriptionTwo);
MY_PROJECT.pubsub.subscribe("Subscribe Three", testSubscriptionThree);

MY_PROJECT.pubsub.publish("Subscribe One", [1, 2, 3]);
MY_PROJECT.pubsub.publish("Another subscribe", ["one", "two", "three"]);