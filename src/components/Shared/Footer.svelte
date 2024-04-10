<script lang="ts">
  import logo from '../../../static/base_emoji_colored.png';
  import A from '../Layout/A.svelte';
</script>

<footer class="mb-4 flex w-full items-center justify-between text-sm text-mediumDarkGray">
  <div class="flex">
    Made with <img
      src={logo}
      alt="the project logo"
      class="mx-1 h-5 w-5"
    />
    by
    <A href="http://benjamincongdon.me/">&nbsp;Benjamin Congdon</A>, hosted by
    <A href="https://twitter.com/its_crunchtime">&nbsp;Crunchtime Ali</A>, 2016-{new Date().getFullYear()}
  </div>
  <iframe
    title="Github Stars"
    src="https://ghbtns.com/github-btn.html?user=crunchtime-ali&amp;repo=gdq-stats&amp;count=true&amp;type=star"
    width="80px"
    height="20px"
  />
</footer>
