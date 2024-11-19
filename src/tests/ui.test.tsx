import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('updates the result when input value is submitted', () => {
    render(<App/>);
  
    const input = screen.getByPlaceholderText(/type here/i);
    const button = screen.getByTestId('addBtn');
    const result = screen.getByTestId('result');

    fireEvent.change(input, { target: { value: '1,2,3' } });
    fireEvent.click(button);
    expect(result).toHaveTextContent("6")

    fireEvent.change(input, { target: { value: '1\n2,3' } });
    fireEvent.click(button);
    expect(result).toHaveTextContent("6")

    fireEvent.change(input, { target: { value: '//;\n1;2' } });
    fireEvent.click(button);
    expect(result).toHaveTextContent("3")

    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.change(input, { target: { value: '1,-2,3,-4' } });
    fireEvent.click(button);
    expect(alertMock)
    alertMock.mockRestore();

  });