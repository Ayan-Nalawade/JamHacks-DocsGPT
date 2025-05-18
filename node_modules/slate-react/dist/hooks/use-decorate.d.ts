/// <reference types="react" />
import { DecoratedRange, NodeEntry } from 'slate';
/**
 * A React context for sharing the `decorate` prop of the editable.
 */
export declare const DecorateContext: import("react").Context<(entry: NodeEntry) => DecoratedRange[]>;
/**
 * Get the current `decorate` prop of the editable.
 */
export declare const useDecorate: () => (entry: NodeEntry) => DecoratedRange[];
//# sourceMappingURL=use-decorate.d.ts.map