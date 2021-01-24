import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import{UserService} from '../user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  user:User = new User();
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  

  goToUserLogin(){
    this.router.navigate(['/login']);
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

  onSubmit(){
    console.log(this.user);
    this.userService.forgetPassword(this.user).subscribe((data:any)=>{
      console.log(data);
      this.goToUserLogin();
      //this.goToUserLogin();
    },
      (error: any)=>console.log(error));
  }

}
