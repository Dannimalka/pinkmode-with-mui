import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="The backend frontend dev"
        subheader="October 27th 2022"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://i.imgflip.com/2kuh6f.jpg"
        alt="Meme"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugiat odit dicta vel reprehenderit accusamus facere magnam consequatur harum enim?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red"}} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
