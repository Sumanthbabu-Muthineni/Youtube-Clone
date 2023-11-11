import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
  addVideos: () => {},
})

export default NxtWatchContext
