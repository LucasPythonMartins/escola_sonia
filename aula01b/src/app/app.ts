import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
import { Components } from './components/components';

@Component({
  imports: [RouterOutlet, Header, Main, Footer, Components],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('aula01b');
}
