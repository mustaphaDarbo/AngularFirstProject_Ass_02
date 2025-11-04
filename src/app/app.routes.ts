import { Routes } from '@angular/router';
import { Overview } from './components/overview/overview';
import { Register } from './components/register/register';
import { Users } from './components/users/users';
import { Contacts } from './components/contacts/contacts';
import { Products } from './components/products/products';

export const routes: Routes = [
  {path: '', component: Overview},
  {path: 'register', component: Register},
  {path: 'users', component:Users}
  ,{path:'contacts',component:Contacts},
  {path:'products', component:Products}
];
