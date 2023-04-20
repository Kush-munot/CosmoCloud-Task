import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';


const Object = () => {
    const [type, setType] = React.useState('');
    const [type1, setType1] = React.useState('');
    const [selected, setSelected] = React.useState(false);
    var names = ['Jake', 'Jon'];
    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };
    const handleChange1 = (event: SelectChangeEvent) => {
        setType1(event.target.value as string);
    };
    return (
        <div>
            <Box sx={{ flexGrow: 1, padding: '15px' }}>
                <Grid container spacing={2}>
                    <TextField id="outlined-basic" variant="outlined" />
                    <Stack direction='row'>
                        <Box sx={{ minWidth: 140 }}>
                            <FormControl fullWidth sx={{
                                position: 'relative', left: '2rem'
                            }}>
                                <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Select Type"
                                    onChange={handleChange}

                                >
                                    <MenuItem value={10}>STRING</MenuItem>
                                    <MenuItem value={20}>BOOLEAN</MenuItem>
                                    <MenuItem value={30}>INTEGER</MenuItem>
                                    <MenuItem value={40}>OBJECT</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <ToggleButton
                            value="check"
                            selected={selected}
                            onChange={() => {
                                setSelected(!selected);
                            }}
                            sx={{
                                position: 'relative', left: '5rem'
                            }}
                        >
                            <CheckIcon />
                        </ToggleButton>
                        <Button
                            sx={{
                                position: 'relative', left: '7rem'
                            }}
                        >
                            <DeleteIcon />
                        </Button>
                    </Stack>
                </Grid>

                {names.map((name) => {
                    return (
                        <Grid container spacing={2} sx={{ padding: '30px', marginLeft:'60px' }}>
                            <TextField id="outlined-basic" variant="outlined" />
                            <Stack direction='row'>
                                <Box sx={{ minWidth: 140 }}>
                                    <FormControl fullWidth sx={{
                                        position: 'relative', left: '2rem'
                                    }}>
                                        <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={type1}
                                            label="Select Type"
                                            onChange={handleChange1}

                                        >
                                            <MenuItem value={10}>STRING</MenuItem>
                                            <MenuItem value={20}>BOOLEAN</MenuItem>
                                            <MenuItem value={30}>INTEGER</MenuItem>
                                            <MenuItem value={40}>OBJECT</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <ToggleButton
                                    value="check"
                                    selected={selected}
                                    onChange={() => {
                                        setSelected(!selected);
                                    }}
                                    sx={{
                                        position: 'relative', left: '5rem'
                                    }}
                                >
                                    <CheckIcon />
                                </ToggleButton>
                                <Button
                                    sx={{
                                        position: 'relative', left: '7rem'
                                    }}
                                >
                                    <DeleteIcon />
                                </Button>
                            </Stack>
                        </Grid>
                    )
                })}

            </Box>
        </div>
    )
}

export default Object