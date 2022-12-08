import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SportComponent } from './sport/sport.component';
import { TodosComponent } from './todos/todos.component';
import { AuthGuard } from './guards/auth-guard.service';
import { initializeKeycloak } from './initialize-keycloak';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SportComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    KeycloakAngularModule,
    RouterModule.forRoot([{ 
      path: '', 
      component: HomeComponent, 
      pathMatch: 'full', 
      // canActivate: [AuthGuard] 
    },
      { path: 'sport', component: SportComponent },
      { path: 'todos', component: TodosComponent },
    ])
  ],
  // providers: [    {
  //   provide: APP_INITIALIZER,
  //   useFactory: initializeKeycloak,
  //   multi: true,
  //   deps: [KeycloakService]
  // },
// ],
  bootstrap: [AppComponent]
})
export class AppModule { }
