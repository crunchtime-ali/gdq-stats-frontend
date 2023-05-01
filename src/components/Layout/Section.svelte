<script lang="ts">
  export let title: string = '';
</script>

<div class="border-mediumbg-mediumGray mt-9 border-2">
  <div class="bg-mediumGray p-2.5 font-cubano text-lg leading-none">
    <h2>{title}</h2>
  </div>
  <div class="m-5"><slot name="content" /></div>
</div>
