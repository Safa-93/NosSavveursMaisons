/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
// import Person from '@material-ui/icons/Person'
import LibraryBooks from '@material-ui/icons/LibraryBooks'
import BubbleChart from '@material-ui/icons/BubbleChart'
import LocationOn from '@material-ui/icons/LocationOn'
import Notifications from '@material-ui/icons/Notifications'
import Unarchive from '@material-ui/icons/Unarchive'
import RestaurantIcon from '@material-ui/icons/Restaurant'
// core components/views for Admin layout
import DashboardPage from 'views/Dashboard/Dashboard.js'
//import UserProfile from 'views/UserProfile/UserProfile.js'
import TableList from 'views/TableList/TableList.js'
import Typography from 'views/Typography/Typography.js'
import Icons from 'views/Icons/Icons.js'
import Maps from 'views/Maps/Maps.js'
import NotificationsPage from 'views/Notifications/Notifications.js'
import UpgradeToPro from 'views/UpgradeToPro/UpgradeToPro.js'
import Salade from './menu/SousMenu.js/Salades'
import Burger from './menu/SousMenu.js/Burger'
import Pates from './menu/SousMenu.js/Pates'

// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: '/Menu',
    name: 'Menu',
    icon: RestaurantIcon,
    component: DashboardPage,
    layout: '/admin',
  },
  {
    path: '/Salade',
    name: 'Salade',
    icon: ' ',
    component: Salade,
    layout: '/admin',
  },
  {
    path: '/Burger',
    name: 'Burger',
    icon: ' ',
    component: Burger,
    layout: '/admin',
  },
  {
    path: '/Pates',
    name: 'Pates',
    icon: ' ',
    component: Pates,
    layout: '/admin',
  },

  {
    path: '/icons',
    name: 'Icons',
    icon: BubbleChart,
    component: Icons,
    layout: '/admin',
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: LocationOn,
    component: Maps,
    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
    component: NotificationsPage,
    layout: '/admin',
  },
]

export default dashboardRoutes
