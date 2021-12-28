import React from "react";
import { Component } from "react/cjs/react.production.min";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título"></input>
        <textarea placeholder="Escreva sua nota...."></textarea>
        <button>Criar Nota</button>
      </form>
    );
  }
}


export default FormularioCadastro;