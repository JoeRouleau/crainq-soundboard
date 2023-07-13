import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiteTemplateComponent } from './site-template/site-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { VoiceMessageListComponent } from './voice-message-list/voice-message-list.component';
import { VoiceMessageComponent } from './voice-message/voice-message.component';

import { HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './filters/filters.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteTemplateComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    VoiceMessageListComponent,
    VoiceMessageComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
