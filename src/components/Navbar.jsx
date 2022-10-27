import { Adb, Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          <Adb/>
          Fakebook
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
        
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/1637884/pexels-photo-1637884.jpeg?cs=srgb&dl=pexels-susanne-jutzeler-sujufoto-1637884.jpg&fm=jpg&_gl=1*1mzn874*_ga*MTA0ODE5ODcwMS4xNjYwMTM5NTY4*_ga_8JE65Q40S6*MTY2Njg2NzgyNS4xNy4xLjE2NjY4Njc4MzIuMC4wLjA."
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/1637884/pexels-photo-1637884.jpeg?cs=srgb&dl=pexels-susanne-jutzeler-sujufoto-1637884.jpg&fm=jpg&_gl=1*1mzn874*_ga*MTA0ODE5ODcwMS4xNjYwMTM5NTY4*_ga_8JE65Q40S6*MTY2Njg2NzgyNS4xNy4xLjE2NjY4Njc4MzIuMC4wLjA."
          />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
