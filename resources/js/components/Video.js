import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Video extends Component {
    constructor () {
      super()
      this.state = {
        videos: []
      }
    }

    componentDidMount () {
      axios.get('/api/videos/').then(response => {
        this.setState({
          videos: response.data
        })
      })
    }

    render () {
        const { videos } = this.state;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 mt-3">
                        <div className="card col text-center" key={video.id}>
                            <div className="card-header" style={estiloCard}><h4>{video.nome}</h4></div>
                            <div className="card-body">Vídeo</div> 
                            <p className="card-text">{video.descricao}</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}        

export default Video

const estiloCard = {
    color: 'black',
    backgroundColor: 'white',
};