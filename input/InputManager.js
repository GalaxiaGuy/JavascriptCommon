function InputManager()
{
    var that = this;
    
    this.keys =
    {
        cursorLeft: new Key(37),
        cursorUp: new Key(38),
        cursorRight: new Key(39),
        cursorDown: new Key(40)
    };
    
    this.keysLookup = [];
    this.keysLookup[37] = this.keys.cursorLeft;
    this.keysLookup[38] = this.keys.cursorUp;
    this.keysLookup[39] = this.keys.cursorRight;
    this.keysLookup[40] = this.keys.cursorDown;
    
    window.addEventListener('keydown', function(e)
    {
        if (e.keyCode in that.keysLookup)
        {
            that.keysLookup[e.keyCode].pressed = that.keysLookup[e.keyCode].tapped = true;
        }
    });
    window.addEventListener('keyup', function(e)
    {
        if (e.keyCode in that.keysLookup)
        {
            that.keysLookup[e.keyCode].pressed = false;
        }
    });    
    
    this.inputHandlers = [];
}

InputManager.prototype.update = function()
{
    for (var key in this.keys)
    {
        this.keys[key].tapped = false;
    }
};

InputManager.prototype.handleInput = function()
{
    for (var handler in this.inputHandlers)
    {
        if (this.inputHandlers[handler].handleInput(this))
        {
            return;
        }
    }
};