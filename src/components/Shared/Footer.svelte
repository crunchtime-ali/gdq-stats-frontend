<script lang="ts">
  import logo from '../../../static/base_emoji_colored.png';
  import A from '../Layout/A.svelte';
</script>
<footer class="flex items-center justify-between w-full mb-4 text-mediumDarkGray text-sm">
  <div class="flex">
    Made with <img src={logo} alt="the project logo" class="w-5 h-5 mx-1" /> by
    <A href="http://benjamincongdon.me/">&nbsp;Benjamin Congdon</A>, hosted by
    <A href="https://twitter.com/its_crunchtime">&nbsp;Crunchtime Ali</A>, 2016-{new Date().getFullYear()}
  </div>
  <iframe
    title="Github Stars"
    src="https://ghbtns.com/github-btn.html?user=crunchtime-ali&amp;repo=gdq-stats&amp;count=true&amp;type=star"
    width="80px" height="20px"
  />
</footer>