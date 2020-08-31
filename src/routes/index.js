import SigninScreen from '../screens/SigninScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import StyleguideScreen from '../screens/StyleguideScreen';

export const Routes = [
  {
    path: '/signin',
    component: SigninScreen,
  },
  {
    path: '/register',
    component: RegisterScreen,
  },
  {
    path: '/styleguide',
    component: StyleguideScreen,
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
