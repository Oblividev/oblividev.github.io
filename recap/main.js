// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

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

// Populate top chatters list
const topChatters = [
    { name: 'Phantomspower', messages: 11802 },
    { name: 'minoarno', messages: 7824 },
    { name: 'OfficiallySp', messages: 7516 },
    { name: 'ItsChrisyBaby', messages: 7143 },
    { name: 'ObliviosaOfficial', messages: 7005 },
    { name: 'extremedolphins', messages: 5463 },
    { name: 'AngleGabriel__', messages: 4083 },
    { name: 'TheOneAndOnlyDo', messages: 3948 },
    { name: 'Knight1y', messages: 3825 },
    { name: 'MrXadion', messages: 3655 },
    { name: 'AKIBA212', messages: 3234 },
    { name: 'FaTtYShOw', messages: 3098 },
    { name: 'LowlifePrincessx', messages: 3058 },
    { name: 'OSFrog', messages: 2763 },
    { name: 'shyuwugirl', messages: 2721 },
    { name: 'kotaro_123456', messages: 2675 },
    { name: 'Buildingbob345', messages: 1950 },
    { name: 'firesaffron', messages: 1622 },
    { name: 'FleurDeLocean', messages: 1613 },
    { name: 'KingCobraDK', messages: 1473 },
    { name: 'RD07X__', messages: 1354 },
    { name: 'VelvetGeisha', messages: 1277 },
    { name: 'emilauss', messages: 1240 },
    { name: 'PrizeGottiGaming', messages: 1068 },
    { name: 'Thicc_Loaf', messages: 1041 }
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

// Chat insights data
const chatInsights = {
    avgMessagesPerStream: "152894",
    longestMessage: "8th January 2024 @ 2:35 PM by minoarno",
    busiestHour: "1250",
    mostActiveDay: "Thursday",
    lateStream: "12 Times this year",
    timesLivCalledShort: "81"
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

// Emote stats
const emotes = [
    { name: ' Lighter ', count: 1502, image: '../assets/livmotes/oblivi118Lighter.png' },
    { name: ' Heart ', count: 1365, image: '../assets/livmotes/oblivi118Heart.png' },
    { name: ' Sip ', count: 1196, image: '../assets/livmotes/oblivi118Sip.gif' },
    { name: ' Cookie ', count: 1161, image: '../assets/livmotes/oblivi118Cookie.gif' },
    { name: ' Blush ', count: 697, image: '../assets/livmotes/oblivi118Blush.png' }
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
    { icon: '💬', title: 'Most Active Stream', value: '5548 messages' },
    { icon: '🎉', title: 'Latest Follower Milestone', value: '2,980 followers' },
    { icon: '💖', title: 'Most Cheers', value: '10,451 bits in one stream' },
    { icon: '🎁', title: 'Most Gifted Subs', value: '703 in one stream' }
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

// Confetti effect for milestones
function triggerConfetti() {
    confetti({
        particleCount: 1000,
        spread: 1000,
        origin: { y: 0.5 }
    });
}

// Trigger confetti when milestone section is in view
ScrollTrigger.create({
    trigger: "#stream-milestones",
    start: "top center",
    onEnter: triggerConfetti
});

// Scroll to top functionality
const scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};