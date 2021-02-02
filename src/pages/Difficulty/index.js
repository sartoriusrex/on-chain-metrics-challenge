import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Spinner from 'react-bootstrap/Spinner';

import {
    selectDifficulty,
    fetchData
} from './difficultySlice';

export default function Difficulty() {
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