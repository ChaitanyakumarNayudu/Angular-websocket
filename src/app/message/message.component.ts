import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '../models/message';
import { MessageWebSocketService } from '../services/message-web-socket.service';

@Component({
  selector: 'aw-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {

  constructor(public messageWebSocketService: MessageWebSocketService) { }

  ngOnInit(): void {
    this.messageWebSocketService.openWebSocket();
  }

  sendMessage(userForm: NgForm): void {
    const message = new Message(userForm.value.user, userForm.value.message);
    this.messageWebSocketService.sendMessage(message);
  }

  ngOnDestroy(): void {
    this.messageWebSocketService.closeWebSocket();
  }
}
