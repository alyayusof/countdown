import CountdownTimer from './CountdownTimer.vue';

function registerComponents(app) {
    app.component("countdown-timer", CountdownTimer);
};

export default {
    registerComponents
};