    import React, {Component} from 'react'
    import { Link } from 'react-router-dom'
    import axios from 'axios'

    class Content extends Component {
        constructor () {
          super()
          this.state = {
            videos: []
          }
        }
  
        componentDidMount () {
          axios.get('/api/videos').then(response => {
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

                        {videos.map(video => (
                            <Link to={`/video/${video.id}`}>
                                <div className="col-md-3 col-sm-6 mt-3">
                                    <div className="card col text-center" key={video.id}>
                                        <div className="card-header" style={estiloCard}><h4>{video.nome}</h4></div>
                                        <div className="card-body">Vídeo</div> 
                                        <p className="card-text">{video.descricao}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            )
        }
    }        

    export default Content

    const estiloCard = {
        color: 'black',
        backgroundColor: 'white',
    };