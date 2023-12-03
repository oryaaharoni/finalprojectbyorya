import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from './user-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendsServiceService {
  private Url = 'http://localhost:8080/friends/';

  constructor(
    private httpClient: HttpClient,
    private userService: UserServiceService
  ) {}

  sendFriendRequest(
    senderUsername: string,
    recipientUsername: string
  ): Observable<any> {
    const requestBody = {
      senderUsername,
      recipientUsername,
    };
    return this.httpClient.post(this.Url + 'send-friend-request', requestBody, {
      headers: {
        Authorization: this.userService.getToken() as string,
      },
    });
  }

  removeFriendRequest(
    senderUsername: string,
    recipientUsername: string
  ): Observable<any> {
    const requestBody = {
      senderUsername,
      recipientUsername,
    };
    return this.httpClient.put(
      this.Url + 'remove-friend-request',
      requestBody,
      {
        headers: {
          Authorization: this.userService.getToken() as string,
        },
      }
    );
  }

  getPrivateFriendsList(senderUsername: string) {
    return this.httpClient.post(this.Url + 'getfriends',{username: senderUsername}, {
      headers: {
        Authorization: this.userService.getToken() as string,
      },
    });
  }

}
