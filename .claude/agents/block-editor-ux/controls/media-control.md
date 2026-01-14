# Media Controls

For image and file selection.

## MediaUpload (Replace existing)

```jsx
import { MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

<MediaUpload
    onSelect={(media) => setAttributes({
        backgroundImage: {
            id: media.id,
            url: media.url,
            alt: media.alt
        }
    })}
    allowedTypes={['image']}
    value={backgroundImage?.id}
    render={({ open }) => (
        <Button onClick={open}>
            {__("Replace Image", "makerblocks")}
        </Button>
    )}
/>
```

## MediaPlaceholder (No selection)

```jsx
import { MediaPlaceholder } from "@wordpress/block-editor";

<MediaPlaceholder
    onSelect={(media) => setAttributes({
        backgroundImage: {
            id: media.id,
            url: media.url,
            alt: media.alt
        }
    })}
    allowedTypes={['image']}
    labels={{ title: __("Background Image", "makerblocks") }}
/>
```

## Complete Pattern

```jsx
{backgroundImage?.url ? (
    <>
        <img src={backgroundImage.url} alt={backgroundImage.alt} />
        <MediaUpload
            onSelect={(media) => setAttributes({
                backgroundImage: { id: media.id, url: media.url, alt: media.alt }
            })}
            allowedTypes={['image']}
            value={backgroundImage.id}
            render={({ open }) => (
                <Button onClick={open}>
                    {__("Replace Image", "makerblocks")}
                </Button>
            )}
        />
    </>
) : (
    <MediaPlaceholder
        onSelect={(media) => setAttributes({
            backgroundImage: { id: media.id, url: media.url, alt: media.alt }
        })}
        allowedTypes={['image']}
    />
)}
```

## Media Object Shape

```javascript
{ id: number, url: string, alt: string }
```
