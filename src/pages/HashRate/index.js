import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Spinner from 'react-bootstrap/Spinner';

import {
    selectHashRate,
    fetchData
} from './hashRateSlice';

export default function HashRate() {
    const dispatch = useDispatch();
    const hashRate = useSelector(selectHashRate);

    console.log(hashRate);

    useEffect(() => {
        dispatch(fetchData())
    }, []);

    return (
        <main>
            <h1>Hash Rates</h1>
            { hashRate.loading && <Spinner animation="border" /> }
        </main>
    )
}