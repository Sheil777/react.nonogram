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
      /////
      [
        { value: 0, painted: false },
        { value: 3, painted: false },
        { value: 2, painted: false },
        { value: 3, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 8, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 7, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 9, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 2, painted: false },
        { value: 2, painted: false },
      ],
    ],
    columns: [
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 4, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 2, painted: false },
        { value: 2, painted: false },
        { value: 2, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 2, painted: false },
        { value: 6, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 1, painted: false },
        { value: 1, painted: false },
        { value: 3, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 4, painted: false },
      ],
      /////////////
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 4, painted: false },
      ],
      [
        { value: 1, painted: false },
        { value: 1, painted: false },
        { value: 1, painted: false },
        { value: 3, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 1, painted: false },
        { value: 1, painted: false },
        { value: 5, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 3, painted: false },
        { value: 5, painted: false },
      ],
      [
        { value: 0, painted: false },
        { value: 0, painted: false },
        { value: 5, painted: false },
        { value: 2, painted: false },
      ],
    ]
  }

  areaNumbers(start, type) {

    if(type === "rows")
      return (
        <div className='Area Area_numbers'>
          {
            this.state.rows.slice(start-1, start + 4).map((row, rowIndex) => (
              <div className='Area__row' key={rowIndex + start}>
                {
                  row.map((cell, cellIndex) => (
                    <div 
                      className={cell.painted ? "Cell Number Number_painted" : "Cell Number" }
                      key={cellIndex} // предполагается, что индексы уникальны в пределах ряда
                    >
                      {cell.value !== 0 ? cell.value : null }
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      );

    if(type === "columns"){
      return (
        <div className='Area Area_numbers'>

          {
            this.state.columns[0].map((_, columnIndex) => ( ////// Просто чтобы понять сколько колонок
              <div className='Area__row' key={Math.random()}>
                {
                  this.state.columns.slice(start-1, start + 4).map((row, rowIndex) => (
                      (
                        <div 
                          className={row[columnIndex].painted ? "Cell Number Number_painted" : "Cell Number" }
                          key={Math.random()} // предполагается, что индексы уникальны в пределах ряда
                        >
                          {row[columnIndex].value !== 0 ? row[columnIndex].value : null }
                        </div>
                      )
                  ))
                }
              </div>
              
            ))
          }

        </div>
      );
    }


  }


  analysisHandler = (rowNumber, columnNumber) => {
    const newRows = {...this.state.rows}
    const newColumns = {...this.state.columns}
    const rowPaint = document.querySelectorAll(`[data-row-number="${rowNumber}"]`)
    const columnPaint = document.querySelectorAll(`[data-column-number="${columnNumber}"]`)


    /*

    { ///// По строкам
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

      if(countPainted !== 0) {
        arrPainted.push(countPainted)
      }

      // console.log(arrPainted)

      if(arrPainted.length === 1) {
        let flag = false;
        newRows[rowNumber-1].forEach((el) => {
          el.painted = false

          if(el.value !== 0 && flag === false) {
            if(arrPainted[0] === el.value){
              el.painted = true
              flag = true
            }
          }

        })
      }else{

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

      }
    }



    { ///// По столбцам
      let countPainted = 0;
      let foundPainted = false;
      let arrPainted = []      //// Массив с закрашенными клетками
      columnPaint.forEach((el) => {
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

      if(countPainted !== 0) {
        arrPainted.push(countPainted)
      }

      // console.log(arrPainted)

      if(arrPainted.length === 1) {
        let flag = false;
        newColumns[columnNumber-1].forEach((el) => {
          el.painted = false

          if(el.value !== 0 && flag === false) {
            if(arrPainted[0] === el.value){
              el.painted = true
              flag = true
            }
          }

        })
      }else{

        let i = 0
        newColumns[columnNumber-1].forEach((el) => {
          
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

      }
    }


    */


    this.setState({
      newRows,
      newColumns
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

            {/* <div className='Area Area_numbers'>
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
            </div> */}
            { this.areaNumbers(1, "columns") }

            {/* <div className='Area Area_numbers'>
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
            </div> */}
            { this.areaNumbers(6, "columns") }

          </div>
          <div className='Row'>

            { this.areaNumbers(1, "rows") }

            <Area startRow="1" startColumn="1" analysis={this.analysisHandler} />

            <Area startRow="1" startColumn="6" analysis={this.analysisHandler} />

          </div>
          <div className='Row'>
            
            { this.areaNumbers(6, "rows") }
            
            <Area startRow="6" startColumn="1" analysis={this.analysisHandler} />

            <Area startRow="6" startColumn="6" analysis={this.analysisHandler} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
