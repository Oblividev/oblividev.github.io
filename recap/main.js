// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Particle.js configuration
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded');
});

// Animate header
gsap.from("header h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5
});

gsap.from("header p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1
});

// Animate sections on scroll
document.querySelectorAll('.section').forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Animate stats
const stats = {
    totalMessages: 145897,
    uniqueChatters: 119
};

function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = Math.ceil(range / (duration / 16)); // Increase increment for faster animation
    let timer = setInterval(function() {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        obj.innerHTML = current.toLocaleString();
    }, 16); // Run every 16ms for smoother animation (approx. 60 FPS)
}

ScrollTrigger.create({
    trigger: "#total-messages",
    start: "top 80%",
    onEnter: () => animateValue("messageCount", 0, stats.totalMessages, 2000)
});

ScrollTrigger.create({
    trigger: "#unique-chatters",
    start: "top 80%",
    onEnter: () => animateValue("uniqueChatters", 0, stats.uniqueChatters, 2000)
});

// Populate top chatters list
const topChatters = [
    { name: 'Phantomspower', messages: 11320 },
    { name: 'minoarno', messages: 7772 },
    { name: 'OfficiallySp', messages: 6864 },
    { name: 'ObliviosaOfficial', messages: 6825 },
    { name: 'ItsChrisyBaby', messages: 6693 },
    { name: 'extremedolphins', messages: 5463 },
    { name: 'Knight1y', messages: 3720 },
    { name: 'TheOneAndOnlyDo', messages: 3692 },
    { name: 'AngleGabriel__', messages: 3623 },
    { name: 'MrXadion', messages: 3523 },
    { name: 'AKIBA212', messages: 3190 },
    { name: 'LowlifePrincessx', messages: 3058 },
    { name: 'FaTtYShOw', messages: 2968 },
    { name: 'OSFrog', messages: 2555 },
    { name: 'shyuwugirl', messages: 2462 },
    { name: 'kotaro_123456', messages: 2377 },
    { name: 'Buildingbob345', messages: 1893 },
    { name: 'FleurDeLocean', messages: 1613 },
    { name: 'firesaffron', messages: 1609 },
    { name: 'KingCobraDK', messages: 1451 },
    { name: 'VelvetGeisha', messages: 1277 },
    { name: 'RD07X__', messages: 1254 },
    { name: 'emilauss', messages: 1226 },
    { name: 'PrizeGottiGaming', messages: 1068 },
    { name: 'Thicc_Loaf', messages: 1020 }
];

const chatterList = document.getElementById('chatter-list');
topChatters.forEach((chatter, index) => {
    const item = document.createElement('div');
    item.className = 'chatter-item';
    item.innerHTML = `
        <span class="chatter-rank">#${index + 1}</span>
        <span class="chatter-name">${chatter.name}</span>
        <div class="chatter-progress">
            <div class="chatter-progress-bar" data-width="${(chatter.messages / topChatters[0].messages) * 100}%"></div>
        </div>
        <span class="chatter-messages">${chatter.messages}</span>
    `;
    chatterList.appendChild(item);
});

