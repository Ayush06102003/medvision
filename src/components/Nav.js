import React from 'react';
import PropTypes from 'prop-types';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

function Nav({ mode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={
                  "/assets/logotop.png"
                  }
                style={logoStyle}
                alt="logo of sitemark"
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem>
                  <Typography variant="body2" color="text.primary">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Home
                    </Link>
                  </Typography>
                </MenuItem>

                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <Typography variant="body2" color="text.primary">
                    <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Products/Services
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <Typography variant="body2" color="text.primary">
                    <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                      About Us
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <Typography variant="body2" color="text.primary">
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Contact Us
                    </Link>
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-up/"
                target="_blank"
                
              >
                <Link to="/OrderPage" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Order Now!
                    </Link>
              </Button>
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60vw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <Button onClick={toggleDrawer(false)}>Close</Button>
                  </Box>
                  <MenuItem onClick={() => scrollToSection('features')}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('testimonials')}>
                    <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Products/Services
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('highlights')}>
                    <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                      About Us
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('pricing')}>
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Contact Us
                    </Link>
                  </MenuItem>
                  <Divider />
                  
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-in/"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                     <Link to="/OrderPage" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Order Now!
                    </Link>
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  mode: PropTypes.string,
};

export default Nav;
