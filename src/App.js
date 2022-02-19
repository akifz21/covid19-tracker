import Header from './components/Header';
import { ContinentsProvider } from './context/ContinentsContext';
import { CountriesProvider } from './context/CountriesContext';
import { GlobalProvider } from './context/GlobalContext';
import RouterManager from './routes/RouterManager';
import "./styles/style.css"

function App() {
  return (
    <GlobalProvider>
      <ContinentsProvider>
        <CountriesProvider>
          <Header/>
          <div id='container'>
             <RouterManager/>
          </div>
        </CountriesProvider>
      </ContinentsProvider>
    </GlobalProvider>
  );
}

export default App;
