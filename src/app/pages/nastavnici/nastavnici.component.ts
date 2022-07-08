import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/User';
import { NastavnikService } from 'src/services/nastavnik.service';

@Component({
  selector: 'app-nastavnici',
  templateUrl: './nastavnici.component.html',
  styleUrls: ['./nastavnici.component.css']
})
export class NastavniciComponent implements OnInit {
  nastavnici?: User[]
  constructor() { }

  setNastavnici(nastavnici: User[]){
    this.nastavnici = nastavnici;
  }

  izmeniNastavnika(korisnik: User){
    environment.states.korisnik.updateValue(korisnik);
  }

  ngOnInit(): void {
    NastavnikService.getAll().then(nastavnici => this.setNastavnici(nastavnici));
  }

}
