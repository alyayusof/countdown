<template>
    <section class="h-screen w-full flex flex-wrap items-center justify-center bg-purple-400 p-4 md:p-8">
        <div class="h-full w-full flex flex wrap items-center justify-center border-4 border-white">
            <div class="p-1 md:p-4 w-full flex flex-col items-center gap-8 text-white">
                <div class="w-full text-3xl md:text-5xl font-bold text-center">
                    Trip ke Korea Selatan
                </div>
                <div class="text-lg md:text-2xl">
                    dalam
                </div>
                <countdown-timer 
                countdown = "Oct 26, 2025 12:15:00"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Home',

}
</script>