import imgEnergy1x from '../img/energy-1x.jpg';
import imgEnergy2x from '../img/energy-2x.jpg';
import imgFruitbox1x from '../img/fruitbox-1x.jpg';
import imgFruitbox2x from '../img/fruitbox-2x.jpg';
import imgJewelry1x from '../img/jewelry-1x.jpg';
import imgJewelry2x from '../img/jewelry-2x.jpg';
import imgMimino1x from '../img/mimino-1x.jpg';
import imgMimino2x from '../img/mimino-2x.jpg';
import imgPower1x from '../img/power-1x.jpg';
import imgPower2x from '../img/power-2x.jpg';
import imgStarlight1x from '../img/starlight-1x.jpg';
import imgStarlight2x from '../img/starlight-2x.jpg';
import imgVyshyvanka1x from '../img/vyshyvanka-1x.jpg';
import imgVyshyvanka2x from '../img/vyshyvanka-1x.jpg';
import iconArrow from '../img/icons.svg';
document.addEventListener("DOMContentLoaded", () => {
    const projectsList = document.querySelector('.projects-list');
    const loadMoreButton = document.querySelector('.load-more-button');
    const projects = [
        {
            imgSrc1x: imgEnergy1x,
            imgSrc2x: imgEnergy2x,
            alt: 'energy projects',
            stack: 'React, JavaScript, Node JS, Git',
            title: 'ENERGY FLOW WEBSERVICE',
            link: 'https://github.com/Kate-Iva/portfolio-project-14'
        },
        {
            imgSrc1x: imgFruitbox1x,
            imgSrc2x: imgFruitbox2x,
            alt: 'fruitbox projects',
            stack: 'React, JavaScript, Node JS, Git',
            title: 'FRUITBOX ONLINE STORE',
            link: 'https://github.com/Kate-Iva/portfolio-project-14'
        },
        {
            imgSrc1x: imgJewelry1x,
            imgSrc2x: imgJewelry2x,
            alt: 'jewelry projects',
            stack: 'React, JavaScript, Node JS, Git',
            title: 'CHEGO JEWELRY WEBSITE',
            link: 'https://github.com/Kate-Iva/portfolio-project-14'
        },
            {
            imgSrc1x: imgMimino1x,
            imgSrc2x: imgMimino2x,
            alt: 'mimino projects',
            stack: 'React, JavaScript, Node JS, Git',
            title: 'MIMINO WEBSITE',
            link: 'https://github.com/Kate-Iva/portfolio-project-14'
        },
        {
            imgSrc1x: imgPower1x,
            imgSrc2x: imgPower2x,
            alt: 'power projects',
            stack: 'React, JavaScript, Node JS, Git',
            title: 'POWER PULSE WEBSERVICE',
            link: 'https://github.com/Kate-Iva/portfolio-project-14'
        },
        {
            imgSrc1x: imgStarlight1x,
            imgSrc2x: imgStarlight2x,
            alt: 'starlight projects',
            stack: 'React, JavaScript, Node JS, Git',
            title: 'STARLIGHT STUDIO LANDING PAGE',
            link: 'https://github.com/Kate-Iva/portfolio-project-14'
        },
{
            imgSrc1x: imgVyshyvanka1x,
            imgSrc2x: imgVyshyvanka2x,
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
                            <use href="${iconArrow}#icon-arrow-visit"></use>
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