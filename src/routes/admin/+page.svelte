<script lang="ts">
  import { load_getAdminData } from '$houdini';
  import Header from '../../components/Layout/PageHeader.svelte';
  import type { PageData } from './$houdini';
  import EventList from './EventList/EventList.svelte';
  import EventTypeList from './EventTypeList/EventTypeList.svelte';
  import SectionContainer from '../../components/Layout/SectionContainer.svelte';

  export let data: PageData;

  $: ({ getAdminData } = data);

  const handleFocus = async () => {
    ({ getAdminData } = await load_getAdminData({
      policy: 'NetworkOnly',
    }));
  };
</script>

<svelte:window on:focus={handleFocus} />
<Header title="admin stuff" />
<SectionContainer>
  <EventTypeList eventTypes={$getAdminData?.data?.getEventTypes ?? []} />
  <EventList
    events={$getAdminData?.data?.getEvents ?? []}
    eventTypes={$getAdminData?.data?.getEventTypes ?? []}
  />
</SectionContainer>
