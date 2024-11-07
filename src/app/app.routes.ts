import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContectComponent } from './contect/contect.component';
import { NoPageComponent } from './no-page/no-page.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contect',
    component: ContectComponent,
  },
  {
    path: '**',
    component: NoPageComponent,
  },
];
