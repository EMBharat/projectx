import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { AtrocitiesComponent } from './atrocities/atrocities.component';
import { FamousBooksComponent } from './famous-books/famous-books.component';
import { ListofexComponent } from './listofex/listofex.component';
import { LiveComponent } from './live/live.component';
import { TestrimonyComponent } from './testrimony/testrimony.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [{ path: 'article-com', component: ArticleComponent },
{ path: 'atrocities-com', component: AtrocitiesComponent },
{ path: 'famousbook', component: FamousBooksComponent },
{ path: 'listofex', component: ListofexComponent },
{ path: 'live', component: LiveComponent },
{ path: 'testrimony', component: TestrimonyComponent },
{ path: 'video-com', component: VideosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
