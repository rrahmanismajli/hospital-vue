import Home from '@/components/main/HomeComponent.vue'
import VueRouter from 'vue-router'          
import router from './index'
import firebase from '../firebase'


export default new VueRouter({
    routes:[{
        path:'/', name:'home',component:Home
    },
    {
        path:'/about', name:'about',component:()=>import ('../components/main/AboutComponent.vue')
    },{
        path:'/contactus', name:'contactus', component:()=>import('@/components/main/ContactComponent.vue')
    },{
        path:'/newappointment', name:'newappointment', component:()=>import('@/components/main/AppointmentComp.vue'), meta:{
            requiresAuth: true
        }
    },{
        path:'/login', name:'login', component:()=>import('@/components/main/LoginComponent.vue')
    },{
        path:'/register', name:'register', component:()=>import('@/components/main/RegisterComponent.vue')
       
    },{
        path:'/adminDash', name:'admin', component:()=>import('@/components/dashboards/adminComp.vue'), meta:{
            requiresAuth: true
        }
       
    },{
        path:'/userDash', name:'userDash', component:()=>import('@/components/dashboards/userComp.vue'), meta:{
            requiresAuth: true
        }
       
    },
    {
        path:'/pharmacy', name:'pharamcy',component:()=>import ('@/components/main/PharmacyComp.vue')
    }



    ]
});

router.beforeEach(async (to, from, next)=>{
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if(requiresAuth && !await firebase.getCurrentUser()){
        next('Login');
    }else{
        next();
    }
});