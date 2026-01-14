# Dynamic Content Patterns

Patterns for REST API data binding in editor.

## Content Mode Selection

```jsx
<SelectControl
    label={__("Content Source", "makerblocks")}
    value={attributes.contentMode}
    options={[
        { label: __("Custom Content", "makerblocks"), value: "custom" },
        { label: __("Bind to Category", "makerblocks"), value: "category" },
        { label: __("Bind to Service", "makerblocks"), value: "service" }
    ]}
    onChange={(value) => setAttributes({ contentMode: value })}
    help={__("Choose where content comes from", "makerblocks")}
/>
```

## API Fetching in Editor

```jsx
const [boundContent, setBoundContent] = useState(null);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    if (contentMode === 'custom') return;

    const fetchContent = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${window.location.origin}/tr-api/rest/resources/${id}/`
            );
            const result = await response.json();
            setBoundContent(result.data);
        } catch (error) {
            console.error('Failed to fetch:', error);
        }
        setIsLoading(false);
    };

    fetchContent();
}, [contentMode, id]);
```

## Async Options Loading

```jsx
{isLoadingOptions ? (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Spinner />
        <span>{__("Loading options...", "makerblocks")}</span>
    </div>
) : (
    <SelectControl
        options={[
            { label: __("— Select —", "makerblocks"), value: '' },
            ...items.map(item => ({
                label: item.name,
                value: item.id.toString()
            }))
        ]}
    />
)}
```

## Conditional Rendering

```jsx
{contentMode === "custom" ? (
    <RichText value={heading} onChange={(v) => setAttributes({ heading: v })} />
) : (
    <h2>{boundContent?.name || __("Loading...", "makerblocks")}</h2>
)}
```
