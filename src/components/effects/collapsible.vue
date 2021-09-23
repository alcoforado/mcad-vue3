<template>
            <transition name="collapse">
                <div ref="container" v-if="show" class="collapsible-container" 
                :style="{'max-width':anim_width,'max-height':anim_height}">  
                
                    <slot></slot>
                </div>
            </transition>
</template>
<style lang="scss">

.collapse-enter  {
        position:fixed !important;
        top: 999999999px !important;;
        left: 999999999px !important;
}



.collapsible-container {
    margin:0;
    padding:0;
    border:none;
    overflow:hidden;
    transition: max-width 0.7s,max-height 0.7s;
    &.hidden {
        
        position:fixed !important;
        top: 999999999px !important;;
        left: 999999999px !important;
       
    }

    &.start-anim {
        max-width:0px;
        max-height:0px;
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
            startAnim: false,
            top:"0",
            left:"0",
            anim_width:null as String|null,
            anim_height:null as String|null,
            width:0,
            height:0
        }
    },
    methods: {
        enter: function(el:HTMLBaseElement)
        {
            el.style=
        }
    }
    /*
    watch: {
        show: function(val) {
            if (val) {
                debugger;
                this.$data.width=(this.$refs.container as HTMLDivElement).offsetWidth;
                this.$data.height=(this.$refs.container as HTMLDivElement).offsetHeight;
                this.$data.startAnim = true;
                this.$nextTick(()=> {
                    let w =(this.$refs.container as HTMLDivElement).offsetWidth;
                    this.$data.anim_width=this.$data.width+'px';
                    this.$data.anim_height=this.$data.height+'px';
                })
            }
            else {
                this.$data.anim_width = this.$data.anim_height = "0px";


            }

        }
    }
    */
    

})  
</script>
