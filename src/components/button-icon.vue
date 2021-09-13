<template>
  
        <span v-ripple v-on:click="clickHandler" class="button-icon material-icons">{{icon}}</span>
        <div class="pop-menu">
            
        </div>
</template>
<style lang="scss">
.button-icon {
  border-radius:10000px;
  padding: 6px;
  cursor: pointer;
  font-size:24px;
  user-select: none;
  transition: background-color  0.6s;
  &:hover {
      background-color: $font-color-contrast
  }
}
.hidden {
    display:none;
}
    
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    // type inference enabled
    props: {
        icon: String,

    },
    emits: ["click"],
    methods: {
        clickHandler(ev:MouseEvent) {
            this.$emit('click',ev);
        }
    }

})  
</script>
