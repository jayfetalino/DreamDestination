import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ExploreIcon from '@mui/icons-material/Explore';

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
                {country.continents.map((continent, index) => {
                    return <Chip key={index}
                        sx={{ backgroundColor: countryContinentToColor[continent] }}
                        label={`Continent: ${continent}`} color="success" />
                })}
            </CardContent>
            <CardActions>
                <Button onClick={props.onClickFavorite} size="small" startIcon={<AirplaneTicketIcon color="error" />}>
                    Dream Destination
                </Button>
                <Button href={country.maps.googleMaps} size="small" startIcon={<ExploreIcon color="primary" />}>
                    Where in the world?
                </Button>
            </CardActions>
        </Card>
    );
}

export default Country;
