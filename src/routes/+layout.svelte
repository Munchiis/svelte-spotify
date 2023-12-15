<script lang="ts">
	import type { LayoutData } from './$types';
	import 'modern-normalize/modern-normalize.css';
	import '../styles/main.scss';
	import { LogoutButton } from '$lib/components/index';

	export let data: LayoutData;

	$: user = data.user;
</script>

{#if user}
	<p>Hello {user.display_name}</p>
	<LogoutButton/>
{/if}

<slot />
