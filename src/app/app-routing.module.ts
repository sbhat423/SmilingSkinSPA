import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SkinCancerComponent } from './skin-cancer/skin-cancer.component';
import { CompareComponent } from './compare/compare.component';
import { AboutInfoComponent } from './Info-pages/about-info/about-info.component';
import { TypesInfoComponent } from './Info-pages/types-info/types-info.component';
import { CausesInfoComponent } from './Info-pages/causes-info/causes-info.component';
import { SymptomsInfoComponent } from './Info-pages/symptoms-info/symptoms-info.component';
import { DiagnosisInfoComponent } from './Info-pages/diagnosis-info/diagnosis-info.component';
import { TreatmentInfoComponent } from './Info-pages/treatment-info/treatment-info.component';
import { Error404Component } from './error404/error404.component';
import { WeatherComponent } from './weather/weather.component';
import { PrenevtionComponent } from './prenevtion/prenevtion.component';
import { TripComponent } from './trip/trip.component';
import { MapComponent } from './map/map.component';
import { SkinTypeComponent } from './skin-type/skin-type.component';
import { ReferencesComponent } from './references/references.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component'

const routes: Routes = [
  { path: 'news', component: NewsComponent},
  { path: 'skin-cancer', component: SkinCancerComponent,
  children: [
    {
      path: '',
      redirectTo: 'cancer',
      pathMatch: 'full'
    },
    {
      path: 'cancer',
      component: AboutInfoComponent
    },
    {
      path: 'types',
      component: TypesInfoComponent
    },
    {
      path: 'causes',
      component: CausesInfoComponent
    },
    {
      path: 'symptoms',
      component: SymptomsInfoComponent
    },
    {
      path: 'diagnosis',
      component: DiagnosisInfoComponent
    },
    {
      path: 'treatment',
      component: TreatmentInfoComponent
    }
  ]
  },
  { path: 'compare', component: CompareComponent},
  { path: 'home', component: HomeComponent},
  { path: 'weather', component: WeatherComponent},
  { path: 'prevention', component: PrenevtionComponent},
  { path: 'trip', component: TripComponent},
  { path: 'map', component: MapComponent },
  { path: 'skin-type', component: SkinTypeComponent},
  { path: 'references', component: ReferencesComponent},
  { path: 'disclaimer', component: DisclaimerComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
