import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/User';

type mojProfilUser = Omit<User, "lozinka">

@Component({
  selector: 'app-moj-profil',
  templateUrl: './moj-profil.component.html',
  styleUrls: ['./moj-profil.component.css']
})
export class MojProfilComponent implements OnInit {
  user: mojProfilUser
  constructor() {
    const pureUser = environment.states.user.getValue() as User;
    const {lozinka, ...user} = pureUser;
    this.user = user;
  }

  izmeniProfil(){
    environment.states.korisnik.updateValue(environment.states.user.getValue())
  }

  ngOnInit(): void {

  }

}
