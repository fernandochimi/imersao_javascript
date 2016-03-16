var Editor = Editor || {};
Editor.Text = function(contents) {
    this.contents = contents;
};

Editor.Text.prototype.leftAlign = function() {
    // some code...
};

Editor.Text.prototype.rightAlign = function() {
    // some code...
};

Editor.Text.prototype.justify = function() {
    // some code...
};

var text = new Editor.Text("Blablabla\nBlebleble");
text.leftAlign();