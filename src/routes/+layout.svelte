<script>
	import "./app.scss";
	import { onMount } from "svelte";

	onMount(() => {
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			// eslint-disable-next-line no-undef
			dataLayer.push(arguments);
		}

		gtag("js", new Date());

		gtag("config", "G-Z1ZPBZ2BFE");
	});
</script>

<div class="bg-themed min-h-screen">
	<slot />
</div>
