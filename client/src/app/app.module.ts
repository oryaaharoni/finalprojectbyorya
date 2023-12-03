import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './components/connectedapp/register-user/register-user.component';
import { HomePageComponent } from './components/connectedapp/home-page/home-page.component';
import { LoginUserComponent } from './components/connectedapp/login-user/login-user.component';
import { BoardGameComponent } from './components/game/board-game/board-game.component';
import { DiceComponent } from './components/game/dice/dice.component';
import { OptionGameComponent } from './components/action/option-game/option-game.component';
import { FriendRequestComponent } from './components/action/friend-request/friend-request.component';
import { ChatRoomComponent } from './components/game/chat-room/chat-room.component';
import { CheckerComponent } from './components/game/checker/checker.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    HomePageComponent,
    LoginUserComponent,
    BoardGameComponent,
    DiceComponent,
    OptionGameComponent,
    FriendRequestComponent,
    ChatRoomComponent,
    CheckerComponent

 
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
