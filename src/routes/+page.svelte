<script lang="ts">
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Button,
		Modal,
        Toggle,
	} from "flowbite-svelte";
	let settingsModal = $state(false);
    let IsDarkMode = $state(false);
    const customDarkModeToggle = (ev: MouseEvent) => {
        const target = ev.target as HTMLElement;
        const isDark = target.ownerDocument.documentElement.classList.toggle('dark');
        if (target.ownerDocument === document){
            localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
        };
        IsDarkMode = isDark;
    }

    let pageName = $state("Page");

    let gridSize = $state(1);

    // Dynamically determine grid size based on screen width
    import { onMount } from 'svelte';
    onMount(() => {
        updateGridSize();
    });
    const updateGridSize = () => {
        const screenWidth = window.innerWidth;
        gridSize = Math.floor(screenWidth / 150); // Adjust 150 to set square size
        gridSize = Math.max(gridSize, 3); // Minimum 3x3 grid
    };

    // updateGridSize();

    // window.addEventListener('resize', updateGridSize);
</script>


<main class="w-full h-full overflow-hidden">
    <Sidebar style="display:inline-block;height:100%;width:175px;margin-left:-1px;padding:0">
        <SidebarWrapper style="height:100%;border-radius:0 25px 25px 0;">
            <SidebarGroup>
                <SidebarItem label="Dashboard" class="hover:bg-zinc-400">
                    <svelte:fragment slot="icon">
                        <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </svelte:fragment>
                </SidebarItem>
            </SidebarGroup>
            <SidebarGroup border>
                <SidebarItem label="Settings" style="" class="hover:bg-zinc-400" onclick={() => settingsModal=!settingsModal}>
                    <svelte:fragment slot="icon">
                        <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </svelte:fragment>
                </SidebarItem>
            </SidebarGroup>
        </SidebarWrapper>
    </Sidebar>
    <div style="display:flex;position:absolute;width:calc(100% - 260px);height:calc(100% - 75px);top:25px;right:25px" class="border m-5 rounded-2xl">
        <div style="width:100%" class="border m-5 rounded-2xl">
            <div style="width:100%;height:100px;align-items:center;" class="border rounded-tl-2xl rounded-tr-2xl flex"> <!-- Header -->
                <h1 class="text-3xl text-text dark:text-dark-text float-left m-10">{pageName}</h1>
            </div>
            <div style="display:flex;justify-content:center;align-items:center;height:calc(100% - 100px);padding:20px;">
                <div
                    class="grid-container" 
                    style="width:100%;height:100%;display:grid;gap:20px;padding:20px;box-sizing:border-box;"
                >
                    {#each Array(gridSize * gridSize) as _, i}
                        <div class="grid-item" />
                    {/each}
                </div>
            </div>
        </div>
    </div>
</main>
<!-- modals -->
<Modal title="Settings" bind:open={settingsModal} autoclose outsideclose class="bg-background dark:bg-dark-background">
	<div class="setting">
        <h1 class="float-left text-text dark:text-dark-text">Dark Mode</h1>
        <Toggle checked={IsDarkMode} onclick={customDarkModeToggle} classDiv="outline bg-secondary dark:bg-dark-secondary" class="float-right" />
    </div>
</Modal>

<style>
    .setting {
        width: 90%;
        height: 35px;
        margin: 10px;
        padding: 5px;
        /* border: 1px solid #1f2937; */
        border-radius: 5px;
    }
    .grid-container {
        /* Ensure grid container uses full width/height */
        display: grid;
        justify-content: center;
        align-content: center;
        box-sizing: border-box;
    }

    .grid-item {
        background-color: #ccc; /* Example square color */
        aspect-ratio: 1 / 1; /* Maintain square shape */
        border-radius: 8px; /* Rounded corners for style */
    }

    .dark .grid-item {
        background-color: #444; /* Dark mode square color */
    }
</style>
