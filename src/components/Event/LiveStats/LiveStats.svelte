<script>
  import Section from '../../Layout/Section.svelte';
  import ChartSelection from './ChartSelection.svelte';
  import Pacman from './Pacman/Pacman.svelte';
</script>

<Section title="live stats">
  <div
    slot="content"
    class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6"
  >
    <ChartSelection />
    <div class="col-span-4 border-l-[1px] border-lightGray">
      <Pacman />
    </div>
  </div>
</Section>
