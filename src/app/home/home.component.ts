import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { ExchangeRequestService} from '../exchange-request.service'
import { Book } from '../book';
import { User } from '../user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] | undefined;
  mybooks: Book[] | undefined;
  user:User = new User();
  bookId1:number|any;
  book:Book=new Book();

  selectedBook1:Book=new Book();
  selectedBookId:number|any;
  constructor(private bookService: BookService,
    private router: Router,
    private exchangeRequestService: ExchangeRequestService ) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('userDetails')) {

      this.router.navigate(['/login']);   

    }
    else{

      //console.log(JSON.parse(sessionStorage.getItem("userDetails")).emailId);
     this.user =JSON.parse(sessionStorage.getItem('userDetails')||'{}') as User;
     //let uId = parseInt(uid);
     console.log(this.user.emailId);
    this.getBooks(this.user.userId);
    this.getBooksBySessionId(this.user.userId);
    }



 
  }

  private getBooks(userId:number|any) {
    
    this.bookService.getBookList(userId).subscribe(data => {
      this.books = data;

      for(let i=0;i<4;i++){
        const ele=data[i];
        console.log(ele);
      }

    });


  }

  private getBooksBySessionId(userId:number|any) {
    
    this.bookService.getBookListByUserId(userId).subscribe(data => {
      this.mybooks = data;

      for(let i=0;i<4;i++){
        const ele=data[i];
        console.log(ele);
      }

    });
  }

  exchangeBook(bookid:number|any) {

    this.bookService.getBookByBookId(bookid).subscribe(data =>{

      console.log(data);
      this.book=data;
    },
    error => console.log(error));

    this.exchangeRequestService.addBook(this.bookId1,this.book).subscribe(data1 => {
      console.log(data1);
    },
    error => console.log(error));
    
    
  }

  

  clickHere(){
    
    console.log(this.selectedBook1);

    this.bookId1=this.selectedBook1.bookId
    console.log(this.bookId1);
    
  }

  logoutFunction(){

    sessionStorage.removeItem('userDetails');

    this.router.navigate(['/login']);

  }

  addBookBtnClick(){
    this.router.navigate(['/addbook']);
  }

  profileBtnClick(){
    this.router.navigate(['/profile']);
  }

  excReqBtnClick(){
    this.router.navigate(['/request']);
  }

  myReqBtnClick(){
    this.router.navigate(['/myrequest']);
  }
}
