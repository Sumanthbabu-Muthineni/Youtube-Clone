import './App.css'
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import NxtWatchContext from './context/NxtWatchContext'
import LoginForm from './components/LoginForm/index'
import Home from './components/Home'

class App extends Component {
  state = {
    savedVideos: [],
    isDarkTheme: false,
    activeTab: 'Home',
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedVideos = savedVideos.filter(eachVideo => eachVideo.id !== id)
    this.setState({savedVideos: updatedVideos})
  }

  render() {
    const {savedVideos, isDarkTheme, activeTab} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          savedVideos,
          isDarkTheme,
          activeTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          changeTab: this.changeTab,
          removeVideo: this.removeVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
