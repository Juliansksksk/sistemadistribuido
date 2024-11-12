import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class RegisterComponent {
  user = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    // Simulación de registro
    if (this.user.password !== this.user.confirmPassword) {
      console.log('Las contraseñas no coinciden');
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Usuario registrado:', this.user);
    alert('Registro exitoso. Ahora puedes iniciar sesión.');

    // Redirigir al login después del registro
    this.router.navigate(['/login']);
  }
}
