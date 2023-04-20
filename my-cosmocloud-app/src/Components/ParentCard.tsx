import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import AddBoxIcon from '@mui/icons-material/AddBox';
import TypeOne from './TypeOne'
import Object from './Object';

const Input = () => {
    return <input placeholder="Your input here" />;
};

const ParentCard = () => {
    const [inputList, setInputList] = useState([<Object/>]);
    const addType = () => {
        setInputList(inputList.concat(<TypeOne />));
    };
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2} />
                    <Grid item xs={8} sx={{
                        marginTop: '40px',
                        borderRadius: '20px'
                    }}>
                        <Stack spacing={2} direction='row'>
                            <Typography variant="h6">Feild Name and Type</Typography>
                            <Button onClick={addType}>
                                <AddBoxIcon sx={{ fontSize: '30px' }} />
                            </Button>
                        </Stack>
                        <Stack spacing={2}>
                            {inputList}
                        </Stack>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </Box>
        </div>
    )
}

export default ParentCard