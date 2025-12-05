/**
 * FileUpload Stories
 *
 * Storybook stories for the FileUpload component showcasing different states and use cases.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload, type FileUploadFile } from './FileUpload';
import { Box } from '@mui/material';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A file upload component with drag and drop support, file list, and progress indicators.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    accept: {
      control: 'text',
      description: 'Accepted file types (e.g., "image/*", ".pdf")',
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
    maxSizeText: {
      control: 'text',
      description: 'Maximum file size display text (e.g., "3MB")',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the component is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

// Sample files for different states
const loadingFile: FileUploadFile = {
  id: '1',
  name: 'document_file_name.pdf',
  size: 102400, // 100kb
  status: 'loading',
  progress: 78,
};

const completeFile: FileUploadFile = {
  id: '2',
  name: 'document_file_name.pdf',
  size: 102400, // 100kb
  status: 'complete',
  progress: 100,
};

const failedFile: FileUploadFile = {
  id: '3',
  name: 'document_file_name.pdf',
  size: 102400, // 100kb
  status: 'failed',
  progress: 0,
  errorMessage: 'File too large',
};

/**
 * Default empty state
 */
export const Default: Story = {
  args: {
    accept: 'image/*',
    maxSizeText: '3MB',
  },
};

/**
 * With loading file
 */
export const WithLoadingFile: Story = {
  args: {
    accept: 'image/*',
    maxSizeText: '3MB',
    files: [loadingFile],
  },
};

/**
 * With complete file
 */
export const WithCompleteFile: Story = {
  args: {
    accept: 'image/*',
    maxSizeText: '3MB',
    files: [completeFile],
  },
};

/**
 * With failed file
 */
export const WithFailedFile: Story = {
  args: {
    accept: 'image/*',
    maxSizeText: '3MB',
    files: [failedFile],
  },
};

/**
 * Multiple files with different states
 */
export const MultipleFiles: Story = {
  args: {
    accept: 'image/*',
    maxSizeText: '3MB',
    files: [loadingFile, completeFile, failedFile],
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    accept: 'image/*',
    maxSizeText: '3MB',
    disabled: true,
    files: [completeFile],
  },
};

/**
 * Complete showcase matching Figma design
 */
export const CompleteShowcase: Story = {
  render: () => {
    const files: FileUploadFile[] = [
      {
        id: '1',
        name: 'document_file_name.pdf',
        size: 102400,
        status: 'loading',
        progress: 78,
      },
      {
        id: '2',
        name: 'document_file_name.pdf',
        size: 102400,
        status: 'complete',
        progress: 100,
      },
      {
        id: '3',
        name: 'document_file_name.pdf',
        size: 102400,
        status: 'failed',
        progress: 0,
        errorMessage: 'File too large',
      },
    ];

    return (
      <Box sx={{ maxWidth: 552 }}>
        <FileUpload
          accept="image/*"
          maxSizeText="3MB"
          files={files}
          onFilesSelect={(fileList) => {
            console.log('Files selected:', fileList);
          }}
          onFileRemove={(fileId) => {
            console.log('File removed:', fileId);
          }}
        />
      </Box>
    );
  },
};

