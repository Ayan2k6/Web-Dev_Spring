import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../models';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>All Albums</h2>
    <p *ngIf="loading">Loading albums...</p>
    
    <ul *ngIf="!loading">
      <li *ngFor="let album of albums">
        <a [routerLink]="['/albums', album.id]">{{ album.id }}. {{ album.title }}</a>
        <button (click)="deleteAlbum(album.id)">Delete</button>
      </li>
    </ul>
  `,
  styles: [`
    li { margin-bottom: 10px; display: flex; justify-content: space-between; max-width: 500px; }
    button { background-color: #ff4c4c; color: white; border: none; padding: 5px 10px; cursor: pointer; }
  `]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      // Имитация удаления: обновляем локальный массив
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}