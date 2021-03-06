import Vue from 'vue'; 
import VueRouter from 'vue-router'; 
import Home from './components/Home.vue'; 
import SignUp from './components/SignUp.vue'; 
import Login from './components/Login.vue'; 

Vue.use(VueRouter); 

export default new VueRouter({
    mode:'history',
    routes:[
        {path:'/', component:Home, name:"Home"}, 
        {path:'/signup', 
        component:SignUp, 
        name:"SignUp"
        }, 
        {path:'/login', component:Login, name:"Login"}, 
    ]
})