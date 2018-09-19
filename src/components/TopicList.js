import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';
import TopAppBar from './TopAppBar';

const styles = theme => ({
  root: {
    width: '100%',
    overflow: 'auto',
    paddingBottom: 60,
    backgroundColor: theme.palette.background.default,
  },
});

// TODO: hide TopAppBar while scroll down, show while scroll up
const TopicList = ({ classes, topics }) => (
  <div>
    <TopAppBar />
    <Paper className={classes.root} elevation={1}>
      <List>
        {topics.map(topic => (
          <React.Fragment key={topic.id}>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary={topic.title} secondary="Author Jan 9, 2014" />
              </ListItem>
              <Divider light />
          </React.Fragment>
        ))}
      </List>

      <Button variant="contained" color="primary">
        Load more
      </Button>
    </Paper>
	</div>
);

TopicList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicList);
