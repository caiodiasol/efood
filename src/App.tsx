import { Provider } from 'react-redux'
import { store } from './store'
import Rotas from './routes'

import GlobalCSS from './styles'
import Footer from './containers/Footer'
import { BrowserRouter } from 'react-router-dom'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalCSS />
        <Rotas />
        <Footer />
        <Cart />
      </Provider>
    </BrowserRouter>
  )
}

export default App
