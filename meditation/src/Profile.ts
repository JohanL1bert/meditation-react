import videoRain from './assets/video/rain.mp4';
import videoSummerNigth from './assets/video/summer-nigth.mp4';
import videoSeaWaves from './assets/video/sea_waves.mp4';
import videoNatural from './assets/video/nature.mp4';
import videoColdWinds from './assets/video/cold_winds.mp4';
import videoCampfire from './assets/video/campfire.mp4';
import videoArcticWinds from './assets/video/arctic_winds.mp4';

import soundRain from './assets/sounds/rain.mp3';
import summerNigth from './assets/sounds/summer-nigth.wav';
import seaWeaves from './assets/sounds/sea-waves.wav';
import natural from './assets/sounds/natural.wav';
import coldWinds from './assets/sounds/cold-winds.wav';
import campFire from './assets/sounds/campfire.wav';
import arcticWinds from './assets/sounds/arctic-winds.wav';

export const profileVideo = [
    videoRain,
    videoSummerNigth,
    videoSeaWaves,
    videoNatural,
    videoColdWinds,
    videoCampfire,
    videoArcticWinds,
];

export const profileMusic = [soundRain, summerNigth, seaWeaves, natural, coldWinds, campFire, arcticWinds];

export const lenOfProfile: number = profileMusic.length - 1;
