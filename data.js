export const blogrLandingPage = {
    hero: {
        nav: {
            logo: 'images/logo.svg',
            services: [{
                text: 'Product',
                icon: 'images/icon-arrow-dark.svg',
                content: `
                    <p>Overview</p>
                    <p>Pricing</p>
                    <p>Marketplace</p>
                    <p>Features</p>
                    <p>Integrations</p>
                `
            }, {
                text: 'Company',
                icon: 'images/icon-arrow-light.svg',
                content: `
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Our Team</p>
                    <p>Culture</p>
                `
            }, {
                text: 'Connect',
                icon: 'images/icon-arrow-light.svg',
                content: `
                    <p>Contact</p>
                    <p>Newsletter</p>
                    <p>LinkedIn</p>
                `
            }]
        },

        ctaText: {
            cta1: 'Login',
            cta2: 'Sign up'
        },

        title: 'A Modern Publishing Platform',
        subTitle: 'Grow your audience and build your online brand',
        buttonText: {
            button1: 'Start for Free',
            button2: 'Learn More'
        },
        bgImage: 'images/bg-pattern-intro-desktop.svg'     
    }, 

    features: {
        heading: 'Designed for the future',
        image: 'images/illustration-editor-desktop.svg',

        text: {
            title1: 'Introducing an extensible editor',
            description1: `
            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
            change the looks of a blog.`,

            title2: 'Robust content management',
            description2: `
            Flexible content management enables users to easily move through posts. Increase the usability of your blog 
            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.`
        }
    }, 
    section2: {
        bgImage: 'images/bg-pattern-circles.svg',
        image: 'images/illustration-phones.svg',
        title: 'State of the Art Infrastructure',
        description: `
        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
        `
    }, 
    section3: {
        image: 'images/illustration-laptop-desktop.svg',
        text: {
            title1: 'Free, open, simple',
            description1: `
            Blogr is a free and open source application backed by a large community of helpful developers. It supports 
            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.`,

            title2: 'Powerful tooling',
            description2: `
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
            capable of producing even the most complicated sites.`
        }

    },
    footer: {
        image: 'images/logo.svg" alt="logo image',
        links: [{
            heading: `<h3>Product</h3>`,
            tag1: `<li>Overview</li>`,
            tag2: `<li>Pricing</li>`,
            tag3: `<li>Marketplace</li>`,
            tag4: `<li>Features</li>`,
            tag5: `<li>Integrations</li>`
        }, {
            heading: `<h3>Company</h3>`,
            tag1: `<li>About</li>`,
            tag2: `<li>Team</li>`,
            tag3: `<li>Blog</li>`,
            tag4: `<li>Careers</li>`
        }, {
            heading: `<h3>Contact</h3>`,
            tag1: `<li>Contact</li>`,
            tag2: `<li>Newsletter</li>`,
            tag3: `<li>LinkedIn</li>`
        }]
    }

};