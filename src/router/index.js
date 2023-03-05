import Home from '@/components/main/HomeComponent.vue'
import VueRouter from 'vue-router'
import router from './index'
import firebase from '../firebase'


export default new VueRouter({
    routes: [{
        path: '/', name: 'home', component: Home
    }, {
        path: '/doctor', name: 'doctor', component: () => import('../components/main/DoctorComponent.vue')
    },
    {
        path: '/about', name: 'about', component: () => import('../components/main/AboutComponent.vue')
    }, {
        path: '/contactus', name: 'contactus', component: () => import('@/components/main/ContactComponent.vue')
    }, {
        path: '/newappointment', name: 'newappointment', component: () => import('@/components/main/AppointmentComp.vue')
    }, {
        path: '/login', name: 'login', component: () => import('@/components/main/LoginComponent.vue')
    }, {
        path: '/register', name: 'register', component: () => import('@/components/main/RegisterComponent.vue')

    }, {
        path: '/adminDash', name: 'admin', component: () => import('@/components/dashboards/adminComp.vue')

    }, {
        path: '/userDash', name: 'userDash', component: () => import('@/components/dashboards/userComp.vue')

    }, {
        path: '/pharmacy', name: 'pharmacy', component: () => import('@/components/main/PharmacyComp.vue')

    },

    {
        path: '/DepartmentList', name: 'DepartmentList', component: () => import('@/views/DepartmentList.vue')
    },
    {
        path: '/CreateDepartment', name: 'createDepartment', component: () => import('@/views/CreateDepartment.vue')

    }


    ]
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !await firebase.getCurrentUser()) {
        next('Login');
    } else {
        next();
    }
});