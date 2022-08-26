<script>
    import Header from "../components/header.svelte"
    import Job from "../components/job.svelte"
    import Project from "../components/project.svelte"
    import { onMount } from 'svelte';

    let isDark = false;
    /**
    * @type {HTMLElement}
    */
    let htmlTag;
    onMount(async () => {
        htmlTag = document.documentElement;
    })

    $: if (htmlTag && isDark && !htmlTag.classList.contains("dark")) {
        htmlTag.classList.add("dark")
    } else if (htmlTag && !isDark && htmlTag.classList.contains("dark")) {
        htmlTag.classList.remove("dark")
    }
</script>

<div class="p-12 rounded-lg h-max bg-white dark:bg-slate-800">
    <div class="mb-8 text-center border-b-2 pb-4 relative">
        <h1 class="text-5xl text-sky-700 dark:text-sky-500 text-semibold">Nathan Tech</h1>
        <h3 class="text-2xl text-sky-900 dark:text-sky-700">Software Engineer</h3>
        <button on:click={() => { isDark = !isDark}} class="absolute top-6 right-12 text-sky-700 dark:text-sky-500 transition-all ease-in-out duration-300">
            {#if isDark}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill h-6 w-6" viewBox="0 0 16 16">
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill h-6 w-6" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                </svg>
            {/if}
        </button>
    </div>
    <div class="grid grid-cols-12">
        <div class="col-span-3 space-y-6 p-4 bg-slate-200 dark:bg-slate-700">
            <div>
                <Header>
                    Contact
                </Header>
                <a href="mailto:nathan.tech1990@gmail.com">
                    <div class="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        <span class="ml-2">
                            nathan.tech1990@gmail.com
                        </span>
                    </div>
                </a>
                <a href="https://github.com/nathanetech" target="_blank">
                    <div class="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        <span class="ml-2">
                            nathanetech
                        </span>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/nathan-tech" target="_blank">
                    <div class="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                        <span class="ml-2">
                            nathan-tech
                        </span>
                    </div>
                </a>
                <a href="tel:9122202672">
                    <div class="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        <span class="ml-2">
                            (912) 220-2672
                        </span>
                    </div>
                </a>
            </div>
            <div>
                <Header>
                    Education
                </Header>
                <p>
                    Georgia Southern University
                </p>
                <p>
                    B.S. in Computer Science
                </p>
                <p>
                    Magna Cum Laude
                </p>
            </div>
            <div>
                <Header>
                    Skills
                </Header>
                <p>
                    Javascript
                </p>
                <p>
                    React
                </p>
                <p>
                    SvelteKit
                </p>
                <p>
                    Vue
                </p>
                <p>
                    Python
                </p>
                <p>
                    FastAPI
                </p>
                <p>
                    Git
                </p>
                <p>
                    PHP
                </p>
                <p>
                    Laravel
                </p>
                <p>
                    C#
                </p>
                <p>
                    Java
                </p>
            </div>
        </div>
        <div class="col-span-9 p-4 space-y-6">
            <div>
                <Header>
                    Experience
                </Header>
                <div class="space-y-6">
                    <Job
                        position="Software Engineer"
                        company="Tithe.ly"
                        time="2021-present"
                        technologies="PHP, Javascript, Vue, Git, MySQL"
                    >
                        <ul>
                            <li>
                                Worked on a small team to create a package that simplified the company's backend for 
                                transaction processing across multiple products.
                            </li>
                            <li>
                                Updated unit tests to follow established best practices.
                            </li>
                            <li>
                                Optimized front-end code to speed up customer interactions by analyzing and removing
                                unnecessary calls to legacy API. 
                            </li>
                        </ul>
                    </Job>
                    <Job
                        position="Full Stack Software Engineer"
                        company="Breeze ChMS"
                        time="2017-2021"
                        technologies="Javascript, React, PHP, Laravel, Git, MySQL, Cypress.io"
                    >
                        <ul>
                            <li>
                                Improved customer experience by creating a new customer-facing drag-and-drop dashboard from start to finish.
                            </li>
                            <li>
                                Helped the team move from using class components to function components in React by 
                                leading a talk on the subject and creating multiple examples in the company's codebase. 
                            </li>
                            <li>
                                Delivered clarity and value to the company's sales team by creating an automated integration with Hubspot
                                that kept company and contact data synchronized between the two data sources. 
                            </li>
                            <li>
                                Expanded the API by creating multiple well-tested endpoints and services. 
                            </li>
                        </ul>
                    </Job>
                </div>
            </div>
            <div>
                <Header>
                    Personal Projects
                </Header>
                <div class="space-y-6">
                    <Project
                        name="It's Raffle Time"
                        url="https://its-raffle-time.netlify.app"
                        linkText="See it here"
                        technologies="SvelteKit, Netlify"
                    >
                        <ul>
                            <li>
                                Web app I created to hold raffles at a work retreat.
                            </li>
                            <li>
                                Currently hard-coded to the names of the people who were at the retreat.
                            </li>
                        </ul>
                    </Project>
                    <Project
                        name="Galaxy Quest"
                        url="play.google.com/store/apps/details?id=com.nathantech.GalaxyQuest"
                        linkText="Download it on the Google Play Store"
                        technologies="C#, Unity"
                    >
                        <ul>
                            <li>
                                Galaga-inspired 3D game I made in Unity and released on the Google Play Store.
                            </li>
                        </ul>
                    </Project>
                </div>
            </div>
        </div>
    </div>
</div>