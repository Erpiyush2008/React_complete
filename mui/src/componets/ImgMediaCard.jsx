import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './card.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container-fluid mt-4"> {/* full width */}
      <div className="row">

        {/* Column 1 */}
        <div className="col-md-4 mb-4">
          <Card sx={{ width: '100%' }}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
              action={<IconButton><MoreVertIcon /></IconButton>}
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="/public/man.png"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook together.
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton><FavoriteIcon /></IconButton>
              <IconButton><ShareIcon /></IconButton>
              <ExpandMore expand={expanded} onClick={handleExpandClick}>
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ mb: 1 }}>Method:</Typography>

                <Typography sx={{ mb: 1 }}>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside.
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  Heat oil in a pan, add chicken, shrimp and cook until browned.
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  Add garlic, tomatoes, onion, salt and cook until thickened.
                </Typography>

                <Typography>
                  Add rice and cook until liquid is absorbed, then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        {/* Column 2 */}
      <div className="col-md-4 mb-4">
          <Card sx={{ width: '100%' }}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
              action={<IconButton><MoreVertIcon /></IconButton>}
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="/public/man.png"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook together.
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton><FavoriteIcon /></IconButton>
              <IconButton><ShareIcon /></IconButton>
              <ExpandMore expand={expanded} onClick={handleExpandClick}>
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ mb: 1 }}>Method:</Typography>

                <Typography sx={{ mb: 1 }}>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside.
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  Heat oil in a pan, add chicken, shrimp and cook until browned.
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  Add garlic, tomatoes, onion, salt and cook until thickened.
                </Typography>

                <Typography>
                  Add rice and cook until liquid is absorbed, then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>


        {/* Column 3 */}
       <div className="col-md-4 mb-4">
          <Card sx={{ width: '100%' }}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
              action={<IconButton><MoreVertIcon /></IconButton>}
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="/public/man.png"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook together.
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton><FavoriteIcon /></IconButton>
              <IconButton><ShareIcon /></IconButton>
              <ExpandMore expand={expanded} onClick={handleExpandClick}>
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ mb: 1 }}>Method:</Typography>

                <Typography sx={{ mb: 1 }}>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside.
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  Heat oil in a pan, add chicken, shrimp and cook until browned.
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  Add garlic, tomatoes, onion, salt and cook until thickened.
                </Typography>

                <Typography>
                  Add rice and cook until liquid is absorbed, then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

      </div>
    </div>
  );
}