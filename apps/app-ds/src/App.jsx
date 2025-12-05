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
  Tooltip,
  Divider,
  LinearProgress,
  Accordion,
  Icon,
  theme,
} from '@mrs/components';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [checked, setChecked] = useState(true);
  const [selectedValue, setSelectedValue] = useState('option1');
  const [selectValue, setSelectValue] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h1" gutterBottom>
          MRS Design System
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Comprehensive Component Library built on Material-UI
        </Typography>

        <Divider style={{ margin: '2rem 0' }} />

        {/* Buttons Section */}
        <Paper elevation={2} style={{ padding: '2rem', marginBottom: '2rem' }}>
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
                { value: 'us', label: 'United States' },
                { value: 'uk', label: 'United Kingdom' },
                { value: 'ca', label: 'Canada' },
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
