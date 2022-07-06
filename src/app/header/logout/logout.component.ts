import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/User';

@Component({
  selector: 'app-navigation-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  user: User | null;
  constructor() {
    this.user = null;
  }

  logOut(): void {
    const userState = environment.states.user;
    userState.updateValue(null);
  }

  ngOnInit(): void {
    const userState = environment.states.user;
    this.user = userState.getValue();
  }

}
