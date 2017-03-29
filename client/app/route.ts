import {HumanComponent} from './route';
import {ModulewithProviders} from '@angular/core';
import {Routes, RouterModule, provideRoutes, __router_private__} from  '@angular/router';

const route:Routes=[
	{
		path: 'human',
		component:HumanComponent
	}
]

export const routing:provideRoutes.forRoot(route);
