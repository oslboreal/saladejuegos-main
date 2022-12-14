import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AhorcadoPageComponent } from './ahorcado-page/ahorcado-page.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MayorMenorPageComponent } from './greater-or-less-page/greater-or-less-page.component';
import { PreguntadosPageComponent } from './preguntados-page/preguntados-page.component';
import { SnakePageComponent } from './snake-page/snake-page.component';
import { PollPageComponent } from './poll-page/poll-page.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';


@NgModule({
  declarations: [
    FooterComponent,
    DashboardComponent,
    NavbarPageComponent,
    MainPageComponent,
    AhorcadoPageComponent,
    ChatComponent,
    MayorMenorPageComponent,
    PreguntadosPageComponent,
    SnakePageComponent,
    PollPageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DashboardRoutingModule,
    RouterModule
  ]
})
export class DashboardModule { }
