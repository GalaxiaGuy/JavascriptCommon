function Game()
{
}

Game.prototype.loop = function()
{
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
};

Game.prototype.update = function(elapsed)
{
    this.imageManager.update();
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