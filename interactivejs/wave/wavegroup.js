import {
    Wave
} from './wave.js'

export class WaveGroup {
    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 6;

        this.color = ['rgba(0,199,236,0.4)', 'rgba(0,199,236,0.4)', 'rgba(0,199,236,0.4)' ];

        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(

            );
        }
    }

    resize(stageWidth, stageHeight) {
        for (let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
        }
    }
}