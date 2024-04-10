import { graphql } from '$houdini';

const migrateEventData = graphql(`
    mutation migrateEventData($input: MigrateEventDataInput!) {
        migrateEventData(input: $input) {
            timestamp
            donations
            donations_per_minute
            donors
            tweets
            tweets_per_minute
            twitch_chats
            twitch_chats_per_minute
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


export { createEvent, migrateEventData };
