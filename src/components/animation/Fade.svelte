<script>
import { fade } from "svelte/transition";
</script>

<article transition:fade={{ duration: 300 }}>
  <slot />
</article>
