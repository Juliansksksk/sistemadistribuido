import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent }, // Redirigir a login por defecto
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'note/new', component: CreateNoteComponent },
  { path: 'note/:id', component: NoteDetailComponent },
  { path: '**', redirectTo: 'login' },
  { path: 'note/:id', component: NoteDetailComponent },
];
