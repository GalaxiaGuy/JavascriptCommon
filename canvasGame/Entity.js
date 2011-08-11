function Entity(game)
{
    this.game = game;
    this.x = 0;
    this.y = 0;
}

Entity.prototype.draw = function(ctx)
{
};

Entity.prototype.update = function(elapsed)
{
};

Entity.prototype.drawCentered = function(ctx, sprite, x, y)
{
    x -= sprite.width/2;
    y -= sprite.height/2;
    ctx.drawImage(sprite, x, y);
};