export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = 0;
        /*for how long point moves*/
        this.max = Math.random() * 100 + 150;
    }

    /*sin is for up and down*/
    update() {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}