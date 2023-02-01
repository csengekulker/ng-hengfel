import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  radius = new FormControl('')
  height = new FormControl('')

  surface = new FormControl('')

  resultVisible = false
  resetVisible = false

  constructor() { }

  onKeyUp(event: any) { }

  eventHandler() { }

  reset() { }

  ngOnInit(): void {
  }

}
