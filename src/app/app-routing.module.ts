import { DataComponent } from './pages/data/data.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component"

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "login", component: LoginComponent },
	{path: "data", component: DataComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
