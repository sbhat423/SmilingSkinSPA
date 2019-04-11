import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SkinCancerComponent } from './skin-cancer/skin-cancer.component';
import { CompareComponent } from './compare/compare.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'skin-cancer', component: SkinCancerComponent},
  { path: 'compare', component: CompareComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
