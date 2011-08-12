function SimpleGame(game, name)
{
    Game.call(this, game);
    this.name = name;
    this.player = new SimplePlayer();
    this.entities.push(this.player);
    this.inputManager.inputHandlers.push(this.player);
}

SimpleGame.prototype = new Game();
SimpleGame.prototype.constructor = SimpleGame;