import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';

import { ChatService } from './chat.service';

describe('Chatbot service', () => {
  let mockHttp: any;

  beforeEach(() => {
    mockHttp = jasmine.createSpy('Http');

    TestBed.configureTestingModule({
      providers: [
        ChatService,
        {
          provide: Http, useValue: mockHttp
        }
      ]
    });
  });

  it('should be created', inject([ ChatService ], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
});
