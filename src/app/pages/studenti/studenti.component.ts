import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/User';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit {
  studenti?: User[];
  constructor() { }

  loadStudenti(studenti: User[]){
    this.studenti = studenti;
  }

  izmeniStudenta(korisnik: User){
    environment.states.korisnik.updateValue(korisnik);
  }

  ngOnInit(): void {
    StudentService.getAll().then(studenti => this.loadStudenti(studenti))
  }

}
