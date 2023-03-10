import Home from '@/components/main/HomeComponent.vue'
import VueRouter from 'vue-router'
import router from './index'
import firebase from '../firebase'


export default new VueRouter({
    routes: [{
        path: '/', name: 'home', component: Home
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

    , {
        path: '/adminDash', name: 'admin', component: () => import('@/components/dashboards/adminComp.vue')

    }, {
        path: '/userDash', name: 'userDash', component: () => import('@/components/dashboards/userComp.vue')

    }, {
        path: '/pharmacy', name: 'pharmacy', component: () => import('@/components/main/PharmacyComp.vue')
    }/* {
        path: '/pharmacy', name: 'pharmacy', component: () => import('@/components/pharmacy/Pharmacy.vue')

    }*/, {
        path: '/adminDash/doctor', name: 'doctorCrud', component: () => import('@/components/doctors/DoctorComp.vue')

    },{
        path: '/adminDash/department', name: 'departmentoperation', component: () => import('@/components/AdminCruds/DepartmentsComp/department.vue'), meta:{
            requiresAuth: true
        }

    },{
        path: '/departments', name: 'department', component: () => import('@/components/main/DepartmentComponent.vue'), meta:{
           
        }

    },{
        path: '/adminDash/department/create', name: 'departmentcreate', component: () => import('@/components/AdminCruds/DepartmentsComp/createDepartment'), meta:{
            requiresAuth: true
        }

    },{
        path: 'adminDash/doctors/',
        name: 'all-doctors',
        component: () => import('@/components/doctors/DoctorList.vue'),
        props: true
      },{
        path: '/departments/:id/edit',
        name: 'edit-department',
        component: () => import('@/components/AdminCruds/DepartmentsComp/editDepartment.vue'),
        props: true
      },{
        path: 'adminDash/doctors/:id/edit',
        name: 'edit-doctor',
        component: () => import('@/components/doctors/EditDoctor.vue'),
        props: true
      }


   /* {
        path: '/DepartmentList', name: 'DepartmentList', component: () => import('@/views/DepartmentList.vue')
    },*/
   /* {
        path: '/CreateDepartment', name: 'createDepartment', component: () => import('@/views/CreateDepartment.vue')

    }*/


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