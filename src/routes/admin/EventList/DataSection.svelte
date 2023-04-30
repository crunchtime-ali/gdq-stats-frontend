<script lang="ts">
  import Button from '../../../components/Shared/Button.svelte';

  export let dataType: 'Event' | 'Game' | 'Donation';
  export let handler: () => void;
  export let isLoading = false;
</script>

<div class="flex flex-col justify-between gap-y-2">
  <div class="flex justify-between">
    <slot name="content">
      <div>{dataType} Stats Count:</div>
    </slot>
  </div>
  <Button
    {isLoading}
    handleClick={handler}>Migrate {dataType} Stats</Button
  >
</div>
