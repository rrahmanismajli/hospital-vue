
import About from './src/components/main/AboutComponent.Vue';
import Contact from './src/components/main/ContactComponent';
import Home from './src/components/main/HomeComponent.Vue';
import AddUser from './src/components/users/AddUser.vue'
import UsersList from './src/components/users/UsersList.vue'
import ShowUsers from './src/components/users/ShowUsers.vue'
import EditUser from './src/components/users/EditUser.vue'
import Login from './src/components/main/LoginComponent.vue'
import Register from './src/components/main/RegisterComponent.vue'
import Products from './src/components/Products.vue'
import Reservation from './src/components/Reservation.vue'







export const routes = [
    { path: '/', name:'home', component:Home},
    { path: '/about', name:'about', component:About},
    { path: '/contact', name:'contact', component:Contact},
    { path: '/users-list', name:'UsersList', component:UsersList},
    { path: '/show-user/:id', name:'ShowUsers', component:ShowUsers},
    { path: '/edit-user/:id', name:'EditUser', component:EditUser},
    { path: '/add-user', name:'AddUser', component: AddUser},
    { path: '/login', name:'Login', component: Login},
    { path: '/register', name:'Register', component: Register},
    { path: '/products', name:'Products', component: Products},
    { path: '/reservations', name:'Reservation', component: Reservation}
]