import './App.css';
import DataMain from './components/DataMain';
import Forecast from './components/Forecast';
import WidgetTemp from './components/WidgetTemp';

function App() {
  return (
    <>
      <WidgetTemp/>
      <DataMain />
      <Forecast />
    </>
  );
}

export default App;