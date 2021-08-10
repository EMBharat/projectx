import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListofexComponent } from './listofex/listofex.component';
import { VideosComponent } from './videos/videos.component';
import { ArticleComponent } from './article/article.component';
import { LiveComponent } from './live/live.component';
import { TestrimonyComponent } from './testrimony/testrimony.component';
import { FamousBooksComponent } from './famous-books/famous-books.component';
import { AtrocitiesComponent } from './atrocities/atrocities.component';

@NgModule({
  declarations: [
    AppComponent,
    ListofexComponent,
    VideosComponent,
    ArticleComponent,
    LiveComponent,
    TestrimonyComponent,
    FamousBooksComponent,
    AtrocitiesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
