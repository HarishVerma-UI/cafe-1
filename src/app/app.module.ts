import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LeftComponent } from './body/left/left.component';
import { CenterComponent } from './body/center/center.component';
import { RightComponent } from './body/right/right.component';
import { TableComponent } from './pages/table/table.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { ImagesComponent } from './pages/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LeftComponent,
    CenterComponent,
    RightComponent,
    TableComponent,
    AlertsComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
