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
