/**
 * FileUpload Component
 *
 * A file upload component with drag and drop support, file list, and progress indicators.
 * Based on Figma design for file upload functionality.
 */

import React, { useCallback, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Avatar } from '../Avatar';
import { Link } from '../Link';
import { LinearProgress } from '../LinearProgress';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';
import { semanticColors, primitiveColors, primitiveRadius } from '../../theme/designTokens';
import { hexToRgba } from '../../theme/colorUtils';

export interface FileUploadFile {
  /**
   * Unique identifier for the file
   */
  id: string;
  /**
   * File name
   */
  name: string;
  /**
   * File size in bytes
   */
  size?: number;
  /**
   * Upload status
   */
  status: 'loading' | 'complete' | 'failed';
  /**
   * Upload progress (0-100)
   */
  progress?: number;
  /**
   * Error message (only for failed status)
   */
  errorMessage?: string;
}

export interface FileUploadProps {
  /**
   * Accepted file types (e.g., "image/*", ".pdf")
   */
  accept?: string;
  /**
   * Maximum file size in bytes
   */
  maxSize?: number;
  /**
   * Maximum file size display text (e.g., "3MB")
   */
  maxSizeText?: string;
  /**
   * List of uploaded files
   */
  files?: FileUploadFile[];
  /**
   * Callback when files are selected
   */
  onFilesSelect?: (files: FileList) => void;
  /**
   * Callback when a file is removed
   */
  onFileRemove?: (fileId: string) => void;
  /**
   * Callback when link is clicked
   */
  onLinkClick?: () => void;
  /**
   * Whether the component is disabled
   */
  disabled?: boolean;
}

const DropZone = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'disabled',
})<{ disabled?: boolean }>(({ theme, disabled }) => ({
  border: `1px dashed ${semanticColors.divider}`,
  borderRadius: primitiveRadius.md,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: disabled ? 'default' : 'pointer',
  backgroundColor: 'transparent',
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: disabled ? 'transparent' : hexToRgba(primitiveColors.black, 0.02),
  },
}));

const FileItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: primitiveRadius.md,
}));

const FileInfo = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  minWidth: 0,
});

const FileName = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.body1.fontFamily,
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.body1.fontWeight,
  lineHeight: theme.typography.body1.lineHeight,
  letterSpacing: '0.15px',
  color: theme.palette.text.primary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

const FileMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontFamily: theme.typography.body2.fontFamily,
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  lineHeight: theme.typography.body2.lineHeight,
  letterSpacing: '0.17px',
  color: theme.palette.text.secondary,
}));

const ErrorText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.body1.fontFamily,
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.body1.fontWeight,
  lineHeight: theme.typography.body1.lineHeight,
  letterSpacing: '0.15px',
  color: semanticColors.error.main,
}));

const ErrorMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontFamily: theme.typography.body2.fontFamily,
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  lineHeight: theme.typography.body2.lineHeight,
  letterSpacing: '0.17px',
  color: semanticColors.error.main,
}));

const ProgressContainer = styled(Box)({
  width: 200,
  position: 'relative',
});

const StyledLinearProgress = styled(LinearProgress)({
  height: 4,
  borderRadius: primitiveRadius.rounded,
});

/**
 * Format file size to human-readable format
 */
