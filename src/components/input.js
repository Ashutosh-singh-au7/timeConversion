import React from 'react';

const Input = ({value,onChange})=>{
    return (
        <>
            <input
                type="text"
                placeholder="Enter Time otherwise button will be disabled ie: 00:00am - 12:30pm"
                value={value}
                onChange={onChange}
                className="form-control"
            />
        </>
    )
};

export default React.memo(Input)