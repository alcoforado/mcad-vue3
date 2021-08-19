import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/main.scss'
import {Ripple} from './directives/ripple'
const app = createApp(App);


function registerAllComponents()
{
    console.log("Adding components");
    const requireComponents = require.context(
        '@/components',true,/[a-zA-Z]+(-\w+)*.vue$/
    )
    requireComponents.keys().forEach(fileName=>{
        debugger;
        const componentConfig = requireComponents(fileName);
        var fileEnd=fileName.split("/").pop() as string;
        var fileNoExtension= fileEnd.replace(".vue","");
        var terms=fileNoExtension.split("-");
        var className = terms.reduce((acum,newValue)=>{
            var str=newValue;
            str = str.toUpperCase()[0]+str.substr(1);
            return acum+str;
        })
        console.log("Adding " + className)
        app.component(className,componentConfig.default || componentConfig)
    
    });

}

registerAllComponents();

app.use(store).use(router).mount('#app')
app.directive('ripple',Ripple)