import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/layout-components/layout/content-layout/content-layout.component';
import { content } from './shared/routes/routes copy';

import { ErrorLayoutComponent } from './shared/layout-components/layout/error-layout/error-layout.component';
import { SwitcherLayoutComponent } from './shared/layout-components/layout/switcher-layout/switcher-layout.component';



//import { RecipientConfigurationGridComponent } from './components/edi/recipientconfiguration/recipientconfigurationgrid/recipientconfigurationgrid.component';

//import { EventConfigurationGridComponent } from './components/edi/eventconfiguration/eventconfigurationgrid/eventconfigurationgrid.component';

const routes: Routes = [

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path:'', loadChildren: ()=> import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  // {
  //   path: '',
  //   redirectTo: '/dashboard/setting',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: ContentLayoutComponent,
    children: content
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
exports: [RouterModule]
})

export class AppRoutingModule { }
