<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from 'svelte/elements';

  export let className: string = '';
  export let href: string;
  export let target: HTMLAttributeAnchorTarget = '_parent';

  const rel = target === '_blank' ? 'noopener noreferrer' : '';
</script>

<a
  class={`text-secondary hover:text-secondary-hover ${className}`}
  {href}
  {rel}>
  <slot />
</a
>
