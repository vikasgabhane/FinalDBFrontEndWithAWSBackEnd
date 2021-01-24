import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

 // private registerURL = "http://ec2-54-234-103-17.compute-1.amazonaws.com:8080/books";

  constructor(private httpClient:HttpClient) { }

  createUser(user: User):Observable<User>|any  {

    return this.httpClient.post("http://ec2-54-234-103-17.compute-1.amazonaws.com:8080/adduser",user);

  }

  loginUser(user:User):Observable<User[]>{
    return this.httpClient.post<User[]>("http://ec2-54-234-103-17.compute-1.amazonaws.com:8080/login",user);
  }

  forgetPassword(user:User):Observable<User>|any {
    return this.httpClient.post("http://ec2-54-234-103-17.compute-1.amazonaws.com:8080/forgetpassword",user);
  }

  private changePassURL = "http://ec2-54-234-103-17.compute-1.amazonaws.com:8080/changepassword";
  changePassword(userName:String|any, user:User): Observable<Object>{
    return this.httpClient.put(`${this.changePassURL}/${userName}`, user);
  }

  private getUserByNameURL = "http://ec2-54-234-103-17.compute-1.amazonaws.com:8080/getUser";
  getUserByName(userName:String|undefined): Observable<User>{
    return this.httpClient.get<User>(`${this.getUserByNameURL}/${userName}`);
  }

  private getUserByEmailURL = "http://ec2-54-234-103-17.compute-1.amazonaws.com:8080/getUserByEmail";
  getUserByEmailId(emailId:String|any): Observable<User>{
    return this.httpClient.get<User>(`${this.getUserByEmailURL}/${emailId}`);
  }






}
