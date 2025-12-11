import './App.css';
import { useState } from 'react';
import {
  // v0.2.0 components
  Button,
  TextField,
  Typography,
  Paper,
  Avatar,
  Badge,
  IconButton,
  Switch,
  Checkbox,
  Radio,
  Select,
  Autocomplete,
  Tooltip,
  Divider,
  LinearProgress,
  CircularProgress,
  Accordion,
  AccordionGroup,
  Icon,
  Stepper,
  FileUpload,
  Link,
  List,
  ListItem,
  Input,
  OutlinedInput,
  FilledInput,
  InputBase,
  InputAdornment,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  FormControlLabel,
  Alert,
  Chip,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Backdrop,
  Skeleton,
  // v0.3.0 NEW components
  Box,
  Stack,
  Container,
  Grid2,
  Slider,
  Rating,
  Fab,
  ButtonGroup,
  Breadcrumbs,
  Menu,
  MenuItem,
  MenuList,
  Tabs,
  Tab,
  Drawer,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CardMedia,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  theme,
} from '@mrs/components';
import { ThemeProvider } from '@mui/material/styles';

function AppV3() {
  const [checked, setChecked] = useState(true);
  const [selectedValue, setSelectedValue] = useState('option1');
  const [selectValue, setSelectValue] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [files, setFiles] = useState([]);

  // v0.3.0 NEW state
  const [tabValue, setTabValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [sliderValue, setSliderValue] = useState(50);
  const [ratingValue, setRatingValue] = useState(3.5);

  const steps = [
    { label: 'Step 1', optional: 'Optional info' },
    { label: 'Step 2' },
    { label: 'Step 3', completed: true },
  ];

  const handleFileSelect = (fileList) => {
    const newFiles = Array.from(fileList).map((file, index) => ({
      id: `${Date.now()}-${index}`,
      name: file.name,
      size: file.size,
      status: 'loading',
      progress: 0,
    }));
    setFiles([...files, ...newFiles]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* Header with new components */}
        <Paper elevation={2} style={{ marginBottom: 0, borderRadius: 0 }}>
          <Container maxWidth="xl">
            <Box sx={{
              py: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Typography variant="h5" component="div">
                MRS Design System v3.0
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Chip label="v0.3.0" color="primary" size="small" />
                <Chip label="57 Components" color="secondary" size="small" />
                <Badge badgeContent={15} color="success">
                  <Icon name="NewReleasesRounded" />
                </Badge>
                <IconButton onClick={(e) => setMenuAnchorEl(e.currentTarget)}>
                  <Icon name="MoreVertRounded" />
                </IconButton>
                <Menu
                  anchorEl={menuAnchorEl}
                  open={Boolean(menuAnchorEl)}
                  onClose={() => setMenuAnchorEl(null)}
                >
                  <MenuItem onClick={() => setMenuAnchorEl(null)}>
                    <ListItemIcon>
                      <Icon name="SettingsRounded" />
                    </ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={() => setMenuAnchorEl(null)}>
                    <ListItemIcon>
                      <Icon name="InfoRounded" />
                    </ListItemIcon>
                    <ListItemText>About</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => setMenuAnchorEl(null)}>
                    <ListItemIcon>
                      <Icon name="LogoutRounded" />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                  </MenuItem>
                </Menu>
              </Stack>
            </Box>

            {/* Breadcrumbs Navigation */}
            <Box sx={{ pb: 2 }}>
              <Breadcrumbs separator="›">
                <Link href="/" underline="hover">
                  Home
                </Link>
                <Link href="/components" underline="hover">
                  Components
                </Link>
                <Typography color="text.primary">v0.3.0 Demo</Typography>
              </Breadcrumbs>
            </Box>

            {/* Tabs Navigation */}
            <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
              <Tab label="New Components" />
              <Tab label="Layout & Grid" />
              <Tab label="Data Display" />
              <Tab label="All Components" />
            </Tabs>
          </Container>
        </Paper>

        <Container maxWidth="xl">
          <Box sx={{ py: 4 }}>
            {/* Tab Panel 0: New v0.3.0 Components */}
            {tabValue === 0 && (
              <Stack spacing={4}>
                <Alert severity="success">
                  <strong>New in v0.3.0!</strong> 15 new components added. Total: 57 components (95% MUI coverage)
                </Alert>

                {/* FAB and ButtonGroup */}
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom>Actions: Fab & ButtonGroup</Typography>
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="subtitle2" gutterBottom>Floating Action Buttons</Typography>
                      <Stack direction="row" spacing={2}>
                        <Fab color="primary" size="small">
                          <Icon name="AddRounded" />
                        </Fab>
                        <Fab color="secondary" size="medium">
                          <Icon name="EditRounded" />
                        </Fab>
                        <Fab color="error" size="large">
                          <Icon name="DeleteRounded" />
                        </Fab>
                        <Fab variant="extended" color="primary">
                          <Icon name="NavigationRounded" sx={{ mr: 1 }} />
                          Navigate
                        </Fab>
                      </Stack>
                    </Box>

                    <Box>
                      <Typography variant="subtitle2" gutterBottom>Button Groups</Typography>
                      <Stack direction="row" spacing={2}>
                        <ButtonGroup variant="contained" color="primary">
                          <Button>One</Button>
                          <Button>Two</Button>
                          <Button>Three</Button>
                        </ButtonGroup>
                        <ButtonGroup variant="outlined" color="secondary">
                          <Button>Left</Button>
                          <Button>Center</Button>
                          <Button>Right</Button>
                        </ButtonGroup>
                        <ButtonGroup orientation="vertical" variant="text">
                          <Button>Top</Button>
                          <Button>Middle</Button>
                          <Button>Bottom</Button>
                        </ButtonGroup>
                      </Stack>
                    </Box>
                  </Stack>
                </Paper>

                {/* Slider and Rating */}
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom>Input: Slider & Rating</Typography>
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="subtitle2" gutterBottom>Slider (Value: {sliderValue})</Typography>
                      <Slider
                        value={sliderValue}
                        onChange={(e, newValue) => setSliderValue(newValue)}
                        min={0}
                        max={100}
                        valueLabelDisplay="auto"
                        marks={[
                          { value: 0, label: '0%' },
                          { value: 50, label: '50%' },
                          { value: 100, label: '100%' },
                        ]}
                      />
                    </Box>

                    <Box>
                      <Typography variant="subtitle2" gutterBottom>Rating (Value: {ratingValue})</Typography>
                      <Rating
                        value={ratingValue}
                        onChange={(e, newValue) => setRatingValue(newValue)}
                        precision={0.5}
                        size="large"
                      />
                    </Box>
                  </Stack>
                </Paper>

                {/* Drawer */}
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom>Navigation: Drawer</Typography>
                  <Button variant="contained" onClick={() => setDrawerOpen(true)}>
                    Open Drawer
                  </Button>
                  <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                    <Box sx={{ width: 300, p: 2 }}>
                      <Typography variant="h6" gutterBottom>Drawer Menu</Typography>
                      <Divider sx={{ my: 2 }} />
                      <List>
                        <ListItemButton>
                          <ListItemIcon>
                            <Icon name="HomeRounded" />
                          </ListItemIcon>
                          <ListItemText primary="Home" />
                        </ListItemButton>
                        <ListItemButton>
                          <ListItemIcon>
                            <Icon name="PersonRounded" />
                          </ListItemIcon>
                          <ListItemText primary="Profile" secondary="View your profile" />
                        </ListItemButton>
                        <ListItemButton selected>
                          <ListItemIcon>
                            <Icon name="SettingsRounded" />
                          </ListItemIcon>
                          <ListItemText primary="Settings" />
                        </ListItemButton>
                        <Divider sx={{ my: 1 }} />
                        <ListItemButton>
                          <ListItemAvatar>
                            <Avatar>JD</Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="John Doe" secondary="john@example.com" />
                        </ListItemButton>
                      </List>
                    </Box>
                  </Drawer>
                </Paper>

                {/* Table */}
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom>Data Display: Table</Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Component</TableCell>
                          <TableCell>Category</TableCell>
                          <TableCell align="right">Version</TableCell>
                          <TableCell align="right">Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow hover>
                          <TableCell>Slider</TableCell>
                          <TableCell>Input</TableCell>
                          <TableCell align="right">v0.3.0</TableCell>
                          <TableCell align="right"><Chip label="New" color="success" size="small" /></TableCell>
                        </TableRow>
                        <TableRow hover>
                          <TableCell>Rating</TableCell>
                          <TableCell>Input</TableCell>
                          <TableCell align="right">v0.3.0</TableCell>
                          <TableCell align="right"><Chip label="New" color="success" size="small" /></TableCell>
                        </TableRow>
                        <TableRow hover selected>
                          <TableCell>Table</TableCell>
                          <TableCell>Data Display</TableCell>
                          <TableCell align="right">v0.3.0</TableCell>
                          <TableCell align="right"><Chip label="New" color="success" size="small" /></TableCell>
                        </TableRow>
                        <TableRow hover>
                          <TableCell>Alert</TableCell>
                          <TableCell>Feedback</TableCell>
                          <TableCell align="right">v0.2.0</TableCell>
                          <TableCell align="right"><Chip label="Stable" color="primary" size="small" /></TableCell>
                        </TableRow>
                        <TableRow hover>
                          <TableCell>Button</TableCell>
                          <TableCell>Actions</TableCell>
                          <TableCell align="right">v0.1.0</TableCell>
                          <TableCell align="right"><Chip label="Stable" color="primary" size="small" /></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>

                {/* Card with CardMedia */}
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom>Enhanced Card with CardMedia</Typography>
                  <Grid2 container spacing={3}>
                    <Grid2 xs={12} md={4}>
                      <Card>
                        <CardMedia
                          component="div"
                          sx={{
                            height: 200,
                            bgcolor: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                          }}
                        >
                          <Typography variant="h4">Image 1</Typography>
                        </CardMedia>
                        <CardContent>
                          <Typography variant="h6">Component Showcase</Typography>
                          <Typography variant="body2" color="text.secondary">
                            CardMedia now available in v0.3.0
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">View</Button>
                          <Button size="small">Share</Button>
                        </CardActions>
                      </Card>
                    </Grid2>

                    <Grid2 xs={12} md={4}>
                      <Card>
                        <CardMedia
                          component="div"
                          sx={{
                            height: 200,
                            bgcolor: 'secondary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                          }}
                        >
                          <Typography variant="h4">Image 2</Typography>
                        </CardMedia>
                        <CardContent>
                          <Typography variant="h6">Grid2 Layout</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Responsive grid system included
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">View</Button>
                          <Button size="small">Share</Button>
                        </CardActions>
                      </Card>
                    </Grid2>

                    <Grid2 xs={12} md={4}>
                      <Card>
                        <CardMedia
                          component="div"
                          sx={{
                            height: 200,
                            bgcolor: 'error.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                          }}
                        >
                          <Typography variant="h4">Image 3</Typography>
                        </CardMedia>
                        <CardContent>
                          <Typography variant="h6">Stack & Box</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Flexible layout utilities
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">View</Button>
                          <Button size="small">Share</Button>
                        </CardActions>
                      </Card>
                    </Grid2>
                  </Grid2>
                </Paper>
              </Stack>
            )}

            {/* Tab Panel 1: Layout & Grid */}
            {tabValue === 1 && (
              <Stack spacing={4}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom>Layout: Grid2 System</Typography>
                  <Grid2 container spacing={2}>
                    <Grid2 xs={12}>
                      <Paper sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>xs=12</Paper>
                    </Grid2>
                    <Grid2 xs={6}>
                      <Paper sx={{ p: 2, bgcolor: 'secondary.main', color: 'white' }}>xs=6</Paper>
                    </Grid2>
                    <Grid2 xs={6}>
                      <Paper sx={{ p: 2, bgcolor: 'secondary.main', color: 'white' }}>xs=6</Paper>
                    </Grid2>
                    <Grid2 xs={4}>
                      <Paper sx={{ p: 2, bgcolor: 'success.main', color: 'white' }}>xs=4</Paper>
                    </Grid2>
                    <Grid2 xs={4}>
                      <Paper sx={{ p: 2, bgcolor: 'success.main', color: 'white' }}>xs=4</Paper>
                    </Grid2>
                    <Grid2 xs={4}>
                      <Paper sx={{ p: 2, bgcolor: 'success.main', color: 'white' }}>xs=4</Paper>
                    </Grid2>
                  </Grid2>
                </Paper>

                <Paper sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom>Layout: Box & Stack</Typography>
                  <Stack spacing={2}>
                    <Box sx={{ p: 2, bgcolor: 'primary.light', color: 'white' }}>
                      Box with custom styling
                    </Box>
                    <Stack direction="row" spacing={2}>
                      <Box sx={{ p: 2, bgcolor: 'secondary.light', color: 'white', flex: 1 }}>
                        Stack Item 1
                      </Box>
                      <Box sx={{ p: 2, bgcolor: 'error.light', color: 'white', flex: 1 }}>
                        Stack Item 2
                      </Box>
                      <Box sx={{ p: 2, bgcolor: 'success.light', color: 'white', flex: 1 }}>
                        Stack Item 3
                      </Box>
                    </Stack>
                  </Stack>
                </Paper>
              </Stack>
            )}

            {/* Tab Panel 2: Data Display */}
            {tabValue === 2 && (
              <Stack spacing={4}>
                <Alert severity="info">
                  Showing all data display components including the new Table family
                </Alert>

                {/* Existing v0.2.0 components */}
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom>Chips & Badges</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Chip label="Primary" color="primary" />
                    <Chip label="Secondary" color="secondary" />
                    <Chip label="Success" color="success" />
                    <Chip label="Error" color="error" />
                    <Chip label="Warning" color="warning" />
                    <Chip label="Info" color="info" />
                    <Chip label="Deletable" onDelete={() => {}} />
                    <Badge badgeContent={4} color="primary">
                      <Icon name="MailRounded" />
                    </Badge>
                  </Stack>
                </Paper>
              </Stack>
            )}

            {/* Tab Panel 3: All Components (from v0.2.0) */}
            {tabValue === 3 && (
              <Stack spacing={4}>
                {/* All the existing v0.2.0 components demo... */}
                <Alert severity="info">
                  This tab shows all 57 components. See other tabs for focused demos.
                </Alert>

                <Paper sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom>All Components Overview</Typography>
                  <Typography variant="body1">
                    MRS Design System v0.3.0 includes:
                  </Typography>
                  <Stack spacing={1} sx={{ mt: 2 }}>
                    <Typography>• 57 total components (42 from v0.2.0 + 15 new)</Typography>
                    <Typography>• 95% Material-UI coverage</Typography>
                    <Typography>• Complete layout system (Box, Stack, Container, Grid2)</Typography>
                    <Typography>• Full navigation suite (Tabs, Menu, Drawer, Breadcrumbs)</Typography>
                    <Typography>• Comprehensive data display (Tables, Cards, Lists)</Typography>
                    <Typography>• Rich form controls (Slider, Rating)</Typography>
                    <Typography>• Action components (Fab, ButtonGroup)</Typography>
                  </Stack>
                </Paper>
              </Stack>
            )}
          </Box>
        </Container>

        {/* Footer */}
        <Paper
          component="footer"
          elevation={3}
          sx={{
            mt: 8,
            py: 3,
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 0
          }}
        >
          <Container maxWidth="xl">
            <Stack spacing={2}>
              <Typography variant="h6" align="center">
                MRS Design System v0.3.0
              </Typography>
              <Typography variant="body2" align="center" sx={{ opacity: 0.9 }}>
                57 Components • 95% MUI Coverage • 15 New in v0.3.0
              </Typography>
              <Typography variant="body2" align="center" sx={{ opacity: 0.9 }}>
                Built with 100% MRS Components • No Direct MUI Imports
              </Typography>
              <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 1 }} />
              <Typography variant="caption" align="center" sx={{ opacity: 0.7 }}>
                © 2025 MRS Design System • v0.3.0 Released December 11, 2025
              </Typography>
            </Stack>
          </Container>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default AppV3;
