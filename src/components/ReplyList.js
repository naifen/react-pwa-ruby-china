import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Reply from "./Reply";

const styles = theme => ({
  loading: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  },
  avatar: {
    margin: 10,
    width: 25,
    height: 25
  }
});

// TODO: replies pagination or "load more" button
const Topic = props => {
  const { classes, isLoading, replies } = props;

  return (
    <React.Fragment>
      {isLoading ? (
        <div className={classes.loading}>
          <Typography variant="subheading" gutterBottom>
            Loading replies...
          </Typography>
          <CircularProgress color="secondary" size={30} />
        </div>
      ) : (
        <List>
          {replies.map((reply, index) => (
            <Reply key={reply.id} reply={reply} index={index} />
          ))}
        </List>
      )}
    </React.Fragment>
  );
};

Topic.propTypes = {
  classes: PropTypes.object.isRequired,
  replies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default withStyles(styles)(Topic);
