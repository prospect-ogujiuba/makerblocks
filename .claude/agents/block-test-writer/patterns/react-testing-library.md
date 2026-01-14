# React Testing Library Patterns

RTL render, screen, and event patterns.

## Rendering

```jsx
import { render, screen } from '@testing-library/react';

const { container, rerender, unmount } = render(<Component />);
```

## Queries

```jsx
// Preferred (accessibility)
screen.getByRole('button', { name: /submit/i })
screen.getByLabelText('Email')
screen.getByText('Welcome')
screen.getByPlaceholderText('Search...')

// Fallback
screen.getByTestId('custom-element')

// Query variants
screen.getBy...     // throws if not found
screen.queryBy...   // returns null if not found
screen.findBy...    // async, returns promise
```

## User Events

```jsx
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

await user.click(screen.getByRole('button'));
await user.type(screen.getByRole('textbox'), 'hello');
await user.selectOptions(screen.getByRole('combobox'), 'option1');
await user.hover(element);
await user.keyboard('{Enter}');
```

## Assertions

```jsx
expect(element).toBeInTheDocument();
expect(element).toHaveClass('active');
expect(element).toHaveTextContent('Hello');
expect(element).toBeVisible();
expect(element).toBeDisabled();
```
