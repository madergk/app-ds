import './App.css';
import { useState } from 'react';
import {
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

function AppV2() {
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
      {/* Header using MRS Paper instead of MUI AppBar */}
      <Paper elevation={2} style={{ marginBottom: 0, borderRadius: 0 }}>
        <div style={{
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '64px'
        }}>
          <Typography variant="h6" component="div">
            MRS UI System v2.0
          </Typography>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Chip label="v0.2.0" color="primary" size="small" />
            <Badge badgeContent={4} color="error">
              <Icon name="NotificationsNoneRounded" />
            </Badge>
          </div>
        </div>
      </Paper>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h3" gutterBottom>
          MRS UI System
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          100% Pure MRS Components - No Direct MUI Imports
        </Typography>

        <Alert severity="info" style={{ marginBottom: '2rem' }}>
          This demo uses ONLY components from @mrs/components - demonstrating a pure MRS implementation!
        </Alert>

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
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
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
                <Button variant="contained" size="small" color="primary">
                  Learn More
                </Button>
                <Button variant="outlined" size="small" color="primary">
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

            <Card elevation={1}>
              <CardHeader
                title="MRS Components"
                subheader="100% Pure Implementation"
              />
              <CardContent>
                <Typography variant="body2">
                  All components in this demo come from @mrs/components only!
                </Typography>
                <div style={{ marginTop: '1rem' }}>
                  <Chip label="MRS" color="primary" size="small" style={{ marginRight: '0.5rem' }} />
                  <Chip label="v0.2.0" color="secondary" size="small" />
                </div>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Explore
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
              <DialogTitle>Welcome to MRS v2.0!</DialogTitle>
              <DialogContent>
                <Typography paragraph>
                  This dialog is part of the MRS Design System. All components are styled
                  with MRS design tokens and follow Material Design principles.
                </Typography>
                <Alert severity="success">
                  You're using 100% MRS components!
                </Alert>
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
              message="This is a snackbar notification from MRS!"
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
                { value: 'br', label: 'Brazil' },
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
              ]}
              fullWidth
            />
          </div>
        </Paper>

        {/* Switches and Checkboxes */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Toggles & Selections
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  color="primary"
                />
              }
              label="Enable notifications"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="primary" />}
              label="Accept terms and conditions"
            />
            <FormControlLabel
              control={<Radio checked={selectedValue === 'option1'} />}
              label="Option 1"
              onClick={() => setSelectedValue('option1')}
            />
            <FormControlLabel
              control={<Radio checked={selectedValue === 'option2'} />}
              label="Option 2"
              onClick={() => setSelectedValue('option2')}
            />
          </div>
        </Paper>

        {/* Badge & Avatar */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Badges & Avatars
          </Typography>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
            <Badge badgeContent={4} color="error">
              <Icon name="MailOutlineRounded" />
            </Badge>
            <Badge badgeContent={99} color="primary">
              <Icon name="NotificationsNoneRounded" />
            </Badge>
            <Badge variant="dot" color="success">
              <Avatar>JD</Avatar>
            </Badge>
            <Avatar>MRS</Avatar>
            <Tooltip title="User Profile">
              <IconButton>
                <Avatar>U</Avatar>
              </IconButton>
            </Tooltip>
          </div>
        </Paper>

        {/* Accordion Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Accordion
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <Accordion summary="What is MRS Design System?">
              <Typography>
                MRS Design System is a comprehensive React component library built on Material-UI
                with custom design tokens and theming. It provides 42 components for building
                modern web applications.
              </Typography>
            </Accordion>
            <Accordion summary="What's new in v0.2.0?">
              <Typography paragraph>
                Version 0.2.0 adds 8 essential components:
              </Typography>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Chip label="Alert" size="small" />
                <Chip label="Chip" size="small" />
                <Chip label="Card" size="small" />
                <Chip label="Dialog" size="small" />
                <Chip label="Snackbar" size="small" />
                <Chip label="CircularProgress" size="small" />
                <Chip label="Backdrop" size="small" />
                <Chip label="Skeleton" size="small" />
              </div>
            </Accordion>
            <Accordion summary="How do I use it?">
              <Typography>
                Simply import components from @mrs/components and use them in your React application.
                All components are styled with MRS design tokens and work seamlessly together.
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
                  title: 'Pure MRS Implementation',
                  content: 'This demo uses ONLY components from @mrs/components. No direct MUI imports are used in the application code.',
                },
                {
                  id: 'panel2',
                  title: 'Design Tokens',
                  content: 'All styling is driven by MRS design tokens including colors, typography, spacing, and border radius.',
                },
                {
                  id: 'panel3',
                  title: '42 Components',
                  content: 'MRS v0.2.0 includes 42 components covering forms, navigation, feedback, data display, and more.',
                },
              ]}
            />
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
                { label: 'Select Components', description: 'Choose from 42 MRS components' },
                { label: 'Configure Theme', description: 'Apply MRS design tokens' },
                { label: 'Build Application', description: 'Create your app' },
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
              <div style={{ marginTop: '1rem' }}>
                <Typography variant="body2" color="textSecondary">
                  {uploadedFiles.length} file(s) selected
                </Typography>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                  {uploadedFiles.map((file, idx) => (
                    <Chip key={idx} label={file.name} size="small" color="primary" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </Paper>

        {/* Lists Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Lists
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <List>
              <ListItem>
                <Icon name="CheckRounded" color="success" />
                <Typography style={{ marginLeft: '1rem' }}>Pure MRS Components</Typography>
              </ListItem>
              <ListItem>
                <Icon name="CheckRounded" color="success" />
                <Typography style={{ marginLeft: '1rem' }}>Design Token Integration</Typography>
              </ListItem>
              <ListItem>
                <Icon name="CheckRounded" color="success" />
                <Typography style={{ marginLeft: '1rem' }}>TypeScript Support</Typography>
              </ListItem>
              <ListItem>
                <Icon name="CheckRounded" color="success" />
                <Typography style={{ marginLeft: '1rem' }}>Material-UI v7 Compatible</Typography>
              </ListItem>
            </List>
          </div>
        </Paper>

        {/* Links Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Links
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <Link href="#" color="primary">
              MRS Documentation
            </Link>
            <Link href="#" color="secondary">
              Component Gallery
            </Link>
            <Link href="#" underline="none">
              Design Tokens Guide
            </Link>
          </div>
        </Paper>

        {/* Typography Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Typography
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <Typography variant="h1">Heading 1 - MRS</Typography>
            <Typography variant="h2">Heading 2 - Design</Typography>
            <Typography variant="h3">Heading 3 - System</Typography>
            <Typography variant="h4">Heading 4 - v0.2.0</Typography>
            <Typography variant="body1">Body 1 - All components styled with Nunito font</Typography>
            <Typography variant="body2" color="textSecondary">
              Body 2 - 100% MRS implementation
            </Typography>
            <Typography variant="caption" display="block">
              Caption - Pure design token styling
            </Typography>
          </div>
        </Paper>

        {/* Summary Card */}
        <Card elevation={4} style={{ background: 'linear-gradient(135deg, #00686f 0%, #009999 100%)', color: 'white', marginTop: '3rem' }}>
          <CardContent style={{ padding: '3rem' }}>
            <Typography variant="h3" gutterBottom style={{ color: 'white' }}>
              MRS Design System v0.2.0
            </Typography>
            <Typography variant="h6" paragraph style={{ color: 'rgba(255,255,255,0.9)' }}>
              100% Pure MRS Components
            </Typography>
            <Divider style={{ margin: '2rem 0', borderColor: 'rgba(255,255,255,0.3)' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <Typography variant="h2" style={{ color: 'white' }}>42</Typography>
                <Typography style={{ color: 'rgba(255,255,255,0.9)' }}>Components</Typography>
              </div>
              <div>
                <Typography variant="h2" style={{ color: 'white' }}>70%</Typography>
                <Typography style={{ color: 'rgba(255,255,255,0.9)' }}>MUI Coverage</Typography>
              </div>
              <div>
                <Typography variant="h2" style={{ color: 'white' }}>8</Typography>
                <Typography style={{ color: 'rgba(255,255,255,0.9)' }}>New in v0.2.0</Typography>
              </div>
            </div>
          </CardContent>
          <CardActions style={{ padding: '0 3rem 3rem' }}>
            <Button variant="contained" style={{ backgroundColor: 'white', color: '#00686f' }}>
              Get Started
            </Button>
            <Button variant="outlined" style={{ borderColor: 'white', color: 'white' }}>
              Documentation
            </Button>
          </CardActions>
        </Card>

        <Divider style={{ margin: '3rem 0' }} />

        <Typography variant="body2" color="textSecondary" align="center">
          Built with MRS Design System v0.2.0 • 100% MRS Components • No Direct MUI Imports
        </Typography>
        <Typography variant="caption" display="block" align="center" color="textSecondary" style={{ marginTop: '0.5rem' }}>
          Powered by Material-UI v7 • Styled with MRS Design Tokens
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default AppV2;
