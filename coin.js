const WOBBLESPEED = 15;
const WOBBLEDISTANCE = 0.2;
function Coin(initialPosition){
    this.basePosition = this.position = initialPosition.plus(new Vector(0.2, 0.1));
    this.size = new Vector(0.6, 0.6);
    this.wobble = Math.PI * 2 * Math.random();
}

Coin.prototype.type = 'coin';

Coin.prototype.act = function(step){
    this.wobble += step * WOBBLESPEED;
    let wobblePosition = Math.sin(this.wobble) * WOBBLEDISTANCE;
    this.position = this.basePosition.plus(new Vector(0, wobblePosition));
}