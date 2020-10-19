import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  projectName: string;
  constructor() { 
    this.projectName = "TeSt pls help";
  }

  ngOnInit(): void {
  }

}
