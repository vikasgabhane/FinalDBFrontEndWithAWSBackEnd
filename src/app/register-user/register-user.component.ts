import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import{UserService} from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:User = new User();
 
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe((data:any)=>{
      console.log(data);
      this.goToUserLogin();
    },
      (error: any)=>console.log(error));
  }

  goToUserLogin(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
