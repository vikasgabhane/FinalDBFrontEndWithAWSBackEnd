import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  bookId: number | any;
  book: Book = new Book();
  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    if (!sessionStorage.getItem('userDetails')) {

      this.router.navigate(['/login']);   

    }else{

    //this.bookId = this.route.snapshot.paramMap.get('bookId');
    this.bookId = this.route.snapshot.params['bookId'];

    this.bookService.getBookByBookId(this.bookId).subscribe(data => {
      this.book = data;
      
    }, error => console.log(error));
    
   //this.updateBook(this.bookId);
  }
   
  }

  onSubmit(){

    console.log(this.bookId);
    /*this.bookService.updateBook(this.bookId,this.book).subscribe(data =>{
      console.log(data);
      this.goToProfile();
    },
    error => console.log(error));
    */
    this.bookService.updateBook(this.bookId,this.book).subscribe(data=>{
      this.goToProfile();
     },error=>console.log(error));
    
  }


  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToBookList() {
    this.router.navigate(['/home']);
  }

  logoutFunction(){

    sessionStorage.removeItem('userDetails');

    this.router.navigate(['/login']);

  }

}
