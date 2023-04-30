import { graphql } from '../../../../$houdini';

const migrateEventData = graphql(`
  mutation migrateEventData($input: MigrateEventDataInput!) {
    migrateEventData(input: $input) {
      id
      eventType {
        name
      }
      year
      max_viewers_count
      donation_count
      donation_amount
      completed_games_count
      twitch_chats_count
      tweets_count
    }
  }
`);

export { migrateEventData };
