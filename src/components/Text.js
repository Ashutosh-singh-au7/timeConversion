import React from 'react';
import Input from './input'
import moment from 'moment';

const Text = ()=>{

    const [data,setData] = React.useState("")
    const [total,setTotalMinute] = React.useState(0)

    const handleSubmit = async(e)=>{
        e.preventDefault();
        let arr = data.split('-');

        let start = moment(arr[0], "HH:mm:ss a");
        let end = moment(arr[1], "HH:mm:ss a");

        let newValue = moment.duration(end.diff(start));

        let hour = parseInt(newValue.asHours());
        let minute = parseInt(newValue.asMinutes())%60;
        console.log(`${hour} hour and  ${minute} minutes.`)

        let totalMinute = (hour*60) + minute
        console.log(totalMinute)
        setTotalMinute(totalMinute)
    }

    return (
        <> 
        <div className="form-group container mt-5 ">
            <label>Enter Time</label>
                <Input
                    value={data}
                    onChange={(e)=> setData(e.target.value)}
                />
                <br/>
            <button                     
                className="btn btn-primary btn-block mb-3" disabled={data === ""} onClick={handleSubmit}>Submit</button>
            {total === 0 ? (
                ""
            ):(
                <h1>{total} minutes</h1>
            )}
        </div>
        </>
    )
};

export default React.memo(Text)