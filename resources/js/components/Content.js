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
                    <h3>Vídeos</h3>
                    <hr></hr>

                    <div className="row offset-md-1">
                        {videos.map(video => (
                            <Link to={`/video/${video.id}`} style={estiloCard} className="col-md-3 col-sm-6 p-0 m-3" >
                                <div height='400' className='p-0' style={estiloCard}> 
                                    <div className="card bg-light col text-center mt-3 mb-1 p-0 border-0" style={estiloCard} key={video.id}>                                        
                                        <div className="card-body mb-1" style={estiloCard}>
                                          <ReactPlayer url={video.url} className='w-100 mb-0 pb-0' width='100%' height='100%' />
                                        </div> 
                                        <h5 class="card-title mt-1" style={estiloCard}>{video.nome}</h5>
                                        <p className="text-muted" style={estiloCard}>{video.descricao}</p>
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
    };