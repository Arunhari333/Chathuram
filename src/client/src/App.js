import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import ConfigForm from './components/ConfigForm';
import useToken from './hooks/useToken';
import useDBConfig from './hooks/useDBConfig';
import { Header } from './components/Header';
import Dashboard from './components/Dashboard';
import RowEditor from './components/RowEditor'
import RowCreator from './components/RowCreator'

const App = () => {
  const { token, setToken } = useToken();
  const { dbConfig, setDBConfig } = useDBConfig();

  if (!token) {
    return <Login setToken={setToken} />
  }

  if (!dbConfig) {
    return <ConfigForm setDBConfig={setDBConfig} />
  }

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard/:tableName?/:pageNum?" component={Dashboard} />
          <Route path="/edit" component={RowEditor} />
          <Route path="/create" component={RowCreator} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
