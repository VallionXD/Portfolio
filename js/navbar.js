// Get the navigaion links.
const contentContainer = document.querySelector(".z-10");
const about = document.querySelector("ul.flex > li:nth-child(1) > a");
const interests = document.querySelector("ul.flex > li:nth-child(2) > a");
const projects = document.querySelector("ul.flex > li:nth-child(3) > a");
const platforms = document.querySelector("ul.flex > li:nth-child(4) > a");

// Link classes.
const linkClasses = {
    selected: "block py-2 px-3 text-zinc-400 rounded transition duration-300 border-zinc-700 hover:bg-zinc-700 hover:text-zinc-500 md:hover:bg-transparent md:hover:text-zinc-500 md:p-0 grayscale select-none selected",
    notSelected: "block py-2 px-3 text-white rounded transition duration-300 border-zinc-700 hover:bg-zinc-700 hover:text-zinc-500 md:hover:bg-transparent md:hover:text-zinc-500 md:p-0 grayscale select-none",
}

// Link styles.
const linkStyles = {
    selected: "text-shadow: rgba(249,249,249,0.35) 0px 0px 15px;",
    notSelected: "",
}

// Set the currently selected section.
let currentlySelected = "about";

// Create a function to edit the content based on the section.
const showSection = (sectionName) => {
    // If the section is about.
    if (sectionName === "about") {
        if (currentlySelected !== sectionName) {
            // Set the innerHTML.
            contentContainer.innerHTML = `            
            <!-- #about -->
            <section id="about" class="h-screen z-1 snap-center flex justify-center snap-start">
                <div class="relative text-center max-w-lg mr-0  snap-start">
                    <span class="mb-3 text-2xl text-neutral-500 dark:text-neutral-400">Hi, I am <span class="font-bold bg-gradient-to-r from-zinc-400 via-zinc-600 to-zinc-800 text-transparent bg-clip-text bg-300%" style="text-shadow: rgba(249,249,249,0.35) 0px 0px 15px;">VallionXD</span>. I am a web developer learning <span class="font-bold bg-gradient-to-r from-green-400 via-green-700 to-green-700 text-transparent bg-clip-text bg-300%" style="text-shadow: rgba(9,249,149,0.45) 0px 0px 15px;">NodeJS</span> and <span class="font-bold bg-gradient-to-r from-blue-400 via-sky-700 to-sky-700 text-transparent bg-clip-text bg-300%" style="text-shadow: rgba(9,149,249,0.45) 0px 0px 15px;">ElectronJS</span> for making my web projects into desktop apps. I am also learning <span class="font-bold bg-gradient-to-r from-zinc-400 via-blue-300 to-blue-400 text-transparent bg-clip-text bg-300%" style="text-shadow: rgba(9, 205, 249, 0.45) 0px 0px 15px;">Tailwind CSS</span> for ease of styling my projects.</span>
                </div>
            </section>
            `;

            // Set the new currently selected.
            currentlySelected = "about";

            // Change the selected link.
            about.classList = linkClasses.selected;
            about.style = linkStyles.selected;
            interests.classList = linkClasses.notSelected;
            interests.style = linkStyles.notSelected;
            projects.classList = linkClasses.notSelected;
            projects.style = linkStyles.notSelected;
            platforms.classList = linkClasses.notSelected;
            platforms.style = linkStyles.notSelected;
        }
    } else if (sectionName === "interests") {
        if (currentlySelected !== sectionName) {
            // Set the innerHTML.
            contentContainer.innerHTML = `            
            <!-- #interests -->
            <section id="interests" class="h-screen z-1 snap-center flex justify-center snap-start">
                <div class="relative text-center max-w-lg mr-0 snap-start">
                    <span class="mb-3 text-2xl text-neutral-500 dark:text-neutral-400">I have interests in writing <span class="font-bold bg-gradient-to-r from-orange-300 via-amber-400 to-amber-500 text-transparent bg-clip-text bg-300%" style="text-shadow: rgba(249,249,9,0.45) 0px 0px 15px;">JavaScript</span> code, and creating web applications using <span class="font-bold bg-gradient-to-r from-orange-400 via-orange-600 to-orange-700 text-transparent bg-clip-text bg-300%" style="text-shadow: rgba(255,149,9,0.55) 0px 0px 15px;">HTML</span>. I also have interests in interface design, which is why I am learning <span class="font-bold bg-gradient-to-r from-zinc-400 via-blue-300 to-blue-400 text-transparent bg-clip-text bg-300%" style="text-shadow: rgba(9, 205, 249, 0.45) 0px 0px 15px;">Tailwind CSS</span>.</span>
                </div>
            </section>
            `;

            // Set the new currently selected.
            currentlySelected = "interests";

            // Change the selected link.
            about.classList = linkClasses.notSelected;
            about.style = linkStyles.notSelected;
            interests.classList = linkClasses.selected;
            interests.style = linkStyles.selected;
            projects.classList = linkClasses.notSelected;
            projects.style = linkStyles.notSelected;
            platforms.classList = linkClasses.notSelected;
            platforms.style = linkStyles.notSelected;
        }
    } else if (sectionName === "projects") {
        if (currentlySelected !== sectionName) {
            // Set the innerHTML.
            contentContainer.innerHTML = `            
            <!-- #projects -->
            <section id="projects" class="h-screen z-1 snap-center flex justify-center snap-start">
                <div class="relative text-center max-w-lg mr-0 snap-start">
                    <div class="relative overflow-x-auto">
                        <table class="w-full rounded-lg text-sm text-left rtl:text-right text-gray-400">
                            <thead class="rounded-lg text-xs text-gray-400 uppercase bg-semiTransparent backdrop-blur-sm">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Repository Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Releases
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Language
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Link
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-semiTransparent2">
                                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        BrowserCheats
                                    </th>
                                    <td class="px-6 py-4">
                                        One
                                    </td>
                                    <td class="px-6 py-4">
                                        JavaScript
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="https://github.com/VallionXD/BrowserCheats" target="#" class="text-blue-400 font-bold" style="text-shadow: rgba(9, 205, 249, 0.45) 0px 0px 15px;">Link</a>
                                    </td>
                                </tr>
                                <tr class="bg-semiTransparent2">
                                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        Val's Rule
                                    </th>
                                    <td class="px-6 py-4">
                                        None
                                    </td>
                                    <td class="px-6 py-4">
                                        JavaScript
                                    </td>
                                    <td class="px-6 py-4">
                                      <a href="https://github.com/VallionXD/Vals-Rule" target="#" class="text-blue-400 font-bold" style="text-shadow: rgba(9, 205, 249, 0.45) 0px 0px 15px;">Link</a>
                                    </td>
                                </tr>
                                <tr class="bg-semiTransparent2">
                                    <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        Hello World
                                    </th>
                                    <td class="px-6 py-4">
                                        None
                                    </td>
                                    <td class="px-6 py-4">
                                        Multiple
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="https://github.com/VallionXD/Hello-World" target="#" class="text-blue-400 font-bold" style="text-shadow: rgba(9, 205, 249, 0.45) 0px 0px 15px;">Link</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
            `;

            // Set the new currently selected.
            currentlySelected = "projects";

            // Change the selected link.
            about.classList = linkClasses.notSelected;
            about.style = linkStyles.notSelected;
            interests.classList = linkClasses.notSelected;
            interests.style = linkStyles.notSelected;
            projects.classList = linkClasses.selected;
            projects.style = linkStyles.selected;
            platforms.classList = linkClasses.notSelected;
            platforms.style = linkStyles.notSelected;
        }
    } else if (sectionName === "platforms") {
        if (currentlySelected !== sectionName) {
            // Set the innerHTML.
            contentContainer.innerHTML = `            
            <!-- #platforms -->
            <section id="platforms" class="h-screen z-1 snap-center flex justify-center snap-start">
                <div class="relative text-center max-w-lg mr-0  snap-start">
                    <span class="mb-3 text-xl text-neutral-500 dark:text-neutral-400">You can find me on <a href="https://pastebin.com/u/VallionXD" target="#" class="font-bold bg-gradient-to-r from-zinc-300 via-zinc-600 to-zinc-400 text-transparent bg-clip-text bg-300%" style="text-shadow: rgba(249,249,249,0.35) 0px 0px 15px;">Pastebin</a> by clicking the pastebin text, <a href="https://github.com/VallionXD" target="#" class="font-bold bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-500 text-transparent bg-clip-text bg-300%" style="text-shadow: rgba(249,249,249,0.35) 0px 0px 15px;">GitHub</a> by clicking the button in the top left or the github text.</span>
                </div>
            </section>
            `;

            // Set the new currently selected.
            currentlySelected = "platforms";

            // Change the selected link.
            about.classList = linkClasses.notSelected;
            about.style = linkStyles.notSelected;
            interests.classList = linkClasses.notSelected;
            interests.style = linkStyles.notSelected;
            projects.classList = linkClasses.notSelected;
            projects.style = linkStyles.notSelected;
            platforms.classList = linkClasses.selected;
            platforms.style = linkStyles.selected;
        }
    };

}

// Add an event listener to about.
about.addEventListener("click", function() {
    // Fire the showsection function.
    showSection("about");
})

// Add an event listener to interests.
interests.addEventListener("click", function() {
    // Fire the showsection function.
    showSection("interests");
})

// Add an event listener to projects.
projects.addEventListener("click", function() {
    // Fire the showsection function.
    showSection("projects");
})

// Add an event listener to platforms.
platforms.addEventListener("click", function() {
    // Fire the showsection function.
    showSection("platforms");
})