import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-array',
  styleUrl: './array.css',
  templateUrl: './array.html',
})
export class Array {
  numero: number = 40;
  //***Queremos o prédio números */
  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1000];

  /**var de string */
  localstring: string = "Mariza";
  /**Queremos o prédio de string */
  localstrings: string[] = ["Mariza", "Roberta", "Carlos", "Nuno", "Mario", "Ivone", "5000", "Tony"]

  constructor() {
    console.log(this.numeros[0]);
    console.log(this.numeros[9]);
    //console.log(this.numeros[10]); não existe no array, vai dar undefined
    for (let i = 0; i < this.numeros.length; i++) {
      //const element = this.numeros[i];
      //console.log("Meu andar(indice): ", i, "Meu prédio de número: ", element);
      console.log("Meu andar(indice): ", i, "Meu prédio de número: ", +this.numeros[i]);
    }
    console.log("*****************");
    console.log(this.localstrings[7]);
    
    for (let i= 0; i < this.localstrings.length; i++) {
      const aluno = this.localstrings[i];
      console.log("O aluno de número: ", i, "é o aluno: ", aluno);
    }
  }// Fim do construtor.
}// Fim da classe(objeto)Array.

