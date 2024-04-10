<script lang="ts">
  import { type getAdminData$result, load_getAdminData } from '$houdini';
  import type { IterableElement } from 'type-fest';
  import dayjs from 'dayjs';
  import Section from '../../../components/Layout/Section.svelte';
  import DataSection from './DataSection.svelte';
  import { activateEvent, aggregateEventStatistics, migrateEventData, migrateGames } from './mutations';

  export let event: IterableElement<getAdminData$result['getEvents']>;

  let isEventDataMigrationLoading = false;
  let isGametDataMigrationLoading = false;
  let isAggregationLoading = false;

  let eventDataCount = 0;

  const handleActivateEventClick = async () => {
    await activateEvent.mutate({
      input: {
        id: event.id,
      },
    });
    await load_getAdminData({
      policy: 'NetworkOnly',
    });
  };

  const handleEventDataMigrationClick = async () => {
    isEventDataMigrationLoading = true;
    const migratedEventData = await migrateEventData.mutate({
      input: { eventId: event.id },
    });
    isEventDataMigrationLoading = false;
    eventDataCount = migratedEventData.data?.migrateEventData.length || 0;

    event = {
      ...event,
      eventDataCount,
    };
  };

  const handleGameMigrationClick = async () => {
    isGametDataMigrationLoading = true;
    const migratedGames = await migrateGames.mutate({
      input: {
        scheduleId: event.scheduleId,
      },
    });
    isGametDataMigrationLoading = false;
    const gamesCount = migratedGames.data?.migrateGames.length || 0;
    let completedGames = 0;
    const now = dayjs();
    migratedGames.data?.migrateGames?.forEach((game) => {
      const endDate = dayjs(game.endDate);
      if (now.isAfter(endDate)) {
        completedGames += 1;
      }
    });

    event = {
      ...event,
      totalGames: gamesCount,
      completedGames,
    };
  };

  const handleAggregateEventStatisticsClick = async () => {
    isAggregationLoading = true;
    const aggregatedEvent = await aggregateEventStatistics.mutate({
      input: {
        id: event.id,
      },
    });

    if (aggregatedEvent.data) {
      event = {
        ...event,
        ...aggregatedEvent.data.aggregateEventStatistics,
      };
    }
    isAggregationLoading = false;
  };
</script>

<div class="w-full justify-between gap-x-4 first:-mt-4">
  <Section
    title={`${event.eventType.name} ${event.year}`}
    dropdownEnabled
  >
    <div slot="title">
      <button on:click|stopPropagation={handleActivateEventClick}>
        {#if event.activeEvent}
      <span
        class="ml-2 inline-flex items-center rounded-md bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700 hover:bg-green-200">active</span>
        {:else }
          <span
            class="ml-2 inline-flex items-center rounded-md bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700 hover:bg-blue-200">activate</span>
        {/if}
      </button>
    </div>
    <div
      slot="content"
      class="grid grid-cols-3 gap-x-20 p-5"
    >
      <DataSection
        handler={handleEventDataMigrationClick}
        buttonText="Migrate Event Data"
        isLoading={isEventDataMigrationLoading}
      >
        <div slot="content">
          <h3 class="mb-3 text-lg underline">Event Datasets</h3>
          <p>Total Event Datasets: {event.eventDataCount}</p>
        </div>
      </DataSection>
      <DataSection
        handler={handleGameMigrationClick}
        buttonText="Migrate Game Data"
        isLoading={isGametDataMigrationLoading}
      >
        <div slot="content">
          <h3 class="mb-3 text-lg underline">Games Data</h3>
          <p>Total Games: {event.totalGames}</p>
          <p>Completed Games: {event.completedGames}</p>
        </div>
      </DataSection>
      <DataSection
        handler={handleAggregateEventStatisticsClick}
        buttonText="Aggregate Event Statistics"
        isLoading={isAggregationLoading}
      >
        <div slot="content">
          <h3 class="mb-3 text-lg underline">Event Stats</h3>
          <p>Maximum Viewers: {event.viewers}</p>
          <p>Total Donations: {event.donations}</p>
          <p>Number of Donations: {event.donors}</p>
          <p>Twitch Chats: {event.twitchChats}</p>
          <p>Twitch Emotes: {0}</p>
          <p>Tweets Tweeted: {event.tweets}</p>
        </div>
      </DataSection>
    </div>
  </Section>
</div>
