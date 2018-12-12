import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss'],
  animations: [
    trigger('myTrigger', [
      state('cold', style({
        background: 'blue'
      })),
      state('hot', style({
        background: 'red'
      })),
      transition('hot => cold', [
        animate(300)
      ]),
      transition('cold => hot', [
        animate(300)
      ])
    ])
  ]
})
export class Demo1Component implements OnInit {

  public temperature = 'cold';

  constructor() { }

  ngOnInit() {
  }

}
