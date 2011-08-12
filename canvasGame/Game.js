function Game()
{
    this.entities = [];
    this.inputManager = new InputManager();
}

Game.prototype.loop = function()
{
    this.inputManager.handleInput();
    this.draw(this.ctx);
    this.update();
};

Game.prototype.init = function(canvas, imagePrefix)
{
    this.imageManager = new ImageManager(imagePrefix);
    this.ctx = canvas.getContext('2d');
};

Game.prototype.draw = function(ctx)
{
    for (var e in this.entities)
    {
        this.entities[e].draw(ctx);
    }    
};

Game.prototype.update = function(elapsed)
{
    for (var e in this.entities)
    {
        this.entities[e].update(elapsed);
    }
    this.imageManager.update();
    this.inputManager.update();
};

Game.prototype.start = function()
{
    var that = this;
    (function gameLoop()
    {
        that.loop();
        requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
};