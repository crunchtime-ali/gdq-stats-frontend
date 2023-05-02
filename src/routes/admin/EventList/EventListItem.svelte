<script lang="ts">
  import type { IterableElement } from 'type-fest';
  import type { getAdminData$result } from '../../../../$houdini';
  import Section from '../../../components/Layout/Section.svelte';
  import DataSection from './DataSection.svelte';
  import { migrateEventData } from './mutations';

  export let event: IterableElement<getAdminData$result['getEvents']>;

  let isEventDataMigrationLoading = false;
  let isGametDataMigrationLoading = false;
  let isDonationDataMigrationLoading = false;

  const handleEventMigrationClick = async () => {
    isEventDataMigrationLoading = true;
    await migrateEventData.mutate({
      input: { id: event.id }
    });
    isEventDataMigrationLoading = false;
  };
</script>

<div class="w-full justify-between gap-x-4 first:-mt-4">
  <Section title={`${event.eventType.name} ${event.year}`}>
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
          <p>Maximum Viewers: {event.max_viewers_count}</p>
          <p>Total Donations: {event.donation_amount}</p>
          <p>Number of Donations: {event.donation_count}</p>
          <p>Completed Games: {event.completed_games_count}</p>
          <p>Twitch Chats: {event.twitch_chats_count}</p>
          <p>Twitch Emotes: {0}</p>
          <p>Tweets Tweeted: {event.tweets_count}</p>
        </div>
      </DataSection>
      <DataSection
        handler={() => {
          alert('migrate game');
        }}
        dataType="Game"
        isLoading={isGametDataMigrationLoading}
      />
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
