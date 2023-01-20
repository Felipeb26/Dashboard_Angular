import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './pages/data/data.component';
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from './pages/login/login.component';
import { ValoresComponent } from './pages/valores/valores.component';

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "login", component: LoginComponent },
	{ path: "data", component: DataComponent },
	{ path: "entrada", component: ValoresComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
