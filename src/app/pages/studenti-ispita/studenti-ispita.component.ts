import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IspitSaStudentInfom } from 'src/models/IspitiSaStudentInfom';
import { getStudentiResponse, IspitService } from 'src/services/ispit.service';

@Component({
  selector: 'app-studenti-ispita',
  templateUrl: './studenti-ispita.component.html',
  styleUrls: ['./studenti-ispita.component.css'],
})
export class StudentiIspitaComponent implements OnInit {
  studenti?: getStudentiResponse;
  ispiti?: IspitSaStudentInfom
  
  constructor() {
    
  }

  loadStudenti(studenti: getStudentiResponse) {
    this.studenti = studenti;
    console.log(this.studenti)
  }


  ngOnInit(): void {
    const ispitId = environment.states.ispit.getValue() as number;

    IspitService.getStudenti(ispitId).then(studenti =>
      this.loadStudenti(studenti)
    );
  }

  prikaziStudente(izvodjenjaIspitaId: number) {
    environment.states.ispit.updateValue(izvodjenjaIspitaId);
  }
}