function formatFileSize(bytes?: number): string {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}kb`;
  return `${(bytes / (1024 * 1024)).toFixed(2)}MB`;
}

/**
 * FileUpload component
 *
 * A file upload component with drag and drop support.
 *
 * @example
 * ```tsx
 * <FileUpload
 *   accept="image/*"
 *   maxSizeText="3MB"
 *   files={files}
 *   onFilesSelect={handleFilesSelect}
 *   onFileRemove={handleFileRemove}
 * />
 * ```
 */
export const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      accept = 'image/*',
      maxSize: _maxSize,
      maxSizeText = '3MB',
      files = [],
      onFilesSelect,
      onFileRemove,
      onLinkClick,
      disabled = false,
    },
    ref
  ) => {
    const [_isDragging, setIsDragging] = useState(false);

    const handleDragOver = useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) {
          setIsDragging(true);
        }
      },
      [disabled]
    );

    const handleDragLeave = useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
      },
      []
    );

    const handleDrop = useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (disabled || !onFilesSelect) return;

        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles.length > 0) {
          onFilesSelect(droppedFiles);
        }
      },
      [disabled, onFilesSelect]
    );

    // Note: handleFileInputChange is kept for future use with file input element
    // const handleFileInputChange = useCallback(
    //   (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (disabled || !onFilesSelect) return;
    //
    //     const selectedFiles = e.target.files;
    //     if (selectedFiles && selectedFiles.length > 0) {
    //       onFilesSelect(selectedFiles);
    //     }
    //   },
    //   [disabled, onFilesSelect]
    // );

    const handleLinkClick = useCallback(
      (e: React.MouseEvent) => {
        e.preventDefault();
        if (disabled) return;

        if (onLinkClick) {
          onLinkClick();
        } else {
          // Trigger file input click
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = accept;
          input.multiple = true;
          input.onchange = (event) => {
            const target = event.target as HTMLInputElement;
            if (target.files && target.files.length > 0 && onFilesSelect) {
              onFilesSelect(target.files);
            }
          };
          input.click();
        }
      },
      [accept, disabled, onLinkClick, onFilesSelect]
    );

    const handleRemoveFile = useCallback(
      (fileId: string) => {
        if (disabled || !onFileRemove) return;
        onFileRemove(fileId);
      },
      [disabled, onFileRemove]
    );

    return (
      <Box ref={ref}>
        <DropZone
          disabled={disabled}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleLinkClick}
        >
          <Avatar variant="lg" icon="DriveFolderUploadRounded" />
          <Box display="flex" alignItems="center" gap={0.5}>
            <Link
              href="#"
              onClick={handleLinkClick}
              underline="always"
              sx={{ color: semanticColors.primary.main }}
            >
              Link
            </Link>
            <Typography variant="body1" component="span">
              {' '}
              or drag and drop
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            SVG, PNG, JPG or GIF (max. {maxSizeText})
          </Typography>
        </DropZone>

        {files.length > 0 && (
          <Box display="flex" flexDirection="column" gap={1} mt={1}>
            {files.map((file) => {
              const isError = file.status === 'failed';
              const progress = file.progress ?? 0;

              return (
                <FileItem key={file.id}>
                  <Avatar variant="lg" icon="DriveFolderUploadRounded" badge={file.status === 'complete'} />
                  <FileInfo>
                    {isError ? (
                      <>
                        <ErrorText>{file.errorMessage || 'Upload failed.'}</ErrorText>
                        <ErrorMeta>
                          <span>{formatFileSize(file.size)}</span>
                          <span>•</span>
                          <span>{file.errorMessage || 'Failed'}</span>
                        </ErrorMeta>
                      </>
                    ) : (
                      <>
                        <FileName>{file.name}</FileName>
                        <FileMeta>
                          <span>{formatFileSize(file.size)}</span>
                          <span>•</span>
                          <span>
                            {file.status === 'loading' ? 'Loading' : 'Complete'}
                          </span>
                        </FileMeta>
                      </>
                    )}
                    <Box mt={0.5}>
                      <ProgressContainer>
                        <StyledLinearProgress
                          variant="determinate"
                          value={isError ? 100 : progress}
                          color={isError ? 'error' : 'primary'}
                        />
                      </ProgressContainer>
                    </Box>
                  </FileInfo>
                  <IconButton
                    size="medium"
                    onClick={() => handleRemoveFile(file.id)}
                    disabled={disabled}
                  >
                    <Icon name="AddRounded" />
                  </IconButton>
                </FileItem>
              );
            })}
          </Box>
        )}
      </Box>
    );
  }
);

FileUpload.displayName = 'FileUpload';

export default FileUpload;

