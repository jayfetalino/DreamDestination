import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ExploreIcon from '@mui/icons-material/Explore';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



const countryContinentToColor = {
  'Asia': 'teal',
  'Europe': 'maroon',
  'Africa': 'orange',
  'North America': 'hibiscus',
  'South America': 'Gold',
  'Australia': 'Jade',
  'Antartica': 'Violet',
  'Oceania': 'Black'
}

const Country = (props) => {
  const country = props.country;

  const [countryData, setCountryData] = useState();

  useEffect(() => {
    // console.log(country);

    const getCountry = async () => {
      try {
        console.log(country);
        const response = await fetch(country);
        const data = await response.json();

        setCountryData(data);
      } catch (error) {
        // console.log(error);
      }

    };

    getCountry();
  }, []);

  return (
    <Card sx={{ maxWidth: "50%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={country.flags.png}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {country.name.common[0].toUpperCase() + country.name.common.slice(1)}
        </Typography>
        {country.continents.map((continent) => {
          return <Chip
            sx={{ backgroundColor: countryContinentToColor[continent] }}
            label={`Continent: ${continent}`} color="success" />
        })}
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<AirplaneTicketIcon color="error" />}>
          Dream Destination
        </Button>
        <Button size="small" startIcon={<ExploreIcon color="primary" />}>
          Where in the world?
        </Button>
      </CardActions>
    </Card>
  );
}

const ListOfCountries = (props) => {
  return (
    <>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' } }}
            >
              Globetrotter /'glōb,träder/'
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Places to visit"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "centered"
        }}
      >
        {props.countryInput.map((country, index) => {


          return <Country country={country} />;

        })}
      </div>
    </>
  );
};


export default ListOfCountries;


