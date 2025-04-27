import React from "react"
import AreaRow from "../AreaRow/AreaRow"

const Area = props => {

    return (
        <div className='Area'>
            {
                Array.from({length: 5}, (_, index) => (
                    <AreaRow 
                        key={index + Number(props.startRow)}
                        rowNumber={index + Number(props.startRow)} 
                        startColumn={props.startColumn}
                        analysis={props.analysis}
                    />
                ))
            }
        </div>
    )
}

export default Area