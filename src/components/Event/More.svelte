<script lang="ts">
  import { EventDataType, type EventDataType$options, type getEventInformation$result } from '$houdini';
  import A from '../Layout/A.svelte';
  import Section from '../Layout/Section.svelte';
  import Container from '../Shared/Container.svelte';
  import H3 from '../Shared/H3.svelte';
  import { page } from '$app/stores';
  import { CHART_PARAMETER } from '$lib/constants';

  export let event: getEventInformation$result['getEvent'];
  export let alternativeEvents: getEventInformation$result['getAlternativeEvents'];

  $: activeChart =
    ($page.url.searchParams.get(CHART_PARAMETER) as EventDataType$options) ?? EventDataType.VIEWERS;

  const buildLink = (year: number, name: string) =>
    `/previous-events/${year}/${name.toLocaleLowerCase()}?${CHART_PARAMETER}=${activeChart}`;
</script>

<Section title="more from gdqstats">
  <div slot="content">
    <Container>
      <div class="px-4 md:w-1/2">
        <H3 text={`additional stats for ${event.eventType.name} ${event.year}`} />
        <ul class="mb-2.5 list-disc pl-10">
          <li>
            <A
              href={`${buildLink(event.year, event.eventType.name)}/chat-stats`}
              className="text-[16px] ">Twitch Chat Stats</A
            >
          </li>
          <li>
            <A
              href={`${buildLink(event.year, event.eventType.name)}/donation-stats`}
              className="text-[16px] ">Donation Stats</A
            >
          </li>
          <li>
            <A
              href={`${buildLink(event.year, event.eventType.name)}/game-stats`}
              className="text-[16px] ">Game Stats</A
            >
          </li>
        </ul>
      </div>
      <div class="w-1/2 px-4">
        <H3 text="more events" />
        <ul class="mb-2.5 list-disc pl-10">
          {#key activeChart}
            {#each alternativeEvents as alternativeEvent}
              <li>
                <A
                  href={`${buildLink(alternativeEvent.year, alternativeEvent.eventType.name)}`}
                  className="text-[16px] "
                >{`${alternativeEvent.eventType.name} ${alternativeEvent.year}`}</A
                >
              </li>
            {/each}
          {/key}
        </ul>
      </div>
    </Container>
  </div>
</Section>
