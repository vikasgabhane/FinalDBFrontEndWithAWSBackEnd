import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  user:User = new User();
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('userDetails')) {

      this.router.navigate(['/login']);   

    }
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
