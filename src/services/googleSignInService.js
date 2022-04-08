export default {
    isUserAuthentified() {
        return sessionStorage.getItem("access_token");
    },
};
