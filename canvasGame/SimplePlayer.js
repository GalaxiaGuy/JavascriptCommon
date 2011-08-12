function SimplePlayer(game, name)
{
    Entity.call(this, game);
    this.name = name;
}

SimplePlayer.prototype = new Entity();
SimplePlayer.prototype.constructor = SimplePlayer;

SimplePlayer.prototype.speak = function(message)
{
    this.game.worldMessage(this.name + ': ' + message);
};

SimplePlayer.prototype.draw = function(ctx)
{
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(this.x-5, this.y-5, 10, 10);
};

SimplePlayer.prototype.handleInput = function(inputManager)
{
    var keys = inputManager.keys;
    if (keys.cursorUp.pressed)
    {
        this.moveUp();
    }
    if (keys.cursorDown.pressed)
    {
        this.moveDown();
    }
    if (keys.cursorLeft.pressed)
    {
        this.moveLeft();
    }
    if (keys.cursorRight.pressed)
    {
        this.moveRight();
    }    
};

SimplePlayer.prototype.moveUp = function()
{
    this.y -= 5;
};

SimplePlayer.prototype.moveDown = function()
{
    this.y += 5;
};

SimplePlayer.prototype.moveLeft = function()
{
    this.x -= 5;
};

SimplePlayer.prototype.moveRight = function()
{
    this.x += 5;
};