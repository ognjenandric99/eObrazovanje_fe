import { Component, OnInit } from '@angular/core';
import {Ispit} from "../../../models/Ispit";
import {IspitService} from "../../../services/ispit.service";

@Component({
  selector: 'app-istorija-polaganja',
  templateUrl: './istorija-polaganja.component.html',
  styleUrls: ['./istorija-polaganja.component.css']
})
export class IstorijaPolaganjaComponent implements OnInit {
  ispiti: Ispit[]

  constructor() {
    this.ispiti = [];
  }

  ngOnInit(): void {
    IspitService.getIstorijaPolaganja().then(
      ispiti => this.ispiti=ispiti
    )
  }
}
