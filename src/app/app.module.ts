import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from '@angular/material/menu';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from '@angular/cdk/scrolling';
//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DataComponent } from './pages/data/data.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		LoginComponent,
		DataComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatCardModule,
		MatMenuModule,
		ScrollingModule,
		DragDropModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
