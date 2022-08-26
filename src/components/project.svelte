<script>
    export let name = ""
    export let url = ""
    export let linkText = ""
    export let technologies = ""
</script>

<div>
    <h1 class="text-xl text-semibold">
        {name}
    </h1>
    <a href={url}>
        {linkText}    
    </a>
    {#if technologies.length}
        <p>
            Technologies: {technologies}    
        </p>
    {/if}
    <div class="pl-4">
        <slot />    
    </div>
</div>