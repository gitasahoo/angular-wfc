import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactusComponent} from "./contactus/contactus.component";
import {ContactsubmenuComponent} from "./contactsubmenu/contactsubmenu.component";
const routes: Routes = [
{
	path: 'home',
        component: HomeComponent
},
{
	path: 'test',
                component: ContactsubmenuComponent
},


{
	path: 'contactus',
        component: ContactusComponent
        children: [
	{
		path: '',
                component: ContactusComponent,
	},
	{
		path: 'contacttype/:type',
                component: ContactsubmenuComponent,
                outlet: 'contactdetail'
	}
/*
	{
		path: 'askquestion',
                component: ContactsubmenuComponent,
                outlet: 'sm'
	}
	{
		path: 'callus',
                component: ContactsubmenuComponent,
                outlet: 'sm'
	}
*/
	]
},
{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
}
/*
,
{
	path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
}
*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
