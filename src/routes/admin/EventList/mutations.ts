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

const createEvent = graphql(`
  mutation createEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      id
      eventType {
        name
        id
      }
      donations
      donors
      games_completed
      tweets
      twitch_chats
      viewers
      year
      ...All_Events_insert @prepend
    }
  }
`);

export { migrateEventData, createEvent };
