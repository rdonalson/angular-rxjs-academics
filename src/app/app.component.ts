import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = `Angular ${VERSION.major}`; 

  constructor() { }

  ngOnInit() {
    of(2, 4, 6, 8).subscribe((item) => console.log(item))
  }

}