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
<<<<<<< HEAD
                            <Link to={`/video/${video.id}`}>
                                <div className="col-md-3 col-sm-6 mt-3">
                                    <div className="card col text-center" key={video.id}>
                                        <div className="card-header" style={estiloCard}><h4>{video.nome}</h4></div>
                                        <div className="card-body">Vídeo</div> 
=======
                            <Link to='/video' style={estiloCard} className="col-md-3 col-sm-6 " >
                                <div height='400'> 
                                    <div className="card col text-center mt-3 mb-1" key={video.id}>
                                        <div className="card-header" style={estiloCard}><h6>{video.nome}</h6></div>
                                        <div className="card-body">
                                          <ReactPlayer url={video.url} width='100%' height='100%' />
                                        </div> 
>>>>>>> 10cf0e3041dd2bf299ac111917cac8b1fc842bd7
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