<script lang="ts">
  import { load_getEventTypes } from '../../../$houdini';
  import Header from '../../components/Layout/PageHeader.svelte';
  import type { PageData } from './$houdini';
  import EventTypeList from './EventTypeList/EventTypeList.svelte';

  export let data: PageData;

  $: ({ getEventTypes } = data);

  const handleFocus = async () => {
    ({ getEventTypes } = await load_getEventTypes({
      policy: 'NetworkOnly'
    }));
  };
</script>

<svelte:window on:focus={handleFocus} />
<Header title="admin stuff" />
<EventTypeList eventTypes={$getEventTypes.data} />
