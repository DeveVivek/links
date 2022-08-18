const username = 'DeveVivek';
const linkList = document.querySelector('.link-list');
const linksSection = document.querySelector('.links');
const filterInput = document.querySelector('.filter-links');

const buildIcon = (link) => {
    return `
        <span class='${link.icon}' style='color: ${link.color};'></span>
    `;
};

const buildUrl = (link) => {
    if (link.url.includes('http')) {
        return link.url;
    }
    return 'https://' + link.url + username;
};

const displayLinks = (links) => {
    filterInput.classList.remove('hide');
    for (const link of links) {
        let listItem = document.createElement('li');
        listItem.classList.add('link');
        listItem.innerHTML = `
            <a href=${buildUrl(link)} target='_blank'>
                <div>
                    <h3>
                        ${buildIcon(link)}
                        ${link.name}
                    </h3>
                    <p>${link.description}</p>
                </div>
            </a>`;
        linkList.append(listItem);
    }
};

// dynamic search
filterInput.addEventListener('input', (e) => {
    const search = e.target.value;
    const links = document.querySelectorAll('.link');
    const searchLowerText = search.toLowerCase();

    for (const link of links) {
        const lowerText = link.innerText.toLowerCase();
        if (lowerText.includes(searchLowerText)) {
            link.classList.remove('hide');
        } else {
            link.classList.add('hide');
        }
    }
});

const links = [
    {
        name: 'Portfolio',
        description: 'My own place on the internet',
        url: 'https://devevivek.netlify.app',
        icon: 'fa-brands fa-fort-awesome',
        color: '#1688f0'
    },
    {
        name: 'Blog',
        description: 'I write about tech and stuff',
        url: 'https://devevivek.github.io/DevBlog',
        icon: 'fa-brands fa-blogger',
        color: '#f57c00'
    },
    {
        name: 'GitHub',
        description: 'My favourite place :)',
        url: 'github.com/DeveVivek',
        icon: 'fa-brands fa-github',
        color: '#24292e'
    },
    {
        name: 'LinkedIn',
        description: 'Connections and career updates',
        url: 'https://www.linkedin.com/in/vivek-kumar-27a875233',
        icon: 'fa-brands fa-linkedin',
        color: '#0077B5'
    },{
        name: 'Instagram',
        description: 'When I snap pics and hit record',
        url: 'https://instagram.com/vivekkumar_._',
        icon: 'fa-brands fa-instagram',
        color: '#e1306c'
    },
    {
        name: 'Twitter',
        description: 'Memez, tech, rants, philosophy',
        url: 'twitter.com/codexvivek',
        icon: 'fa-brands fa-twitter',
        color: '#1da1f2'
    },
    
    {
        name: 'Telegram',
        description: 'Connect with me directly',
        url: 'https://t.me/devevivek',
        icon: 'fa-brands fa-telegram',
        color: '#0088cc'
    },

    {
        name: 'Medium',
        description: 'Occasionally Blog on Medium',
        url: 'medium.com/DeveVivek/',
        icon: 'fa-brands fa-medium',
        color: '#888'
    },
    {
        name: 'Facebook',
        description: 'My old memories are here.',
        url: 'https://www.facebook.com/profile.php?id=100013781257658',
        icon: 'fa-brands fa-facebook',
        color: '#008abc'
    },
    {
        name: 'GitLab',
        description: "GitHub's sister",
        url: 'gitlab.com/',
        icon: 'fa-brands fa-gitlab',
        color: '#e34c26'
    },
    {
        name: 'Dev',
        description: 'I share and learn with you!',
        url: 'dev.to/',
        icon: 'fa-brands fa-dev',
        color: '#505050'
    },
    {
        name: 'HackerRank',
        description: 'For problem solving skills',
        url: 'hackerrank.com/',
        icon: 'fa-brands fa-hackerrank',
        color: '#1ba94c'
    },
    {
        name: 'GeeksForGeeks',
        description: 'Tech tutorials and stuff',
        url: '.com/c/',
        icon: 'fa-brands fa-geeksforgeeks',
        color: '#ff0000'
    },    {
        name: 'Leetcode',
        description: 'Lurk mostly, sometimes I post',
        url: 'leetcode.com/devevivek',
        icon: 'fa-brands fa-leetcode',
        color: '#ff4500'
    },
    {
        name: 'CodingNinjas',
        description: 'Where I started web dev',
        url: 'codingninjas.org/',
        icon: 'fa-brands fa-codingninjas',
        color: '#006400'
    },
    {
        name: 'CodeChef',
        description: 'My Competitive Journey',
        url: 'codechef.com/devevivek/',
        icon: 'fa-brands fa-codechef',
        color: '#0057ff'
    },
    {
        name: 'Discord',
        description: "I'll stream someday!",
        url: 'discord.tv/',
        icon: 'fa-brands fa-discord',
        color: '#6441a5'
    },

    {
        name: 'Music - KING',
        description: "My songs Playlist",
        url: 'youtube.com/KING',
        icon: 'fa-brands fa-spotify',
        color: '#1ab7ea'
    }
    
];

displayLinks(links);
