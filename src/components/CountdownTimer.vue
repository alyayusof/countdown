<template>
    <div class="px-2 flex text-3xl md:text-7xl gap-1 md:gap-4 text-purple-800">
        <div class="p-2 w-14 md:w-24 flex flex-col items-center bg-white/50 rounded-lg">
            <div class="font-bold">{{ months }}</div>
            <div class="text-sm md:text-2xl font-medium">bulan</div>
        </div>
        <div class="p-2 w-14 md:w-24 flex flex-col items-center bg-white/50 rounded-lg">
            <div class="font-bold">{{ days }}</div>
            <div class="text-sm md:text-2xl font-medium">hari</div>
        </div>
        <div class="p-2 w-14 md:w-24 flex flex-col items-center bg-white/50 rounded-lg">
            <div class="font-bold">{{ hours }}</div>
            <div class="text-sm md:text-2xl font-medium">jam</div>
        </div>
        <div class="p-2 w-14 md:w-24 flex flex-col items-center bg-white/50 rounded-lg">
            <div class="font-bold">{{ minutes }}</div>
            <div class="text-sm md:text-2xl font-medium">minit</div>
        </div>
        <div class="p-2 w-14 md:w-24 flex flex-col items-center bg-white/50 rounded-lg">
            <div class="font-bold">{{ seconds }}</div>
            <div class="text-sm md:text-2xl font-medium">saat</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const months = ref(0);
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
 
const props = defineProps({
  countdown: String 
});
 
const countdownDate = new Date(props.countdown).getTime();
let timerInterval;
 
const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdownDate - now;
 
  if (distance < 0) {
    clearInterval(timerInterval);
    return;
  }
 
  months.value = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  days.value = Math.floor(distance % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};
 
onMounted(() => {
  updateCountdown();
  timerInterval = setInterval(updateCountdown, 1000);
});
 
onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>


<script>
export default {
    name: "TimerCountdown",
};
</script>