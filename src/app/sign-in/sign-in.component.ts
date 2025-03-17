import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isSignUpActive: boolean = false; // Contrôle l'affichage des formulaires
  email: string = ''; // Pour le formulaire de connexion
  password: string = ''; // Pour le formulaire de connexion
  name: string = ''; // Pour le formulaire d'inscription

  // Méthode pour gérer la soumission du formulaire de connexion
  onSignIn() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Ajoutez ici la logique pour traiter la connexion
  }

  // Méthode pour gérer la soumission du formulaire d'inscription
  onSignUp() {
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Ajoutez ici la logique pour traiter l'inscription
  }

  // Méthode pour basculer entre les formulaires
  toggleForm(isSignUp: boolean) {
    this.isSignUpActive = isSignUp;
  }
}