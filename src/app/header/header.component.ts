import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  user:User | null;
  constructor() {
    this.user = null;
  }

  ngOnInit(): void {
    const userState = environment.states.user;

    const listenUser = (user: User | null) => {
      if(this.user !== user) this.user = user;
    }

    userState.subscribe(listenUser);
  }
}
