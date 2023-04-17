import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import AddBoxIcon from '@mui/icons-material/AddBox';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ParentCard = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2} />
                    <Grid item xs={8} sx={{
                        marginTop: '40px',
                        backgroundColor: '#213547',
                        borderRadius: '20px'
                    }}>
                        <Stack spacing={2} direction='row'>
                            <Typography variant="h6" color="#fff">Feild Name and Type</Typography>
                            <Button>
                                <AddBoxIcon sx={{ color: '#fff', fontSize: '30px' }} />
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </Box>
        </div>
    )
}

export default ParentCard