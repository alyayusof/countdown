<template>
    <div class="flex text-7xl gap-4">
        <div class="w-24 flex flex-col items-center">
            <div class="font-bold">{{ days }}</div>
            <div class="text-2xl">hari</div>
        </div>
        <div class="w-24 flex flex-col items-center">
            <div class="font-bold">{{ hours }}</div>
            <div class="text-2xl">jam</div>
        </div>
        <div class="w-24 flex flex-col items-center">
            <div class="font-bold">{{ minutes }}</div>
            <div class="text-2xl">minit</div>
        </div>
        <div class="w-24 flex flex-col items-center">
            <div class="font-bold">{{ seconds }}</div>
            <div class="text-2xl">saat</div>
        </div>
    </div>
</template>
<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const props = defineProps({
    countdown: String
});

const countdownDate = new Date(props.countdown).getTime;
let timeInterval;

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        clearInterval(timerInterval);
        return;
    }

    days.value = Math.floor(distance / (1000 *60 * 60 * 24));
    hours.value = Math.floor(distance / (1000 *60 * 60 * 24));
    minutes.value = Math.floor(distance / (1000 *60 * 60 * 24));
    seconds.value = Math.floor(distance / (1000 *60 * 60 * 24));
};

onMounted(() => {
    updateCountdown();
    timerInterval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
    clearInterval(timeInterval);
});
</script>

<script>
export default {
    name: "TimerCountdown",
};
</script>