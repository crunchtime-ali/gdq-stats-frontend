<script lang="ts">
  export let href: string;
  export let className: string = '';
</script>

<a
  class={`text-secondary hover:text-secondary-hover ${className}`}
  {href}><slot /></a
>
