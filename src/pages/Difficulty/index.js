import React, { useEffect } from 'react';
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

export default function Difficulty({timeScale, setTimeScale}) {
    const dispatch = useDispatch();
    const difficulty = useSelector(selectDifficulty);

    console.log(difficulty);

    useEffect(() => {
        dispatch(fetchData())
    }, []);

    return (
        <main>
            <h1>Difficulty</h1>
            { difficulty.loading && <Spinner animation="border" /> }
        </main>
    )
}