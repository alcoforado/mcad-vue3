<template>
        <button ref="button" v-ripple :class="{selected:showMenu}" v-on:click="clickHandler" class="button-icon material-icons">{{icon}}</button>
      <!--  <span class="menu-container" ref="menuContainer">
             <menu ref="menu" :style="{top:'0px',left:'0px', 'max-width':anim_width,'max-height':anim_height}" tabindex="1" v-on:blur="fadeMenu" class="pop-menu" v-bind:class="{hidden: !showMenu, 'before-show':startShow,  'menu-fade': fadeOut}">
                <li>Hello world</li>
            </menu> -->
            <collapsible :show="showMenu">
                <p> Hello world</p>
            </collapsible>
        
</template>
<style lang="scss">
.button-icon {
  border-radius:10000px;
  padding: 6px;
  cursor: pointer;
  position:relative;
  font-size:24px;
  user-select: none;
  color: inherit;
  background-color: inherit;
  transition: background-color  0.5s;
  border:none;
  &:hover {
      background-color: $font-color-contrast
  }
}


.selected {
   background-color: $font-color-contrast 
}

.menu-container {
    position:relative;
    
    .hidden {
    visibility: hidden;
    opacity: 1;
}
}

.menu-fade {
    opacity: 1;
}
.pop-menu {
    position: absolute;
    list-style-type: none;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    margin:0;
    transition: opacity 0.7s, max-width 0.7s,max-height 0.7s;
    padding: 0px;
    margin: 0px;
    border:none;
    border-radius: 5px;
    background-color: white;
    color: black;
    overflow:hidden;
    

    li {
        text-align:left;
        white-space:nowrap;
        padding:10px;
    }
    &:focus {
        outline: none;
    }
}   
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    // type inference enabled
    props: {
        icon: String,

    },
    data: function (){
        return {
        showMenu:false,
        fadeOut:false,
        startShow:true,
        top:"0",
        left:"0",
        anim_width:null as String|null,
        anim_height:null as String|null,
        width:0,
        height:0
        }
    },
    emits: ["click"],
    methods: {
        clickHandler(ev:MouseEvent) {
            this.showMenu=true;       
        },
        fadeMenu() {
            this.$data.fadeOut = true;
             this.$data.anim_width=0+'px';
             this.$data.anim_height=0+'px';
            setTimeout(()=>{
                this.$data.fadeOut=false;
                this.showMenu=false;
                this.$data.anim_width=null;
                this.$data.anim_height=null;
            }, 1000)
        }
    }

})  
</script>
