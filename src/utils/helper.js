/**
 * Ask user to allow to track location
 */
export const getLocation = () => {
    if (navigator.geolocation) {
        const showPostion = (position) => {
            const { latitude, longitude } = position.coords;
            return { latitude, longitude };
        };

        return navigator.geolocation.getCurrentPosition(showPostion);
    }
};
