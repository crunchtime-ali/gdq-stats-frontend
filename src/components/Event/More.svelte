<script lang="ts">
  import type { getCurrentEvent$result } from '$houdini';
  import A from '../Layout/A.svelte';
  import Section from '../Layout/Section.svelte';
  import H3 from '../Shared/H3.svelte';
  import Container from '../Shared/Container.svelte';

  export let event: getCurrentEvent$result['getCurrentEvent'];
  export let alternativeEvents: getCurrentEvent$result['getAlternativeEvents'];

  const buildLink = (year: number, name: string) =>
    `/previous-events/${year}/${name.toLocaleLowerCase()}`;
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
        <H3 text="other events" />
        <ul class="mb-2.5 list-disc pl-10">
          {#each alternativeEvents as alternativeEvent}
            <li>
              <A
                href={`${buildLink(alternativeEvent.year, alternativeEvent.eventType.name)}`}
                className="text-[16px] "
              >{`${alternativeEvent.eventType.name} ${alternativeEvent.year}`}</A
              >
            </li>
          {/each}
        </ul>
      </div>
    </Container>
  </div>
</Section>
