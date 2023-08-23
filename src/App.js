import './App.css';
import Form from './component/Form';
import { Page } from './component/Page';
import bgImg from './bg.jpg'
import NoteState from './context/NoteState';

function App() {
  return (
    <NoteState>
    <div className='bg-black min-h-screen'>
    <Form/>
    <Page />
    </div>
    </NoteState>
  );
}

export default App;
