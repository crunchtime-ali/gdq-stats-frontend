<script lang="ts">
  export let emoji: string;
  export let prefix: string = '';
  export let title: string;
  export let value: number;
</script>

<div class="flex justify-between px-3.5">
  <span class="pr-2.5">{title}</span>
  <div class="flex justify-end">
    <span>{prefix} {new Intl.NumberFormat('en-us').format(value)}</span>
    <span class="pl-1.5 text-xl">{emoji}</span>
  </div>
</div>
