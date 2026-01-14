# Render Tests

Component rendering test patterns.

## Basic Rendering

```jsx
it('renders without crashing', () => {
    render(<Component {...defaultProps} />);
    expect(screen.getByRole('article')).toBeInTheDocument();
});
```

## Prop Application

```jsx
it('applies className prop', () => {
    render(<Component {...defaultProps} className="custom" />);
    expect(screen.getByRole('article')).toHaveClass('custom');
});

it('displays heading from prop', () => {
    render(<Component heading="Test Heading" />);
    expect(screen.getByRole('heading')).toHaveTextContent('Test Heading');
});
```

## Conditional Rendering

```jsx
it('shows image when showImage is true', () => {
    render(<Component showImage={true} imageUrl="test.jpg" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
});

it('hides image when showImage is false', () => {
    render(<Component showImage={false} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
});
```

## Empty/Null States

```jsx
it('shows empty state with no data', () => {
    render(<Component data={[]} />);
    expect(screen.getByText(/no items/i)).toBeInTheDocument();
});

it('handles null data gracefully', () => {
    render(<Component data={null} />);
    expect(screen.getByText(/no items/i)).toBeInTheDocument();
});
```
