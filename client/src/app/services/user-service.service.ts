import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private Url = 'http://localhost:8080/users/';

  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get(this.Url);
  }

  delete(id: string) {
    return this.httpClient.delete(this.Url + id, {
      headers: {
        Authorization: this.getToken() as string,
      },
    });
  }

  //register user
  post(user: User) {
    return this.httpClient.post(this.Url, user);
  }

  login(username: string, password: string) {
    return this.httpClient.post(this.Url + 'login', {
      username: username,
      password: password,
    });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  Exit() {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
  }

  updateUserStateLogin(username: string) {
    return this.httpClient.put(
      this.Url + 'statelogin',
      { username: username },
      {
        headers: {
          Authorization: this.getToken() as string,
        },
      }
    );
  }

  updateUserStateLogout(username: string) {
    return this.httpClient.put(
      this.Url + 'statelogout',
      { username: username },
      {
        headers: {
          Authorization: this.getToken() as string,
        },
      }
    );
  }

  storeUserName(name: string) {
    localStorage.setItem('name', name);
  }

  getUserName() {
    return localStorage.getItem('name');
  }

  getUserByUserName(username: string) {
    return this.httpClient.post(
      this.Url + 'findbyUsername',
      { username: username },
      {
        headers: {
          Authorization: this.getToken() as string,
        },
      }
    );
  }

  getById(id: string): Observable<any> {
    return this.httpClient.post(
      this.Url + 'findbyid',
      { id: id },
      {
        headers: {
          Authorization: this.getToken() as string,
        },
      }
    );
  }
}
