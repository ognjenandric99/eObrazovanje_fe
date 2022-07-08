import { Component, OnInit } from '@angular/core';
import {Ispit} from "../../../models/Ispit";
import {IspitService} from "../../../services/ispit.service";
import {StudentskiNalog} from "../../../models/StudentskiNalog";
import {StudentskiNalogService} from "../../../services/studentski-nalog.service";
import {User} from "../../../models/User";

type StudentskiNalogType = Omit<StudentskiNalog, "lozinka">

@Component({
  selector: 'app-studentski-nalog',
  templateUrl: './studentski-nalog.component.html',
  styleUrls: ['./studentski-nalog.component.css']
})
export class StudentskiNalogComponent implements OnInit {
  studentskiNalog: StudentskiNalogType

  constructor() {
    this.studentskiNalog = {id: 0, iznos: 0};
  }

  ngOnInit(): void {
    StudentskiNalogService.getFinansije().then(
      studentskiNalog => this.studentskiNalog=studentskiNalog
    )
  }

}
