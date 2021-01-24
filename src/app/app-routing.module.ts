import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ExchangeRequestsComponent } from './exchange-requests/exchange-requests.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MyRequestComponent } from './my-request/my-request.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterUserComponent} from './register-user/register-user.component'
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [
  {path:'login', component:LoginUserComponent},
  {path:'home', component:HomeComponent},
  {path:'forgetpassword', component:ForgetPasswordComponent},
  {path:'register',component: RegisterUserComponent},
  {path:'changepassword',component:ChangePasswordComponent},
  {path:'addbook', component:AddBookComponent},
  {path:'updatebook/:bookId', component:UpdateBookComponent},
  {path:'profile',component:ProfileComponent},
  {path:'request',component:ExchangeRequestsComponent},
  {path:'confirm',component:ConfirmOrderComponent},
  {path:'myrequest',component:MyRequestComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'errorpage', component:ErrorpageComponent},
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: '**', redirectTo: 'errorpage', pathMatch: 'full'},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
