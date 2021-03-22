import { TestBed } from '@angular/core/testing';

import { MessageWebSocketService } from './message-web-socket.service';

describe('MessageWebSocketService', () => {
  let service: MessageWebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageWebSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
