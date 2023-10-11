import { useContext } from 'react';
import './App.css';
import Form from './component/Form';
import Table from './component/Table';
import UpdateForm from './component/UpdateForm';
import { ContextValue } from './Context';

function App() {
  const x = useContext(ContextValue);
  const toggleUpdate = x.toggle;
  const users = x.users.userList;
  const del = x.users.handleDelete;
  const idGet = x.users.handleId;
  console.log(x.users);
  return (
    <div className="App">
       <h1>CRUD APP WITH POSTGERSQL</h1>
       <br />
       {toggleUpdate.toggle ? <UpdateForm toggle={toggleUpdate} /> : <Form />}
       <br />
       <Table users={users} toggle={toggleUpdate} del={del} idGet={idGet} />
    </div>
  );
}

export default App;
