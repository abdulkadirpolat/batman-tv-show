import '../assets/css/global.min.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { createWrapper } from 'next-redux-wrapper'
import configureStore from '../redux/reducers/configureSore'
const store = configureStore()

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
