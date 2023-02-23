import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
    render(<App />);

    const picker = await screen.findByTestId('app.userPicker');
    // eslint-disable-next-line testing-library/no-node-access
    const input = picker.querySelector('input');

    fireEvent.input(input, {
        target: { value: 'kero', name: 'appUserPicker' },
    });

    // eslint-disable-next-line testing-library/no-node-access
    await waitFor(() => expect(document.body.querySelector('#appUserPicker-listbox > div')).not.toBeNull());

    // eslint-disable-next-line testing-library/no-node-access
    const option = document.body.querySelector('#appUserPicker-listbox > div')

    console.log(option);

    fireEvent.click(option);

    expect(option).toBeDefined();
});
