import { graphql } from '$houdini';

const activateEvent = graphql(`
    mutation activateEvent($input: ActivateEventInput!) {
        activateEvent(input: $input) {
            id
            activeEvent
        }
    }
`);

const migrateEventData = graphql(`
    mutation migrateEventData($input: MigrateEventDataInput!) {
        migrateEventData(input: $input) {
            timestamp
            donations
            donationsPerMinute
            donors
            tweets
            tweetsPerMinute
            twitchChats
            twitchChatsPerMinute
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
            completedGames
            tweets
            twitchChats
            viewers
            year
            ...All_Events_insert @prepend
        }
    }
`);

const migrateGames = graphql(`
    mutation migrateGames($input: MigrateGamesInput!) {
        migrateGames(input: $input) {
            startDate
            endDate
        }
    }
`);

const aggregateEventStatistics = graphql(`
    mutation aggregateEventStatistics($input: AggregateEventStatisticsInput!) {
        aggregateEventStatistics(input: $input) {
            id
            donations
            donors
            completedGames
            totalGames
            tweets
            twitchChats
            viewers
            eventDataCount
        }
    }
`);

export { activateEvent, aggregateEventStatistics, createEvent, migrateEventData, migrateGames };
