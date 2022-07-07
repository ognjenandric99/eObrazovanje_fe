import { Component, OnInit } from '@angular/core';
import { Predmet } from 'src/models/Predmet';
import { NastavnikService } from 'src/services/nastavnik.service';

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

  ngOnInit(): void {
    NastavnikService.getPredmeti().then(
      predmeti => console.log(predmeti)
    )
  }

}
