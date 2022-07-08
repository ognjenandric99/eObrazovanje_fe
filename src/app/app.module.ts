import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './header/options/options.component';
import { LoginComponent } from './header/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { LogoutComponent } from './header/logout/logout.component';
import { RouterModule } from '@angular/router';
import { LoggedOutComponent } from './pages/logged-out/logged-out.component';
import { MojProfilComponent } from './pages/moj-profil/moj-profil.component';
import { MojiPredmetiComponent } from './pages/moji-predmeti/moji-predmeti.component';
import { IzmenaPredmetaComponent } from './pages/izmena-predmeta/izmena-predmeta.component';
import { StudentiPredmetaComponent } from './pages/studenti-predmeta/studenti-predmeta.component';
import { IspitiNastavnikaComponent } from './pages/ispiti-nastavnika/ispiti-nastavnika.component';
import { StudentiIspitaComponent } from './pages/studenti-ispita/studenti-ispita.component';


const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  RouterModule,
];

const routing = [
  RouterModule.forRoot([
    { path: 'loggedOut', component: LoggedOutComponent },
    { path: 'mojiPredmeti', component: MojiPredmetiComponent },
    { path: 'izmenaPredmeta', component: IzmenaPredmetaComponent },
    { path: 'studentiPredmeta', component: StudentiPredmetaComponent },
    { path: 'ispitiNastavnika', component: IspitiNastavnikaComponent },
    { path: 'studentiIspita', component: StudentiIspitaComponent},
    { path: '', component: MojProfilComponent }, //Defaultna stranica da bude mojProfil
    { path: '**', redirectTo: '/' }, //Nepostojece stranice idu na defaultnu stranicu (mojProfil za ulogovane, loggedOut za logoutovane)
  ]),
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OptionsComponent,
    LoginComponent,
    LogoutComponent,
    LoggedOutComponent,
    MojProfilComponent,
    MojiPredmetiComponent,
    IzmenaPredmetaComponent,
    StudentiPredmetaComponent,
    IspitiNastavnikaComponent,
    StudentiIspitaComponent,

  ],
  imports: [...modules, ...routing],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
