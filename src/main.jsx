import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./context/Theme.jsx";
import { DataProvider } from "./context/DataContext.jsx";

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </ThemeProvider>
)