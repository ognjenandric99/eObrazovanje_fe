import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Predmet } from 'src/models/Predmet';
import { PredmetService } from 'src/services/predmet.service';

@Component({
  selector: 'app-moji-predmeti',
  templateUrl: './moji-predmeti.component.html',
  styleUrls: ['./moji-predmeti.component.css']
})
export class MojiPredmetiComponent implements OnInit {
  predmeti: Predmet[]
  constructor() {
    this.predmeti = [];
  }

  izmeniPredmet(predmetId: number){
    environment.states.predmet.updateValue(predmetId);
  }

  prikaziStudentePredmeta(predmetId: number){
    environment.states.predmet.updateValue(predmetId);
  }

  ngOnInit(): void {
    PredmetService.getPredmeti().then(
      predmeti => this.predmeti=predmeti
    )
  }

}
