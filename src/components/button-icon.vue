<template>
    <div  class="button-icon">
        <span class="material-icons">{{icon}}</span>
    </div>
</template>
<style lang="scss">
.button-icon {
    border-radius:100px;
    padding: 5px;
    cursor: pointer;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default  defineComponent({
    // type inference enabled
    props: {
        icon: String
    }
})
</script>
