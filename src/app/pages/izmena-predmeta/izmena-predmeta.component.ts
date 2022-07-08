import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Predmet } from 'src/models/Predmet';
import { PredmetService } from 'src/services/predmet.service';

@Component({
  selector: 'app-izmena-predmeta',
  templateUrl: './izmena-predmeta.component.html',
  styleUrls: ['./izmena-predmeta.component.css']
})
export class IzmenaPredmetaComponent implements OnInit {
  predmet?: Predmet;
  input?: Predmet;
  constructor() {}

  loadPredmet(predmet: Predmet){
    this.predmet = predmet;
    this.input = {
      ...this.predmet
    }
  }

  validateAllInput() : boolean{
    if(this.input?.naziv && this.input.espb && this.input.id && this.input.opis) return true;
    return false;
  }

  savePredmet(){
    if(!this.validateAllInput()) return alert("Molim Vas da unesete validne podatke.");
    if(this.input) PredmetService.updatePredmet(this.input).then(
      response => alert(response.message)
    );
  }

  updateInput(inputName: string, event: Event){
    if(!this.input) return;
    if(inputName==="naziv") this.input.naziv = (event.target as HTMLInputElement).value
    if(inputName==="opis") this.input.opis = (event.target as HTMLInputElement).value
    if(inputName==="espb") this.input.espb = parseInt((event.target as HTMLInputElement).value)
  }

  ngOnInit(): void {
    PredmetService.getPredmet(environment.states.predmet.getValue() as number).then(predmet => this.loadPredmet(predmet))
  }

}
