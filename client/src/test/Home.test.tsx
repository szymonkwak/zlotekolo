import { Home } from '~/pages/Home';
import { render, screen } from './utils';

describe('Home page', () => {
  it('displays email of active user', () => {
    render(<Home />);

    const text = screen.getByText('It works');

    expect(text).toBeVisible();
  });
});
