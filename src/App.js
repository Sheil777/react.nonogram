import React from 'react';
import './App.css';
import Area from './components/Area/Area'

class App extends React.Component {

  state = {
    rows: [
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 2, painted: false },
        { value: 3, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 2, painted: false },
        { value: 2, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 2, painted: false },
        { value: 4, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 1, painted: false },
        { value: 1, painted: false },
      ],
      [
        { value: 1, painted: false },
        { value: 2, painted: false },
        { value: 2, painted: false },
        { value: 1, painted: false },
      ],
    ]
  }

  areaNumbers() {
    return (
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
    )
  }

  render() {
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

            { this.areaNumbers() }

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
}

export default App;
