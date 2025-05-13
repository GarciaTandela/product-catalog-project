import { render, screen, fireEvent } from '@testing-library/react';
import InfoSnackbar from './InfoView';

describe('InfoSnackbar', () => {
  const baseProps = {
    data: {
      show: true,
      type: 'info',
      message: 'Test message'
    },
    close: vi.fn()
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the Snackbar and Alert with correct message and severity', () => {
    render(<InfoSnackbar {...baseProps} />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveClass('MuiAlert-filledInfo');
  });

  it('Snackbar is open when data.show is true', () => {
    render(<InfoSnackbar {...baseProps} />);
    expect(screen.getByText('Test message')).toBeVisible();
  });

  it('Snackbar is not open when data.show is false', () => {
    render(
      <InfoSnackbar {...baseProps} data={{ ...baseProps.data, show: false }} />
    );
    expect(screen.queryByText('Test message')).toBeNull();
  });

  it('renders Alert with correct severity', () => {
    render(
      <InfoSnackbar
        {...baseProps}
        data={{ ...baseProps.data, type: 'error', message: 'Error message' }}
      />
    );
    expect(screen.getByText('Error message')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveClass('MuiAlert-filledError');
  });
});
