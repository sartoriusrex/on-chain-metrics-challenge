import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
    LineChart, 
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from 'recharts';
import Spinner from 'react-bootstrap/Spinner';

import {
    selectDifficulty,
    fetchData
} from './difficultySlice';

export default function Difficulty({timeScale}) {
    const dispatch = useDispatch();
    const difficulty = useSelector(selectDifficulty);
    const [data, setData] = useState({})

    function updateData(timeScale){
        let dataObject = {};

        let alldata = difficulty.data.map( item => {
            let newItem = {
                difficulty: item.difficulty,
                price: item.price.toFixed(2),
                timeStamp: item.t,
            }
    
            switch(timeScale) {
                case "Second":
                    newItem.t = new Date(item.t).getSeconds();
                    break;
                case "Minute":
                    newItem.t = new Date(item.t).getMinutes();
                    break;
                default:
                    newItem.t = new Date(item.t).getHours() + 1;
            }
            
            return newItem;
        })

        alldata.forEach( (item) => {
            if( !dataObject[item.t] || dataObject[item.t].timeStamp < item.timeStamp) {
                dataObject[item.t] = item;
            }
        });

        let returnData = Object.values(dataObject);

        console.log(returnData);

        setData(() => returnData);
    }

    useEffect(() => {
        console.log(timeScale);
        updateData(timeScale);
    }, [timeScale])

    useEffect(() => {
        updateData(timeScale);
        dispatch(fetchData())
    }, []);

    return (
        <main>
            <h1>Difficulty</h1>
            { difficulty.loading && <Spinner animation="border" /> }


            <LineChart width={400} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="t" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#8884d8" strokeDasharray="3 4 5 2" />
            </LineChart>
        </main>
    )
}