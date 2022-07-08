// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-studenti-ispita',
//   templateUrl: './studenti-ispita.component.html',
//   styleUrls: ['./studenti-ispita.component.css'],
// })
// export class StudentiIspitaComponent implements OnInit {
//   studenti?: getStudentiResponse;
//   predmet?: Predmet;
//   constructor() {}

//   loadStudenti(studenti: getStudentiResponse) {
//     this.studenti = studenti;
//   }
//   loadPredmet(predmet: Predmet) {
//     this.predmet = predmet;
//   }

//   izbaciStudenta(studentId: number) {
//     PredmetService.izbaciStudentaSaPredmeta(studentId, this.predmet?.id!);
//   }

//   ngOnInit(): void {
//     const predmetId = environment.states.predmet.getValue() as number;
//     PredmetService.getPredmet(predmetId).then((predmet) =>
//       this.loadPredmet(predmet)
//     );
//     PredmetService.getStudenti(predmetId).then((studenti) =>
//       this.loadStudenti(studenti)
//     );
//   }
// }
