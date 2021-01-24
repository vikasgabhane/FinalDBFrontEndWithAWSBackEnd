import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExchangeRequestService} from '../exchange-request.service'
import{ExchangeRequest} from '../exchange-request'
import { User } from '../user';
import { OrderService } from '../order.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-exchange-requests',
  templateUrl: './exchange-requests.component.html',
  styleUrls: ['./exchange-requests.component.css']
})
export class ExchangeRequestsComponent implements OnInit {

  user:User = new User();
  exchangeRequests:ExchangeRequest[]|undefined ;
  exchangeRequest:ExchangeRequest = new ExchangeRequest();
  granterBookId:number|any;
  requesterBookID:number|any;
  constructor(private router: Router,
    private exchangeRequestService: ExchangeRequestService,
    private orderService:OrderService,
    private bookService:BookService) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('userDetails')) {

      this.router.navigate(['/login']);   

    }else{

    this.user =JSON.parse(sessionStorage.getItem('userDetails')||'{}') as User;
     //let uId = parseInt(uid);
     console.log(this.user.emailId);
    this.getExchangeRequests(this.user.userId);
    //this.getBooksBySessionId(this.user.userId);
    }
  }

  getExchangeRequests(userid:number|any){

    this.exchangeRequestService.getBookList(userid).subscribe(data => {
      this.exchangeRequests = data;

      for(let i=0;i<4;i++){
        const ele=data[i];
        console.log(ele);
      }

    });

  }
  orderBook(exchangeId:number|any){

    this.orderService.placeOrder(exchangeId).subscribe(data => {
        console.log(data);
        
    });

    this.orderService.deleteBookAndRequest(exchangeId).subscribe(data => {
      console.log(data);
    });


   /* this.exchangeRequestService.getRequestByExchangeId(exchangeId).subscribe(data=>{
        this.exchangeRequest=data;
        this.granterBookId=this.exchangeRequest.granterBookId;
        this.requesterBookID=this.exchangeRequest.requesterBookId;

    });

    this.bookService.deleteBook(this.granterBookId).subscribe( data => {
      console.log(data);
      
    });
    this.bookService.deleteBook(this.requesterBookID).subscribe( data => {
      console.log(data);
      
    });
    this.exchangeRequestService.deleteBook(exchangeId).subscribe( data => {
      console.log(data);
      this.getExchangeRequests(this.user.userId);
    });

*/
    this.goToConfirmationPage();

  }
  denyBook(exchangeId:number|any){

    this.exchangeRequestService.deleteBook(exchangeId).subscribe( data => {
      console.log(data);
      this.getExchangeRequests(this.user.userId);
    })

  }

  goToConfirmationPage(){

    this.router.navigate(['/confirm']);
  }

  goToBookList() {
    this.router.navigate(['/home']);
  }

  logoutFunction(){

    sessionStorage.removeItem('userDetails');

    this.router.navigate(['/login']);

  }

}
