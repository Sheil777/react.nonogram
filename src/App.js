import './App.css';
import Area from './components/Area/Area'

function App() {



  return (
    <div className="App">
      <div className='Field'>
        <div className='Row'>
          <div className='Area Area_empty'>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
            </div>
          </div>
          <div className='Area Area_numbers'>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'>2</div>
              <div className='Cell'></div>
              <div className='Cell'>1</div>
              <div className='Cell'></div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'>2</div>
              <div className='Cell'>2</div>
              <div className='Cell'>1</div>
              <div className='Cell'></div>
            </div>
            <div className='Area__row'>
              <div className='Cell'>4</div>
              <div className='Cell'>2</div>
              <div className='Cell'>6</div>
              <div className='Cell'>3</div>
              <div className='Cell'>4</div>
            </div>
          </div>
          <div className='Area Area_numbers'>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'>1</div>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'>1</div>
              <div className='Cell'>1</div>
              <div className='Cell'></div>
              <div className='Cell'></div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'>1</div>
              <div className='Cell'>1</div>
              <div className='Cell'>3</div>
              <div className='Cell'>5</div>
            </div>
            <div className='Area__row'>
              <div className='Cell'>4</div>
              <div className='Cell'>3</div>
              <div className='Cell'>5</div>
              <div className='Cell'>5</div>
              <div className='Cell'>2</div>
            </div>
          </div>
        </div>
        <div className='Row'>
          
          <div className='Area Area_numbers'>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'>2</div>
              <div className='Cell'>3</div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'>2</div>
              <div className='Cell'>2</div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'>2</div>
              <div className='Cell'>4</div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'>1</div>
              <div className='Cell'>1</div>
            </div>
            <div className='Area__row'>
              <div className='Cell'>1</div>
              <div className='Cell'>2</div>
              <div className='Cell'>2</div>
              <div className='Cell'>1</div>
            </div>
          </div>

          <Area />

          <Area />

        </div>
        <div className='Row'>

          <div className='Area Area_numbers'>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'>3</div>
              <div className='Cell'>2</div>
              <div className='Cell'>3</div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'>8</div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'>7</div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'>9</div>
            </div>
            <div className='Area__row'>
              <div className='Cell'></div>
              <div className='Cell'></div>
              <div className='Cell'>2</div>
              <div className='Cell'>2</div>
            </div>
          </div>
          
          <Area/>

          <Area/>

        </div>
      </div>
    </div>
  );
}

export default App;
