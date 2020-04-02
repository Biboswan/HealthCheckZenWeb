/**
 * Ask user to allow to track location
 */
export const setGeoLocation = () => {
    if (navigator.geolocation) {
        const showPostion = (position) => {
            const { latitude, longitude } = position.coords;
            localStorage.setItem('location', JSON.stringify({ latitude, longitude }));
            return { latitude, longitude };
        };

        return navigator.geolocation.getCurrentPosition(showPostion);
    }
};
