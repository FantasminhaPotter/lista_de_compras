import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Lista de Compras</h1>
    <input [(ngModel)]="novoItemNome" placeholder="Novo item" />
    <button (click)="adicionarItem()">Adicionar</button>

    <h2>Itens para comprar</h2>
    <ul>
      <li *ngFor="let item of itensNaoComprados()">
        <span [class.comprado]="item.comprado">{{ item.nome }}</span>
        <button (click)="marcarComoComprado(item)">✔️</button>
        <button (click)="editarItem(item)">✏️</button>
        <button (click)="excluirItem(item)">🗑️</button>
      </li>
    </ul>

    <h2>Itens comprados</h2>
    <ul>
      <li *ngFor="let item of itensComprados()">
        <span [class.comprado]="item.comprado">{{ item.nome }}</span>
        <button (click)="excluirItem(item)">🗑️</button>
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css'] // Certifique-se de que este caminho está correto
})
export class AppComponent {
  novoItemNome: string = '';
  itens: Item[] = [];
  idCounter: number = 0;

  adicionarItem() {
    if (this.novoItemNome.trim()) {
      this.itens.push({
        id: this.idCounter++,
        nome: this.novoItemNome,
        comprado: false
      });
      this.novoItemNome = '';
    }
  }

  editarItem(item: Item) {
    const novoNome = prompt('Editar item', item.nome);
    if (novoNome) {
      item.nome = novoNome;
    }
  }

  marcarComoComprado(item: Item) {
    item.comprado = true;
  }

  excluirItem(item: Item) {
    this.itens = this.itens.filter(i => i.id !== item.id);
  }

  itensNaoComprados() {
    return this.itens.filter(item => !item.comprado);
  }

  itensComprados() {
    return this.itens.filter(item => item.comprado);
  }
}
