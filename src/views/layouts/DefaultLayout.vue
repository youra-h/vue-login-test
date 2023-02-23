<template>
    <div class="layout__container has-scrolling-header">
        <div class="layout">
            <header-box></header-box>
            <main class="layout__content">
                <slot></slot>
                <footer-box></footer-box>
            </main>

        </div>

    </div>
</template>

<script>

import HeaderBox from "@/views/default/Header"
import FooterBox from "@/views/default/Footer"

export default {
    components: {
        HeaderBox, FooterBox
    }
}
</script>
