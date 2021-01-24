import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExchangeRequestService} from '../exchange-request.service'
import{ExchangeRequest} from '../exchange-request'
import { User } from '../user';
import { OrderService } from '../order.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent implements OnInit {

  user:User = new User();
  exchangeRequests:ExchangeRequest[]|undefined ;
  constructor(private router: Router,
    private exchangeRequestService: ExchangeRequestService,) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('userDetails')) {

      this.router.navigate(['/login']);   

    }else{
    this.user =JSON.parse(sessionStorage.getItem('userDetails')||'{}') as User;
     //let uId = parseInt(uid);
     console.log(this.user.emailId);
    this.getMyExchangeRequests(this.user.userId);
    //this.getBooksBySessionId(this.user.userId);
    }
  }

  getMyExchangeRequests(userid:number|any){

    this.exchangeRequestService.getSentRequestList(userid).subscribe(data => {
      this.exchangeRequests = data;

      for(let i=0;i<4;i++){
        const ele=data[i];
        console.log(ele);
      }

    });

  }
  cancelRequest(exchangeId:number|any){

    this.exchangeRequestService.deleteBook(exchangeId).subscribe( data => {
      console.log(data);
      this.getMyExchangeRequests(this.user.userId);
    })

  }

  goToBookList() {
    this.router.navigate(['/home']);
  }

  logoutFunction(){

    sessionStorage.removeItem('userDetails');

    this.router.navigate(['/login']);

  }
}
