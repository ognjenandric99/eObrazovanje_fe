import { Component, OnInit } from '@angular/core';
import {IzvodjenjeIspita} from "../../../models/IzvodjenjeIspita";
import {IspitService} from "../../../services/ispit.service";
import {Ispit} from "../../../models/Ispit";

@Component({
  selector: 'app-prijavljeni-ispiti',
  templateUrl: './prijavljeni-ispiti.component.html',
  styleUrls: ['./prijavljeni-ispiti.component.css']
})
export class PrijavljeniIspitiComponent implements OnInit {
  ispiti: Ispit[]

  constructor() {
    this.ispiti = [];
  }

  ngOnInit(): void {
    IspitService.getPrijavljeniIspiti().then(
      ispiti => this.ispiti=ispiti
    )
  }
}
