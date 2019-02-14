import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import axios from 'axios'
import ReactPlayer from 'react-player'
import teste from './imgs/teste.jpg'

class VideoSingle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      video: {}
      //tasks: []
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id

    axios.get(`/api/videos/${id}`).then(response => {
      this.setState({
        video: response.data,
      })
    })
  }

  render () {
    const { video } = this.state

    return (
    <React.Fragment>
        <Header />  
        <div className='container mt-3 mb-2 p-0'>
        <div className='row my-2  h-100'>
            <div className='col-md-8 '>
              <div className='card  h-100' style={estiloCard}>
                  <div className='card-header' style={estiloCard}>{video.nome}</div>
                  <div className='card-body'>
                      <ReactPlayer url={video.url} width='100%' height='100%' className='h-100'/>                    
                  </div>
                  <div className='card-footer'style={estiloCard}>
                    <p className="card-text">{video.descricao}</p>
                  </div>
              </div>
            </div>
            <div className='col-md-4  h-100'>
            <ul class="list-unstyled">
              <li class="media border" style={estiloCard}>
                <img class="mr-3" src={teste} alt="Generic placeholder image" width='70' height='70' />
                <div class="media-body ">
                  <h5 class="mt-0 mb-1 ">Título</h5>
                  <p className='justify-content-center'>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p> 
                </div>
              </li>
              <li class="media my-4 border" style={estiloCard}>
                <img class="mr-3" src={teste} alt="Generic placeholder image" width='70' height='70'/>
                <div class="media-body ">
                  <h5 class="mt-0 mb-1">Título</h5>
                  <p className='justify-content-center'>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p> 
                </div>
              </li>
              <li class="media border" style={estiloCard}>
                <img class="mr-3" src={teste} alt="Generic placeholder image" width='70' height='70' />
                <div class="media-body">
                  <h5 class="mt-0 mb-1">Título</h5>
                  <p className='justify-content-center'>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>                  
                </div>
              </li>
            </ul>
            </div>
        </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default VideoSingle

const estiloCard = {
  color: 'black',
  backgroundColor: 'white',
};