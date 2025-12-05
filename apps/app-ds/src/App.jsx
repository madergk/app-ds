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
  Tooltip,
  Divider,
  LinearProgress,
  Accordion,
  Icon,
  Stepper,
  FileUpload,
  Link,
  theme,
} from '@mrs/components';
import { ThemeProvider } from '@mui/material/styles';
import { Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [checked, setChecked] = useState(true);
  const [selectedValue, setSelectedValue] = useState('option1');
  const [selectValue, setSelectValue] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MRS UI Design System
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h3" gutterBottom>
          MRS UI Design System
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

        {/* Accordion Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Accordion
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            <Accordion title="Section 1">
              <Typography>
                This is the content of section 1. You can put any content here.
              </Typography>
            </Accordion>
            <Accordion title="Section 2">
              <Typography>
                This is the content of section 2 with more detailed information.
              </Typography>
            </Accordion>
            <Accordion title="Section 3">
              <Typography>
                This is the content of section 3. Accordions are great for FAQs!
              </Typography>
            </Accordion>
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
          Built with MRS Design System v0.1.0 • Powered by Material-UI
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
