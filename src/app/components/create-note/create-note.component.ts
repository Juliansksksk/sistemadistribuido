import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class CreateNoteComponent {
  note = {
    title: '',
    content: ''
  };

  constructor(private router: Router, private noteService: NoteService) {}

  onSubmit(): void {
    // Llama al servicio para crear la nota en el backend
    this.noteService.createNote(this.note).subscribe(
      () => {
        console.log('Nota creada con éxito');
        // Redirige al usuario a la página principal después de crear la nota
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error al crear la nota:', error);
      }
    );
  }
}
