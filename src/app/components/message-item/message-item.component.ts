import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.less']
})
export class MessageItemComponent implements OnInit {

  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

}
