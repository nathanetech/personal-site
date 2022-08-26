<script>
    export let position = ""
    export let company = ""
    export let time = ""
    export let technologies = ""
</script>

<div>
    <h1 class="text-xl text-semibold">
        {position}
    </h1>
    <h3>
        {company}
    </h3>
    <div class="flex flex-row items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
        </svg>
        <p class="ml-2">
            {time}    
        </p>
    </div>
    {#if technologies.length}
        <p>
            Technologies: {technologies}    
        </p>
    {/if}
    <div class="pl-4">
        <slot />    
    </div>
</div>