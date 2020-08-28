import SigninScreen from '../screens/SigninScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

export const Routes = [
  {
    path: '/signin',
    component: SigninScreen,
  },
  {
    path: '/register',
    component: RegisterScreen,
  },
];

export const PrivateRoutes = [
  {
    path: '/category/:id',
    component: HomeScreen,
  },
  {
    path: '/',
    component: HomeScreen,
    exact: true,
  },
];
