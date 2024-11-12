import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule correctamente
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';  // Importar MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field';  // Importar MatFormFieldModule
import { MatInputModule } from '@angular/material/input';  // Importar MatInputModule
import { MatButtonModule } from '@angular/material/button';  // Importar MatButtonModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,  // Verifica que RouterModule esté correctamente importado
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.user.email === 'juliandelgado04@gmail.com' && this.user.password === '123456') {
      this.router.navigate(['/home']);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }
}
