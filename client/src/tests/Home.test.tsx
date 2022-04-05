import { Home } from '~/pages/Home';
import { render, screen } from './utils';

describe('Home page', () => {
  it('displays email of active user', async () => {
    render(<Home />);

    const text = await screen.findByText('krzysztof@jarzyna.com');

    expect(text).toBeVisible();
  });
});
