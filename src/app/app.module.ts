import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ChatService } from './services';
import { ChatbotModule } from './chatbot/chatbot.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChatbotModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
