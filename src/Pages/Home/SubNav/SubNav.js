import { Box, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const navData = [
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100', text: 'Top Offers' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100', text: 'Grocery' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', text: 'Mobile' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100', text: 'Fashion' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', text: 'Electronics' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100', text: 'Home' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100', text: 'Appliances' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100', text: 'Travel' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100', text: 'Beauty, Toys & More' }
];

const bannerData = [
    'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50'
];
const SubNav = () => {
    return (
           <Box>
            <Box sx={{ boxShadow: 3 }} style={{display:'flex',justifyContent:'space-evenly', backgroundColor:'white',padding:15}}>
            {
                navData.map(data=>(
                    
                   <Box style={{justifyContent:'space-evenly'}}>
                       
                    <img style={{width:70}} src={data.url} alt="" srcset="" />
                    <Typography style={{fontSize:13}}>{data.text}</Typography>
                   
                   </Box>
                   
                ))
            }
                        
        </Box>
        <Box style={{marginTop:5, marginBottom:30,padding:10,backgroundColor:'white'}}>
        <Carousel style={{}} animation='slide' autoPlay='true' indicators={false} navButtonsAlwaysVisible='true' navButtonsProps={{style:{backgroundColor:'white',color:'black',borderRadius:0,margin:0,height:95}}}>
            {
                bannerData.map(data=>(
                    <img style={{width:'100%', height:280}} src={data} alt="" srcset="" />
                ))
            }
        </Carousel>
        </Box>
        </Box>
       
    );
};

export default SubNav;