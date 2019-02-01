import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identidadessecretas',
  templateUrl: './identidadessecretas.component.html',
  styleUrls: ['./identidadessecretas.component.css']
})
export class IdentidadessecretasComponent implements OnInit {

passwordError: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(login){
  	console.log(login.value.usuario);
  	console.log(login.value.senha);
  	console.log(login.value.mae);
	console.log(login);
  }

  checkPassword(senha){
    if(senha.value.length!=6)
      this.passwordError = true;
    else
      this.passwordError = false;
  }

}
