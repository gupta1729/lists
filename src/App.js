import List from './Components/List'
import './App.css';
import items from './mockData'

function App() {

  return (
    <div className='main'>
      <div>
        <div className='heading'>
          Here's your list of data items:
        </div>
        <List items={items} />
      </div>
    </div>
  );
}

export default App;
