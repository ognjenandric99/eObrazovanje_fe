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
import { LoggedOutComponent } from './pages/logged-out/logged-out.component';
import { MojProfilComponent } from './pages/moj-profil/moj-profil.component';
import { MojiPredmetiComponent } from './pages/moji-predmeti/moji-predmeti.component';
import { IzmenaPredmetaComponent } from './pages/izmena-predmeta/izmena-predmeta.component';
import { StudentiPredmetaComponent } from './pages/studenti-predmeta/studenti-predmeta.component';
import { PrijavljeniIspitiComponent } from './pages/prijavljeni-ispiti/prijavljeni-ispiti.component';
import { PrijavaIspitaComponent } from './pages/prijava-ispita/prijava-ispita.component';
import { StudentskiNalogComponent } from './pages/studentski-nalog/studentski-nalog.component';
import { PolozeniIspitiComponent } from './pages/polozeni-ispiti/polozeni-ispiti.component';

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
    {path: 'loggedOut', component: LoggedOutComponent},
    {path: 'mojiPredmeti', component: MojiPredmetiComponent},
    {path: 'izmenaPredmeta', component: IzmenaPredmetaComponent},
    {path: 'studentiPredmeta', component: StudentiPredmetaComponent},
    {path: 'prijavaIspita', component: PrijavaIspitaComponent},
    {path: 'prijavljeniIspiti', component: PrijavljeniIspitiComponent},
    {path: 'polozeniIspiti', component: PolozeniIspitiComponent},
    {path: 'studentskiNalog', component: StudentskiNalogComponent},
    {path: '', component: MojProfilComponent}, //Defaultna stranica da bude mojProfil
    {path: '**', redirectTo: '/'}, //Nepostojece stranice idu na defaultnu stranicu (mojProfil za ulogovane, loggedOut za logoutovane)
  ])
]

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
    PrijavljeniIspitiComponent,
    PrijavaIspitaComponent,
    StudentskiNalogComponent,
    PolozeniIspitiComponent
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
