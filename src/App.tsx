import NewContact from './components/newContact/newContact'
import ContactList from './containers/ContactList'
import SideBar from './containers/Sidebar/sidebar'
import GlobalStyles, { Container } from './styles'

function App() {

  return (
    <>
    <GlobalStyles />
    <Container>
      <SideBar />
      <ContactList />
      <NewContact />
    </Container>
    </>
  )
}

export default App
