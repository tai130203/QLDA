import DefaultLayout from '~/Layouts/DefaultLayout/DefaultLayout';
import AddEmployee from '~/pages/AddEmployee/AddEmployee';
import Calendar from '~/pages/Calendar/Calendar';
import Documents from '~/pages/Documents/Documents';
import Employees from '~/pages/Employees/Employees';
import Home from '~/pages/Home/Home';
import LogIn from '~/pages/LogIn/LogIn';
import Profile from '~/pages/Profile/Profile';
import Requests from '~/pages/Requests/Requests';

const publicRoutes = [
    { path: '/posts', component: Home, layout: DefaultLayout },
    { path: '/login', component: LogIn, layout: null },
    { path: '/documents', component: Documents, layout: DefaultLayout },
    { path: '/profile', component: Profile, layout: DefaultLayout },
    { path: '/calendar', component: Calendar, layout: DefaultLayout },
    { path: '/all-employees', component: Employees, layout: DefaultLayout },
    { path: '/add-employee', component: AddEmployee, layout: DefaultLayout },
    { path: '/requests', component: Requests, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
