import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  books: Book[] | undefined;
  user:User = new User();
  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('userDetails')) {

      this.router.navigate(['/login']);   

    }else{

      //console.log(JSON.parse(sessionStorage.getItem("userDetails")).emailId);
    this.user =JSON.parse(sessionStorage.getItem('userDetails')||'{}') as User;
    //let uId = parseInt(uid);
    console.log(this.user.emailId);
   this.getBooks(this.user.userId);

    }
    
  }

  private getBooks(userId:number|any) {
    
    this.bookService.getBookListByUserId(userId).subscribe(data => {
      this.books = data;

      for(let i=0;i<4;i++){
        const ele=data[i];
        console.log(ele);
      }

    });
  }
 updateBook(bookId: number|any) {
    //this.router.navigate(['/updatebook',bookId]);
    console.log(bookId);
   this.router.navigate(['updatebook',bookId]);
  }
  deleteBook(bookId: number|any) {
    this.bookService.deleteBook(bookId).subscribe( data => {
      console.log(data);
      this.getBooks(this.user.userId);
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
