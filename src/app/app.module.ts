import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import {FormsModule} from '@angular/forms';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

import { UpdateBookComponent } from './update-book/update-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ProfileComponent } from './profile/profile.component';
import { ExchangeRequestsComponent } from './exchange-requests/exchange-requests.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { MyRequestComponent } from './my-request/my-request.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,
    HomeComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    UpdateBookComponent,
    AddBookComponent,
    ProfileComponent,
    ExchangeRequestsComponent,
    ConfirmOrderComponent,
    MyRequestComponent,
    HomepageComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
