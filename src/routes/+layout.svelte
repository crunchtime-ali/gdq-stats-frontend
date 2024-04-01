<script>
  import '../app.css';
  import 'iconify-icon';
  import Footer from '../components/Shared/Footer.svelte';
</script>

<div class="mx-auto self-center px-0 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
  <slot />
  <Footer />
</div>
