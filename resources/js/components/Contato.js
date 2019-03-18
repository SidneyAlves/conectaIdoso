import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Contato extends Component {
    constructor () {
      super()
      this.state = {
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
        isLoading: false,
        msg: {},
        msgCls: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        var _this = this;
        this.setState({
            isLoading: true
        })
        var {
            nome,
            email,
            assunto,
            mensagem
        } = this.state;
        //API call goes here
        fetch('/api/contact', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                assunto: assunto,
                mensagem: mensagem
            })
        }).then(function(response) {
            console.log(response.status);
            return response.json();
        }).then(function(data) {
            console.log(data)
        });
    }

    


    render() {
        return (
        <div className="container">
           <div className="row justify-content-md-center">
              <div className="col-md-6 col-md-offset-3">
                 <div className="well well-sm">
                    <form className="form-horizontal" action="" method="post" >
                       <fieldset>
                          <legend className="text-center">Fale Conosco</legend>
                          <div className="form-group">
                             <label className="col-md-12 control-label">Nome</label>
                             <div className="col-md-12">
                                <input id="nome" name="nome" type="text" required placeholder="Nome" className="form-control" />
                             </div>
                          </div>
                          <div className="form-group">
                             <label className="col-md-12 control-label">E-mail</label>
                             <div className="col-md-12">
                                <input id="email" name="email" type="email" required placeholder="Email" className="form-control" />
                             </div>
                          </div>
                          <div className="form-group">
                             <label className="col-md-12 control-label">Assunto</label>
                             <div className="col-md-12">
                                <input id="assunto" name="assunto" type="text" required placeholder="Assunto" className="form-control" />
                             </div>
                          </div>
                          <div className="form-group">
                             <label className="col-md-12 control-label">Mensagem</label>
                             <div className="col-md-12">
                                <textarea className="form-control" required id="mensagem" name="mensagem" placeholder="Mensagem" rows="5"></textarea>
                             </div>
                          </div>
                          <div className="form-group">
                             <div className="col-md-12 text-right">
                                <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                             </div>
                          </div>
                       </fieldset>
                    </form>
                 </div>
              </div>
           </div>
        </div>
        );
        }
}        

export default Contato