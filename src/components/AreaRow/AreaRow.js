const AreaRow = props => {
    
    function paintHandler(el) {
        // Если есть крестик, то удаляем
        if(el.target.classList.contains('Cell_empty'))
            el.target.classList.remove('Cell_empty')


        if(!el.target.classList.contains('Cell_painted'))
            el.target.classList.add('Cell_painted')
        else
            el.target.classList.remove('Cell_painted')
        
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
            <div className='Cell' 
                onClick={paintHandler}
                onContextMenu={emptyCellHandler}
            ></div>
            <div className='Cell' 
                onClick={paintHandler}
                onContextMenu={emptyCellHandler}
            ></div>
            <div className='Cell' 
                onClick={paintHandler}
                onContextMenu={emptyCellHandler}
            ></div>
            <div className='Cell' 
                onClick={paintHandler}
                onContextMenu={emptyCellHandler}
            ></div>
            <div className='Cell' 
                onClick={paintHandler}
                onContextMenu={emptyCellHandler}
            ></div>
        </div>
    )
}

export default AreaRow