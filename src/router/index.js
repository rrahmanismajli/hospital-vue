import Home from '@/components/main/HomeComponent.vue'
import VueRouter from 'vue-router'          
//import router from './index'

//import firebase from '@/Firebase'


export default new VueRouter({
    routes:[{
        path:'/', name:'home',component:Home
    },
    {
        path:'/about', name:'about',component:()=>import ('../components/main/AboutComponent.vue')
    },{
        path:'/contactus', name:'contactus', component:()=>import('@/components/main/ContactComponent.vue')
    },{
        path:'/newappointment', name:'newappointment', component:()=>import('@/components/main/AppointmentComp.vue')
    }


    ]
})