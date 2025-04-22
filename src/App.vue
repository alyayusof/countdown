<template>
    <section class="h-screen w-full flex flex-wrap items-center justify-center bg-purple-400 p-8">
        <div class="h-full w-full flex flex wrap items-center justify-center border-4 border-white">
            <div class="flex flex-col items-center gap-8 text-white">
                <div class="flex flex-col items-center gap-8">
                    <h1 class="text-5xl font-bold">
                        Trip to South Korea
                    </h1>
                    <h3 class="text-2xl">
                        in
                    </h3>
                </div>
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
            </div>
        </div>
    </section>
</template>

<script>
import {ref, onMounted, onUnmounted} from 'vue';


const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const countdownDate = new Date("Oct 26, 2025 12:15:00").getTime;
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

export default {
    name: 'App'
}
</script>
