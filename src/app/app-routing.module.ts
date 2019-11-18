import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OutputComponent } from './output/output.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  // {path: 'SearchOutput', component: SearchOutputComponent}
  {path: 'animal', component: NavbarComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
