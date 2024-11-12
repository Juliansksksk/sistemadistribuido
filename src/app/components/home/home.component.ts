import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NoteService],
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule], // Asegúrate de incluir los módulos de Angular Material aquí
})
export class HomeComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {
    this.fetchNotes();
  }

  fetchNotes(): void {
    this.noteService.getNotes().subscribe(
      (data) => {
        this.notes = data;
      },
      (error) => {
        console.error('Error al obtener las notas:', error);
      }
    );
  }

  createNote(): void {
    this.router.navigate(['/note/new']);
  }

  viewNote(noteId: string): void {
    this.router.navigate([`/note/${noteId}`]);
  }


  logout(): void {
    // Aquí puedes eliminar el token de sesión, si estás usando uno
    localStorage.removeItem('authToken'); // o el nombre de tu token de autenticación
    this.router.navigate(['/login']); // Redirige al login
  }
}
