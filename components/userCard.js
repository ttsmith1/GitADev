import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled from 'styled-components'

const StyledCard = styled(Card)`
  width: 550px;
  margin: 6em;
`

const UserCard = (props) => (
  <StyledCard>
    <CardHeader
      avatar={
        <Avatar alt="Avatar" src={props.avatar_url} className='avatar' />
      }
      title={props.name}
      subheader="September 14, 2016"
    />

    <CardContent>

      <Typography>
        {props.company}
      </Typography>

      <Typography>
        {props.blog}
      </Typography>

      <Typography>
        {props.location}
      </Typography>

      <Typography>
        {props.email}
      </Typography>

      <Typography>
        {props.hireable}
      </Typography>

      <Typography>
        {props.bio}
      </Typography>

    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        Share
        </Button>
      <Button size="small" color="primary">
        Learn More
        </Button>
    </CardActions>
  </StyledCard>
)

export default UserCard
