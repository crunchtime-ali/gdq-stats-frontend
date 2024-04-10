<script lang="ts">
  import Button from '../../../components/Shared/Button.svelte';
  import { createEventType, deleteEventType, updateEventType } from './mutations';

  export let id: string = '';
  export let description: string = '';
  export let name: string = '';

  let isLoading = false;

  const handleUpdateEventType = async () => {
    isLoading = true;

    await updateEventType.mutate({
      input: {
        id,
        description,
        name,
      },
    });
    isLoading = false;
  };

  const handleCreateEventTypeClick = async () => {
    isLoading = true;
    const res = await createEventType.mutate({
      input: {
        description,
        name,
      },
    });
    isLoading = false;
    if (res.data) {
      description = '';
      name = '';
    }
  };

  const handleDeleteEventType = () => {
    isLoading = true;
    deleteEventType.mutate({
      input: { id },
    });
    isLoading = false;
  };
</script>

<div class="my-5 flex justify-between text-base leading-none">
  <div class="flex w-4/6 justify-between gap-x-4">
    <input
      class="w-3/6 rounded border-2 border-mediumGray p-1.5"
      bind:value={name}
    />
    <input
      class="w-3/6 rounded border-2 border-mediumGray p-1.5"
      bind:value={description}
    />
  </div>
  <div class="flex justify-end gap-x-4">
    {#if id}
      <Button
        {isLoading}
        className="w-32"
        handleClick={handleUpdateEventType}>update</Button
      >
      <Button
        {isLoading}
        className="w-32"
        handleClick={handleDeleteEventType}>delete</Button
      >
    {:else}
      <Button
        {isLoading}
        className="w-32"
        handleClick={handleCreateEventTypeClick}>create</Button
      >
    {/if}
  </div>
</div>
