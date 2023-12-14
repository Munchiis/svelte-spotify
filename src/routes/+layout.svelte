<script lang="ts">
	import type { LayoutData } from './$types';
    import 'modern-normalize/modern-normalize.css'
    import '../styles/main.scss';
    
    export let data: LayoutData;
</script>

{data.user?.display_name}

<slot />