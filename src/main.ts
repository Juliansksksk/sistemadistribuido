import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),   // Configuración de rutas
    provideAnimations(),        // Proveedor de animaciones
    provideHttpClient()         // Proveedor de HttpClient para llamadas a la API
  ]
})
.catch(err => console.error(err));
