export const calculateTime = (soundTime: number) => {
    if (soundTime === Infinity) {
        return '';
    }
    const h = Math.floor(soundTime / 3600)
        .toString()
        .padStart(2, '0');
    const m = Math.floor((soundTime % 3600) / 60)
        .toString()
        .padStart(2, '0');
    const s = Math.floor(soundTime % 60)
        .toString()
        .padStart(2, '0');

    return `${h}:${m}:${s}`;
};

export const switcherTime = (timeSecond: number): string => {
    switch (timeSecond) {
        case 120:
            return '00:02:00';
        case 300:
            return '00:05:00';
        case 600:
            return '00:10:00';
        default:
            return '';
    }
};

export const timerString = {
    value: '00:02:00',
};
