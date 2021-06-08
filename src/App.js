import './App.css';
import './sidebar'
import SideBar from './sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        {/* chat component */}
        <Chat></Chat>

      </div>



    </div>
  );
}

export default App;
