import NewContact from './components/newContact/newContact'
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
      <NewContact />
    </Main>
    </>
  )
}

export default App
