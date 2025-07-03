// TypeScript definitions for react-beautiful-dnd-react-19
// Project: https://github.com/Ocuco/react-beautiful-dnd-react-19
// Definitions by: varHarrie <https://github.com/varHarrie>
//                 Bradley Ayers <https://github.com/bradleyayers>
//                 Austin Turner <https://github.com/paustint>
//                 Mark Nelissen <https://github.com/marknelissen>
//                 Enrico Boccadifuoco <https://github.com/enricoboccadifuoco>
//                 Taeheon Kim <https://github.com/lonyele>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 Arun George <https://github.com/aruniverse>
//                 Nick Garlis <https://github.com/nickgarlis>
//                 Brian Powers <https://github.com/brianspowers>
//                 Declan Warn <https://github.com/declan-warn>
//                 Ocuco Team (React 19 support)
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.6

/// <reference types="react" />

import * as React from 'react';

/**
 * This package is a React 19 compatible fork of react-beautiful-dnd.
 * It maintains the same API and types as the original package.
 * 
 * For TypeScript users: These types are compatible with @types/react-beautiful-dnd@13.1.8
 * You can use this package as a drop-in replacement for react-beautiful-dnd in React 19+ projects.
 */

export type Id = string;
export type DraggableId = Id;
export type DroppableId = Id;
export type TypeId = Id;
export type ZIndex = React.CSSProperties['zIndex'];

export interface DraggableLocation {
    droppableId: DroppableId;
    index: number;
}

export type MovementMode = 'FLUID' | 'SNAP';

export interface DragStart {
    draggableId: DraggableId;
    type: TypeId;
    source: DraggableLocation;
    mode: MovementMode;
}

export interface DragUpdate extends DragStart {
    destination: DraggableLocation | null;
    combine: Combine | null;
}

export interface DropResult extends DragUpdate {
    reason: DropReason;
}

export interface Combine {
    draggableId: DraggableId;
    droppableId: DroppableId;
}

export type DropReason = 'DROP' | 'CANCEL';

export interface BeforeCapture {
    draggableId: DraggableId;
    mode: MovementMode;
}

export type ResponderProvided = {
    announce: Announce;
};

export type OnBeforeCaptureResponder = (before: BeforeCapture) => void;

export type OnBeforeDragStartResponder = (start: DragStart) => void;

export type OnDragStartResponder = (start: DragStart, provided: ResponderProvided) => void;

export type OnDragUpdateResponder = (update: DragUpdate, provided: ResponderProvided) => void;

export type OnDragEndResponder = (result: DropResult, provided: ResponderProvided) => void;

export interface Responders {
    onBeforeCapture?: OnBeforeCaptureResponder | undefined;
    onBeforeDragStart?: OnBeforeDragStartResponder | undefined;
    onDragStart?: OnDragStartResponder | undefined;
    onDragUpdate?: OnDragUpdateResponder | undefined;
    onDragEnd: OnDragEndResponder;
}

export type Announce = (message: string) => void;

export interface DragDropContextProps {
    onBeforeCapture?: OnBeforeCaptureResponder | undefined;
    onBeforeDragStart?: OnBeforeDragStartResponder | undefined;
    onDragStart?: OnDragStartResponder | undefined;
    onDragUpdate?: OnDragUpdateResponder | undefined;
    onDragEnd: OnDragEndResponder;
    children: React.ReactNode | null;
    dragHandleUsageInstructions?: string | undefined;
    enableDefaultSensors?: boolean | undefined;
    sensors?: Sensor[] | undefined;
    nonce?: string | undefined;
}

export declare class DragDropContext extends React.Component<DragDropContextProps> {}

export interface DraggableProvided {
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null;
    innerRef: (element?: HTMLElement | null) => void;
}

export interface DraggableProvidedDraggableProps {
    style?: React.CSSProperties | undefined;
    'data-rbd-draggable-context-id': string;
    'data-rbd-draggable-id': string;
    onTransitionEnd?: React.TransitionEventHandler<any> | undefined;
}

export interface DraggableProvidedDragHandleProps {
    'data-rbd-drag-handle-draggable-id': string;
    'data-rbd-drag-handle-context-id': string;
    'aria-describedby': string;
    role: string;
    tabIndex: number;
    draggable: boolean;
    onDragStart: React.DragEventHandler<any>;
}

export interface DraggableStateSnapshot {
    isDragging: boolean;
    isDropAnimating: boolean;
    dropAnimation: DropAnimation | null;
    draggingOver: DroppableId | null;
    combineWith: DraggableId | null;
    combineTargetFor: DraggableId | null;
    mode: MovementMode | null;
}

export interface DropAnimation {
    duration: number;
    curve: string;
    moveTo: Position;
    opacity: number | null;
    scale: number | null;
}

export interface Position {
    x: number;
    y: number;
}

export interface DraggableChildrenFn {
    (provided: DraggableProvided, snapshot: DraggableStateSnapshot, rubric: DraggableRubric): React.ReactElement<HTMLElement>;
}

export interface DraggableProps {
    draggableId: DraggableId;
    index: number;
    children: DraggableChildrenFn;
    isDragDisabled?: boolean | undefined;
    disableInteractiveElementBlocking?: boolean | undefined;
    shouldRespectForcePress?: boolean | undefined;
}

export interface DraggableRubric {
    draggableId: DraggableId;
    type: TypeId;
    source: DraggableLocation;
}

export declare class Draggable extends React.Component<DraggableProps> {}

export interface DroppableProvided {
    innerRef: (element: HTMLElement | null) => void;
    droppableProps: DroppableProvidedProps;
    placeholder?: React.ReactElement<HTMLElement> | null | undefined;
}

export interface DroppableProvidedProps {
    'data-rbd-droppable-context-id': string;
    'data-rbd-droppable-id': string;
}

export interface DroppableStateSnapshot {
    isDraggingOver: boolean;
    draggingOverWith: DraggableId | null;
    draggingFromThisWith: DraggableId | null;
    isUsingPlaceholder: boolean;
}

export interface DroppableChildrenFn {
    (provided: DroppableProvided, snapshot: DroppableStateSnapshot): React.ReactElement<HTMLElement>;
}

export type DroppableMode = 'standard' | 'virtual';

export interface DroppableProps {
    droppableId: DroppableId;
    type?: TypeId | undefined;
    mode?: DroppableMode | undefined;
    isDropDisabled?: boolean | undefined;
    isCombineEnabled?: boolean | undefined;
    direction?: Direction | undefined;
    ignoreContainerClipping?: boolean | undefined;
    renderClone?: DraggableChildrenFn | undefined;
    getContainerForClone?: (() => React.ReactElement<HTMLElement>) | undefined;
    children: DroppableChildrenFn;
}

export type Direction = 'vertical' | 'horizontal';

export declare class Droppable extends React.Component<DroppableProps> {}

export declare function resetServerContext(): void;

export interface Sensor {
    stop(): void;
}

// Additional React 19 compatibility exports
export default DragDropContext;
