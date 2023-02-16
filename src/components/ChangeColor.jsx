import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from '../features/theme'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ChangeColor = () => {
    const dispatch = useDispatch();
    const [color, setColor] = useState('');

    return (
        <div>
            <Stack spacing={2} direction='row' >
                <TextField
                    onChange={(event) => { setColor(event.target.value) }}
                    size='small'
                    id="demo-helper-text-misaligned"
                    label="Change color"
                />
               <Button 
               variant="outlined"
               onClick={() => {
                dispatch(changeColor(color))
            }}
               >Change color</Button>
            </Stack>
        </div>
    )
}
export default ChangeColor;