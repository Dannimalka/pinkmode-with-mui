import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position="fixed" width={450}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
  <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1666873878~exp=1666874478~hmac=0ec86c8dd4c18702ce430933ac5abd52b3236909fdd7a21ff15296df33d44fe3" />
  <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/2304123/pexels-photo-2304123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={120} gap={5}>
          <ImageListItem>
          <img src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/11/8/1257676031933/A-man-snorting-cocaine-001.jpg?width=465&quality=85&dpr=1&s=none" alt="" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://images.pexels.com/photos/5055809/pexels-photo-5055809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://images.pexels.com/photos/5055743/pexels-photo-5055743.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          What's Happening?
        </Typography>
        <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Who's Jason? and why recruiters keeps asking me if I know him?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" Lost in the matrix"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Plural of Regex is regrets"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm stuck on this React project…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="I like Lemons"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — People using Redux are crazy'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
