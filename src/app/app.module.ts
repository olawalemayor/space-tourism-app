import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionHeaderComponent } from './common';
import { HeaderComponent } from './components';
import { MobileNavbarComponent } from './components/header/navbar/mobile-navbar/mobile-navbar.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import {
  HomeComponent,
  DestinationComponent,
  CrewComponent,
  TechnologyComponent,
} from './views';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileNavbarComponent,
    HomeComponent,
    DestinationComponent,
    NavbarComponent,
    SectionHeaderComponent,
    CrewComponent,
    TechnologyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
