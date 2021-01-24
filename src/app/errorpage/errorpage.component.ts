import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToHomepage(){
    this.router.navigate(['/homepage']);
  }

}
