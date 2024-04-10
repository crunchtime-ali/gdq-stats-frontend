<script>
  import Section from '../Layout/Section.svelte';
  import Container from '../Shared/Container.svelte';
  import H3 from '../Shared/H3.svelte';
  import A from '../Layout/A.svelte';
</script>

<Section title="info for nerds">
  <div
    slot="content"
    class="font-thin text-mediumDarkGray"
  >
    <Container>
      <div class="px-4 md:w-1/2">
        <H3 text="backend" />
        <ul class="mb-2.5 list-disc pl-10 text-base font-normal font-thin text-mediumDarkGray">
          <li>
            Twitch, Donation and Twitter data is continuously collected by
            <A
              href="https://github.com/bcongdon/gdq-collector"
              className="text-[16px]">gdq-collector</A
            > - a package of scripts I wrote using
            <A
              href="http://flask.pocoo.org/"
              className="text-[16px]">Flask</A
            >, APScheduler, and
            <A
              href="https://aws.amazon.com/lambda"
              className="text-[16px]">AWS Lambda</A
            >.
          </li>
          <li>
            The backend database is running serverlass at
            <A
              href="https://www.cockroachlabs.com/"
              className="text-[16px]">CockroachDB</A
            >.
          </li>
          <li>
            An
            <A
              href="https://aws.amazon.com/ec2"
              className="text-[16px]">EC2 instance</A
            > is used to keep everything throughout running the event.
          </li>
          <li>
            A
            <A
              href="https://fly.io/"
              className="text-[16px]">Fly Machine</A
            > permanently runs the backend.
          </li>
        </ul>
      </div>
      <div class="w-1/2 px-4">
        <H3 text="frontend" />
        <ul class="mb-2.5 list-disc pl-10">
          <li>
            <A
              href="https://apexcharts.com/"
              className="text-[16px]">APEXCHARTS.JS</A
            > is used for rendering the graphs.
          </li>
          <li>
            <A
              href="https://svelte.dev/docs/svelte-store/"
              className="text-[16px]">Svelte stores</A
            > are used for managing the page's state.
          </li>
          <li>
            Design was heavily inspired by
            <A
              href="http://alligatr.co.uk/"
              className="text-[16px]">alligatr's</A
            > previous SGDQ stat pages.
          </li>
          <li>
            The website is hosted at
            <A
              href="https://www.netlify.com/"
              className="text-[16px]">netlify</A
            >.
          </li>
        </ul>
        <p class="mb-2.5">
          This site is open sourced on <A
            href="https://github.com/crunchtime-ali/gdq-stats-frontend"
            className="text-[16px]">Github</A
          >
        </p>
      </div>
    </Container>
  </div>
</Section>
