import { Component, OnInit } from '@angular/core';
import {Ispit} from "../../../models/Ispit";
import {IspitService} from "../../../services/ispit.service";

@Component({
  selector: 'app-polozeni-ispiti',
  templateUrl: './polozeni-ispiti.component.html',
  styleUrls: ['./polozeni-ispiti.component.css']
})
export class PolozeniIspitiComponent implements OnInit {
  ispiti: Ispit[]

  constructor() {
    this.ispiti = [];
  }

  ngOnInit(): void {
    IspitService.getPolozeniIspiti().then(
      ispiti => this.ispiti=ispiti
    )
  }
}
