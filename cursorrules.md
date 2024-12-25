# Cursor Rules For Svelte 5

## Introduction

I'm using svelte 5 instead of svelte 4 here is an overview of the changes.

## Runes

### Overview

Svelte 5 introduces runes, a set of advanced primitives for controlling reactivity. The runes replace certain non-runes features and provide more explicit control over state and effects.

### $state

- **Purpose:** Declare reactive state.
- **Usage:**

```javascript
<script>let count = $state(0);</script>
```

- **Replaces:** Top-level `let` declarations in non-runes mode.
- **Class Fields:**

```javascript
class Todo {
    done = $state(false);
    text = $state();
    constructor(text) {
        this.text = text;
    }
}
```

- **Deep Reactivity:** Only plain objects and arrays become deeply reactive.

### $state.raw

- **Purpose:** Declare state that cannot be mutated, only reassigned.
- **Usage:**

```javascript
<script>let numbers = $state.raw([1, 2, 3]);</script>
```

- **Performance:** Improves with large arrays and objects.

### $state.snapshot

- **Purpose:** Take a static snapshot of $state.
- **Usage:**

```javascript
<script>
    let counter = $state({ count: 0 });

    function onClick() {
        console.log($state.snapshot(counter));
    }
</script>
```

### $derived

- **Purpose:** Declare derived state.
- **Usage:**

```javascript
<script>let count = $state(0); let doubled = $derived(count * 2);</script>
```

- **Replaces:** Reactive variables computed using `$:` in non-runes mode.

### $derived.by

- **Purpose:** Create complex derivations with a function.
- **Usage:**

```javascript
<script>
    let numbers = $state([1, 2, 3]); 
    let total = $derived.by(() => numbers.reduce((a, b) => a + b, 0));
</script>
```

### $effect

- **Purpose:** Run side-effects when values change.
- **Usage:**

```javascript
<script>
    let size = $state(50);
    let color = $state('#ff3e00');

    $effect(() => {
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = color;
        context.fillRect(0, 0, size, size);
    });
</script>
```

- **Replacements:** $effect replaces a substantial part of `$: {}` blocks triggering side-effects.

### $effect.pre

- **Purpose:** Run code before the DOM updates.
- **Usage:**

```javascript
<script>
    $effect.pre(() => {
        // logic here
    });
</script>
```

- **Replaces:** beforeUpdate.

### $effect.tracking

- **Purpose:** Check if code is running inside a tracking context.
- **Usage:**

```javascript
<script>
    console.log('tracking:', $effect.tracking());
</script>
```

### $props

- **Purpose:** Declare component props.
- **Usage:**

```javascript
<script>
    let { prop1, prop2 } = $props();
</script>
```

- **Replaces:** export let syntax for declaring props.

### $bindable

- **Purpose:** Declare bindable props.
- **Usage:**

```javascript
<script>
    let { bindableProp = $bindable('fallback') } = $props();
</script>
```

### $inspect

- **Purpose:** Equivalent to `console.log` but re-runs when its argument changes.
- **Usage:**

```javascript
<script>
    let count = $state(0);
    $inspect(count);
</script>
```

### $host

- **Purpose:** Retrieve the this reference of the custom element.
- **Usage:**

```javascript
<script>
    function greet(greeting) {
        $host().dispatchEvent(new CustomEvent('greeting', { detail: greeting }));
    }
</script>
```

- **Note:** Only available inside custom element components on the client-side.

## Snippets

### Explanation

Snippets, along with render tags, help create reusable chunks of markup inside your components, reducing duplication and enhancing maintainability.

### Usage

- **Definition:** Use the `#snippet` syntax to define reusable markup sections.
- **Basic Example:**

```javascript
{#snippet figure(image)}
    <figure>
        <img src={image.src} alt={image.caption} width={image.width} height={image.height} />
        <figcaption>{image.caption}</figcaption>
    </figure>
{/snippet}
```

- **Invocation:** Render predefined snippets with `@render`:

```javascript

{@render figure(image)}
```

