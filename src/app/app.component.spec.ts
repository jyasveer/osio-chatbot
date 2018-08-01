import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatService } from './services';
import { ChatbotModule } from './chatbot/chatbot.module';

describe('AppComponent', () => {
  let mockHttp: any;

  beforeEach(async(() => {
    mockHttp = jasmine.createSpy('Http');

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ChatbotModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        ChatService,
        {
          provide: Http, useValue: mockHttp
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have default message to display`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.messages[0].content).toEqual('Welcome to chatbot universe');
  }));
});
