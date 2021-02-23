import { 
    Wave 
} from './wave.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.wave = new Wave();

        whidow.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        /*start animation*/
        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        /*double size for retina display*/
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);

        this.wave.resize(this.stageWidth, this.stageHeight);
    }

    /*for clear canvas*/
    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.wave.draw(this.ctx);


        requestAnimationFrame(this.animate.bind(this));
    }
}

/*for create app*/
window.onload = () => {
    new App();
};