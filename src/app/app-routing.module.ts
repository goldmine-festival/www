import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MetaGuard, MetaModule } from '@ngx-meta/core';

const routes: Routes = [
  {
    path: '',
    canActivate: [MetaGuard],
    component: AppComponent,
    data: {
      meta: {
        title: 'Goldmine Festival',
        description: 'Country music has found a new home at Big Bear Mountain. Goldmine Festival will debut in Fall 2021 with big country music stars.',
        'og:image': 'https://goldminefestival.com/assets/mountain-bg.png'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MetaModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
