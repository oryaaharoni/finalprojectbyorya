import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/connectedapp/home-page/home-page.component';
import { LoginUserComponent } from './components/connectedapp/login-user/login-user.component';
import { RegisterUserComponent } from './components/connectedapp/register-user/register-user.component';
import { OptionGameComponent } from './components/action/option-game/option-game.component';
import { FriendRequestComponent } from './components/action/friend-request/friend-request.component';
import { BoardGameComponent } from './components/game/board-game/board-game.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'optiongame', component: OptionGameComponent },
  { path: 'send-friend-request', component: FriendRequestComponent },
  {path: 'boardgame', component: BoardGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
