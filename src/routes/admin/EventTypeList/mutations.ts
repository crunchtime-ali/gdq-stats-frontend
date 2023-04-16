import { graphql } from '../../../../$houdini';

const createEventType = graphql(`
  mutation createEventType($input: CreateEventTypeInput!) {
    createEventType(input: $input) {
      id
      name
      description
      ...All_Event_Types_insert
    }
  }
`);

const deleteEventType = graphql(`
  mutation deleteEventType($input: DeleteEventTypeInput!) {
    deleteEventType(input: $input) {
      id @EventType_delete
    }
  }
`);

const updateEventType = graphql(`
  mutation updateEventType($input: UpdateEventTypeInput!) {
    updateEventType(input: $input) {
      id
      name
      description
    }
  }
`);

export { createEventType, deleteEventType, updateEventType };
