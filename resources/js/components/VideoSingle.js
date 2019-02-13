import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Video from './Video'
import Login from './Login'

class VideoSingle extends Component {
    constructor () {
      super()
      this.state = {
        videos: []
      }
    }

    // componentDidMount () {
    //   axios.get('/api/videos').then(response => {
    //     this.setState({
    //       videos: response.data
    //     })
    //   })
    // }

    render () {
        // const { videos } = this.state;
        return(
        <div>
            <Header /> <br></br>
            <p> {param.id} </p>
            <Footer />
        </div>
        )
    }
}

export default VideoSingle