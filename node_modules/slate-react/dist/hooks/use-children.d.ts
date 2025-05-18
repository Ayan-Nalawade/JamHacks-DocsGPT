import React from 'react';
import { Ancestor, Element, Range, DecoratedRange } from 'slate';
import { RenderElementProps, RenderLeafProps, RenderPlaceholderProps, RenderTextProps } from '../components/editable';
/**
 * Children.
 */
declare const useChildren: (props: {
    decorations: DecoratedRange[];
    node: Ancestor;
    renderElement?: ((props: RenderElementProps) => JSX.Element) | undefined;
    renderPlaceholder: (props: RenderPlaceholderProps) => JSX.Element;
    renderText?: ((props: RenderTextProps) => JSX.Element) | undefined;
    renderLeaf?: ((props: RenderLeafProps) => JSX.Element) | undefined;
    selection: Range | null;
}) => React.JSX.Element[];
export default useChildren;
//# sourceMappingURL=use-children.d.ts.map