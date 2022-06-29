import './App.css';

const Square = () => {
  return (
    <div className='square'>
      X
    </div>
  )
}

const Board = () => {
  return (
    <div style={{
      backgroundColor: 'skyblue',
      margin: 10,
      padding: 20,
      }}>
      Board
      <div className='board-row'>
      <Square/><Square/><Square/>
      </div>
      <div className='board-row'>
      <Square/><Square/><Square/>
      </div>
      <div className='board-row'>
      <Square/><Square/><Square/>
      </div>
    </div>
  );
}; 

function App() {
  return (
    <div className='game'>
      Game
      <Board />
    </div>
  );
}

export default App;
