import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from "@angular/common/http";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from "@angular/material/checkbox";
//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataComponent } from './pages/data/data.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ValoresComponent } from './pages/valores/valores.component';
// Modules
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
import { MatNativeDateModule } from "@angular/material/core";
import { FlipCardModule } from "./flip-card/flip-card.module";
import { CurrencyComponent } from './shared/component/currency/currency.component';
import { BrainmapComponent } from './pages/brainmap/brainmap.component';

registerLocaleData(localePt);
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		LoginComponent,
		DataComponent,
		ValoresComponent,
		CurrencyComponent,
  BrainmapComponent,
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
		MatDatepickerModule,
		MatNativeDateModule,
		HttpClientModule,
		MatCheckboxModule,
	],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: "pt-BR",
		}], bootstrap: [AppComponent]
})
export class AppModule { }
