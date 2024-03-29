import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MainComponent } from './pages/main/main.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewDocumentComponent } from './pages/new-document/new-document.component';
import { DraggableModule } from './draggable/draggable.module';
import { WebReqInterceptor } from './web-req.interceptor';
import { HeroGreetingComponent } from './pageHelpers/hero-greeting/hero-greeting.component';
import { EditDocumentComponent } from './pages/edit-document/edit-document.component';
import { ShareDocumentComponent } from './pages/share-document/share-document.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    MainComponent,
    NewDocumentComponent,
    HeroGreetingComponent,
    EditDocumentComponent,
    ShareDocumentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DraggableModule,
    BrowserModule, 
    BrowserAnimationsModule 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
