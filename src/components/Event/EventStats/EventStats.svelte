<script lang="ts">
  import type { getCurrentEvent$result } from '$houdini';
  import A from '../../Layout/A.svelte';
  import Section from '../../Layout/Section.svelte';
  import EventStat from './EventStat.svelte';

  export let event: getCurrentEvent$result['getCurrentEvent'];

  const {
    donations,
    donors,
    eventType: { description, name },
    games_completed,
    scheduleId,
    tweets,
    twitch_chats,
    viewers,
    year
  } = event;
</script>

<Section title="event stats">
  <div
    slot="content"
    class="grid grid-cols-1 bg-lightGray p-2.5 text-base text-darkGray lg:grid-cols-2 xl:grid-cols-3"
  >
    <EventStat
      emoji={'📺'}
      title="Viewers:"
      value={viewers}
    />
    <EventStat
      emoji={'💸'}
      prefix={'$'}
      title="Donations:"
      value={donations}
    />
    <EventStat
      emoji={'🙌'}
      title="Number of Donations:"
      value={donors}
    />
    <EventStat
      emoji={'🎮'}
      title="Games completed:"
      value={games_completed}
    />
    <EventStat
      emoji={'💬'}
      title="Twitch Chats:"
      value={twitch_chats}
    />
    <EventStat
      emoji={'🐦'}
      title="Tweets Tweeted:"
      value={tweets}
    />
  </div>
  <div
    slot="footer"
    class="grid grid-cols-1 bg-mediumGray text-center font-cubano text-base uppercase md:grid-cols-2 md:flex-row xl:grid-cols-4"
  >
    <A
      className="my-1.5"
      href="https://www.twitch.tv/gamesdonequick"
      target="_blank">livestream</A
    >
    <A
      className="my-1.5"
      href={`https://gdqvods.com/event/${description
        .toLocaleLowerCase()
        .replaceAll(' ', '')}-${year}`}
      target="_blank">vods</A
    >
    <A
      className="my-1.5"
      href={`https://gamesdonequick.com/tracker/donations/${name}${year}`}
      target="_blank">donation tracker</A
    >
    <A
      className="my-1.5"
      href={`https://gamesdonequick.com/schedule/${scheduleId}`}
      target="_blank">schedule</A
    >
  </div>
</Section>
