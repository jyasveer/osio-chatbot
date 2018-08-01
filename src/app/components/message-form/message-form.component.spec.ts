import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import { MessageFormComponent } from './message-form.component';
import { ChatService } from '../../services';
import { Message } from '../../models';

describe('MessageFormComponent', () => {
  let component: MessageFormComponent;
  let fixture: ComponentFixture<MessageFormComponent>;
  let mockHttp: any;

  beforeEach(async(() => {
    mockHttp = jasmine.createSpy('Http');

    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ MessageFormComponent ],
      providers: [
        ChatService,
        {
          provide: Http, useValue: mockHttp
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFormComponent);
    component = fixture.componentInstance;
    component.message = <Message>{
      content: 'hello'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
