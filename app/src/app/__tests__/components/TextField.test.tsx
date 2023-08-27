import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomTextField from '../../components/TextField';

describe('CustomTextField', () => {
  const mockOnChange = jest.fn();

  const defaultProps = {
    helpTitle: 'Help Title',
    helpText: 'This is the help text.',
    description: 'Description text',
    icon: {
      left: 'fa fa-icon',
      right: 'fa fa-icon',
    },
    onChange: mockOnChange,
    // ... other props
  };

  beforeEach(() => {
    render(<CustomTextField {...defaultProps} />);
  });

  test('renders description and input field', () => {
    expect(screen.getByText('Description text')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('calls onChange when input value changes', () => {
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New Value' } });

    expect(mockOnChange).toHaveBeenCalledWith('New Value');
  });

  test('displays help text on clicking question mark', () => {
    const questionMark = screen.getByRole('button', { name: '' }); // You might need to add a proper accessibility label
    fireEvent.click(questionMark);

    const helpTitle = screen.getByText('Help Title');
    const helpText = screen.getByText('This is the help text.');

    expect(helpTitle).toBeInTheDocument();
    expect(helpText).toBeInTheDocument();
  });
});
