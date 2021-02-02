import React from 'react';
import Form from 'react-bootstrap/Form';

export default function SelectTimeScale({setTimeScale}) {
    function handleSelect(e) {
        setTimeScale(e.target.value);
    }

    return (
        <Form className="w-50">
            <Form.Group>
                <Form.Label>Time Scale</Form.Label>

                <Form.Control as="select">
                    <option onClick={(e) => handleSelect(e)}>Second</option>
                    <option onClick={(e) => handleSelect(e)}>Minute</option>
                    <option onClick={(e) => handleSelect(e)}>Hour</option>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}