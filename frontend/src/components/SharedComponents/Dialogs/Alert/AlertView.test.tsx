import { render, screen, fireEvent } from '@testing-library/react';
import AlertDialog from './AlertView';

describe('AlertDialog', () => {
  const defaultProps = {
    showDialog: true,
    closeDialog: vi.fn(),
    removeAction: vi.fn(),
    isLoading: false
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders dialog with correct title and message', () => {
    render(<AlertDialog {...defaultProps} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Are you sure you want to remove this item\? This action cannot be undone\./
      )
    ).toBeInTheDocument();
  });

  it('calls removeAction when Remove button is clicked', () => {
    render(<AlertDialog {...defaultProps} />);
    const removeButton = screen.getByRole('button', { name: 'Remove' });
    fireEvent.click(removeButton);
    expect(defaultProps.removeAction).toHaveBeenCalled();
  });

  it('calls closeDialog when Cancel button is clicked', () => {
    render(<AlertDialog {...defaultProps} />);
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(cancelButton);
    expect(defaultProps.closeDialog).toHaveBeenCalled();
  });

  it('disables buttons and shows loader when isLoading is true', () => {
    render(<AlertDialog {...defaultProps} isLoading={true} />);
    const removeButton = screen.getByRole('button', { name: '' }); // Loader replaces text
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    expect(removeButton).toBeDisabled();
    expect(cancelButton).toBeDisabled();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('does not render dialog when showDialog is false', () => {
    render(<AlertDialog {...defaultProps} showDialog={false} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
