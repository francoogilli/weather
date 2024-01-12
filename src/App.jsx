import './App.css';
import DataMain from './components/DataMain';
import Forecast from './components/Forecast';
import WidgetTemp from './components/WidgetTemp';
import Temp from './components/Temp';
function App() {
  return (
    <>
      <Temp />
      <Forecast />
      <DataMain />
    </>
  );
}

export default App;