import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public display: boolean = true;
  public button_content: string = "Hide text";
  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.display = !this.display;
    if (this.display) {
      this.button_content = "Hide text"
    } else {
      this.button_content = "Show text"
    }

  }

}
