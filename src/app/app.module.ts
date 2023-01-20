import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { NgModule, LOCALE_ID } from "@angular/core";
//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataComponent } from './pages/data/data.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
// Modules
import { FlipCardModule } from "./flip-card/flip-card.module";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localePt);
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
		FlipCardModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatCardModule,
		MatMenuModule,
		ScrollingModule,
		DragDropModule,
		MatInputModule,
		FormsModule,
	],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: "pt-BR",
		}], bootstrap: [AppComponent]
})
export class AppModule { }
