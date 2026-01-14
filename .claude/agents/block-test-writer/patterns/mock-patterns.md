# Mock Patterns

Jest mocks for WordPress dependencies.

## Fetch Mock

```jsx
beforeEach(() => {
    global.fetch = jest.fn();
});

afterEach(() => {
    jest.resetAllMocks();
});

// Success
global.fetch.mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve({ data: mockData }),
});

// Failure
global.fetch.mockRejectedValueOnce(new Error('Network error'));
```

## WordPress Block Editor

```jsx
jest.mock('@wordpress/block-editor', () => ({
    useBlockProps: () => ({ className: 'wp-block' }),
    InspectorControls: ({ children }) => <div data-testid="inspector">{children}</div>,
    RichText: ({ value, onChange, placeholder }) => (
        <input
            data-testid="rich-text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    ),
}));
```

## WordPress Components

```jsx
jest.mock('@wordpress/components', () => ({
    PanelBody: ({ children, title }) => <div>{title}{children}</div>,
    ToggleControl: ({ label, checked, onChange }) => (
        <label>
            {label}
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
        </label>
    ),
    TextControl: ({ label, value, onChange }) => (
        <label>
            {label}
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
        </label>
    ),
}));
```

## WordPress Data

```jsx
jest.mock('@wordpress/data', () => ({
    useSelect: jest.fn(),
    useDispatch: jest.fn(() => ({})),
}));
```
