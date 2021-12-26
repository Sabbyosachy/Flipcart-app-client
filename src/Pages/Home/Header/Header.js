import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Badge } from '@mui/material';


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
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} style={{textAlign:'center',marginLeft:'10%',marginTop:2}}>
         <Box>
         <Box>
          <img style={{width:80}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" srcset="" />
          </Box>
          <Box className='sublogo' style={{display:'flex'}}>
          <Typography variant="caption">Explore <span style={{color:'yellow'}}>Plus</span></Typography>
          <img style={{width:13,height:12, marginLeft:3}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" srcset="" />
          </Box>
         </Box>
         </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                    <Box>
         <Search style={{backgroundColor:'white' ,color:'black', width:200}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
         </Box>
        <Typography style={{alignItems:'center',padding:10,textAlign:'center'}} onClick={handleCloseNavMenu}>Login</Typography>
        <Box onClick={handleCloseNavMenu} style={{display:'flex',alignItems:'center',justifyContent:'center',padding:10}}>
         <Typography style={{marginLeft:10}}>More</Typography>
         <KeyboardArrowDownIcon/>
         </Box>
         <Box onClick={handleCloseNavMenu} style={{display:'flex',alignItems:'center',justifyContent:'center',padding:10,textAlign:'center'}}>
         <Typography style={{textAlign:'center'}}>Cart</Typography>
         
         <Badge badgeContent={4} color="warning">
         <ShoppingCartIcon/>
        </Badge>
         </Box>
            </Menu>
          </Box>
          <Box
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }} style={{textAlign:'center',marginLeft:'10%',marginTop:2}}>
         <Box>
         <Box>
          <img style={{width:80}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" srcset="" />
          </Box>
          <Box className='sublogo' style={{display:'flex'}}>
          <Typography variant="caption">Explore <span style={{color:'yellow'}}>Plus</span></Typography>
          <img style={{width:13,height:12, marginLeft:3}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" srcset="" />
          </Box>
         </Box>
         </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
               
          <Box>
         <Search style={{backgroundColor:'white' ,color:'black', width:450,marginTop:15}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
         </Box>
              <Button
                onClick={handleCloseNavMenu}
                style={{backgroundColor:'white',color:'blue',marginLeft:'12%',borderRadius:0,paddingLeft:35,paddingBottom:7,paddingRight:35,paddingTop:7,fontSize:15,fontWeight:200,textTransform:'capitalize'}}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
               Login
              </Button>
              <Box style={{display:'flex',alignItems:'center',justifyContent:'center',padding:10}}>
         <Typography style={{marginLeft:30}}>More</Typography>
         <KeyboardArrowDownIcon/>
         </Box>
         <Box style={{display:'flex',alignItems:'center',justifyContent:'center',padding:10}}>
         <Typography style={{marginLeft:30}}>Cart</Typography>
         
         <Badge badgeContent={4} color="warning">
         <ShoppingCartIcon/>
        </Badge>
         </Box>
        
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
