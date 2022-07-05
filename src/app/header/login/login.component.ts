import { Component, OnInit } from '@angular/core';
import { UserService, UserServiceLoginResponse } from 'src/services/user.service';

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
    if(loginRes ) alert(`You have logged in as ${JSON.stringify(loginRes.user)}`)
    
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

