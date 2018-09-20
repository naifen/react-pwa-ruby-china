import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const Topic = (props) => {
  const { topic } = props;
  // TODO: last replied timestamp, same as ruby china app
  const secondaryText = `${topic.node_name} • ${topic.user.login} •
    last replied by ${topic.last_reply_user_login} at xx minutes ago`;

  return (
    <ListItem className={props.classes.root} divider={true}>
      <Avatar>
        <ImageIcon />
      </Avatar>
      <ListItemText primary={topic.title} secondary={secondaryText} />
    </ListItem>
  );
  }

Topic.propTypes = {
  classes: PropTypes.object.isRequired,
  topic: PropTypes.object.isRequired,
};

export default withStyles(styles)(Topic);
