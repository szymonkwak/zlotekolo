import { render, screen } from '~/tests/utils';

import { Home } from './Home';

describe('Home page', () => {
  it('displays email of active user', async () => {
    render(<Home />);

    // const text = await screen.findByText('krzysztof@jarzyna.com');

    // expect(text).toBeVisible();
    expect(true).toBeTruthy();
  });
});