### Scope

- **Scope Rules:** Snippets have lexical scoping rules; they are visible to everything in the same lexical scope:

```javascript
<div>
    {#snippet x()}
        {#snippet y()}...{/snippet}

        <!-- valid usage -->
        {@render y()}
    {/snippet}

    <!-- invalid usage -->
    {@render y()}
</div>

<!-- invalid usage -->
{@render x()}
```

### Component Integration

- **Direct Passing as Props:**

```javascript
<script>
    import Table from './Table.svelte';
    const fruits = [{ name: 'apples', qty: 5, price: 2 }, ...];
</script>

{#snippet header()}
    <th>fruit</th>
    <th>qty</th>
    <th>price</th>
    <th>total</th>
{/snippet}

{#snippet row(fruit)}
    <td>{fruit.name}</td>
    <td>{fruit.qty}</td>
    <td>{fruit.price}</td>
    <td>{fruit.qty * fruit.price}</td>
{/snippet}

<Table data={fruits} {header} {row} />
```

## Event Handlers

### Dispatching Events

In Svelte 5, event handlers are treated as properties, integrating them more closely with component properties.

### Basic Usage

- **Property-Based Handlers:**

```javascript
<script>
    let count = $state(0);
</script>

<button onclick={() => count++}>
    clicks: {count}
</button>
```

- **Shorthand Syntax:**

```javascript
<script>
    let count = $state(0);
    function handleClick() {
        count++;
    }
</script>

<button {handleClick}>
    clicks: {count}
</button>
```

### Component Events

- **Using Callback Props:**

```javascript
<script>
    import Pump from './Pump.svelte';
    let size = $state(15);
    let burst = $state(false);

    function reset() {
        size = 15;
        burst = false;
    }
</script>

<Pump
    inflate={(power) => { 
        size += power; 
        if (size > 75) burst = true; 
    }}
    deflate={(power) => { 
        if (size > 0) size -= power; 
    }}
/>
```

### Event Modifiers

- **Wrapper Functions:**

```javascript
<script>
    function once(fn) {
        return function(event) {
            if (fn) fn.call(this, event);
            fn = null;
        }
    }

    function preventDefault(fn) {
        return function(event) {
            event.preventDefault();
            fn.call(this, event);
        }
    }
</script>

<button onclick={once(preventDefault(handler))}>...</button>
```

## Migration Examples

### Counter Example

```javascript
// Svelte 5
<script>
    let count = $state(0);
    let double = $derived(count * 2);
    $effect(() => {
        if (count > 10) alert('Too high!');
    });
</script>

<button onclick={() => count++}> {count} / {double}</button>
```

### Tracking Dependencies

```javascript
// Svelte 5
<script>
    let a = $state(0);
    let b = $state(0);
    let sum = $derived(add());

    function add() {
        return a + b;
    }
</script>

<button onclick={() => a++}>a++</button>
<button onclick={() => b++}>b++</button>
<p>{a} + {b} = {sum}</p>
```

## SvelteKit 2 Changes

### Error Handling

```javascript
// SvelteKit 2
import { error } from '@sveltejs/kit';

function load() {
    error(500, 'something went wrong');
}
```

### Cookie Management

```javascript
// SvelteKit 2
export function load({ cookies }) {
    cookies.set(name, value, { path: '/' });
    return { response };
}
```

### Promise Handling

```javascript
// SvelteKit 2
export async function load({ fetch }) {
    const [a, b] = await Promise.all([
        fetch(...).then(r => r.json()),
        fetch(...).then(r => r.json())
    ]);
    return { a, b };
}
```

### Navigation

- External URLs now require `window.location.href = url` instead of `goto(...)`
- Paths are relative by default
- `resolveRoute` replaces `resolvePath`

### Configuration

- Server fetches are no longer trackable
- Dynamic environment variables cannot be used during prerendering
- Forms with file inputs must use `enctype="multipart/form-data"`
- `use:enhance` callbacks now use `formElement` and `formData` instead of `form` and `data`
