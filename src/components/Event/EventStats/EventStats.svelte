<script lang="ts">
  import type { getCurrentEvent$result } from '../../../../$houdini';
  import A from '../../Layout/A.svelte';
  import Section from '../../Layout/Section.svelte';
  import EventStat from './EventStat.svelte';

  export let event: getCurrentEvent$result['getCurrentEvent'];

  const {
    max_viewers_count,
    donation_amount,
    donation_count,
    completed_games_count,
    tweets_count,
    twitch_chats_count,
    scheduleId,
    year,
    eventType: { description, name }
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
      value={max_viewers_count}
    />
    <EventStat
      emoji={'💸'}
      prefix={'$'}
      title="Donations:"
      value={donation_amount}
    />
    <EventStat
      emoji={'🙌'}
      title="Number of Donations:"
      value={donation_count}
    />
    <EventStat
      emoji={'🎮'}
      title="Games completed:"
      value={completed_games_count}
    />
    <EventStat
      emoji={'💬'}
      title="Twitch Chats:"
      value={twitch_chats_count}
    />
    <EventStat
      emoji={'🐦'}
      title="Tweets Tweeted:"
      value={tweets_count}
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
