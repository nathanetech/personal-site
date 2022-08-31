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
        <div class="md:col-span-5 lg:col-span-4 xl:col-span-3 2xl:col-span-2 print:col-span-3 print:bg-slate-400 space-y-6 p-4 print:p-0 md:bg-slate-200 md:dark:bg-slate-700">
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
        <div class="md:col-span-7 lg:col-span-8 xl:col-span-9 2xl:col-span-10 print:col-span-9 p-4 print:p-0 space-y-6">
            <p>
                Dear Moov team,
            </p>
            <p>
                I'm writing to apply for the Software Engineer position at Moov. As a continual learner with several years of experience
                working in production environments, I believe that I would be a great fit for the role.
            </p>
            <p>
                My experience strongly aligns with what you are looking for in this position. I have experience working on teams, 
                creating APIs, contributing to the product lifecycle, and developing features from start to finish. I'm adaptable,
                conscientious, and excited about the prospect of helping Moov achieve your goals. 
            </p>
            <p>
                Although I do not have professional experience developing in Go, I do have relevant experience in other languages,
                such as PHP, Javascript, Python, and Java. As a fast learner, I have no doubt that I would be able to pick it up quickly
                and make meaningful contributions to the product. 
            </p>
            <p>
                My resume, website (an extended version of my resume), and LinkedIn profile will give you a better idea of my
                experience and some projects I have worked on. The included recommendations will give you the thoughts of 
                coworkers and managers who have worked directly with me. 
            </p>
            <p>
                Moov's core values - give first, respect the craft, make it count, radical transparency, reciprocate trust, and embrace community - 
                are all values that resonate with me. My LinkedIn recommendations demonstrate this fact.
            </p>
            <p>
                I'm excited about the opportunity to speak with you about the open position. Please let me know when you are ready
                to moov on to an interview. 
            </p>
            <p>
                Nathan Tech
            </p>
        </div>
    </div>
</div>