import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/User';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-izmena-korisnika',
  templateUrl: './izmena-korisnika.component.html',
  styleUrls: ['./izmena-korisnika.component.css']
})
export class IzmenaKorisnikaComponent implements OnInit {
  korisnik: User
  input?: User
  constructor() {
    this.korisnik = environment.states.korisnik.getValue() as User;
    this.input = {
      ...this.korisnik
    }
  }

  updateInput(inputName: string, event : Event){
    if(!this.input) return;
    if(inputName==="ime") this.input.ime = (event.target as HTMLInputElement).value
    if(inputName==="prezime") this.input.prezime = (event.target as HTMLInputElement).value
    if(inputName==="adresa") this.input.adresa = (event.target as HTMLInputElement).value
    if(inputName==="lozinka") this.input.lozinka = (event.target as HTMLInputElement).value
    if(inputName==="email") this.input.email = (event.target as HTMLInputElement).value
  }

  async saveKorisnik(){
    if(!this.input) return;
    const loggedInUser = environment.states.user.getValue();
    if(loggedInUser?.id === this.korisnik.id) {
      const updated = await UserService.updateMe(this.input);
      if(updated) environment.states.user.updateValue(this.input);
      return;
    }
    UserService.update(this.input);
  }

  ngOnInit(): void {

  }

}
