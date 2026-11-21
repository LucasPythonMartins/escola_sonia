import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tag-listas',
  styleUrl: './tag-listas.css',
  templateUrl: './tag-listas.html',
})
export class TagListas {
  /*string é padrão que fica entre aspas, simples ou duplas */
  nome_variavel_string: string = 'Lucas Pinto';
  nome_variavel_string2
  /*number é padrão que fica sem aspas, apenas o número*/
  nome_variavel_number: number = 10;
  /*boolean é padrão que fica com true ou false*/
  nome_variavel_boolean_true: boolean = true;
  nome_variavel_boolean_false: boolean = false;
  
  /*Este é o construtor */
  constructor() {
    this.nome_variavel_string2 = 'Lucas Pinto 2';
    /*O metodo console.log() faz com que seja lançado ou impresso no cliente ou navegador */
    console.log("minha váriavel sendo impressa: ", this.nome_variavel_string);
    console.log("minha váriavel 2º sendo impressa: ", this.nome_variavel_string2);
    console.log("minha váriavel 3º sendo impressa: ", this.nome_variavel_number);
    console.log("minha váriavel 4º sendo impressa: ", this.nome_variavel_boolean_true);
    console.log("minha váriavel 5º sendo impressa: ", this.nome_variavel_boolean_false);
  
    /*Chamando o método para imprimir a variável 2 */
    this.metodo_imprimir_variavel_2();
  }// Fim do construtor.
  variavel_2: number = 20;
  /*Criando o método para imprimir a variável 2 */
  metodo_imprimir_variavel_2() {
    console.log("minha váriavel sendo impressa pelo metodo_imprimir_variavel_2: ", this.variavel_2);
  }//Fim do metodo_imprimir_variavel_2.


}//Fim da classe(objeto)TagListas.