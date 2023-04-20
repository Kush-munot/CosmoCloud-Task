import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';

const Details = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{padding:" 3% 10%"}}>
                <Typography sx={{ fontSize: '40px', color: '#FF6D60' }}>Kush Munot</Typography>
                <Grid item md={2.5} xs={12}>
                    <a href="https://kushmunot.netlify.app/">
                        <Button variant="outlined" sx={{'&:hover':{backgroundColor:'#F7D060', color:'#000'}}} endIcon={<LanguageIcon />}>
                            Portfolio
                        </Button>
                    </a>
                </Grid>
                <Grid item md={2} xs={12}>
                    <a href="mailto:munot.kgm@gmail.com">
                        <Button variant="outlined" sx={{'&:hover':{backgroundColor:'#98D8AA', color:'#000'}}} endIcon={<EmailIcon />}>
                            Email
                        </Button>
                    </a>
                </Grid>
                <Grid item md={2} xs={12}>
                    <a href="https://www.linkedin.com/in/kush-munot/">
                        <Button variant="outlined" sx={{'&:hover':{backgroundColor:'#97DEFF', color:'#000'}}} endIcon={<LinkedInIcon />}>
                            LinkedIn
                        </Button>
                    </a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Details