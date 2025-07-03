# TypeScript Usage for react-beautiful-dnd-react-19

This package provides full TypeScript support and is compatible with React 19+.

## Installation

```bash
npm install react-beautiful-dnd-react-19
# or
yarn add react-beautiful-dnd-react-19
```

## TypeScript Setup

No additional type installation needed! This package includes its own TypeScript declarations that are compatible with the original `@types/react-beautiful-dnd` package.

### For existing users migrating from react-beautiful-dnd

Simply replace your import:

```typescript
// Before
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// After - same API, React 19 compatible!
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd-react-19';
```

### Type Definitions

All the same types are available:

```typescript
import { 
  DragDropContext, 
  Droppable, 
  Draggable,
  DropResult,
  DragStart,
  DragUpdate,
  DraggableProvided,
  DroppableProvided,
  DraggableStateSnapshot,
  DroppableStateSnapshot
} from 'react-beautiful-dnd-react-19';
```

### Example Usage

```typescript
import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd-react-19';

interface Item {
  id: string;
  content: string;
}

const MyComponent: React.FC = () => {
  const [items, setItems] = React.useState<Item[]>([
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
  ]);

  const handleOnDragEnd = (result: DropResult) => {
    // Handle drag end logic
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="items">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
```

## React 19 Compatibility

This package has been specifically updated to work with React 19+ while maintaining the exact same API as the original `react-beautiful-dnd`.

## Migration from @types/react-beautiful-dnd

If you were previously using `@types/react-beautiful-dnd`, you can:

1. Remove the separate types package: `npm uninstall @types/react-beautiful-dnd`
2. Install this package: `npm install react-beautiful-dnd-react-19`
3. Update your imports to use this package instead

The types are 100% compatible - no code changes needed!
