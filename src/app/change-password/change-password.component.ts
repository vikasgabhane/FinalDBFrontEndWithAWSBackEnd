import { Component, OnInit } from '@angular/core';
import{UserService} from '../user.service';
import {ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  userName:String | undefined;
  users:User[] | undefined;
  user:User = new User();
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    userName: ['', Validators.required],
    password1: ['', [Validators.required,Validators.minLength(4)]],
    password: ['', [Validators.required,Validators.minLength(4)]],
  });
  password:String| undefined;
  password1:String| undefined;
  constructor(
    private userService: UserService,
     private route: ActivatedRoute,
     private router:Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    //this.userName = this.route.snapshot.params['userName'];

    

  }
 

  onSubmit(userName:String|undefined){

    if(this.password==this.password1){

      this.userService.changePassword(userName, this.user).subscribe( data =>{
        this.goToEmployeeList();
      }
      , error => console.log(error));

    }else{
      this.uiInvalidCredential=true;
    }

    
    
   
  }

  goToUserLogin(){
    this.router.navigate(['/login']);
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }


  goToEmployeeList(){
    this.router.navigate(['/login']);
  }
}
