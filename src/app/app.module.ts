import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatGridListModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: 'dashboard',
		loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
	},
	{
		path: 'admin',
		loadChildren: 'app/admin/admin.module#AdminModule'
	},
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		RouterModule.forRoot(routes),
		BrowserModule.withServerTransition({appId: 'angular-project'}),
		BrowserAnimationsModule,
		NoopAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatGridListModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
