import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User,UserType } from 'src/models/User';



type Option = {
  text: string,
  route: string
}

const anonymousOptions: Option[] = [];
const studentOptions: Option[] = [
  {
    text: 'Moj Profil',
    route: '/mojProfil'
  }
]

@Component({
  selector: 'app-navigation-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  user: User | null;
  options: Option[]
  constructor(private router: Router) {
    this.options = [];
    this.user = null;
  }

  navigateTo(path: string){
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    const userState = environment.states.user;

    const listenUser = (user: User | null) => {
      if(this.user !== user) this.user = user;

      if(this.user?.tipKorisnika === UserType.STUDENT) this.options = studentOptions;

      if(!this.user) {
        this.options = anonymousOptions;
        this.router.navigate(['/loggedOut']);
      } else {
        this.router.navigate([this.options[0].route]);
      }
    }

    userState.subscribe(listenUser);
  }

}
