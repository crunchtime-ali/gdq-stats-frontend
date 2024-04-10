<script lang="ts">
  import Button from '../../../components/Shared/Button.svelte';

  export let buttonText: string;
  export let handler: () => void;
  export let isLoading = false;
</script>

<div class="flex flex-col justify-between gap-y-2">
  <div class="flex justify-between">
    <slot name="content" />
  </div>
  <Button
    {isLoading}
    handleClick={handler}>{buttonText}
  </Button
  >
</div>
