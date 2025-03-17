import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Pour ngModel
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'; // Pour FontAwesome
import { faGoogle, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Icônes sociales
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Pour les animations
import { RouterModule } from '@angular/router'; // Importez RouterModule
import { AppRoutingModule } from './app-routing.module'; // Importez AppRoutingModule

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule, // Ajoutez RouterModule ici
    AppRoutingModule, // Ajoutez AppRoutingModule ici
    FormsModule, // Pour ngModel
    FontAwesomeModule, // Pour FontAwesome
    BrowserAnimationsModule, // Pour les animations
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Ajoutez les icônes à la bibliothèque FontAwesome
    library.addIcons(faGoogle, faFacebookF, faGithub, faLinkedinIn);
  }
}