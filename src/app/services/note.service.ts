import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'https://skjulianprueba.azurewebsites.net/WeatherForecast/notes'; // Reemplaza <your-api-url> con la URL de tu API publicada

  constructor(private http: HttpClient) { }

  // Obtener todas las notas
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}`);
  }

  // Obtener una nota por ID
  getNoteById(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva nota
  createNote(note: Partial<Note>): Observable<Note> {
    return this.http.post<Note>(`${this.apiUrl}`, note);
  }

  // Actualizar una nota
  updateNote(id: string, note: Partial<Note>): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/${id}`, note);
  }

  // Eliminar una nota
  deleteNote(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
