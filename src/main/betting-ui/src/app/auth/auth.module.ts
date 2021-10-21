import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { RouterModule } from '@angular/router';
import { ShowByDefaultComponent } from './components/home/components/show-by-default/show-by-default.component';
import { GetAllMatchesComponent } from './components/home/components/get-all-matches/get-all-matches.component';
import { CreateMatchComponent } from './components/home/components/create-match/create-match.component';
import { UpdateMatchComponent } from './components/home/components/update-match/update-match.component';
import { AuthGuard } from 'app/auth.guard';





@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomeComponent,ShowByDefaultComponent, GetAllMatchesComponent, CreateMatchComponent, UpdateMatchComponent ],
  // TomzOneComponent, TomzTwoComponent, TomzThreeComponent, PrevOneComponent, PrevTwoComponent, PrevThreeComponent,TodayComponent,DatepickercompComponent 
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,

    BsDatepickerModule.forRoot()
    
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ShowByDefaultComponent,
    CreateMatchComponent,
    UpdateMatchComponent
  ],
  providers: [AuthGuard]
})
export class AuthModule { }
