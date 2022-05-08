import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { DettagliStanzaComponent } from './dettagli-stanza/dettagli-stanza.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    DettagliStanzaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
