import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models';
import { ChatService } from '../../services';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input()
  private message: Message;

  @Input()
  private messages: Message[];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.chatService.getResponse(this.message.content)
      .subscribe(res => {
        this.messages.push(
          new Message(res.response, 'assets/images/bot.png', res.timestamp)
        );
      });

    this.message = new Message('', 'assets/images/user.png');
  }

}
