# Editor Preview Patterns

Patterns for editor WYSIWYG preview.

## Preview Badge (Dynamic Content)

```jsx
<div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
    <p className="text-sm font-semibold text-blue-900">
        {__("Preview - Dynamic Content", "makerblocks")}
    </p>
    <p className="text-xs text-blue-700">
        {__("Actual data loaded from database on frontend", "makerblocks")}
    </p>
</div>
```

## Editor-Only Preview Container

```jsx
<div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
    <div className="text-center mb-4">
        <p className="text-sm text-gray-600">
            {__("Block Name - Editor Preview", "makerblocks")}
        </p>
        <p className="text-xs text-gray-500 mt-1">
            {__("Configure settings in sidebar", "makerblocks")}
        </p>
    </div>
    {/* Preview content */}
</div>
```

## Loading State

```jsx
{isLoading ? (
    <div className="flex items-center gap-2">
        <Spinner />
        <span>{__("Loading...", "makerblocks")}</span>
    </div>
) : (
    <Content />
)}
```

## Disabled Form Elements

```jsx
<input
    type="text"
    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
    placeholder={__("Example input", "makerblocks")}
    disabled
/>
```

## Skeleton Preview

```jsx
<div className="animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
</div>
```
