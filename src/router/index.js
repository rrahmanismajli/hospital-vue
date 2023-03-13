import Home from '@/components/main/HomeComponent.vue'
import VueRouter from 'vue-router'
import router from './index'
import firebase from '../firebase'


export default new VueRouter({
    routes: [{
        path: '/', name: 'home', component: Home
    },
    {
        path: '/about', name: 'about', component: () => import('../components/main/AboutComponent.vue')
    }, {
        path: '/contactus', name: 'contactus', component: () => import('@/components/main/ContactComponent.vue')
    }, {
        path: '/newappointment', name: 'newappointment', component: () => import('@/components/main/AppointmentComp.vue'), meta: {
            requiresAuth: true
        }
    }, {
        path: '/login', name: 'login', component: () => import('@/components/main/LoginComponent.vue')
    }, {
        path: '/register', name: 'register', component: () => import('@/components/main/RegisterComponent.vue')

    }, {
        path: '/adminDash', name: 'admin', component: () => import('@/components/dashboards/adminComp.vue'), meta: {
            requiresAuth: true
        }

    }, {
        path: '/userDash', name: 'userDash', component: () => import('@/components/dashboards/userComp.vue'), meta: {
            requiresAuth: true
        }

    },
    {
        path: '/pharmacy', name: 'pharamcy', component: () => import('@/components/main/PharmacyComp.vue')
    } , {
        path: '/adminDash', name: 'admin', component: () => import('@/components/dashboards/adminComp.vue'), meta: {
            requiresAuth: true
        }

    }, {
        path: '/userDash', name: 'userDash', component: () => import('@/components/dashboards/userComp.vue'), meta: {
            requiresAuth: true
        }

    },  {
        path: '/adminDash/doctor', name: 'doctorCrud', component: () => import('@/components/doctors/DoctorComp.vue'), meta: {
            requiresAuth: true
        }

    }, {
        path: '/adminDash/department', name: 'departmentoperation', component: () => import('@/components/AdminCruds/DepartmentsComp/department.vue'), meta: {
            requiresAuth: true
        }

    }, {
        path: '/departments', name: 'department', component: () => import('@/components/main/DepartmentComponent.vue'), meta: {
            requiresAuth: true
        }

    }, {
        path: '/doctors', name: 'doctor', 
        component: () => import('@/components/main/DoctorComponent.vue'), 
        
        meta: {
            requiresAuth: true
        }


    }, {
        path: '/adminDash/department/create',
        name: 'departmentcreate',
        component: () => import('@/components/AdminCruds/DepartmentsComp/createDepartment'),
        meta: {
            requiresAuth: true
        }

    }, {
        path: 'adminDash/doctors/',
        name: 'all-doctors',
        component: () => import('@/components/doctors/DoctorList.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }

    }, {
        path: 'adminDash/departments/:id/edit',
        name: 'edit-department',
        component: () => import('@/components/AdminCruds/DepartmentsComp/editDepartment.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }

    }, {
        path: 'adminDash/doctors/:id/edit',
        name: 'edit-doctor',
        component: () => import('@/components/doctors/EditDoctor.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }

    },{
        path: 'adminDash/products/:id/edit',
        name: 'edit-product',
        component: () => import('@/components/AdminCruds/ProductController/editProduct.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }

    }, {
        path: 'adminDash/services/',
        name: 'all-services',
        component: () => import('@/components/AdminCruds/ServicesController/service.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }

    }, {
        path: 'adminDash/products/',
        name: 'all-products',
        component: () => import('@/components/AdminCruds/ProductController/product.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }

    },{
        path: 'adminDash/products/create',
        name: 'create-product',
        component: () => import('@/components/AdminCruds/ProductController/createProduct.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }

    },{
        path: '/adminDash/services/create',
        name: 'servicecreate',
        component: () => import('@/components/AdminCruds/ServicesController/createServices.vue'),
        meta: {
            requiresAuth: true
        }

    }, {
        path: '/services/:id/edit',
        name: 'edit-services',
        component: () => import('@/components/AdminCruds/ServicesController/editService.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }

    }, {
        path: 'adminDash/contacts/',
        name: 'all-contacts',
        component: () => import('@/components/AdminCruds/ContactUsController/ContactList.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }

    },



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