# MRS Design System - Component Documentation

Version: 0.1.0

## Table of Contents

1. [Overview](#overview)
2. [Form Controls](#form-controls)
   - [Button](#button)
   - [TextField](#textfield)
   - [Select](#select)
   - [Autocomplete](#autocomplete)
   - [Checkbox](#checkbox)
   - [Radio](#radio)
   - [Switch](#switch)
3. [Layout Components](#layout-components)
   - [Paper](#paper)
   - [Divider](#divider)
   - [List & ListItem](#list--listitem)
4. [Feedback Components](#feedback-components)
   - [Accordion](#accordion)
   - [AccordionGroup](#accordiongroup)
   - [Tooltip](#tooltip)
   - [LinearProgress](#linearprogress)
5. [Navigation Components](#navigation-components)
   - [Stepper](#stepper)
   - [Link](#link)
   - [AppBar](#appbar)
6. [Data Display](#data-display)
   - [Avatar](#avatar)
   - [Badge](#badge)
   - [Icon](#icon)
   - [IconButton](#iconbutton)
   - [Typography](#typography)
7. [File Upload](#file-upload)
   - [FileUpload](#fileupload)

---

## Overview

The MRS Design System is a comprehensive UI component library built on Material-UI v7 with custom design tokens, Nunito typography, and MiREDSALUD branding. All components are built with TypeScript and follow consistent design patterns.

### Design Tokens

The system uses a three-tier token architecture:
- **Primitive Tokens**: Base values (colors, spacing, typography)
- **Semantic Tokens**: Purpose-driven tokens (primary, secondary, error)
- **Component Tokens**: Component-specific styling

### Theme

All components use the MRS theme which includes:
- **Primary Color**: `#9747ff` (Purple)
- **Secondary Color**: `#56ff59` (Bright Green)
- **Fonts**: Nunito (headings), Roboto (body text)
- **Spacing Unit**: 8px
- **Border Radius**: 4px (md), 999px (rounded/pill)

---

## Form Controls

### Button

Material-UI Button component with MRS styling - rounded corners (pill shape), custom colors, and typography.

#### Import

```tsx
import { Button } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'contained' \| 'outlined' \| 'text' | 'contained' | The button variant |
| color | 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'info' \| 'success' | 'primary' | Button color from theme |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Button size |
| disabled | boolean | false | If true, button is disabled |
| fullWidth | boolean | false | If true, button takes full width |
| onClick | function | - | Callback fired when button is clicked |
| children | ReactNode | - | Button content |

#### Customizations

- **Border Radius**: Fully rounded (pill shape) using `primitiveRadius.rounded`
- **Typography**: Nunito font family with size-specific weights:
  - Small: 13px / 18px line height
  - Medium: 15px / 21px line height
  - Large: 16px / 22px line height
- **No Elevation**: Shadows disabled by default (`disableElevation: true`)
- **Text Transform**: None (no uppercase)
- **Disabled Opacity**: 0.38

#### Usage Examples

```tsx
// Primary button
<Button variant="contained" color="primary">
  Primary Button
</Button>

// Secondary outlined
<Button variant="outlined" color="secondary">
  Secondary
</Button>

// Text button
<Button variant="text" color="primary">
  Text Button
</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// With click handler
<Button onClick={() => console.log('Clicked')}>
  Click Me
</Button>

// Disabled state
<Button disabled>Disabled</Button>

// Error button
<Button color="error">Delete</Button>

// Success button
<Button color="success">Confirm</Button>
```

---

### TextField

Material-UI TextField component with MRS design tokens for labels, values, and helper text.

#### Import

```tsx
import { TextField } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Label text |
| value | string | - | Input value |
| onChange | function | - | Callback fired when value changes |
| placeholder | string | - | Placeholder text |
| type | string | 'text' | Input type (text, email, password, etc.) |
| error | boolean | false | If true, shows error state |
| helperText | string | - | Helper text below input |
| disabled | boolean | false | If true, input is disabled |
| fullWidth | boolean | false | If true, input takes full width |
| multiline | boolean | false | If true, renders textarea |
| rows | number | - | Number of rows for multiline |
| required | boolean | false | If true, marks field as required |

#### Customizations

- **Label Typography**: Roboto 12px, 400 weight, 1 line height
- **Value Typography**: Roboto 16px, 400 weight, 1.5 line height
- **Helper Text Typography**: Roboto 12px, 400 weight, 1.66 line height
- **Colors**: Uses semantic colors from theme

#### Usage Examples

```tsx
// Basic text field
<TextField
  label="Email"
  type="email"
  placeholder="Enter your email"
/>

// Controlled component
<TextField
  label="Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  fullWidth
/>

// Password field
<TextField
  label="Password"
  type="password"
  helperText="At least 8 characters"
/>

// Error state
<TextField
  label="Email"
  value={email}
  error={!isValid}
  helperText={!isValid ? "Invalid email" : ""}
/>

// Multiline textarea
<TextField
  label="Comments"
  multiline
  rows={4}
  fullWidth
/>

// Disabled state
<TextField
  label="Disabled"
  value="Cannot edit"
  disabled
/>
```

---

### Select

Material-UI Select component with dropdown options.

#### Import

```tsx
import { Select } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Label text |
| value | string | - | Selected value |
| onChange | function | - | Callback fired when selection changes |
| options | Array<{value: string, label: string}> | [] | Array of options |
| disabled | boolean | false | If true, select is disabled |
| fullWidth | boolean | false | If true, select takes full width |
| error | boolean | false | If true, shows error state |
| helperText | string | - | Helper text below select |

#### Customizations

- Inherits TextField styling
- Dropdown menu uses theme colors
- Option hover states from theme

#### Usage Examples

```tsx
// Basic select
<Select
  label="Country"
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  options={[
    { value: 'ar', label: 'Argentina' },
    { value: 'cl', label: 'Chile' },
    { value: 'mx', label: 'Mexico' },
  ]}
/>

// Full width
<Select
  label="Category"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  options={categories}
  fullWidth
/>

// With error
<Select
  label="Required Field"
  value={value}
  error={!value}
  helperText={!value ? "Please select an option" : ""}
  options={options}
/>
```

---

### Autocomplete

Material-UI Autocomplete component with search/filter functionality.

#### Import

```tsx
import { Autocomplete } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Label text |
| value | object \| null | null | Selected value |
| onChange | function | - | Callback fired when selection changes |
| options | Array<{value: string, label: string}> | [] | Array of options |
| disabled | boolean | false | If true, autocomplete is disabled |
| fullWidth | boolean | false | If true, takes full width |
| placeholder | string | - | Placeholder text |
| loading | boolean | false | If true, shows loading state |

#### Customizations

- Search functionality built-in
- Filters options as user types
- Keyboard navigation support
- Clear button included

#### Usage Examples

```tsx
// Basic autocomplete
<Autocomplete
  label="Search Country"
  value={selectedCountry}
  onChange={(event, newValue) => setSelectedCountry(newValue)}
  options={[
    { value: 'ar', label: 'Argentina' },
    { value: 'br', label: 'Brazil' },
    { value: 'cl', label: 'Chile' },
  ]}
/>

// Full width with placeholder
<Autocomplete
  label="Select User"
  value={user}
  onChange={(event, newValue) => setUser(newValue)}
  options={users}
  placeholder="Type to search..."
  fullWidth
/>

// With loading state
<Autocomplete
  label="Search"
  value={value}
  onChange={handleChange}
  options={options}
  loading={isLoading}
/>
```

---

### Checkbox

Material-UI Checkbox component with label support.

#### Import

```tsx
import { Checkbox } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | If true, checkbox is checked |
| onChange | function | - | Callback fired when state changes |
| label | string | - | Label text next to checkbox |
| disabled | boolean | false | If true, checkbox is disabled |
| color | 'primary' \| 'secondary' | 'primary' | Checkbox color |
| indeterminate | boolean | false | If true, shows indeterminate state |

#### Customizations

- Uses theme primary color
- Custom checkmark icon
- Label typography from theme

#### Usage Examples

```tsx
// Basic checkbox
<Checkbox
  checked={accepted}
  onChange={(e) => setAccepted(e.target.checked)}
  label="I accept the terms and conditions"
/>

// Without label
<Checkbox
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>

// Disabled
<Checkbox
  checked={true}
  disabled
  label="Disabled option"
/>

// Secondary color
<Checkbox
  checked={checked}
  onChange={handleChange}
  color="secondary"
  label="Secondary color"
/>

// Indeterminate state
<Checkbox
  checked={false}
  indeterminate={true}
  onChange={handleChange}
  label="Select all"
/>
```

---

### Radio

Material-UI Radio button component with label support.

#### Import

```tsx
import { Radio } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | If true, radio is selected |
| onChange | function | - | Callback fired when selection changes |
| value | string | - | Radio value |
| label | string | - | Label text next to radio |
| disabled | boolean | false | If true, radio is disabled |
| color | 'primary' \| 'secondary' | 'primary' | Radio color |

#### Customizations

- Uses theme primary color
- Custom radio dot icon
- Label typography from theme

#### Usage Examples

```tsx
// Radio group
<div>
  <Radio
    checked={value === 'option1'}
    onChange={() => setValue('option1')}
    value="option1"
    label="Option 1"
  />
  <Radio
    checked={value === 'option2'}
    onChange={() => setValue('option2')}
    value="option2"
    label="Option 2"
  />
  <Radio
    checked={value === 'option3'}
    onChange={() => setValue('option3')}
    value="option3"
    label="Option 3"
  />
</div>

// Disabled option
<Radio
  checked={false}
  disabled
  label="Disabled option"
/>

// Secondary color
<Radio
  checked={checked}
  onChange={handleChange}
  color="secondary"
  label="Secondary color"
/>
```

---

### Switch

Material-UI Switch component with label support.

#### Import

```tsx
import { Switch } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | If true, switch is on |
| onChange | function | - | Callback fired when state changes |
| label | string | - | Label text next to switch |
| disabled | boolean | false | If true, switch is disabled |
| color | 'primary' \| 'secondary' | 'primary' | Switch color |

#### Customizations

- Uses theme primary color when checked
- Smooth toggle animation
- Label typography from theme

#### Usage Examples

```tsx
// Basic switch
<Switch
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
  label="Enable notifications"
/>

// Without label
<Switch
  checked={isActive}
  onChange={(e) => setIsActive(e.target.checked)}
/>

// Disabled
<Switch
  checked={true}
  disabled
  label="Always on (disabled)"
/>

// Secondary color
<Switch
  checked={checked}
  onChange={handleChange}
  color="secondary"
  label="Dark mode"
/>
```

---

## Layout Components

### Paper

Material-UI Paper component with elevation variants.

#### Import

```tsx
import { Paper } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'Elevation' \| 'Outlined' | 'Elevation' | Paper variant |
| elevation | '0' \| '1' \| '2' \| '3' \| '4' \| '6' \| '8' \| '12' \| '16' \| '24' | '1' | Elevation level (shadow depth) |
| children | ReactNode | - | Content inside paper |
| sx | object | - | Additional styling |

#### Customizations

- Uses semantic background colors from theme
- Elevation shadows based on Material Design
- Outlined variant with border

#### Usage Examples

```tsx
// Basic paper
<Paper>
  <Typography>Content here</Typography>
</Paper>

// Different elevations
<Paper elevation="0">No shadow</Paper>
<Paper elevation="1">Small shadow</Paper>
<Paper elevation="6">Medium shadow</Paper>
<Paper elevation="24">Large shadow</Paper>

// Outlined variant
<Paper variant="Outlined">
  <Typography>Outlined paper</Typography>
</Paper>

// With custom styling
<Paper elevation="2" sx={{ padding: '2rem', margin: '1rem' }}>
  <Typography>Custom styled content</Typography>
</Paper>
```

---

### Divider

Material-UI Divider component for visual separation.

#### Import

```tsx
import { Divider } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | 'horizontal' \| 'vertical' | 'horizontal' | Divider orientation |
| variant | 'fullWidth' \| 'inset' \| 'middle' | 'fullWidth' | Divider variant |
| light | boolean | false | If true, uses lighter color |
| sx | object | - | Additional styling |

#### Customizations

- Uses semantic divider color from theme
- 1px solid line
- Supports both horizontal and vertical orientations

#### Usage Examples

```tsx
// Horizontal divider
<div>
  <Typography>Section 1</Typography>
  <Divider />
  <Typography>Section 2</Typography>
</div>

// Vertical divider
<div style={{ display: 'flex' }}>
  <Typography>Left</Typography>
  <Divider orientation="vertical" />
  <Typography>Right</Typography>
</div>

// With spacing
<Divider style={{ margin: '2rem 0' }} />

// Light variant
<Divider light />

// Inset divider
<Divider variant="inset" />
```

---

### List & ListItem

Material-UI List components for displaying content in a structured way.

#### Import

```tsx
import { List, ListItem } from '@mrs/components';
```

#### List Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | List items |
| dense | boolean | false | If true, uses compact spacing |
| disablePadding | boolean | false | If true, removes default padding |
| sx | object | - | Additional styling |

#### ListItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Item content |
| button | boolean | false | If true, renders as button |
| selected | boolean | false | If true, shows selected state |
| disabled | boolean | false | If true, item is disabled |
| divider | boolean | false | If true, adds bottom divider |
| onClick | function | - | Callback fired when clicked |
| sx | object | - | Additional styling |

#### Usage Examples

```tsx
// Basic list
<List>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</List>

// List with icons
<List>
  <ListItem>
    <Icon name="CheckRounded" color="success" />
    <Typography style={{ marginLeft: '1rem' }}>Completed</Typography>
  </ListItem>
  <ListItem>
    <Icon name="ErrorRounded" color="error" />
    <Typography style={{ marginLeft: '1rem' }}>Error</Typography>
  </ListItem>
</List>

// Interactive list
<List>
  <ListItem button onClick={() => console.log('Clicked')}>
    Clickable item
  </ListItem>
  <ListItem button selected>
    Selected item
  </ListItem>
</List>

// Dense list
<List dense>
  <ListItem>Compact item 1</ListItem>
  <ListItem>Compact item 2</ListItem>
</List>

// With dividers
<List>
  <ListItem divider>Item 1</ListItem>
  <ListItem divider>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</List>
```

---

## Feedback Components

### Accordion

Material-UI Accordion component with MRS styling. Supports both controlled and uncontrolled modes.

#### Import

```tsx
import { Accordion } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| summary | ReactNode | 'Typography' | Accordion header content |
| children | ReactNode | - | Accordion body content |
| expanded | boolean | undefined | Controlled expansion state |
| onChange | function | - | Callback fired when expansion changes |
| disabled | boolean | false | If true, accordion is disabled |
| firstOfType | boolean | false | If true, applies rounded top corners |
| lastOfType | boolean | false | If true, applies rounded bottom corners |
| sx | object | - | Additional styling |

#### Customizations

- **Uncontrolled Mode**: When `expanded` prop is not provided, component manages its own state
- **Controlled Mode**: When `expanded` prop is provided, parent component controls state
- Expand/collapse icon button (ExpandMore/ExpandLess)
- Custom elevation shadow
- Rounded corners for first/last in groups
- Auto-dividers between accordion items

#### Usage Examples

```tsx
// Uncontrolled accordion (manages own state)
<Accordion summary="Section 1">
  <Typography>
    Content that expands and collapses automatically
  </Typography>
</Accordion>

// Multiple uncontrolled accordions
<div>
  <Accordion summary="FAQ 1">
    <Typography>Answer to question 1</Typography>
  </Accordion>
  <Accordion summary="FAQ 2">
    <Typography>Answer to question 2</Typography>
  </Accordion>
  <Accordion summary="FAQ 3">
    <Typography>Answer to question 3</Typography>
  </Accordion>
</div>

// Controlled accordion
const [expanded, setExpanded] = useState(false);

<Accordion
  summary="Controlled Expansion"
  expanded={expanded}
  onChange={(event, isExpanded) => setExpanded(isExpanded)}
>
  <Typography>Controlled content</Typography>
</Accordion>

// Disabled accordion
<Accordion summary="Disabled" disabled>
  <Typography>Cannot expand</Typography>
</Accordion>

// With custom summary content
<Accordion
  summary={
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Icon name="InfoRounded" />
      <Typography>Custom Summary</Typography>
    </div>
  }
>
  <Typography>Custom content</Typography>
</Accordion>

// In a group with rounded corners
<div>
  <Accordion summary="First" firstOfType>
    <Typography>Content</Typography>
  </Accordion>
  <Accordion summary="Middle">
    <Typography>Content</Typography>
  </Accordion>
  <Accordion summary="Last" lastOfType>
    <Typography>Content</Typography>
  </Accordion>
</div>
```

---

### AccordionGroup

Custom component for managing multiple accordions with exclusive expansion (only one open at a time).

#### Import

```tsx
import { AccordionGroup } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | Array<AccordionItem> | [] | Array of accordion items |
| expanded | string \| null | null | Currently expanded accordion ID |
| onChange | function | - | Callback fired when expansion changes |
| disabled | boolean | false | If true, all accordions disabled |

#### AccordionItem Type

```tsx
interface AccordionItem {
  id: string;          // Unique identifier
  title: string;       // Accordion header text
  content: ReactNode;  // Accordion body content
}
```

#### Customizations

- Only one accordion can be open at a time
- Automatically manages first/last styling
- Smooth expand/collapse transitions
- All accordions share controlled state

#### Usage Examples

```tsx
// Basic accordion group
const [expanded, setExpanded] = useState(null);

<AccordionGroup
  expanded={expanded}
  onChange={(id) => setExpanded(id)}
  items={[
    {
      id: 'panel1',
      title: 'Question 1',
      content: 'Answer to question 1',
    },
    {
      id: 'panel2',
      title: 'Question 2',
      content: 'Answer to question 2',
    },
    {
      id: 'panel3',
      title: 'Question 3',
      content: 'Answer to question 3',
    },
  ]}
/>

// FAQ section
const [expandedFAQ, setExpandedFAQ] = useState(null);

<AccordionGroup
  expanded={expandedFAQ}
  onChange={setExpandedFAQ}
  items={[
    {
      id: 'what',
      title: 'What is MRS Design System?',
      content: 'A comprehensive UI component library...',
    },
    {
      id: 'how',
      title: 'How do I install it?',
      content: 'npm install @mrs/components',
    },
    {
      id: 'customize',
      title: 'Can I customize it?',
      content: 'Yes, all components use design tokens...',
    },
  ]}
/>

// With React content
<AccordionGroup
  expanded={expanded}
  onChange={setExpanded}
  items={[
    {
      id: 'rich1',
      title: 'Rich Content',
      content: (
        <div>
          <Typography variant="body1">Paragraph text</Typography>
          <Button>Action</Button>
        </div>
      ),
    },
  ]}
/>
```

---

### Tooltip

Material-UI Tooltip component for displaying helpful text.

#### Import

```tsx
import { Tooltip } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Tooltip content |
| children | ReactElement | - | Element to attach tooltip to |
| placement | string | 'bottom' | Tooltip position (top, bottom, left, right, etc.) |
| arrow | boolean | false | If true, shows arrow pointing to element |
| open | boolean | undefined | Controlled open state |

#### Customizations

- Uses theme background and text colors
- Elevation shadow
- Smooth fade in/out transitions
- Z-index from design tokens

#### Usage Examples

```tsx
// Basic tooltip
<Tooltip title="Delete this item">
  <IconButton>
    <Icon name="DeleteRounded" />
  </IconButton>
</Tooltip>

// Different placements
<Tooltip title="Top tooltip" placement="top">
  <Button>Hover me</Button>
</Tooltip>

<Tooltip title="Right tooltip" placement="right">
  <Button>Hover me</Button>
</Tooltip>

// With arrow
<Tooltip title="With arrow" arrow>
  <Button>Hover me</Button>
</Tooltip>

// Controlled tooltip
const [open, setOpen] = useState(false);

<Tooltip title="Controlled" open={open}>
  <Button onClick={() => setOpen(!open)}>
    Click to toggle
  </Button>
</Tooltip>
```

---

### LinearProgress

Material-UI LinearProgress component for showing progress.

#### Import

```tsx
import { LinearProgress } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'determinate' \| 'indeterminate' | 'indeterminate' | Progress variant |
| value | number | 0 | Progress value (0-100) for determinate |
| color | 'primary' \| 'secondary' | 'primary' | Progress color |
| sx | object | - | Additional styling |

#### Customizations

- Uses theme primary/secondary colors
- Smooth animations
- Height: 4px

#### Usage Examples

```tsx
// Indeterminate progress (loading)
<LinearProgress />

// Determinate progress
<LinearProgress variant="determinate" value={30} />
<LinearProgress variant="determinate" value={60} />
<LinearProgress variant="determinate" value={100} />

// Secondary color
<LinearProgress color="secondary" />
<LinearProgress
  variant="determinate"
  value={75}
  color="secondary"
/>

// Custom styling
<LinearProgress
  variant="determinate"
  value={progress}
  sx={{ height: '8px', borderRadius: '4px' }}
/>

// Dynamic progress
const [progress, setProgress] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
  }, 800);
  return () => clearInterval(timer);
}, []);

<LinearProgress variant="determinate" value={progress} />
```

---

## Navigation Components

### Stepper

Material-UI Stepper component for multi-step processes.

#### Import

```tsx
import { Stepper } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activeStep | number | 0 | Current active step index |
| steps | Array<StepperStep> | [] | Array of step configurations |
| orientation | 'horizontal' \| 'vertical' | 'horizontal' | Stepper orientation |
| alternativeLabel | boolean | false | If true, labels appear below icons |

#### StepperStep Type

```tsx
interface StepperStep {
  label: string;        // Step label
  description?: string; // Optional description
  optional?: boolean;   // If true, shows "optional" text
}
```

#### Customizations

- Uses theme primary color for active step
- Completed steps show checkmark
- Step numbers for incomplete steps
- Connects steps with lines

#### Usage Examples

```tsx
// Basic stepper
const [activeStep, setActiveStep] = useState(0);

<Stepper
  activeStep={activeStep}
  steps={[
    { label: 'Select campaign settings' },
    { label: 'Create an ad group' },
    { label: 'Create an ad' },
  ]}
/>

// With descriptions
<Stepper
  activeStep={activeStep}
  steps={[
    {
      label: 'Account Details',
      description: 'Enter your information'
    },
    {
      label: 'Payment Info',
      description: 'Add payment method'
    },
    {
      label: 'Confirmation',
      description: 'Review and confirm'
    },
  ]}
/>

// With navigation
const [activeStep, setActiveStep] = useState(0);

<div>
  <Stepper
    activeStep={activeStep}
    steps={steps}
  />

  <div style={{ marginTop: '2rem' }}>
    <Button
      disabled={activeStep === 0}
      onClick={() => setActiveStep(prev => prev - 1)}
    >
      Back
    </Button>
    <Button
      disabled={activeStep === steps.length - 1}
      onClick={() => setActiveStep(prev => prev + 1)}
    >
      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
    </Button>
  </div>
</div>

// With optional step
<Stepper
  activeStep={activeStep}
  steps={[
    { label: 'Required step 1' },
    { label: 'Optional step', optional: true },
    { label: 'Required step 2' },
  ]}
/>

// Vertical orientation
<Stepper
  activeStep={activeStep}
  steps={steps}
  orientation="vertical"
/>
```

---

### Link

Material-UI Link component with MRS styling.

#### Import

```tsx
import { Link } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| href | string | '#' | Link URL |
| children | ReactNode | - | Link text/content |
| color | 'primary' \| 'secondary' \| 'inherit' | 'primary' | Link color |
| underline | 'none' \| 'hover' \| 'always' | 'hover' | Underline behavior |
| target | string | - | Link target (_blank, _self, etc.) |
| onClick | function | - | Callback fired when clicked |

#### Customizations

- Uses theme primary/secondary colors
- Hover states from theme
- Typography from theme

#### Usage Examples

```tsx
// Basic link
<Link href="/about">About Us</Link>

// External link
<Link href="https://example.com" target="_blank">
  Visit Website
</Link>

// Primary color (default)
<Link href="#" color="primary">
  Primary Link
</Link>

// Secondary color
<Link href="#" color="secondary">
  Secondary Link
</Link>

// No underline
<Link href="#" underline="none">
  No Underline
</Link>

// Always underlined
<Link href="#" underline="always">
  Always Underlined
</Link>

// With click handler
<Link
  href="#"
  onClick={(e) => {
    e.preventDefault();
    console.log('Link clicked');
  }}
>
  Clickable Link
</Link>
```

---

### AppBar

Custom MRS AppBar component with MiREDSALUD branding, notifications, and user account.

#### Import

```tsx
import { AppBar } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| showMenu | boolean | true | If true, shows menu icon button |
| onMenuClick | function | - | Callback fired when menu clicked |
| showNotifications | boolean | true | If true, shows notification button |
| onNotificationClick | function | - | Callback fired when notification clicked |
| showUserAccount | boolean | true | If true, shows user account section |
| userName | string | 'Pablo Salved' | User's display name |
| accountType | string | 'Cuenta principal' | Account type description |
| userInitials | string | 'P' | User's initials for avatar |
| width | number | 600 | AppBar width in pixels |
| smallScreen | boolean | false | If true, uses compact spacing |

#### Customizations

- **Logo**: "Mi" (green) + "REDSALUD" (teal)
- **Notifications**: IconButton with dot badge
- **User Account**: Name, account type, and avatar with initials
- **Avatar**: Teal background with white initials
- **Small Screen Mode**: Reduced spacing and height (56px vs 64px)
- **Elevation**: Level 1 shadow
- **Background**: White

#### Usage Examples

```tsx
// Basic AppBar
<AppBar />

// With custom user
<AppBar
  userName="Jane Doe"
  accountType="Administrator"
  userInitials="JD"
/>

// With callbacks
<AppBar
  onMenuClick={() => console.log('Menu clicked')}
  onNotificationClick={() => console.log('Notifications')}
/>

// Custom width
<AppBar width={800} />

// Without user account
<AppBar showUserAccount={false} />

// Without notifications
<AppBar showNotifications={false} />

// Small screen variant
<AppBar
  userName="User"
  width={400}
  smallScreen
/>

// Minimal AppBar
<AppBar
  showMenu={false}
  showNotifications={false}
  showUserAccount={false}
  width={300}
/>
```

---

## Data Display

### Avatar

Material-UI Avatar component for displaying user images or initials.

#### Import

```tsx
import { Avatar } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| alt | string | - | Alt text for image |
| src | string | - | Image URL |
| children | ReactNode | - | Avatar content (initials, icon) |
| variant | 'circular' \| 'rounded' \| 'square' | 'circular' | Avatar shape |
| sx | object | - | Additional styling |

#### Customizations

- Uses theme colors
- Typography for initials from design tokens
- Default size: 40x40px

#### Usage Examples

```tsx
// With image
<Avatar
  alt="User Avatar"
  src="https://i.pravatar.cc/150?img=1"
/>

// With initials
<Avatar>JD</Avatar>

// With icon
<Avatar>
  <Icon name="PersonRounded" />
</Avatar>

// Different sizes
<Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
<Avatar sx={{ width: 40, height: 40 }}>M</Avatar>
<Avatar sx={{ width: 56, height: 56 }}>L</Avatar>

// Square variant
<Avatar variant="square">SQ</Avatar>

// Rounded variant
<Avatar variant="rounded">RD</Avatar>

// With custom color
<Avatar sx={{ bgcolor: 'secondary.main' }}>
  PS
</Avatar>
```

---

### Badge

Material-UI Badge component for displaying notifications or status.

#### Import

```tsx
import { Badge } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| badgeContent | ReactNode | - | Badge content (number, text) |
| children | ReactNode | - | Element to attach badge to |
| color | 'primary' \| 'secondary' \| 'error' \| 'info' \| 'success' \| 'warning' | 'primary' | Badge color |
| variant | 'standard' \| 'dot' | 'standard' | Badge variant |
| max | number | 99 | Max number to display (shows 99+) |
| invisible | boolean | false | If true, badge is hidden |

#### Customizations

- Uses theme colors
- Dot variant for simple notifications
- Numbers display "99+" when over max

#### Usage Examples

```tsx
// With number
<Badge badgeContent={4} color="primary">
  <Icon name="MailRounded" />
</Badge>

// With high number
<Badge badgeContent={100} color="error">
  <Icon name="NotificationsRounded" />
</Badge>

// Dot variant
<Badge variant="dot" color="error">
  <Icon name="NotificationsRounded" />
</Badge>

// Different colors
<Badge badgeContent={4} color="primary">
  <Icon name="MailRounded" />
</Badge>

<Badge badgeContent={99} color="error">
  <Icon name="NotificationsRounded" />
</Badge>

<Badge badgeContent={5} color="success">
  <Icon name="CheckRounded" />
</Badge>

// With custom max
<Badge badgeContent={999} max={99} color="primary">
  <Icon name="MailRounded" />
</Badge>

// Invisible badge
<Badge invisible={true} badgeContent={4}>
  <Icon name="MailRounded" />
</Badge>
```

---

### Icon

Custom icon component supporting 70+ Material Icons with proper typing.

#### Import

```tsx
import { Icon } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | IconName | 'AddRounded' | Icon name to display |
| color | 'inherit' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'info' \| 'success' | 'inherit' | Icon color |
| fontSize | 'small' \| 'medium' \| 'large' | 'medium' | Icon size |
| sx | object | - | Additional styling |

#### Available Icons (IconName type)

Common icons include:
- Actions: `AddRounded`, `DeleteRounded`, `EditRounded`, `CloseRounded`
- Arrows: `ArrowBackRounded`, `ArrowForwardRounded`, `ArrowUpwardRounded`, `ArrowDownwardRounded`
- Chevrons: `ChevronLeftRounded`, `ChevronRightRounded`, `ExpandMoreRounded`, `ExpandLessRounded`
- Status: `CheckRounded`, `CheckCircleRounded`, `ErrorRounded`, `InfoRounded`, `WarningAmberRounded`
- Navigation: `MenuRounded`, `MoreHorizRounded`, `MoreVertRounded`
- Notifications: `NotificationsRounded`, `NotificationsNoneRounded`
- User: `PersonRounded`, `AccountCircleRounded`, `GroupRounded`
- File: `UploadRounded`, `DownloadRounded`, `DriveFolderUploadRounded`
- UI: `SearchRounded`, `VisibilityOffRounded`, `RemoveRedEyeRounded`, `LockRounded`

See `Icon.tsx` for complete list of 70+ available icons.

#### Usage Examples

```tsx
// Basic icon
<Icon name="AddRounded" />

// Colored icons
<Icon name="CheckRounded" color="success" />
<Icon name="ErrorRounded" color="error" />
<Icon name="InfoRounded" color="info" />

// Different sizes
<Icon name="DeleteRounded" fontSize="small" />
<Icon name="DeleteRounded" fontSize="medium" />
<Icon name="DeleteRounded" fontSize="large" />

// Primary color
<Icon name="EditRounded" color="primary" />

// Custom styling
<Icon
  name="FavoriteRounded"
  sx={{ color: '#ff0000', fontSize: '48px' }}
/>

// In a button
<Button>
  <Icon name="AddRounded" />
  Add Item
</Button>

// Multiple icons
<div>
  <Icon name="CheckRounded" color="success" />
  <Icon name="CloseRounded" color="error" />
  <Icon name="InfoRounded" color="info" />
</div>
```

---

### IconButton

Material-UI IconButton component with optional badge support.

#### Import

```tsx
import { IconButton } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Icon to display |
| color | 'default' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'info' \| 'success' | 'primary' | Button color |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Button size |
| disabled | boolean | false | If true, button is disabled |
| onClick | function | - | Callback fired when clicked |
| badge | boolean | false | If true, shows badge |
| badgeVariant | 'Standard' \| 'Dot' | 'Standard' | Badge variant |
| badgeContent | string | '1' | Badge content for Standard variant |

#### Customizations

- Uses theme colors
- Rounded appearance
- Badge overlay support
- Hover/focus states from theme

#### Usage Examples

```tsx
// Basic icon button
<IconButton>
  <Icon name="DeleteRounded" />
</IconButton>

// With color
<IconButton color="error">
  <Icon name="DeleteRounded" />
</IconButton>

<IconButton color="primary">
  <Icon name="EditRounded" />
</IconButton>

// Different sizes
<IconButton size="small">
  <Icon name="AddRounded" />
</IconButton>

<IconButton size="large">
  <Icon name="AddRounded" />
</IconButton>

// With click handler
<IconButton onClick={() => console.log('Clicked')}>
  <Icon name="FavoriteRounded" />
</IconButton>

// Disabled
<IconButton disabled>
  <Icon name="DeleteRounded" />
</IconButton>

// With dot badge
<IconButton badge badgeVariant="Dot">
  <Icon name="NotificationsNoneRounded" />
</IconButton>

// With number badge
<IconButton badge badgeVariant="Standard" badgeContent="5">
  <Icon name="MailRounded" />
</IconButton>

// In tooltip
<Tooltip title="Delete">
  <IconButton color="error">
    <Icon name="DeleteRounded" />
  </IconButton>
</Tooltip>
```

---

### Typography

Material-UI Typography component with MRS design tokens.

#### Import

```tsx
import { Typography } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'subtitle1' \| 'subtitle2' \| 'body1' \| 'body2' \| 'caption' \| 'button' \| 'overline' | 'body1' | Typography variant |
| children | ReactNode | - | Text content |
| color | string | - | Text color (theme color or CSS color) |
| align | 'left' \| 'center' \| 'right' \| 'justify' | 'left' | Text alignment |
| gutterBottom | boolean | false | If true, adds bottom margin |
| paragraph | boolean | false | If true, renders as paragraph |
| sx | object | - | Additional styling |

#### Typography Variants

- **Headings**: h1, h2, h3, h4, h5, h6 (Nunito font)
- **Subtitles**: subtitle1, subtitle2 (Roboto font)
- **Body**: body1, body2 (Roboto font)
- **Others**: caption, button, overline (Roboto font)

#### Customizations

- **Headings**: Nunito font family with specific sizes/weights
- **Body**: Roboto font family
- All variants use design tokens for consistency

#### Usage Examples

```tsx
// Headings
<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="h4">Heading 4</Typography>
<Typography variant="h5">Heading 5</Typography>
<Typography variant="h6">Heading 6</Typography>

// Subtitles
<Typography variant="subtitle1">Subtitle 1</Typography>
<Typography variant="subtitle2">Subtitle 2</Typography>

// Body text
<Typography variant="body1">
  Body 1 - Regular paragraph text
</Typography>
<Typography variant="body2">
  Body 2 - Smaller text
</Typography>

// Caption
<Typography variant="caption">
  Caption text
</Typography>

// With color
<Typography color="primary">Primary color</Typography>
<Typography color="error">Error color</Typography>
<Typography color="textSecondary">Secondary text</Typography>

// Alignment
<Typography align="center">Centered text</Typography>
<Typography align="right">Right-aligned text</Typography>

// With bottom margin
<Typography gutterBottom>Text with margin</Typography>

// As paragraph
<Typography paragraph>
  This is a paragraph with automatic spacing.
</Typography>

// Custom styling
<Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>
  Custom styled text
</Typography>
```

---

## File Upload

### FileUpload

Custom file upload component with drag-and-drop support.

#### Import

```tsx
import { FileUpload } from '@mrs/components';
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | Array<FileUploadFile> | [] | Selected files |
| onChange | function | - | Callback fired when files change |
| accept | string | - | Accepted file types (e.g., "image/*,.pdf") |
| multiple | boolean | false | If true, allows multiple files |
| maxSize | number | - | Max file size in bytes |
| disabled | boolean | false | If true, upload is disabled |

#### FileUploadFile Type

```tsx
interface FileUploadFile {
  file: File;      // Native File object
  preview?: string; // Preview URL for images
}
```

#### Customizations

- Drag-and-drop area
- File type validation
- File size validation
- Preview support for images
- Multiple file support
- Error handling

#### Usage Examples

```tsx
// Basic file upload
const [files, setFiles] = useState([]);

<FileUpload
  value={files}
  onChange={setFiles}
/>

// Image upload only
<FileUpload
  accept="image/*"
  value={images}
  onChange={setImages}
/>

// Multiple files
<FileUpload
  accept="image/*,.pdf"
  multiple
  value={files}
  onChange={setFiles}
/>

// With size limit (5MB)
<FileUpload
  accept="image/*,.pdf"
  multiple
  maxSize={5242880}
  value={files}
  onChange={setFiles}
/>

// With file count display
<FileUpload
  accept="image/*,.pdf"
  multiple
  maxSize={5242880}
  value={files}
  onChange={setFiles}
/>
{files.length > 0 && (
  <Typography variant="body2" color="textSecondary">
    {files.length} file(s) selected
  </Typography>
)}

// Disabled state
<FileUpload
  value={files}
  onChange={setFiles}
  disabled
/>

// PDF upload only
<FileUpload
  accept=".pdf"
  value={pdfs}
  onChange={setPdfs}
/>
```

---

## Theme Customization

### Accessing the Theme

```tsx
import { theme } from '@mrs/components';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Design Tokens

```tsx
import {
  primitiveColors,
  semanticColors,
  typographyVariants,
  primitiveSpacing,
  primitiveRadius,
} from '@mrs/components';

// Use in custom components
const CustomComponent = () => (
  <div style={{
    color: semanticColors.primary.main,
    padding: primitiveSpacing[2],
    borderRadius: primitiveRadius.md,
    fontFamily: typographyVariants.h1.fontFamily,
  }}>
    Custom styled content
  </div>
);
```

### Color Palette

- **Primary**: `#9747ff` (Purple)
- **Secondary**: `#56ff59` (Bright Green)
- **Teal**: `#00887a` (Used in logo and accents)
- **Error**: Red tones
- **Warning**: Orange/amber tones
- **Info**: Blue tones
- **Success**: Green tones

### Typography Scale

**Font Families:**
- Headings: Nunito
- Body: Roboto

**Variants:**
- h1: 96px / 700 weight
- h2: 60px / 700 weight
- h3: 48px / 500 weight
- h4: 34px / 500 weight
- h5: 24px / 500 weight
- h6: 20px / 600 weight
- body1: 16px / 400 weight
- body2: 14px / 400 weight

### Spacing Scale

Base unit: 8px

- `primitiveSpacing[0]` = 0px
- `primitiveSpacing[1]` = 8px
- `primitiveSpacing[2]` = 16px
- `primitiveSpacing[3]` = 24px
- `primitiveSpacing[4]` = 32px
- etc.

---

## Best Practices

### 1. Always Use ThemeProvider

```tsx
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@mrs/components';

<ThemeProvider theme={theme}>
  <YourApp />
</ThemeProvider>
```

### 2. Use Design Tokens

Instead of hardcoding values, use design tokens:

```tsx
// Bad
<div style={{ color: '#9747ff', padding: '16px' }}>

// Good
<div style={{
  color: semanticColors.primary.main,
  padding: primitiveSpacing[2]
}}>
```

### 3. Consistent Component Usage

Use MRS components consistently throughout your app:

```tsx
// Use MRS Button
<Button variant="contained" color="primary">
  Submit
</Button>

// Not native button
<button className="btn">Submit</button>
```

### 4. Accessibility

All components support accessibility features:

```tsx
<Button aria-label="Delete item">
  <Icon name="DeleteRounded" />
</Button>

<TextField
  label="Email"
  required
  aria-required="true"
/>
```

### 5. Responsive Design

Use Material-UI's responsive utilities:

```tsx
<Button sx={{
  fontSize: { xs: '12px', sm: '14px', md: '16px' }
}}>
  Responsive Button
</Button>
```

---

## Migration from Material-UI

If you're migrating from plain Material-UI:

### 1. Import Changes

```tsx
// Before
import { Button } from '@mui/material';

// After
import { Button } from '@mrs/components';
```

### 2. Theme Import

```tsx
// Before
import { createTheme } from '@mui/material/styles';
const theme = createTheme({...});

// After
import { theme } from '@mrs/components';
```

### 3. Design Tokens

```tsx
// Before
const MyComponent = styled('div')({
  color: '#9747ff',
  padding: '16px',
});

// After
import { semanticColors, primitiveSpacing } from '@mrs/components';

const MyComponent = styled('div')({
  color: semanticColors.primary.main,
  padding: primitiveSpacing[2],
});
```

---

## Support and Resources

- **Live Demo**: https://madergk.github.io/app-ds/
- **GitHub**: [Your repository URL]
- **Version**: 0.1.0
- **License**: [Your license]

For questions or issues, please refer to the component source code or contact the MRS Design System team.
