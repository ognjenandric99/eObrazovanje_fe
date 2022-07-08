import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ispit } from 'src/models/Ispit';
import { IzvodjenjeIspita } from 'src/models/IzvodjenjeIspita';
import { IspitService } from 'src/services/ispit.service';

@Component({
  selector: 'app-ispiti-nastavnika',
  templateUrl: './ispiti-nastavnika.component.html',
  styleUrls: ['./ispiti-nastavnika.component.css'],
})
export class IspitiNastavnikaComponent implements OnInit {
  izvodjenjaIspita?: IzvodjenjeIspita[];
  constructor() {}

  ngOnInit(): void {
    IspitService.getIspitiByNastavnik().then((izvodjenjaIspita) =>
      this.loadIspiti(izvodjenjaIspita)
    );
  }

  loadIspiti(izvodjenjaIspita: IzvodjenjeIspita[]) {
    this.izvodjenjaIspita = izvodjenjaIspita;
    console.log(this.izvodjenjaIspita);
  }

  prikaziStudente(izvodjenjaIspitaId: number) {
    environment.states.izvodjenjeIspita.updateValue(izvodjenjaIspitaId);
  }
}
