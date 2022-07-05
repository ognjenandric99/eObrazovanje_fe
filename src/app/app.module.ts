import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './header/options/options.component';
import { LoginComponent } from './header/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { LogoutComponent } from './header/logout/logout.component';
import { RouterModule } from '@angular/router';
import { Stranica1Component } from './pages/stranica1/stranica1.component';
import { Stranica2Component } from './pages/stranica2/stranica2.component';
import { Stranica3Component } from './pages/stranica3/stranica3.component';

const modules = [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    RouterModule
];

const routing = [
  RouterModule.forRoot([
    {path: 'stranica1', component: Stranica1Component},
    {path: 'stranica2', component: Stranica2Component},
    {path: 'stranica3', component: Stranica3Component},
    {path: '**', redirectTo: '/'},
  ])
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OptionsComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    ...modules,
    ...routing
  ],
  exports: [
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
