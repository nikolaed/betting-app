import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/auth.guard';
import { CreateMatchComponent } from './components/home/components/create-match/create-match.component';
import { GetAllMatchesComponent } from './components/home/components/get-all-matches/get-all-matches.component';
import { ShowByDefaultComponent } from './components/home/components/show-by-default/show-by-default.component';
import { UpdateMatchComponent } from './components/home/components/update-match/update-match.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'matches', component: GetAllMatchesComponent, canActivate: [AuthGuard]},
  { path: 'matches/create', component: CreateMatchComponent},
  { path: 'matches/update/:id', component: UpdateMatchComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', component: ShowByDefaultComponent, pathMatch: 'full'},
      { path: 'tomzone', component: ShowByDefaultComponent},
      { path: 'tomztwo', component: ShowByDefaultComponent},
      { path: 'tomzthree', component: ShowByDefaultComponent},
      { path: 'prevone', component: ShowByDefaultComponent},
      { path: 'prevtwo', component: ShowByDefaultComponent},
      { path: 'prevthree', component: ShowByDefaultComponent},
      { path: 'today', component: ShowByDefaultComponent},
      { path: 'datepicker', component: ShowByDefaultComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
