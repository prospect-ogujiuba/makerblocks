# Interaction Tests

User interaction test patterns.

## Click Events

```jsx
it('calls onSelect when item clicked', async () => {
    const handleSelect = jest.fn();
    const user = userEvent.setup();

    render(<Component onSelect={handleSelect} />);

    await user.click(screen.getByRole('button'));

    expect(handleSelect).toHaveBeenCalledWith(1);
});
```

## Form Inputs

```jsx
it('updates on text input', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(<Component onChange={handleChange} />);

    await user.type(screen.getByRole('textbox'), 'hello');

    expect(handleChange).toHaveBeenCalled();
});
```

## Search/Filter

```jsx
it('filters items on search', async () => {
    const user = userEvent.setup();

    render(<Component items={mockItems} showSearch={true} />);

    await user.type(screen.getByRole('searchbox'), 'Item 2');

    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
});
```

## Toggle Controls

```jsx
it('toggles checkbox state', async () => {
    const handleToggle = jest.fn();
    const user = userEvent.setup();

    render(<Component onToggle={handleToggle} checked={false} />);

    await user.click(screen.getByRole('checkbox'));

    expect(handleToggle).toHaveBeenCalledWith(true);
});
```
