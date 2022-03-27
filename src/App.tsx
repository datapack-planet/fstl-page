import React from 'react';
import './App.scss';
import {
  AppBar,
  Box,
  Button,
  Chip,
  createTheme,
  Link,
  Paper,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  Download as DownloadIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
// @ts-ignore
import PoweredByVercelIcon from './powered-by-vercel.svg';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Segoe UI", "Microsoft Yahei", "Helvetica", "Arial"',
  },
});

function BlueGradiantText({ children }) {
  return (
    <Typography
      component="span"
      sx={{
        fontSize: 'inherit',
        fontWeight: 'inherit',
        backgroundImage: 'linear-gradient(to right, #2b88d8, #004578)',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {children}
    </Typography>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ width: '100vw', height: '100vh' }} direction="column">
        <AppBar position="static">
          <Toolbar sx={{ gap: 1 }}>
            <Typography variant="h6" component="div">
              Foast Launcher{' '}
              <Chip color="warning" label="Under Heavy Development" />
            </Typography>
            <Button
              color="inherit"
              startIcon={<GitHubIcon />}
              href="https://github.com/datapack-planet/foast-launcher"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit" startIcon={<DownloadIcon />}>
              Download
            </Button>
          </Toolbar>
        </AppBar>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ flexGrow: 1 }}
        >
          <Typography variant="h2" sx={{ fontWeight: 600 }}>
            An{' '}
            <Typography
              component="span"
              sx={{
                fontSize: 'inherit',
                fontWeight: 'inherit',
                backgroundImage: 'linear-gradient(to right, #38d9a9, #087f5b)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Open-sourced
            </Typography>
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 600 }}>
            And{' '}
            <Typography
              component="span"
              sx={{
                fontSize: 'inherit',
                fontWeight: 'inherit',
                backgroundImage: 'linear-gradient(to right, #ffa94d, #e67700)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Cross-platform
            </Typography>
            <sup>*</sup>
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 600 }}>
            Minecraft Launcher
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 600 }}>
            With <BlueGradiantText>Material Design</BlueGradiantText>
          </Typography>
          <Box sx={{ height: 32 }} />
          <Button disabled variant="contained" sx={{ fontSize: 24 }}>
            Download .msix
          </Button>
          <Box sx={{ height: 4 }} />
          <Box>
            <sup>*</sup> Cross-platform versions on Mac & Linux need to be built
            yourself before Flutter officially supports them.
          </Box>
        </Stack>
      </Stack>
      <Stack
        sx={{ m: 10, boxSizing: 'border-box', alignItems: 'center' }}
        gap={5}
      >
        <Paper sx={{ width: '50%', p: 5 }}>
          <Typography variant="caption">High Performance</Typography>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Not only cross-platform, <br />
            But also <BlueGradiantText>fast</BlueGradiantText>.
          </Typography>
          <br />
          <Typography>
            There ain't chromium! Use minimum RAMs, get maximum performance and
            fastest speed.
          </Typography>
        </Paper>
        <Paper sx={{ width: '50%', p: 5 }}>
          <Typography variant="caption">Download</Typography>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Download Everything You Need.
          </Typography>
          <br />
          <Typography>
            Download mods, resource packs and shader packs with self-developed
            64-thread downloader.
          </Typography>
        </Paper>
        <Paper sx={{ width: '50%', p: 5 }}>
          <Typography>More features are on the way.</Typography>
        </Paper>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        component="footer"
        sx={{ py: 5 }}
      >
        <Link
          href="https://vercel.com?utm_source=datapack-planet&utm_campaign=oss"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={PoweredByVercelIcon} alt="Powered By Vercel" />
        </Link>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
