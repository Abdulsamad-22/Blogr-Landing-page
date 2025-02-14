import { blogrLandingPage } from "./data.js";

let heroSection = document.querySelector('.header-body-container');
console.log(heroSection);
const {title, subTitle, ctaText, buttonText} = blogrLandingPage.hero;

    const html = `
            <h1 class="header-text">
            ${title}
            </h1>
    
            <p class="header-desc">  
            ${subTitle}
            </p>

            <div class="header-btns-container">     
            <button class="start-free-cta">
                ${buttonText.button1}
            </button>
    
            <button class="learn-more-cta">
            ${buttonText.button2}
            </button>
            </div>
    `;


    heroSection.innerHTML = html;
    const {services} = blogrLandingPage.hero.nav;

        document.addEventListener("DOMContentLoaded", () => {
        
            // Create the navigation links
            services.forEach((service) => {
                const navItem = document.createElement("span");
                navItem.classList.add("nav-item");
                navItem.style.position = "relative";

                // Create the link with text and icon
                const navLink = document.createElement("span");
                navLink.classList.add("nav-link");
                navLink.innerHTML = `
                    <span>${service.text}</span>
                    <img class="arrow-down" src="${service.icon}" alt="arrow">
                `;
                navItem.appendChild(navLink);
                const linksContainer = document.querySelector('.links');
        
                // Create the dropdown content container
                const dropdownContent = document.createElement("div");
                dropdownContent.classList.add("dropdown-content");
                dropdownContent.innerHTML = service.content;
                dropdownContent.style.display = "none"; // Hidden by default
                navItem.appendChild(dropdownContent);

                linksContainer.appendChild(navItem);
        
                // Add event listener for toggling dropdown
                navLink.addEventListener("click", () => {
                    const isVisible = dropdownContent.style.display === "block";
                    document.querySelectorAll(".dropdown-content").forEach(content => {
                        content.style.display = "none"
                        //content.previousElementSibling.querySelector(".arrow-down").classList.remove("arrow-up");
                    });

                    dropdownContent.style.display = isVisible ? "none" : "block";
                    navLink.querySelector(".arrow-down").classList.toggle("arrow-up", !isVisible);
                });
                
                //linksContainer.appendChild(navItem);
            });
        });


    // Render header buttons
        const cta = `
        <button class="login-cta">
             ${ctaText.cta1}
          </button>
          
          <button class="signup-cta">
            ${ctaText.cta2}
          </button>
    `;

    document.querySelector('.ctas').innerHTML = cta;

    // For the "our customer section"

    const {features, section2, section3} = blogrLandingPage;

    const section1 = `
        <h2 class="title">
        ${features.heading}
        </h2>

        <div class="whole-section">
            <div class="left-hand-side">
            <div class="editor-container">
        
                <h2 class="sub-title">
                    ${features.text.title1}
                </h2>
        
                <p class="description">
                    ${features.text.description1}
                </p>
            </div>
        
            <div class="management">
                <h2 class="sub-title">
                    ${features.text.title2}
                </h2>
        
                <p class="description">
                    ${features.text.description2}
                </p>
            </div>
            </div>

            <div class="customer-section-image-container">
                <img class="customer-section-image" src="${features.image}" alt="illustration">
            </div>

        </div> 
    `;

    document.querySelector('.our-customer-section').innerHTML = section1;

    // For section 2

    const section2Container = `
        <div class="bg-phone-images">
            <div class="container2">
                <img class="bg-circles" src="${section2.bgImage}" alt="background circles">
            </div>

            <img class="phone-image" src="${section2.image}" alt="phoneimage">
        </div>

        <div class="text-container">
            <h2>
                ${section2.title}
            </h2>

            <p>
                ${section2.description}
            </p>
        </div>
    `;

    document.querySelector('.state-of-infrastructre').innerHTML = section2Container;

    // Render our services section

    const section3Container = `
        <div class="services-image-container">
            <img class="laptop-illustration" src="${section3.image}" alt="laptop illustration">
        </div>

        <div class="services-text-container">
            <h2>
                ${section3.text.title1}
            </h2>

            <p class="ourServices-desc">
                ${section3.text.description1}
            </p>

            <h2>
                ${section3.text.title2}
            </h2>

            <p class="ourServices-desc">
                ${section3.text.description2}
            </p>
        </div>
    `;

    document.querySelector('.our-services-container').innerHTML = section3Container;

    // Render footer contact links
    const footerContainer = document.createElement("footer");
    footerContainer.classList.add("footer");
    const {image, links} = blogrLandingPage.footer;

    const footerLogo = document.createElement("div");
    footerLogo.classList.add("footer-logo");
    footerLogo.innerHTML = `<img src="${image}" alt="logo image">`;
    document.querySelector('.logo-footer').appendChild(footerLogo);

    //const { footer, image, links } = blogrLandingPage.footer;
    const footerLinks = document.createElement("div");
    footerLinks.classList.add("footer-links");

    // Iterate over the links array
    links.forEach(linkSection => {
        // Create a section for each link group
        const linkGroup = document.createElement("div");
        linkGroup.classList.add("footer-link-group");

        // Add the heading
        linkGroup.innerHTML = linkSection.heading;

        // Create a list for the tags
        const list = document.createElement("ul");
        list.innerHTML = `
            ${linkSection.tag1}
            ${linkSection.tag2}
            ${linkSection.tag3}
            ${linkSection.tag4 || ""} <!-- Optional tag -->
            ${linkSection.tag5 || ""} <!-- Optional tag -->
        `;

        // Append the list to the group
        linkGroup.appendChild(list);
        footerLinks.appendChild(linkGroup);
    });
    document.querySelector('.footer-links-container').appendChild(footerLinks);

    const leftRightNav = document.querySelector('.left-right-nav');


    /*const navLink = document.querySelector('.links');
    const ctaContainer = document.querySelector('.ctas');
   */

    const menuButton = document.createElement("div");
    menuButton.classList.add("menu-button");
    menuButton.innerHTML = `<img class="" src="images/icon-hamburger.svg" alt="menu icon">`;
    let isMenuOpen = false;

    menuButton.addEventListener('click', () => {
        const existingMenu = document.querySelector('.menu');
        if (existingMenu) {
            existingMenu.remove();
        }
        
        if (!isMenuOpen) {
            const menu = document.createElement('div');
            menu.classList.add('menu');

            menuButton.innerHTML = `<img src="images/icon-close.svg" alt="close icon">`;

            //console.log(renderNavLink('.menu'));

            services.forEach((service) => {
                const navItem = document.createElement("ul");
                navItem.classList.add("nav-item");
                navItem.style.position = "relative";
    
                // Create the link with text and icon
                const navLink = document.createElement("span");
                navLink.classList.add("nav-link");
                navLink.innerHTML = `
                    <span>${service.text}</span>
                    <img class="arrow-down" src="${service.iconDark}" alt="arrow">
                `;
                navItem.appendChild(navLink);
        
                // Create the dropdown content container
                const dropdownContent = document.createElement("div");
                dropdownContent.classList.add("dropdown-content");
                dropdownContent.innerHTML = service.content;
                dropdownContent.style.display = "none"; // Hidden by default
                navItem.appendChild(dropdownContent);
    
                //menu.appendChild(navItem);
        
                // Add event listener for toggling dropdown
                navLink.addEventListener("click", () => {
                    const isVisible = dropdownContent.style.display === "block";
                    document.querySelectorAll(".dropdown-content").forEach(content => {
                        content.style.display = "none"
                    });
    
                    dropdownContent.style.display = isVisible ? "none" : "block";
                    navLink.querySelector(".arrow-down").classList.toggle("arrow-up", !isVisible);
                });
        
                menu.appendChild(navItem);
            });

            const divider = document.createElement('hr');
            divider.classList.add('divider');
            menu.appendChild(divider);


            const ctaContainer = document.createElement('div');
            ctaContainer.classList.add('cta-container');
            ctaContainer.innerHTML = `
                <button class="login-cta">
                    ${ctaText.cta1}
                </button>
                
                <button class="signup-cta">
                    ${ctaText.cta2}
                </button>
            `;
            menu.appendChild(ctaContainer);

            console.log('create menu');
            document.querySelector('.menu-container').appendChild(menu);
            isMenuOpen = true;
        } else {
            menuButton.innerHTML = `<img class="" src="images/icon-hamburger.svg" alt="menu icon">`;

            isMenuOpen = false;
            console.log('remove menu');
        }
    });


    const imageBg = document.querySelector('.header-bg');
    imageBg.classList.add('mobile');
    const editorImage = document.querySelector('.customer-section-image');
    const laptopImage = document.querySelector('.laptop-illustration');

    function resizeWindow() {
        const navLink = document.querySelector('.links');
        const ctaContainer = document.querySelector('.ctas');
        
        if (window.innerWidth <= 600) {
            if (navLink && ctaContainer) {
                navLink.style.display = 'none';
                ctaContainer.style.display = 'none';
            }

            if (!leftRightNav.contains(menuButton)) {
                menuButton.innerHTML = `<img class="" src="images/icon-hamburger.svg" alt="menu icon">`;
                leftRightNav.appendChild(menuButton);
                isMenuOpen = false;
            }

            if (imageBg && editorImage && laptopImage) {
                console.log('Applying desktop images...');
                imageBg.src = 'images/bg-pattern-intro-mobile.svg';
                editorImage.src = 'images/illustration-editor-mobile.svg';
                laptopImage.src = 'images/illustration-laptop-mobile.svg';
                //console.log('Changed to mobile background');
            }
        } else {
            const menu = document.querySelector('.menu');

            if (menu) {
                menu.remove();
            }

            if (navLink && ctaContainer) {
                navLink.style.display = 'block';
                ctaContainer.style.display = 'block';
            }

            if (leftRightNav.contains(menuButton)) {
                leftRightNav.removeChild(menuButton);
            }

            if (imageBg && editorImage && laptopImage) {
                imageBg.src = 'images/bg-pattern-intro-desktop.svg';
                editorImage.src = 'images/illustration-editor-desktop.svg';
                laptopImage.src = 'images/illustration-laptop-desktop.svg';
                //console.log('Changed to desktop background');
            }
        }
    }

    // Check if image element exists before adding event listener
    if (imageBg) {
        // Run on initial load
        resizeWindow();
        
        // Add debounced resize listener to prevent excessive function calls
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizeWindow, 250); // Wait 250ms after last resize event
        });
    } else {
        //console.error('Background image element not found');
    }