// Animate chatter progress bars
gsap.utils.toArray('.chatter-progress-bar').forEach(bar => {
    gsap.to(bar, {
        width: bar.getAttribute('data-width'),
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Animate background
const animatedBg = document.querySelector('.animated-bg');
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    animatedBg.appendChild(star);
}

// Word cloud
const words = [
    {text: 'hello', size: 40},
    {text: 'world', size: 30},
    {text: 'chat', size: 50},
    // ... add more words ...
];

const layout = d3.layout.cloud()
    .size([500, 500])
    .words(words)
    .padding(5)
    .rotate(() => ~~(Math.random() * 2) * 90)
    .font("Impact")
    .fontSize(d => d.size)
    .on("end", draw);

layout.start();

function draw(words) {
    d3.select("#word-cloud-container").append("svg")
        .attr("width", layout.size()[0])
        .attr("height", layout.size()[1])
        .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", d => d.size + "px")
        .style("font-family", "Impact")
        .style("fill", () => d3.schemeCategory10[~~(Math.random() * 10)])
        .attr("text-anchor", "middle")
        .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
        .text(d => d.text);
}

// Chat insights data
const chatInsights = {
    avgMessagesPerStream: "74299",
    longestMessage: "8th January 2024 @ 2:35 PM by minoarno",
    busiestHour: "20:00",
    mostActiveDay: "Thursday",
    lateStream: "12 Times this year",
    timesLivCalledShort: "164"
};

// Animate chat insights
Object.keys(chatInsights).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
        const valueElement = element.querySelector('.insight-value');
        const circleElement = element.querySelector('.insight-circle');
        
        gsap.to(circleElement, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        if (typeof chatInsights[key] === 'number') {
            gsap.to(valueElement, {
                innerHTML: chatInsights[key].toLocaleString(),
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                onUpdate: function() {
                    valueElement.innerHTML = Math.round(this.targets()[0].innerHTML).toLocaleString();
                }
            });
        } else {
            valueElement.innerHTML = chatInsights[key];
        }
    }
});

// Most used words (excluding common words)
const mostUsedWords = [
    { word: "awesome", count: 1523 },
    { word: "poggers", count: 1245 },
    { word: "lol", count: 987 },
    { word: "wow", count: 876 },
    { word: "thanks", count: 765 }
];

// Add this to your existing word cloud code
words.push(...mostUsedWords.map(w => ({ text: w.word, size: w.count / 30 })));

// Restart the word cloud layout with the new words
layout.stop().words(words).start();

// Emote stats
const emotes = [
    { name: ' Lighter ', count: 1477, image: '../assets/livmotes/oblivi118Lighter.png' },
    { name: ' Heart ', count: 1281, image: '../assets/livmotes/oblivi118Heart.png' },
    { name: ' Sip ', count: 1189, image: '../assets/livmotes/oblivi118Sip.gif' },
    { name: ' Cookie ', count: 1100, image: '../assets/livmotes/oblivi118Cookie.gif' },
    { name: ' Blush ', count: 550, image: '../assets/livmotes/oblivi118Blush.png' }
];

const emoteList = document.getElementById('emote-list');
emotes.forEach((emote, index) => {
    const item = document.createElement('div');
    item.className = 'emote-item';
    item.innerHTML = `
        <span class="emote-rank">#${index + 1}</span>
        <img src="${emote.image}" alt="${emote.name}" class="emote-image">
        <span class="emote-name">${emote.name}</span>
        <div class="emote-progress">
            <div class="emote-progress-bar" data-width="${(emote.count / emotes[0].count) * 100}%"></div>
        </div>
        <span class="emote-count">${emote.count}</span>
    `;
    emoteList.appendChild(item);
});

// Animate emote progress bars
gsap.utils.toArray('.emote-progress-bar').forEach(bar => {
    gsap.to(bar, {
        width: bar.getAttribute('data-width'),
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

const highlightContainer = document.querySelector('.highlight-container');
highlights.forEach(highlight => {
    const item = document.createElement('div');
    item.className = 'highlight-item';
    item.innerHTML = `
        <img src="${highlight.image}" alt="${highlight.title}">
        <h3>${highlight.title}</h3>
        <p>${highlight.description}</p>
    `;
    highlightContainer.appendChild(item);
});

// Animate highlight items
gsap.utils.toArray('.highlight-item').forEach((item, index) => {
    gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Stream milestones data
const streamMilestones = [
    { icon: '🏆', title: 'Longest Stream', value: '24 hours' },
    { icon: '👥', title: 'Peak Viewers', value: '941' },
    { icon: '💬', title: 'Most Active Stream', value: '10,000 messages' },
    { icon: '🎉', title: 'Follower Milestone', value: '3k followers' },
    { icon: '💖', title: 'Most Cheers', value: '50,000 bits' },
    { icon: '🎁', title: 'Most Gifted Subs', value: '100 in one stream' }
];

// Populate stream milestones
const milestoneList = document.getElementById('milestone-list');
streamMilestones.forEach(milestone => {
    const item = document.createElement('div');
    item.className = 'milestone-item';
    item.innerHTML = `
        <div class="milestone-icon">${milestone.icon}</div>
        <h3 class="milestone-title">${milestone.title}</h3>
        <p class="milestone-value">${milestone.value}</p>
    `;
    milestoneList.appendChild(item);
});

// Animate stream milestones
gsap.utils.toArray('.milestone-item').forEach((item, index) => {
    gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});