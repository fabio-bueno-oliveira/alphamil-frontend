import AppRoutes from './routes'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import './App.css'

function App() {
  return (
    <>
      <MantineProvider>
        <AppRoutes />
      </MantineProvider>
    </>
  )
}

export default App