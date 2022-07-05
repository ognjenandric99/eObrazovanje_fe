import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private router: Router) { }

  navigateTo(path: string){
    this.router.navigate([path]);
  }
  ngOnInit(): void {
  }

}
