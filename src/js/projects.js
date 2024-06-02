document.addEventListener("DOMContentLoaded", () => {
    const projectsList = document.querySelector('.projects-list');
    const loadMoreButton = document.querySelector('.load-more-button');
    const projects = [
        {
            imgSrc1x: './img/energy-1x.jpg',
            imgSrc2x: './img/energy-2x.jpg',
            alt: 'energy projects',
            stack: 'React, JavaScript, Node JS, Git',
            title: 'ENERGY FLOW WEBSERVICE',
            link: 'https://github.com/Kate-Iva/portfolio-project-14'
        },
        {
            imgSrc1x: './img/fruitbox-1x.jpg',
            imgSrc2x: './img/fruitbox-2x.jpg',
            alt: 'fruitbox projects',
            stack: 'React, JavaScript, Node JS, Git',
            title: 'FRUITBOX ONLINE STORE',
            link: 'https://github.com/Kate-Iva/portfolio-project-14'
        },
        {
            imgSrc1x: './img/jewelry-1x.jpg',
            imgSrc2x: './img/jewelry-2x.jpg',
            alt: 'jewelry projects',
            stack: 'React, JavaScript, Node JS, Git',
            title: 'CHEGO JEWELRY WEBSITE',
            link: 'https://github.com/Kate-Iva/portfolio-project-14'
        },
            {
            imgSrc1x: './img/mimino-1x.jpg',
            imgSrc2x: './img/mimino-2x.jpg',
            alt: 'mimino projects',
            stack: 'React, JavaScript, Node JS, Git',
            title: 'MIMINO WEBSITE',
            link: 'https://github.com/Kate-Iva/portfolio-project-14'
        },
        {
            imgSrc1x: './img/power-1x.jpg',
            imgSrc2x:'./img/power-2x.jpg',
            alt: 'power projects',
            stack: 'React, JavaScript, Node JS, Git',
            title: 'POWER PULSE WEBSERVICE',
            link: 'https://github.com/Kate-Iva/portfolio-project-14'
        },
        {
            imgSrc1x: './img/starlight-1x.jpg',
            imgSrc2x: './img/starlight-2x.jpg',
            alt: 'starlight projects',
            stack: 'React, JavaScript, Node JS, Git',
            title: 'STARLIGHT STUDIO LANDING PAGE',
            link: 'https://github.com/Kate-Iva/portfolio-project-14'
        },
{
            imgSrc1x: './img/vyshyvanka-1x.jpg',
            imgSrc2x: './img/vyshyvanka-2x.jpg',
            alt: 'vyshyvanka projects',
            stack: 'React, JavaScript, Node JS, Git',
            title: 'VYSHYVANKA VIBES LANDING PAGE',
            link: 'https://github.com/Kate-Iva/portfolio-project-14'
        },
    ];

    let currentIndex = 0;
    const projectsPerPage = 3;

    const loadProjects = () => {
        const end = Math.min(currentIndex + projectsPerPage, projects.length);
        for (let i = currentIndex; i < end; i++) {
            const project = projects[i];
            const listItem = document.createElement('li');
            listItem.classList.add('projects-list-items');
            listItem.innerHTML = `
                <picture>
                    <source srcset="${project.imgSrc1x} 1x", 
                    ${project.imgSrc2x} 2x />
                    <img src="${project.imgSrc1x}" alt="${project.alt}" class="projects-item-img">
                </picture>
                <div class="tech-stack">${project.stack}</div>
                <div class="projects-item-conteiner">
                    <div class="projects-item-title">${project.title}</div>
                    <a href="${project.link}" class="projects-btn" target="_blank">VISIT
                        <svg class="projects-icon" width="24" height="24">
                            <use href="./img/icons.svg#icon-arrow-visit"></use>
                        </svg>
                    </a>
                </div>
            `;
            projectsList.appendChild(listItem);
        }
        currentIndex += projectsPerPage;
        if (currentIndex >= projects.length) {
            loadMoreButton.style.display = 'none';
        }
    };

    loadMoreButton.addEventListener('click', loadProjects);
});