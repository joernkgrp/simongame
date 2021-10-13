import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import SettingsIcon from "@mui/icons-material/Settings";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function CheckboxListSecondary() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Container component="main" maxWidth="sm">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Senso
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ mt: 10, mb: 1, bgcolor: "secondary.main" }}>
          <SettingsIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Please select a mode
        </Typography>

        <List
          dense
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            mt: 2,
            ml: -2,
          }}
        >
          {["Colors", "Animal sounds", "Music instruments", "Random"].map(
            (value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        sx={{ mr: 2, width: 56, height: 56 }}
                        src={`/static/images/${value}.jpg`}
                      />
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={`${value}`} />
                  </ListItemButton>
                </ListItem>
              );
            }
          )}
        </List>

        <Button
          endIcon={<PlayArrowIcon />}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 4 }}
          href="/game"
        >
          Play
        </Button>
        <Button
          startIcon={<ArrowBackIcon />}
          fullWidth
          variant="outlined"
          sx={{ mt: 2 }}
          href="/form"
        >
          Back
        </Button>
      </Box>
    </Container>
  );
}
