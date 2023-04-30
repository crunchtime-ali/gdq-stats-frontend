<script lang="ts">
  export let title: string = '';
</script>

<div class="mt-9 border-2 border-darkGray">
  <div class="bg-darkGray p-2.5 font-cubano text-lg leading-none">
    <h2>{title}</h2>
  </div>
  <div class="m-5"><slot name="content" /></div>
</div>
