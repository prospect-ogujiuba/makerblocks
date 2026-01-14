# Standard Imports

Common imports for edit.js files.

## Core Imports

```jsx
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import {
    useBlockProps,
    InspectorControls,
    RichText,
    MediaUpload,
    MediaPlaceholder
} from "@wordpress/block-editor";
import {
    PanelBody,
    TextControl,
    TextareaControl,
    ToggleControl,
    SelectControl,
    RangeControl,
    Button,
    Spinner
} from "@wordpress/components";
```

## Conditional Imports

When using shared components:
```jsx
import IconPicker from '../../components/ui/IconPicker';
```

When using WP API:
```jsx
import apiFetch from "@wordpress/api-fetch";
```

When using color settings:
```jsx
import { PanelColorSettings } from "@wordpress/block-editor";
import { ColorPicker, ColorPalette } from "@wordpress/components";
```

## Import Organization

1. WordPress i18n
2. WordPress element (React)
3. WordPress block-editor
4. WordPress components
5. Shared/custom components
