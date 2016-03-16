var MY_PROJECT = MY_PROJECT || {}
MY_PROJECT.clients = MY_PROJECT.clients || {/* ... */};

MY_PROJECT.clients.Client = function(attributes) {
    this.name = attributes.name;
    this.documentNumber = attributes.documentNumber;
    // ...
};

var myClient = new MY_PROJECT.clients.Client({
    name: "Joseph",
    documentNumber: "789.123.465-00",
});