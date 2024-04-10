<script lang="ts">
  import type { getAdminData$result } from '$houdini';
  import type { IterableElement } from 'type-fest';
  import dayjs from 'dayjs';
  import Section from '../../../components/Layout/Section.svelte';
  import DataSection from './DataSection.svelte';
  import { migrateEventData, migrateGames } from './mutations';

  export let event: IterableElement<getAdminData$result['getEvents']>;

  let isEventDataMigrationLoading = false;
  let isGametDataMigrationLoading = false;
  let isDonationDataMigrationLoading = false;

  let gamesCount = 0;
  let completedGamesCount = 0;

  const handleEventMigrationClick = async () => {
    isEventDataMigrationLoading = true;
    await migrateEventData.mutate({
      input: { event_id: event.id },
    });
    isEventDataMigrationLoading = false;
  };

  const handleGameMigrationClick = async () => {
    isGametDataMigrationLoading = true;
    const migratedGames = await migrateGames.mutate({
      input: {
        scheduleId: event.scheduleId,
      },
    });
    isGametDataMigrationLoading = false;
    gamesCount = migratedGames.data?.migrateGames.length || 0;
    let completedGames = 0;
    const now = dayjs();
    migratedGames.data?.migrateGames?.forEach((game) => {
      const endDate = dayjs(game.end_date);
      if (now.isAfter(endDate)) {
        completedGames += 1;
      }
    });

    completedGamesCount = completedGames;
  };
</script>

<div class="w-full justify-between gap-x-4 first:-mt-4">
  <Section
    title={`${event.eventType.name} ${event.year}`}
    dropdownEnabled
  >
    <div
      slot="content"
      class="grid grid-cols-3 gap-x-20 p-5"
    >
      <DataSection
        handler={handleEventMigrationClick}
        dataType="Event"
        isLoading={isEventDataMigrationLoading}
      >
        <div slot="content">
          <p>Maximum Viewers: {event.viewers}</p>
          <p>Total Donations: {event.donations}</p>
          <p>Number of Donations: {event.donors}</p>
          <p>Completed Games: {event.games_completed}</p>
          <p>Twitch Chats: {event.twitch_chats}</p>
          <p>Twitch Emotes: {0}</p>
          <p>Tweets Tweeted: {event.tweets}</p>
        </div>
      </DataSection>
      <DataSection
        handler={handleGameMigrationClick}
        dataType="Game"
        isLoading={isGametDataMigrationLoading}
      >
        <div slot="content">
          <h3 class="mb-3 text-lg underline">Games Stats</h3>
          <p>Total Games: {gamesCount}</p>
          <p>Completed Games: {completedGamesCount}</p>
        </div>
      </DataSection>
      <DataSection
        handler={() => {
          alert('migrate donation');
        }}
        dataType="Donation"
        isLoading={isDonationDataMigrationLoading}
      />
    </div>
  </Section>
</div>
