import { graphql } from '$houdini';

const getEventInformation = graphql(`
    query getEventInformation($input: GetEventInformationInput) {
        getEvent(input: $input) {
            id
            eventType {
                id
                name
                description
            }
            year
            activeEvent
            startDate
            donations
            donors
            completedGames
            totalGames
            tweets
            twitchChats
            scheduleId
            viewers
            eventDataCount
        }
        getGames(input: $input) {
            id
            name
            runners
            startDate
            endDate
            duration
        }
        getAlternativeEvents(input: $input) {
            id
            year
            eventType {
                name
            }
        }
    }
`);

const getEventData = graphql(`
    query getEventData($input: GetEventDataInput!) {
        getEventData(input: $input) {
            eventDataType
            eventData {
                timestamp
                value
            }
        }
    }
`);

export { getEventInformation, getEventData };