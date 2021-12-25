import { AppBar, Badge, Box, Button, Toolbar, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '45ch',
    },
  },
}));
const Header = () => {
    return (
        <div>
            <Box>
      <AppBar className='bars' position="static">
        <Toolbar>
         <Box style={{textAlign:'center',marginLeft:'10%',marginTop:2}}>
         <Box>
          <img style={{width:80}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" srcset="" />
          </Box>
          <Box className='sublogo' style={{display:'flex'}}>
          <Typography variant="caption">Explore <span style={{color:'yellow'}}>Plus</span></Typography>
          <img style={{width:13,height:12, marginLeft:3}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" srcset="" />
          </Box>
         </Box>
         <Box>
         <Search style={{backgroundColor:'white' ,color:'black', width:450}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
         </Box>
         <Box style={{marginRight:50,marginLeft:'5%', display:'flex',alignItems:'center',justifyContent:'center'}}>
         <Button style={{marginLeft:50,backgroundColor:'white',color:'blue',paddingLeft:35,paddingBottom:7,paddingRight:35,paddingTop:7,borderRadius:0,fontSize:15,fontWeight:200,textTransform:'capitalize'}} color="inherit">Login</Button>
         <Box style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
         <Typography style={{marginLeft:50}}>More</Typography>
         <KeyboardArrowDownIcon/>
         </Box>
         <Box style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
         <Typography style={{marginLeft:50}}>Cart</Typography>
         
         <Badge badgeContent={4} color="warning">
         <ShoppingCartIcon/>
        </Badge>
         </Box>
         </Box>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default Header;