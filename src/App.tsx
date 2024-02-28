import React from 'react'
import ContactList from './containers/ContactList'
import SideBar from './containers/Sidebar/sidebar'
import GlobalStyles, { Main } from './styles'
import store from './store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Main>
        <SideBar />
        <ContactList />
      </Main>
    </Provider>
  )
}

export default App
