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

const migrateGames = graphql(`
    mutation migrateGames($input: MigrateGamesInput!) {
        migrateGames(input: $input) {
            start_date
            end_date
        }
    }
`);

const aggregateEventStatistics = graphql(`
    mutation aggregateEventStatistics($input: AggregateEventStatisticsInput!) {
        aggregateEventStatistics(input: $input) {
            id
            donations
            donors
            games_completed
            tweets
            twitch_chats
            scheduleId
            viewers
        }
    }
`);

export { aggregateEventStatistics, createEvent, migrateEventData, migrateGames };
