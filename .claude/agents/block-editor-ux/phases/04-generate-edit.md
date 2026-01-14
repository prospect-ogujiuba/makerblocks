# Phase 4: Generate Edit

Generate the final edit.js file.

## File Structure

```jsx
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ... } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
    const { /* destructure */ } = attributes;
    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                {/* Panels from Phase 3 */}
            </InspectorControls>

            <section {...blockProps}>
                {/* Editor preview */}
            </section>
        </>
    );
}
```

## Output Location

```
src/blocks-dev/{block-name}/edit.js
```

## Verification Checklist

- [ ] All attributes destructured from props
- [ ] No attribute redefinition
- [ ] useBlockProps spread on wrapper
- [ ] All strings internationalized
- [ ] Help text on all controls
- [ ] Proper panel organization
- [ ] Editor preview matches frontend
- [ ] Loading states for async data
