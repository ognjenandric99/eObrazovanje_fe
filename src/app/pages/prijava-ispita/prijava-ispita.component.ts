import { Component, OnInit } from '@angular/core';
import { Ispit } from '../../../models/Ispit';
import {PredmetService} from "../../../services/predmet.service";
import {IspitService} from "../../../services/ispit.service";
import {IzvodjenjeIspita} from "../../../models/IzvodjenjeIspita";

@Component({
  selector: 'app-prijava-ispita',
  templateUrl: './prijava-ispita.component.html',
  styleUrls: ['./prijava-ispita.component.css']
})
export class PrijavaIspitaComponent implements OnInit {
  izvodjenjaIspita: IzvodjenjeIspita[]

  constructor() {
    this.izvodjenjaIspita = [];
  }

  ngOnInit(): void {
    IspitService.getIzvodjenjaIspita().then(
      izvodjenjaIspita => this.izvodjenjaIspita=izvodjenjaIspita
    )
  }

  prijavaIspita(izvodjenjeIspitaId: number, pohadjanjeId: number) {
    IspitService.prijavaIspita(izvodjenjeIspitaId, pohadjanjeId);
  }
}
