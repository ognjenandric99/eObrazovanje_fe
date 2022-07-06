import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User, UserServiceLoginResponse } from 'src/models/User';
import { UserService } from 'src/services/user.service';

type LoginState = {
  username: string,
  password: string
}

const validateUsername = (username: string) => {
  if(!username || typeof username !== "string" || username.length<3) throw 'Invalid username';
  return true;
}

const validatePassword = (password: string) => {
  if(!password || typeof password !== "string" || password.length<3) throw 'Invalid password';
  return true;
}

@Component({
  selector: 'app-navigation-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  state: LoginState
  constructor() {
    this.state = {
      username: '',
      password: ''
    }
  }
  
  private handleLoginResponse(loginRes: UserServiceLoginResponse){
    if(!loginRes.status) throw loginRes.message;
    environment.states.user.updateValue(loginRes.data || null);
  }

  login(){
    try {
      const {username,password} = this.state;
      if(!validateUsername(username) || !validatePassword(password)) return;
      UserService.login(username, password).then(this.handleLoginResponse)
    } catch(e) {
      alert(e);
    }
  }

  handleKeystroke(field: string, e: any){
    this.state[field as keyof LoginState]=e.target.value as string;
  }

  ngOnInit(): void {
  }

}

