import React from 'react';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import OpenInNewIcon from '@material-ui/icons/OpenInNew';


export default function ArticleView({ articles, imgHeight = 300 }) {
  return (
    <Grid container spacing={3}>

      {articles.map((d, i) => (
        <Grid item sm={6} lg={4} key={i}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image={d.image}
                height={imgHeight}
                title={d.title}
                alt={d.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {d.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {d.text}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href={d.link} target="_blank" rel="noopener noreferrer">
                Open in new tab
                <OpenInNewIcon />
              </Button>
              {!d.tag ? null : (
                <ColorChip
                  size="small"
                  variant={d.tag.variant}
                  label={d.tag.label}
                  back={d.tag.background}
                  textcolor={d.tag.color}
                />
              )}
            </CardActions>
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
