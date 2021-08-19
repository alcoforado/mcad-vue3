<template>
  
        <span class="button-icon material-icons">{{icon}}</span>
    
</template>
<style lang="scss">

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
