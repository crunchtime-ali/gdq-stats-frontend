<script lang="ts">
  export let title: string = '';
</script>

<div class="border-mediumbg-mediumGray border-2 mb-10">
  <div class="bg-mediumGray p-2.5 font-cubano text-lg leading-none">
    <h2>{title}</h2>
  </div>
  <slot name="content" />
  <slot name="footer" />
</div>
