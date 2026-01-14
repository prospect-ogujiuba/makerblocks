# Attribute Tests

WordPress block attribute change tests.

## setAttributes Testing

```jsx
const mockSetAttributes = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});

it('calls setAttributes on toggle change', async () => {
    const user = userEvent.setup();

    render(
        <Edit
            attributes={{ showImage: true }}
            setAttributes={mockSetAttributes}
        />
    );

    await user.click(screen.getByLabelText(/show image/i));

    expect(mockSetAttributes).toHaveBeenCalledWith({ showImage: false });
});
```

## Multiple Attributes

```jsx
it('updates multiple attributes', async () => {
    const user = userEvent.setup();

    render(
        <Edit
            attributes={{ heading: '', showIcon: false }}
            setAttributes={mockSetAttributes}
        />
    );

    await user.type(screen.getByLabelText(/heading/i), 'New Title');

    expect(mockSetAttributes).toHaveBeenCalledWith(
        expect.objectContaining({ heading: expect.any(String) })
    );
});
```

## Select Changes

```jsx
it('updates serviceId on selection', async () => {
    const user = userEvent.setup();

    render(
        <Edit
            attributes={{ serviceId: 0 }}
            setAttributes={mockSetAttributes}
        />
    );

    await user.selectOptions(screen.getByRole('combobox'), '5');

    expect(mockSetAttributes).toHaveBeenCalledWith({ serviceId: 5 });
});
```
