import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularesComponent } from './components/populares/populares.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { SeriedetailsComponent } from './components/seriedetails/seriedetails.component';
import { LivroComponent } from './components/livro/livro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'populares', component: PopularesComponent },
  { path: 'filme/:id', component: MoviedetailsComponent },
  { path: 'livro', component: LivroComponent },
  { path: 'serie/:id', component: SeriedetailsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
