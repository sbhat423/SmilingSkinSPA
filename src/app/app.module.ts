import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material';

import { OwlModule } from 'ngx-owl-carousel';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NewsComponent } from './news/news.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { SkinCancerComponent } from './skin-cancer/skin-cancer.component';
import { CompareComponent } from './compare/compare.component';
import { AboutInfoComponent } from './Info-pages/about-info/about-info.component';
import { TypesInfoComponent } from './Info-pages/types-info/types-info.component';
import { CausesInfoComponent } from './Info-pages/causes-info/causes-info.component';
import { SymptomsInfoComponent } from './Info-pages/symptoms-info/symptoms-info.component';
import { DiagnosisInfoComponent } from './Info-pages/diagnosis-info/diagnosis-info.component';
import { TreatmentInfoComponent } from './Info-pages/treatment-info/treatment-info.component';
import { PreventionInfoComponent } from './Info-pages/prevention-info/prevention-info.component';
import { StatisticsInfoComponent } from './Info-pages/statistics-info/statistics-info.component';
import { Error404Component } from './error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { WeatherIconsModule } from 'ngx-icons';
import { PrenevtionComponent } from './prenevtion/prenevtion.component';
import { GaugeModule } from 'angular-gauge';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    MainNavComponent,
    NewsComponent,
    FooterComponent,
    SkinCancerComponent,
    CompareComponent,
    AboutInfoComponent,
    TypesInfoComponent,
    CausesInfoComponent,
    SymptomsInfoComponent,
    DiagnosisInfoComponent,
    TreatmentInfoComponent,
    PreventionInfoComponent,
    StatisticsInfoComponent,
    Error404Component,
    WeatherComponent,
    PrenevtionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatStepperModule,
    MatSelectModule,
    OwlModule,
    LayoutModule,
    FlexLayoutModule,
    HttpClientModule,
    WeatherIconsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    GaugeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
