import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './app/store.ts';
import { router }  from './routes';
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
)
