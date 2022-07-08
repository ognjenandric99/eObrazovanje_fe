import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User,UserType } from 'src/models/User';

type Option = {
  text: string,
  route: string
}
const genOption = (text: string, route: string) : Option => {
  return {
    text,
    route
  }
}
const mojProfil = genOption('Moj profil', '/mojProfil');
const anonymousOptions: Option[] = [];
const studentOptions: Option[] = [
  mojProfil,
  genOption('Prijava ispita' , '/prijavaIspita'),
  genOption('Prijavljeni ispiti' , '/prijavljeniIspiti'),
  genOption('Polozeni ispiti' , '/polozeniIspiti'),
  genOption('Studentski nalog (finansije)' , '/studentskiNalog')
];
const nastavnikOptions: Option[] = [
  mojProfil,
  genOption('Moji predmeti' , '/mojiPredmeti')
]
const adminOptions: Option[] = [
  mojProfil
];

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

  ngOnInit(): void {
    const userState = environment.states.user;

    const listenUser = (user: User | null) => {
      if(this.user !== user) this.user = user;

      if(this.user?.tipKorisnika === UserType.STUDENT) this.options = studentOptions;
      if(this.user?.tipKorisnika === UserType.NASTAVNIK) this.options = nastavnikOptions;
      if(this.user?.tipKorisnika === UserType.ADMIN) this.options = adminOptions;
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
