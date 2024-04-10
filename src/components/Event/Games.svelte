<script lang="ts">
  import type { getCurrentEvent$result } from '$houdini';
  import dayjs from 'dayjs';
  import Section from '../Layout/Section.svelte';
  import EventStat from './EventStats/EventStat.svelte';

  export let games: getCurrentEvent$result['getGames'];
  export let completedGamesCount: number;

  let headerRef: HTMLElement;
  let contentRef: HTMLElement;

  let scrollbarWidth = 15;
  let headerHeight: number = 24;

  $: if (headerRef && contentRef) {
    scrollbarWidth = headerRef.clientWidth - contentRef.clientWidth;
    headerHeight = headerRef.clientHeight;
  }
</script>

<Section title="games">
  <div
    slot="content"
    class="h-[500px] w-full border border-t-2 p-0 text-base font-normal text-darkGray"
    style:paddingRight={`${scrollbarWidth}px`}
  >
    <div
      class="flex flex-row bg-zinc-100"
      bind:this={headerRef}
    >
      <div class="w-6/12 px-5 md:w-4/12">Title</div>
      <div class="hidden px-5 md:block md:w-3/12">Runner</div>
      <div class="w-5/12 px-5 sm:w-5/12 md:w-3/12">Starting Time</div>
      <div class="-ml-12 hidden w-1/12 px-5 md:block" />
      <div class="w-3/12 px-5 text-right sm:w-2/12 sm:text-left">Duration</div>
    </div>
    <div
      class="flex w-full flex-col overflow-x-hidden overflow-y-scroll"
      style:height={`${500 - headerHeight}px`}
      bind:this={contentRef}
    >
      {#each games as { duration, endDate, name, runners, startDate }}
        <div class="flex flex-row border-y py-1.5 font-light">
          <div class="w-6/12 px-5 md:w-4/12">{name}</div>
          <div class="hidden px-5 md:block md:w-3/12">{runners}</div>
          <div class="w-5/12 px-5 sm:w-5/12 md:w-3/12">
            {dayjs(startDate).format('MMM DD, h:mma')}
          </div>
          <div class="-ml-12 hidden w-1/12 px-5 md:block">
            {dayjs(new Date()).isAfter(dayjs(endDate)) === true ? '✓' : '🎮'}
          </div>
          <div class="w-3/12 px-5 text-right sm:w-2/12 sm:text-left">{duration}</div>
        </div>
      {/each}
    </div>
  </div>
  <div
    slot="footer"
    class="border-y-2 border-mediumGray bg-zinc-100 p-1.5 text-base"
  >
    <div class="w-full lg:w-1/2 xl:w-1/3">
      <EventStat
        emoji="🎮"
        value={completedGamesCount}
        title="Games Completed:"
      />
    </div>
  </div>
</Section>
