import React from 'react'
import ContactList from './containers/ContactList'
import SideBar from './containers/Sidebar/sidebar'
import GlobalStyles, { Main } from './styles'


function App() {

  return (
    <>
      <GlobalStyles />
      <Main>
        <SideBar />
        <ContactList />
      </Main>
    </>
  )
}

export default App
