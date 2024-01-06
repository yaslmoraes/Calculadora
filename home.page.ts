import { Component } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})








export class HomePage {




  resultado: string = "0";
  primeiro_elemento: string = "";
  segundo_elemento: string = "";
  operador_selecionado: boolean = false;
  operando: string = "";
  i: string = "0";








  constructor() {}




  digito(valor: string) {
    if(this.resultado == "Indefinido")
    {
      this.operador_selecionado=false;
      this.resultado = valor;
    }
    else if (this.operador_selecionado == false) {
      if (this.resultado == "0") {
        if (valor != "."){
          this.resultado = valor;
        } else {
          this.resultado += valor;
          this.i = "1";
        }
       
      } else {
        if (valor == "."){
          if(this.i != "1"){
            this.resultado += valor;
            this.i = "1";
        }
        } else {
          this.resultado += valor;
        }
      }
    } else {
          this.segundo_elemento = this.segundo_elemento + valor;
          this.resultado = this.resultado + valor;
    }
  }




  operador(operador_calculadora: string) {
    if (this.operador_selecionado == false) {
      this.primeiro_elemento = this.resultado;
      this.resultado = this.resultado + operador_calculadora;
      this.operador_selecionado = true;
      this.operando = operador_calculadora;
    } else {
      this.calcular();
        this.primeiro_elemento = this.resultado;
        this.resultado = this.primeiro_elemento + operador_calculadora;
        this.operando = operador_calculadora;
      if (parseFloat(this.resultado) > 0) {
        this.segundo_elemento = this.resultado.substring(parseFloat(this.primeiro_elemento),this.resultado.length);
      }
      else {
        this.segundo_elemento = this.resultado.substring(parseFloat(this.primeiro_elemento),-(this.resultado.length));
      }
    }
  }




  calcular() {
    if (this.operando == "+") {
      this.resultado = (parseFloat(this.primeiro_elemento) + parseFloat(this.segundo_elemento)).toString()
    } else if (this.operando == "-") {
      this.resultado = (parseFloat(this.primeiro_elemento) - parseFloat(this.segundo_elemento)).toString();
    } else if (this.operando == "÷") {  
      if (this.segundo_elemento=="0") {
        this.resultado = "Indefinido";
      }else{
      this.resultado = (parseFloat(this.primeiro_elemento) / parseFloat(this.segundo_elemento)).toString();
      }
    } else if (this.operando == "×") {
      this.resultado = (parseFloat(this.primeiro_elemento) * parseFloat(this.segundo_elemento)).toString();
    } else if (this.operando == '^') {
      this.resultado = (parseFloat(this.primeiro_elemento) ** parseFloat(this.segundo_elemento)).toString();
    }
  }




  redefinir() {
    this.resultado = "0";
    this.primeiro_elemento = "";
    this.segundo_elemento = "";
    this.operando = "";
    this.operador_selecionado = false;
    this.i = "0";
  }




  porcentagem() {
    if (this.operador_selecionado == true){
      this.resultado = "Não é possível"        
    }else{
    this.resultado = (parseFloat(this.resultado) / 100).toString();
    }
}








radiciacao() {
  if (this.operador_selecionado == true){
    this.resultado = "Não é possível"        
  }else{
    this.resultado = (parseFloat(this.resultado) **(1/2)).toString();
  }
}




apagar() {
  if ((this.resultado.length > 0) && (this.resultado != "0")){
    this.resultado = this.resultado.slice(0,-1);
if (this.resultado != "."){
  this.i = "0";
}
if (this.resultado != this.operando){
  this.operador_selecionado = false;
}
if (this.resultado == ""){
  this.resultado = "0";
}
    }
  }
}
}



