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
        console.log(this.state.nome);
        console.log(this.state.email);
        console.log(this.state.assunto);
        console.log(this.state.mensagem);
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
            switch (response.status) {
                case 200:
                    _this.setState({
                        msgCls: 'alert alert-success'
                    });
                    break;
                case 400:
                    _this.setState({
                        msgCls: 'alert alert-danger'
                    });
                    break;
                default:
                    _this.setState({
                        msgCls: 'alert alert-danger'
                    });
                    break;
            }
            return response.json();
        }).then(function(data) {
            _this.setState({
                nome: '',
                email: '',
                assunto: '',
                mensagem: '',
                isLoading: false,
                msg: data
            })
        });
    }



    render() {
        var {msg,msgCls,nome,email,assunto,mensagem,isLoading} = this.state;

        var msgs='';

        Object.keys(msg).forEach(function(key) {

            msgs+=`<p>`+msg[key]+`</p>`;

        });
        return (
        <div className="container">
           <div className="row justify-content-md-center">
              <div className="col-md-6 col-md-offset-3">
                 <div className="well well-sm">
                 <form className="form-horizontal" action="" method="post" onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend className="text-center">Fale Conosco</legend>
                    <div className="form-group">
                        <label className="col-md-12 control-label" htmlFor="name">Nome</label>
                        <div className="col-md-12">
                            <input id="nome" name="nome" type="text" required value={nome} onChange={this.handleChange}  placeholder="Seu Nome" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-12 control-label" htmlFor="email">E-mail</label>
                        <div className="col-md-12">
                            <input id="email" name="email" type="email" required value={email}  onChange={this.handleChange}  placeholder="Seu email" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-12 control-label" htmlFor="assunto">Assunto</label>
                        <div className="col-md-12">
                            <input id="assunto" name="assunto" type="text" required value={assunto} onChange={this.handleChange}  placeholder="Digite o assunto" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-12 control-label" htmlFor="mensagem">Mensagem</label>
                        <div className="col-md-12">
                            <textarea className="form-control"  required value={mensagem} onChange={this.handleChange} id="mensagem" name="mensagem" placeholder="Digite sua mensagem" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12 text-right">
                            <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                        </div>
                    </div>

                {isLoading &&
                <div className="hasLoader">
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
                </div>
                }
                
                {msgs &&

                    <div className={`${msgCls}`}dangerouslySetInnerHTML={{__html:msgs}}/>

                }

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