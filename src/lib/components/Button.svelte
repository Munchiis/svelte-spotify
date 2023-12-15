<script lang="ts">
	export let element: 'button' | 'a';
	export let variant: 'solid' | 'outline' | 'red' = 'solid';
	export let className: string = '';
</script>

<svelte:element
	this={element}
	class="button button-{variant} {className}"
	on:click
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="scss">
	.button {
		display: inline-block;
		border: none;
		font-weight: 600;
		font-size: functions.toRem(14);
		border-radius: functions.toRem(20);
		cursor: pointer;
		padding: functions.toRem(7) functions.toRem(15);
		text-decoration: none;
		&.button-solid {
			background-color: var(--accent-color);
			color: #000;
			border: functions.toRem(2) solid var(--accent-color);
		}
		&.button-outline {
			background: none;
			color: var(--text-color);
			border: functions.toRem(2) solid;
		}
		&.button-red {
			background-color: var(--error);
			color: #fff;
			border: functions.toRem(2) solid var(--error);
		}
		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
		&:hover {
			&.button-solid,
			&.button-red {
				background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
                border-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);

			}
			&.button-outline {
				background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
			}
		}
		&:active {
			&.button-solid,
			&.button-red {
				background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
                border-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
			}
            &.button-outline {
				background-image: linear-gradient(rgba(255, 255, 255, 0.2) 0 0);
			}
		}
	}
</style>
