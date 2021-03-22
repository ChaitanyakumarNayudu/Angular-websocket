import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageWebSocketService {

  messages: Message[] = [];
  ws!: WebSocket;
  constructor() { }

  public openWebSocket(): void {
    this.ws = new WebSocket('ws://localhost:8080/chat');

    this.ws.onopen = (event) => {
      console.log('Open: ', event);
    };

    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.messages.push(message);
    };

    this.ws.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendMessage(message: Message): void {
    this.ws.send(JSON.stringify(message));
  }

  public closeWebSocket(): void {
    this.ws.close();
  }

}
