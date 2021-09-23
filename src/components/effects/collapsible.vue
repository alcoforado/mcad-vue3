<template>
            <div ref="container" class="collapsible-container" :style="{'max-width':anim-width,'max-height':anim-height}"  :class="{hidden:!show,'start-anim':show}">
                <slot></slot>
            </div>
</template>
<style lang="scss">


.collapsible-container {
    margin:0;
    padding:0;
    border:none;
    transition: max-width 0.7s,max-height 0.7s;
    &.hidden {
        
        position:fixed !important;
        top: 999999999px !important;;
        left: 999999999px !important;
       
    }

    &.start-anim {
        max-width:0px !important;
        max-height:0px !important;
    }
    
}

</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    // type inference enabled
    props: {
        show: {
         type:Boolean,
         default:false,
         required:true   
        }

    },
    data: function (){
        return {
            displayOutOfScreen: false,
            top:"0",
            left:"0",
            anim_width:null as String|null,
            anim_height:null as String|null,
            width:0,
            height:0
        }
    },
    watch: {
        show: function(val) {
            if (val) {
                this.$data.displayOutOfScreen = true;
                
                this.$data.width=(this.$refs.container as HTMLDivElement).offsetWidth;
                this.$data.height=(this.$refs.container as HTMLDivElement).offsetHeight;
                this.$nextTick(() =>{
                    this.$data.anim_width=this.$data.width+'px';
                    this.$data.anim_height=this.$data.height+'px';
                })
            }

        }
    }
    
    

})  
</script>
