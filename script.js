import { blogrLandingPage } from "./data.js";

let heroSection = document.querySelector('.header-body-container');
console.log(heroSection);

    let html = `
            <h1 class="header-text">
            ${blogrLandingPage.hero.title}
            </h1>
    
            <p class="header-desc">  
            ${blogrLandingPage.hero.subTitle}
            </p>

            <div class="header-btns-container">     
            <button class="start-free-cta">
                ${blogrLandingPage.hero.buttonText.button1}
            </button>
    
            <button class="learn-more-cta">
            ${blogrLandingPage.hero.buttonText.button2}
            </button>
            </div>
    `;


    heroSection.innerHTML = html;
    
    
    const {services} = blogrLandingPage.hero.nav;
    // Create the logo
    /*const logoImg = document.createElement("img");
    logoImg.src = hero.logo;
    logoImg.alt = "Logo";
    document.querySelector('.logo-container').appendChild(logoImg);
    //let element = '';*/
    document.addEventListener("DOMContentLoaded", () => {
    
        // Create the navigation links
        services.forEach((service) => {
            const navItem = document.createElement("div");
            navItem.classList.add("nav-item");
            navItem.style.position = "relative";

            // Create the link with text and icon
            const navLink = document.createElement("div");
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

    // For login and sign up buttons

    const cta = `
        <button class="login-cta">
             ${blogrLandingPage.hero.ctaText.cta1}
          </button>
          
          <button class="signup-cta">
            ${blogrLandingPage.hero.ctaText.cta2}
          </button>
    `;

    document.querySelector('.ctas').innerHTML = cta;

    // For the "our customer section"

    let section1 = `
     
      <h2 class="title">
        ${blogrLandingPage.features.heading}
      </h2>

      <div class="whole-section">
        <div class="left-hand-side">
          <div class="editor-container">
    
            <h2 class="sub-title">
                ${blogrLandingPage.features.text.title1}
            </h2>
    
            <p class="description">
                ${blogrLandingPage.features.text.description1}
            </p>
          </div>
    
          <div class="management">
            <h2 class="sub-title">
                ${blogrLandingPage.features.text.title2}
            </h2>
    
            <p class="description">
                ${blogrLandingPage.features.text.description2}
            </p>
          </div>
        </div>

        <div class="customer-section-image-container">
          
          <img class="customer-section-image" src="${blogrLandingPage.features.image}" alt="illustration">
        </div>

      </div>
    `;

    document.querySelector('.our-customer-section').innerHTML = section1;

    // For section 2

    let section2 = `
        <div class="bg-phone-images">
        <img class="phone-image" src="${blogrLandingPage.section2.image}" alt="phoneimage">

            <img class="bg-circles" src="${blogrLandingPage.section2.bgImage}" alt="background circles">
        </div>

        <div class="text-container">
            <h1>
                ${blogrLandingPage.section2.title}
            </h1>

            <p>
                ${blogrLandingPage.section2.description}
            </p>
        </div>
    `;

    document.querySelector('.state-of-infrastructre').innerHTML = section2;

    // For our services section

    let section3 = `
        <div class="services-image-container">
            <img class="laptop-illustration" src="${blogrLandingPage.section3.image}" alt="laptop illustration">
        </div>

        <div class="services-text-container">
            <h2>
                ${blogrLandingPage.section3.text.title1}
            </h2>

            <p class="ourServices-desc">
                ${blogrLandingPage.section3.text.description1}
            </p>

            <h2>
                ${blogrLandingPage.section3.text.title2}
            </h2>

            <p class="ourServices-desc">
                ${blogrLandingPage.section3.text.description2}
            </p>
        </div>
    `;

    document.querySelector('.our-services-container').innerHTML = section3;

    // For footer contact links
    const footerContainer = document.createElement("footer");
    footerContainer.classList.add("footer");
    const { image, links } = blogrLandingPage.footer;

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


    const navLink = document.querySelector('.links');
    const ctaContainer = document.querySelector('.ctas');

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

            services.forEach((service) => {
                const navItem = document.createElement("div");
                navItem.classList.add("nav-item");
                navItem.style.position = "relative";
    
                // Create the link with text and icon
                const navLink = document.createElement("div");
                navLink.classList.add("nav-link");
                navLink.innerHTML = `
                    <span>${service.text}</span>
                    <img class="arrow-down" src="${service.icon}" alt="arrow">
                `;
                navItem.appendChild(navLink);
                //const linksContainer = document.querySelector('.links');
        
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


            const ctaContainer = document.createElement('div');
            ctaContainer.classList.add('cta-container');
            ctaContainer.innerHTML = `
                <button class="login-cta">
                    ${blogrLandingPage.hero.ctaText.cta1}
                </button>
                
                <button class="signup-cta">
                    ${blogrLandingPage.hero.ctaText.cta2}
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
    const editorImage = document.querySelector('.customer-section-image');
    const laptopImage = document.querySelector('.laptop-illustration');

    function resizeWindow() {
        // Use window.innerWidth instead of window.width
        if (window.innerWidth <= 600) {
            if (navLink && ctaContainer) {
                navLink.style.display = 'none';
                ctaContainer.style.display = 'none';
            }

            if (!leftRightNav.contains(menuButton)) {
                leftRightNav.appendChild(menuButton);
            }

            if (imageBg && editorImage && laptopImage) {
                imageBg.src = 'images/bg-pattern-intro-mobile.svg';
                editorImage.src = 'images/illustration-editor-mobile.svg';
                laptopImage.src = 'images/illustration-laptop-mobile.svg';
                //console.log('Changed to mobile background');
            }
        } else {
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


    /*function resizeWindow() {
        // Use window.innerWidth instead of window.width
        if (window.innerWidth <= 600) {
            if (!leftRightNav.querySelector('.new-layout')) {
                renderMenu();
                heroSection.innerHTML = '';
            }
            // Add check to ensure image element exists
            if (imageBg) {
                imageBg.src = 'images/bg-pattern-intro-mobile.svg';
                //console.log('Changed to mobile background');
            }
        } else {
            if (imageBg) {
                imageBg.src = 'images/bg-pattern-intro-desktop.svg';
                //console.log('Changed to desktop background');
            }
            if (leftRightNav.innerHTML !== originalContent) {
                leftRightNav.innerHTML = originalContent;
                heroSection.innerHTML = html;
            }
        }
    }*/

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