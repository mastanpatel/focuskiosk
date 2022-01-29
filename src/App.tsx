
import './App.css';
import ImagePreview from './components/ImagePreview';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { propertyList } from './data/PropertyList';
function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className='home-body'>
          <SideBar properties={propertyList}></SideBar>
          <ImagePreview properties={propertyList}></ImagePreview>
        </div>
      </header>
    </div>
  );
}

export default App;
