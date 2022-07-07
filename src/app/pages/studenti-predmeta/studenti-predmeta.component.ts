import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Predmet } from 'src/models/Predmet';
import { getStudentiResponse, PredmetService } from 'src/services/predmet.service';

@Component({
  selector: 'app-studenti-predmeta',
  templateUrl: './studenti-predmeta.component.html',
  styleUrls: ['./studenti-predmeta.component.css']
})
export class StudentiPredmetaComponent implements OnInit {
  studenti?: getStudentiResponse
  predmet?: Predmet
  constructor() { }

  loadStudenti(studenti: getStudentiResponse){
    this.studenti = studenti;
  }
  loadPredmet(predmet: Predmet){
    this.predmet = predmet;
  }

  izbaciStudenta(studentId: number){
    PredmetService.izbaciStudentaSaPredmeta(studentId, this.predmet?.id!);
  }

  ngOnInit(): void {
    const predmetId = environment.states.predmet.getValue() as number;
    PredmetService.getPredmet(predmetId).then(predmet => this.loadPredmet(predmet));
    PredmetService.getStudenti(predmetId).then(studenti => this.loadStudenti(studenti))
  }

}
