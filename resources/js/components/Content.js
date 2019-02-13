    import React, {Component} from 'react'
    import { Link } from 'react-router-dom'
    import axios from 'axios'
    import ReactPlayer from 'react-player'

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
                            <Link to='/video' style={estiloCard} className="col-md-3 col-sm-6 " >
                                <div height='400'> 
                                    <div className="card col text-center mt-3 mb-1" key={video.id}>
                                        <div className="card-header" style={estiloCard}><h6>{video.nome}</h6></div>
                                        <div className="card-body">
                                          <ReactPlayer url={video.url} width='100%' height='100%' />
                                        </div> 
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