import { graphql } from '$houdini';

const migrateEventData = graphql(`
  mutation migrateEventData($input: MigrateEventDataInput!) {
    migrateEventData(input: $input) {
      id
      eventType {
        name
      }
      year
      donations
      donors
      games_completed
      tweets
      twitch_chats
      viewers
    }
  }
`);

export { migrateEventData };
