import { Box, Stack } from '@mui/material';
// import './App.css';
import Sidebar from './components/Sidebar';
import Right from './components/Right';
import Feeds from './components/Feeds';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <Sidebar />
        <Feeds />
        <Right />
      </Stack>
    </Box>
  );
}

export default App;
