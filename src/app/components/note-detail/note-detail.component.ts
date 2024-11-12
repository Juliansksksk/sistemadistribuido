import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
}

@Component({
  selector: 'app-note-detail',
  standalone: true,
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
  providers: [NoteService],
  imports: [CommonModule, FormsModule,MatButtonModule] // Agrega FormsModule para habilitar ngModel
})
export class NoteDetailComponent implements OnInit {
  note: Note = { id: '', title: '', content: '' };
  isEditing = false;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const noteId = this.route.snapshot.paramMap.get('id');
    if (noteId) {
      this.loadNoteDetail(noteId);
    }
  }

  loadNoteDetail(id: string): void {
    this.noteService.getNoteById(id).subscribe(
      (data) => {
        this.note = data;
      },
      (error) => {
        console.error('Error al cargar la nota:', error);
      }
    );
  }

  enableEdit(): void {
    this.isEditing = true;
  }

  saveChanges(): void {
    if (this.note) {
      this.noteService.updateNote(this.note.id, this.note).subscribe(
        () => {
          console.log('Nota actualizada con éxito');
          this.isEditing = false;
        },
        (error) => {
          console.error('Error al actualizar la nota:', error);
        }
      );
    }
  }

  deleteNote(): void {
    if (this.note) {
      this.noteService.deleteNote(this.note.id).subscribe(
        () => {
          console.log('Nota eliminada con éxito');
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error al eliminar la nota:', error);
        }
      );
    }
  }

   // Método para regresar a la página anterior o al inicio
   goBack(): void {
    this.router.navigate(['/home']);
  }
}
