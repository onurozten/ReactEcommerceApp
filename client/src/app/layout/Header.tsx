import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  handleChangeTheme: () => void;
}
export default function Header({darkMode, handleChangeTheme}: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch checked={darkMode} onChange={handleChangeTheme}/>
      </Toolbar>
    </AppBar>
  );
}
