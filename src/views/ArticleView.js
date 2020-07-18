import React from 'react';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import OpenInNewIcon from '@material-ui/icons/OpenInNew';


const SingleLink = ({ url, tag }) => (
  <CardActions>
    <LinkButton size="small" color="primary" href={url}>
      OPEN IN NEW TAB
      <OpenInNewIcon />
    </LinkButton>
    <ColorChip
      size="small"
      variant="default"
      label={tag.label}
      back={tag.color}
      textcolor="#fff"
    />
  </CardActions>
);


const MultipleLinks = ({ links }) => (
  <List dense={true}>
    {links.map((l, i) => (
      <ListItem key={i} component={LinkButton} href={l.url}>
        <SmallListItemIcon>
          <OpenInNewIcon />
        </SmallListItemIcon>
        <ListItemText
          primary={l.text}
          secondary={<ColorSpan color={l.tag.color}>{l.tag.label}</ColorSpan>}
        />
      </ListItem>
    ))}
  </List>
);


export default function ArticleView({ articles, imgHeight = 300 }) {
  return (
    <Grid container spacing={3}>
      {articles.map((d, i) => (
        <Grid item sm={6} lg={4} key={i}>
          <Card>
            <CardMedia
              component="img"
              image={d.image}
              height={imgHeight}
              title={d.title}
              alt={d.title}
            />
            <Divider />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {d.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {d.text}
              </Typography>
            </CardContent>
            <Divider />

            {(d.links.length > 1)
              ? <MultipleLinks links={d.links} />
              : <SingleLink url={d.links[0].url} tag={d.links[0].tag} />
            }
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};


const ColorChip = styled(Chip)`
  background-color: ${props => props.back};
  color: ${props => props.textcolor};
`;

const LinkButton = styled(Button).attrs(props => ({
  target: "_blank",
  rel: "noopener noreferrer"
}))`
  text-transform: none;
`;

const SmallListItemIcon = styled(ListItemIcon)`
  min-width: 40px;
`;

const ColorSpan = styled.span`
  color: ${props => props.color};
`;
