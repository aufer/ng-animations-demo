import { Component, OnInit } from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss'],
  animations: [
    trigger('listLengthTrigger', [
      transition(':increment', [
        query(':enter', [
          style({
            opacity: '0',
            width: '0'
          }),
          stagger(50, [
            animate('500ms ease-in-out', style({opacity: 1, width: '*'}))
          ])
        ])
      ]),
      transition(':decrement', [
        query(':leave', [
          style({
            opacity: '1',
            width: '*'
          }),
          stagger(50, [
            animate('500ms ease-in-out', style({opacity: 0, width: 0}))
          ])
        ])
      ])
    ])
  ]
})
export class Demo2Component {
  tokens = 'Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'.split(' ');

  items = this.tokens.slice(0, 5);

  constructor() {}

  add() {
    this.items.push(this.getRandomToken());
  }

  remove() {
    this.items.pop();
  }

  getRandomToken() {
    const index = Math.floor(Math.random() * this.tokens.length);
    console.log({index});
    return this.tokens[index];
  }
}
