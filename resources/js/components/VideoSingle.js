import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import axios from 'axios'
import ReactPlayer from 'react-player'

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
        <div className='container py-4'>
        <div className='row justify-content-center'>
            <div className='col-md-8'>
            <div className='card'>
                <div className='card-header'>{video.nome}</div>
                <div className='card-body'>
                    <ReactPlayer url={video.url} width='100%' height='100%' />
                    <p className="card-text">{video.descricao}</p>
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default VideoSingle