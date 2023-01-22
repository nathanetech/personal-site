<script>
    import Header from "../../components/header.svelte"
    import { onMount } from 'svelte';
</script>

<svelte:head>
    <title>Nathan Tech</title>
</svelte:head>
<div class="p-2 md:p-6 lg:p-12 rounded-lg h-max bg-white dark:bg-slate-800">
    <div class="mb-8 md:text-center print:text-center border-b-2 px-4 pb-4 relative">
        <h1 class="text-5xl text-sky-700 dark:text-sky-500 font-semibold">Nathan Tech</h1>
        <h3 class="text-2xl text-sky-900 dark:text-sky-700">Software Engineer</h3>
    </div>
    <div class="grid md:grid-cols-12 print:grid-cols-12">
        <div class="print:hidden md:col-span-5 lg:col-span-4 xl:col-span-3 2xl:col-span-2 print:col-span-3 print:bg-slate-400 space-y-6 p-4 print:p-0 md:bg-slate-200 md:dark:bg-slate-700">
            <div>
                <Header>
                    Contact
                </Header>
                <a href="mailto:me@nathantech.dev">
                    <div class="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        <span class="ml-2">
                            me@nathantech.dev
                        </span>
                    </div>
                </a>
                <a href="tel:9122202672" class="hidden print:block">
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
        </div>
        <div class="md:col-span-7 lg:col-span-8 xl:col-span-9 2xl:col-span-10 print:col-span-12 p-4 print:p-0 space-y-6">
            <p>
                Planning Center team,
            </p>
            <p>
                I'm writing to express my interest in the Mobile Developer role at Planning Center. I believe that I would be a great fit for the team
                and would like to have the opportunity to discuss the position with you.
            </p>
            <p>
                I got into software development initially because I intended to use it as a way to support my family as a bivocational pastor. As I learned
                and grew in my skills, it became clear that software development was the right path for me to be able to serve the church and others. 
                I love to solve problems and see churches be successful in their mission through technology. I'm glad I have had the opportunity to do just that
                at both Breeze Church Management and Tithely, and I am excited about the prospect of continuing to do so at Planning Center.
            </p>
            <p>
                By God's grace, I have experience working in churches and knowing what churches need to do ministry. I interned at a church as Youth Director and 
                served on staff at a different church as Outreach Director where I also administrated the church's Breeze account. During those experiences, 
                I was able to serve in various capacities, learning the needs and pains of ministry work. That experience has helped guide me as I contributed
                to the development of Breeze and Tithely. As an interesting side note, the church I now call home uses Planning Center. My main interactions so far
                have been with checking my children into the nursery and using the Church Center app. It's been a great experience, and I'd love to have the 
                opportunity to contribute to the continued development of the platform. 
            </p>
            <p>
                My personal and professional experience aligns with what you are looking for in this position. I have broad experience working across the stack. 
                At Breeze, I worked as a Full Stack Engineer, building a React frontend and Laravel backend, while also maintaining a legacy PHP application. At
                Tithely, I started as a Backend Engineer, working in PHP in a Domain Driven Design environment. I then transitioned to Mobile Engineer after
                discussing with my manager and the director of engineering that mobile development is where my passion lies. I currently work primarily in
                Kotlin. In my personal time I have explored many mobile technologies, including Kotlin, KMM, Swift, and React Native. 
            </p>
            <p>
                I'd like to join the team because I believe in what you are doing. Planning Center makes quality products and seems to genuinely want to serve
                the church. From what I can tell, it is also a great place to work. I'm on board with making great products with great people that serve a great 
                mission.
            </p>
            <p>
                Thank you for taking the time to consider my application. I'm excited about the opportunity to speak with you about the open position. 
            </p>
            <p>
                Nathan Tech
            </p>
        </div>
    </div>
</div>