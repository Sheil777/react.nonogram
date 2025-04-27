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
        {
          this.state.rows.map((row, rowIndex) => (
            <div className='Area__row' key={Math.random()}>
              {
                row.map((cell, cellIndex) => (
                  <div 
                    className={cell.painted ? "Cell Number Number_painted" : "Cell Number" }
                    key={Math.random()}
                  >{cell.value !== 0 ? cell.value : null }</div>
                ))
              }
            </div>
          ))
        }
      </div>
    )
  }

  analysisHandler = (rowNumber) => {
    const newRows = {...this.state.rows}
    const rowPaint = document.querySelectorAll(`[data-row-number="${rowNumber}"]`)

    let countPainted = 0;
    let foundPainted = false;
    let arrPainted = []      //// Массив с закрашенными клетками
    rowPaint.forEach((el) => {
      if(el.classList.contains('Cell_painted')) {
        foundPainted = true
        countPainted++
      }else{
        if(foundPainted) {
          arrPainted.push(countPainted)
          countPainted = 0;
          foundPainted = false;
        }
      }
    })

    // console.log(arrPainted)

    // if()


    let i = 0
    newRows[rowNumber-1].forEach((el) => {
      
      if(el.value !== 0) {
        if(arrPainted[i] === el.value) {
          el.painted = true
          i++
        }else{
          el.painted = false
          i++
        }
      }

    })



    // newRows[rowNumber-1][2].painted = true

    this.setState({
      newRows
    })
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

            <Area startRow="1" startColumn="1" analysis={this.analysisHandler} />

            <Area startRow="1" startColumn="6" analysis={this.analysisHandler} />

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
            
            <Area startRow="6" startColumn="1" analysis={this.analysisHandler} />

            <Area startRow="6" startColumn="6" analysis={this.analysisHandler} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
