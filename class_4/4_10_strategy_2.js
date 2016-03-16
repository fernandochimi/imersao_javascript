var Editor = Editor || {};
Editor.formatStrategies = {
    LeftAligner: function(contents) {
        this.format = function() {
            // some code...
            return contents;
        };
    },

    RightAligner: function(contents) {
        this.format = function() {
            // some code...
            return contents;
        };
    },

    Justifier: function(contents) {
        this.format = function() {
            // some code...
            return contents;
        };
    },
};

Editor.Text = function(contents, formatter) {
    this.contents = contents;
    this.formatter = formatter;
};

Editor.Text.prototype.format = function() {
    var formatter = new Editor.formatStrategies[this.formatter](this.contents);
    return formatter.format();
};

var text = new Editor.Text("Blablabla\nBlebleble\nBliblibli", "RightAligner");
text.format();