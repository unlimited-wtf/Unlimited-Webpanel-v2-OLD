<script setup>
import { getCssVar } from 'quasar';
</script>

<template>
    <svg
        id="sw-js-blob-svg"
        viewBox="0 0 960 540"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        class="absolute-bottom no-pointer-events"
    >
        <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" :stop-color="getCssVar('background')" offset="0%"></stop>
                <stop id="stop2" :stop-color="getCssVar('background2')" offset="100%"></stop>
            </linearGradient>
        </defs>
        <path
            d="M0 408L32 399.3C64 390.7 128 373.3 192 366.2C256 359 320 362 384 357C448 352 512 339 576 338.7C640 338.3 704 350.7 768 345C832 339.3 896 315.7 928 303.8L960 292L960 541L928 541C896 541 832 541 768 541C704 541 640 541 576 541C512 541 448 541 384 541C320 541 256 541 192 541C128 541 64 541 32 541L0 541Z"
            width="100%"
            height="100%"
            stroke-linecap="round"
            stroke-linejoin="miter"
            stroke-width="0"
            style="transition: all 0.3s ease 0s"
            fill="url(#sw-gradient)"
        ></path>
    </svg>
</template>
