import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = new Book();
  user:User = new User();
  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('userDetails')) {

      this.router.navigate(['/login']);   

    }
    else{

    this.user =JSON.parse(sessionStorage.getItem('userDetails')||'{}') as User;
    console.log(this.user.emailId);
    }
  }

  saveBook(userId:number|any) {
    this.bookService.createBook(userId,this.book).subscribe(data => {
      console.log(data);
      this.goToBookList();
    },
      error => console.log(error));
  }

  goToBookList() {
    this.router.navigate(['/home']);
  }

  onSubmit() {
    console.log(this.book);
    this.saveBook(this.user.userId);
  }

  

  logoutFunction(){

    sessionStorage.removeItem('userDetails');

    this.router.navigate(['/login']);

  }

}
