import logo from './logo.svg';
import './App.css';
import DataFetchingUseState from './components/DataFetchingUseState';
import DataFetchingUseReducer from './components/DataFetchingUseReducer';
import InputUseRef from './components/UseRef/InputUseRef';
import DocTitleOne from './components/CustomHooks/DocTitleOne';
import DocTitleTwo from './components/CustomHooks/DocTitleTwo';

function App() {
  return (
    <div className="App">
      {/* <DataFetchingUseState/> */}
      {/* <DataFetchingUseReducer/> */}

      {/* <InputUseRef/> */}

      <DocTitleOne/>
      <DocTitleTwo/>
    </div>
  );
}

export default App;
