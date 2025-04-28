const AreaRow = props => {
    
    function paintHandler(el) {
        // Если есть крестик, то удаляем
        if(el.target.classList.contains('Cell_empty'))
            el.target.classList.remove('Cell_empty')

        // Меняем окрас
        if(!el.target.classList.contains('Cell_painted'))
            el.target.classList.add('Cell_painted')
        else
            el.target.classList.remove('Cell_painted')
        

        // Получаем адрес ячейки по которой кликнули
        const rowNumber = el.target.dataset.rowNumber
        const columnNumber = el.target.dataset.columnNumber
        // console.log("Row: ", rowNumber, " Column: ", columnNumber)
        props.analysis(rowNumber, columnNumber)
    }

    function emptyCellHandler(el) {
        el.preventDefault();

        // Если закрашено, то удаляем
        if(el.target.classList.contains('Cell_painted'))
            el.target.classList.remove('Cell_painted')


        if(!el.target.classList.contains('Cell_empty'))
            el.target.classList.add('Cell_empty')
        else
            el.target.classList.remove('Cell_empty')
    }



    return (
        <div className='Area__row'>
            {
                Array.from({length: 5}, (_,index) => (
                    <div className='Cell' 
                        key={ index + Number(props.startColumn) }
                        onClick={paintHandler}
                        onContextMenu={emptyCellHandler}
                        data-row-number={props.rowNumber}
                        data-column-number={index + Number(props.startColumn)}
                    ></div>
                ))
            }

            
        </div>
    )
}

export default AreaRow