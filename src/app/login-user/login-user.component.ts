import { Component, OnInit } from '@angular/core';
import{UserService} from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {


  user:User = new User();
  userDetails:User = new User();
  public uiInvalidCredential = false;

  
  emailId:String | undefined;
  password:String | undefined;
  constructor(
    private userService: UserService, 
    private router:Router,
    
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){

   /* this.userService.getUserByEmailId(this.emailId).subscribe(data=>{
          if(data.password==this.password){
            */
            this.userService.loginUser(this.user).subscribe(data=> {
              
              let userid=data[0].userId;
              this.userDetails=data[0];
              console.log(this.userDetails.userId);
              console.log(userid);
              console.log(data.length);
              sessionStorage.setItem('userDetails', JSON.stringify(this.userDetails)); 
              //sessionStorage.setItem('uid',JSON.stringify(userid));
              this.goToUserHomePage();
                
                
              
            },error=>{this.uiInvalidCredential = true;
                      console.log(error);  
                    });
            
       /*   }else{
            this.uiInvalidCredential = true;
          }
    });*/
    
  
  }


  goToUserHomePage(){
     
    this.router.navigate(['/home']);
    
  }

  goToForgetPass(){

    this.router.navigate(['/forgetpassword']);
  }

  goToChangePass(){
    this.router.navigate(['/changepassword']);
  }
  goToRegister(){
    this.router.navigate(['/register']);
  }


}
