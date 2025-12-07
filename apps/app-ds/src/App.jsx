import './App.css';
import { useState } from 'react';
import {
  AppBar,
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
  theme,
} from '@mrs/components';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar as MuiAppBar, Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [checked, setChecked] = useState(true);
  const [selectedValue, setSelectedValue] = useState('option1');
  const [selectValue, setSelectValue] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [autocompleteValue, setAutocompleteValue] = useState(null);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MuiAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MRS UI System
          </Typography>
        </Toolbar>
      </MuiAppBar>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h3" gutterBottom>
          MRS UI System
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Comprehensive Component Library built on Material-UI
        </Typography>

        <Divider style={{ margin: '2rem 0' }} />

        {/* Buttons Section */}
        <Paper elevation={6} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Buttons
          </Typography>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" color="primary">
              Outlined
            </Button>
            <Button variant="text" color="primary">
              Text
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
          </div>
        </Paper>

        {/* Form Inputs Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Form Controls
          </Typography>
          <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1rem' }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Enter your email"
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Enter your password"
              fullWidth
            />
            <Select
              label="Country"
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
              options={[
                { value: 'ar', label: 'Argentina' },
                { value: 'fr', label: 'Segundo' },
                { value: 'cl', label: 'Chile' },
              ]}
              fullWidth
            />
            <Autocomplete
              label="Search Country"
              value={autocompleteValue}
              onChange={(event, newValue) => setAutocompleteValue(newValue)}
              options={[
                { value: 'ar', label: 'Argentina' },
                { value: 'br', label: 'Brazil' },
                { value: 'cl', label: 'Chile' },
                { value: 'co', label: 'Colombia' },
                { value: 'mx', label: 'Mexico' },
                { value: 'pe', label: 'Peru' },
                { value: 'uy', label: 'Uruguay' },
              ]}
              fullWidth
            />
          </div>
        </Paper>

        {/* Checkboxes and Radio Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Selection Controls
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                label="Accept terms and conditions"
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <Switch
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                label="Enable notifications"
              />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Radio
                checked={selectedValue === 'option1'}
                onChange={() => setSelectedValue('option1')}
                label="Option 1"
                value="option1"
              />
              <Radio
                checked={selectedValue === 'option2'}
                onChange={() => setSelectedValue('option2')}
                label="Option 2"
                value="option2"
              />
            </div>
          </div>
        </Paper>

        {/* Avatars and Badges Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Avatars & Badges
          </Typography>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginTop: '1rem' }}>
            <Avatar alt="User Avatar" src="https://i.pravatar.cc/150?img=1" />
            <Badge badgeContent={4} color="primary">
              <Icon name="mail" />
            </Badge>
            <Badge badgeContent={99} color="error">
              <Icon name="notifications" />
            </Badge>
            <Tooltip title="Delete">
              <IconButton color="error">
                <Icon name="delete" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton color="primary">
                <Icon name="edit" />
              </IconButton>
            </Tooltip>
          </div>
        </Paper>

        {/* Progress Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Progress Indicators
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <LinearProgress value={30} variant="determinate" style={{ marginBottom: '1rem' }} />
            <LinearProgress value={60} variant="determinate" color="secondary" style={{ marginBottom: '1rem' }} />
            <LinearProgress variant="indeterminate" />
          </div>
        </Paper>

        {/* Form Components with FormControl */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Form Components & Variants
          </Typography>
          <div style={{ display: 'grid', gap: '2rem', marginTop: '1rem' }}>
            <FormControl fullWidth>
              <FormLabel>Standard Input</FormLabel>
              <Input placeholder="Enter text here" />
              <FormHelperText>This is a standard input variant</FormHelperText>
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <FormLabel>Outlined Input</FormLabel>
              <OutlinedInput placeholder="Enter text here" />
              <FormHelperText>This is an outlined input variant</FormHelperText>
            </FormControl>

            <FormControl fullWidth variant="filled">
              <FormLabel>Filled Input</FormLabel>
              <FilledInput placeholder="Enter text here" />
              <FormHelperText>This is a filled input variant</FormHelperText>
            </FormControl>

            <FormControl fullWidth>
              <FormLabel>Input with Adornment</FormLabel>
              <OutlinedInput
                placeholder="Amount"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                endAdornment={<InputAdornment position="end">.00</InputAdornment>}
              />
              <FormHelperText>Input with start and end adornments</FormHelperText>
            </FormControl>

            <FormControl fullWidth>
              <FormLabel>Input with Icon Adornment</FormLabel>
              <OutlinedInput
                placeholder="Search..."
                startAdornment={
                  <InputAdornment position="start">
                    <Icon name="SearchRounded" />
                  </InputAdornment>
                }
              />
              <FormHelperText>Input with icon adornment</FormHelperText>
            </FormControl>

            <FormControl component="fieldset">
              <FormLabel component="legend">Options</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Option 1"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Option 2"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Option 3 (disabled)"
                  disabled
                />
              </FormGroup>
              <FormHelperText>Select multiple options</FormHelperText>
            </FormControl>
          </div>
        </Paper>

        {/* MRS AppBar Component */}
        {/* <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            MRS AppBar Component
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Custom AppBar with MiREDSALUD branding, notifications, and user account
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <AppBar
              onMenuClick={() => console.log('Menu clicked')}
              onNotificationClick={() => console.log('Notification clicked')}
              userName="Juan Pérez"
              accountType="Administrador"
              userInitials="JP"
            />
          </div>
        </Paper> */}

        {/* Accordion Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Accordion
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <Accordion summary="Section 1">
              <Typography>
                This is the content of section 1. You can put any content here.
              </Typography>
            </Accordion>
            <Accordion summary="Section 2">
              <Typography>
                This is the content of section 2 with more detailed information.
              </Typography>
            </Accordion>
            <Accordion summary="Section 3">
              <Typography>
                This is the content of section 3. Accordions are great for FAQs!
              </Typography>
            </Accordion>
          </div>
        </Paper>

        {/* AccordionGroup Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Accordion Group
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Multiple accordions with controlled expansion (only one open at a time)
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <AccordionGroup
              expanded={expandedAccordion}
              onChange={(id) => setExpandedAccordion(id)}
              items={[
                {
                  id: 'panel1',
                  title: 'What is MRS Design System?',
                  content: 'MRS Design System is a comprehensive UI component library built on Material-UI with custom design tokens and theming.',
                },
                {
                  id: 'panel2',
                  title: 'How do I install it?',
                  content: 'You can install it via npm: npm install @mrs/components. Then import the components you need.',
                },
                {
                  id: 'panel3',
                  title: 'Is it customizable?',
                  content: 'Yes! All components use design tokens and can be customized through the theme configuration.',
                },
              ]}
            />
          </div>
        </Paper>

        {/* List Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Lists
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <List>
              <ListItem>
                <Icon name="CheckRounded" color="success" />
                <Typography style={{ marginLeft: '1rem' }}>Item 1 - Completed task</Typography>
              </ListItem>
              <ListItem>
                <Icon name="CheckRounded" color="success" />
                <Typography style={{ marginLeft: '1rem' }}>Item 2 - Another completed task</Typography>
              </ListItem>
              <ListItem>
                <Icon name="ErrorOutlineRounded" color="warning" />
                <Typography style={{ marginLeft: '1rem' }}>Item 3 - Pending task</Typography>
              </ListItem>
              <ListItem>
                <Icon name="InfoRounded" color="info" />
                <Typography style={{ marginLeft: '1rem' }}>Item 4 - Information item</Typography>
              </ListItem>
            </List>
          </div>
        </Paper>

        {/* Stepper Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Stepper
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <Stepper
              activeStep={activeStep}
              steps={[
                { label: 'Account Details', description: 'Enter your information' },
                { label: 'Payment Info', description: 'Add payment method' },
                { label: 'Confirmation', description: 'Review and confirm' },
              ]}
            />
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <Button
                variant="outlined"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => prev - 1)}
              >
                Back
              </Button>
              <Button
                variant="contained"
                disabled={activeStep === 2}
                onClick={() => setActiveStep((prev) => prev + 1)}
              >
                {activeStep === 2 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        </Paper>

        {/* File Upload Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            File Upload
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <FileUpload
              accept="image/*,.pdf"
              multiple
              maxSize={5242880}
              onChange={(files) => setUploadedFiles(files)}
              value={uploadedFiles}
            />
            {uploadedFiles.length > 0 && (
              <Typography variant="body2" color="textSecondary" style={{ marginTop: '1rem' }}>
                {uploadedFiles.length} file(s) selected
              </Typography>
            )}
          </div>
        </Paper>

        {/* Links Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Links
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <Link href="#" color="primary">
              Primary Link
            </Link>
            <Link href="#" color="secondary">
              Secondary Link
            </Link>
            <Link href="#" underline="none">
              Link without underline
            </Link>
            <Link href="#" underline="always">
              Link always underlined
            </Link>
          </div>
        </Paper>

        {/* Alert Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Alerts
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Display important messages with different severity levels
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <Alert severity="success">This is a success alert!</Alert>
            <Alert severity="info">This is an info alert with some information.</Alert>
            <Alert severity="warning">This is a warning alert - please be careful!</Alert>
            <Alert severity="error">This is an error alert - something went wrong!</Alert>
            <Alert severity="success" variant="filled">Success with filled variant</Alert>
            <Alert severity="info" variant="outlined">Info with outlined variant</Alert>
          </div>
        </Paper>

        {/* Chip Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Chips
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Compact elements for tags, filters, and categories
          </Typography>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <Chip label="Default" />
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Success" color="success" />
            <Chip label="Error" color="error" />
            <Chip label="Deletable" color="primary" onDelete={() => {}} />
            <Chip label="Clickable" color="secondary" onClick={() => alert('Chip clicked!')} />
            <Chip label="Outlined" variant="outlined" />
            <Chip label="Small" size="small" color="primary" />
          </div>
        </Paper>

        {/* Card Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Cards
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Content containers with elevation
          </Typography>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            <Card elevation={3}>
              <CardHeader
                title="Card Title"
                subheader="Card Subheader"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  This is the main content of the card. You can put any information here.
                  Cards are great for organizing content into distinct sections.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
                <Button size="small" color="secondary">
                  Share
                </Button>
              </CardActions>
            </Card>

            <Card variant="outlined">
              <CardHeader
                title="Outlined Card"
                subheader="With border"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  This card uses the outlined variant instead of elevation.
                  Perfect for a flatter design aesthetic.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined">
                  Action
                </Button>
              </CardActions>
            </Card>
          </div>
        </Paper>

        {/* Dialog Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Dialog
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Modal dialogs for important user interactions
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <Button variant="contained" onClick={() => setDialogOpen(true)}>
              Open Dialog
            </Button>
            <Dialog
              open={dialogOpen}
              onClose={() => setDialogOpen(false)}
              maxWidth="sm"
              fullWidth
            >
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogContent>
                <Typography>
                  This is a dialog window. It can contain any content you need,
                  such as forms, confirmations, or important messages.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                <Button variant="contained" onClick={() => setDialogOpen(false)}>
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Paper>

        {/* Snackbar Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Snackbar
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Brief notifications at the bottom of the screen
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <Button variant="contained" onClick={() => setSnackbarOpen(true)}>
              Show Snackbar
            </Button>
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={3000}
              onClose={() => setSnackbarOpen(false)}
              message="This is a snackbar notification!"
            />
          </div>
        </Paper>

        {/* Progress Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Progress Indicators
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Linear and circular progress indicators
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1rem' }}>
            <div>
              <Typography variant="subtitle2" gutterBottom>Linear Progress</Typography>
              <LinearProgress />
              <LinearProgress color="secondary" style={{ marginTop: '1rem' }} />
            </div>
            <div>
              <Typography variant="subtitle2" gutterBottom>Circular Progress</Typography>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <CircularProgress />
                <CircularProgress color="secondary" />
                <CircularProgress color="success" size={30} />
                <CircularProgress color="error" size={50} />
              </div>
            </div>
          </div>
        </Paper>

        {/* Backdrop Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Backdrop
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Dark overlay for loading states or modals
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <Button variant="contained" onClick={() => setBackdropOpen(true)}>
              Show Backdrop
            </Button>
            <Backdrop
              open={backdropOpen}
              onClick={() => setBackdropOpen(false)}
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
        </Paper>

        {/* Skeleton Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Skeleton
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Loading placeholders with various shapes
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="rectangular" width="100%" height={118} />
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="text" width="70%" />
            </div>
            <Skeleton variant="rounded" width="100%" height={60} />
          </div>
        </Paper>

        {/* Typography Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Typography
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="body1">Body 1 - Regular paragraph text</Typography>
            <Typography variant="body2" color="textSecondary">
              Body 2 - Secondary text
            </Typography>
            <Typography variant="caption" display="block">
              Caption text
            </Typography>
          </div>
        </Paper>

        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '3rem' }}>
          Built with MRS Design System v0.2.0 • Powered by Material-UI • 42 Components
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
