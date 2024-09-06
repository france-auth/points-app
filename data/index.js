import {
    userIcon,
    emptyHeart,
    inviteIcon,
    questIcon,
    purpleBg,
    purpleBgModal,
    blueBg,
    blueBgModal,
    greenBg,
    greenBgModal,
    yellowBg,
    yellowBgModal,
    musicHg,
    musicHgModal,
    birdHg,
    birdHgModal,
    milliHg,
    milliHgModal,
    sleepyHg,
    sleepyHgModal,
    glassesFw,
    glassesFwModal,
    blushFw,
    blushFwModal,
    blackFw,
    blackFwModal,
    lv100,
    lv100Modal,
    popsicle,
    popsicleModal,
    mushroom,
    mushroomModal,
    loveBubble,
    loveBubbleModal,
    bubble,
    bubbleModal} from '@/public/assets/images/index'

export const hashs = [
    {
        id: 1,
        hash: "#Memecoiner"
    },
    {
        id: 2,
        hash: "#Calm"
    },
    {
        id: 3,
        hash: "#Calm"
    },
    {
        id: 4,
        hash: "#TooMuchTalker"
    }
]

export const navLinks = [
    {
        id: 1,
        title: 'MESSAGE',
        path: "/"
    },
    {
        id: 2,
        title: 'ITEM',
        path: "/item"
    },
    {
        id: 3,
        title: 'QUEST',
        path: "/quest"
    },
    {
        id: 4,
        title: 'RANKING',
        path: "/ranking"
    },
    {
        id: 5,
        title: 'INVITE',
        path: "/invite"
    },
];

export const quests = [
    {
        id: 1,
        icon: questIcon,
        task: "Daily Check in",
        taskDetails: "Log in once daily. Daily missions reset at 00:00 UTC.",
        xp: "+100P",
        arrow: ">",
        lastClaimed: null,
        isClaimable: null,
        isClaimed: null
    },
    {
        id: 2,
        icon: questIcon,
        task: "Chat with soul",
        taskDetails: "Talk with your Soul once a day. Daily missions reset at 00:00 UTC.",
        xp: "+100P",
        arrow: ">",
        lastClaimed: null,
        isClaimable: null,
        isClaimed: null
    },
    {
        id: 3,
        icon: questIcon,
        task: "Tap your Soul",
        taskDetails: "Tap at least 10 times a day. Daily missions reset at 00:00 UTC.",
        xp: "+100P",
        arrow: ">",
        lastClaimed: null,
        isClaimable: null,
        isClaimed: null
    },
];

export const missions = [
    {
        id: 1,
        icon: questIcon,
        task: "Follow X",
        taskDetails: "Follow @Alterim.ai on X (link)",
        xp: "+100P",
        arrow: ">",
        lastClaimed: null,
        isClaimable: null,
        isClaimed: null,
        url: "https://www.twitter.com"
    },
    {
        id: 2,
        icon: questIcon,
        task: "Join Discord",
        taskDetails: "Join our Discord channel",
        xp: "+100P",
        arrow: ">",
        lastClaimed: null,
        isClaimable: null,
        isClaimed: null,
        url: "https://www.discord.com"
    },
    {
        id: 3,
        icon: questIcon,
        task: "Generate Alterim AI",
        taskDetails: "Visit alterim.ai, generate a Soul for your NFT, then share it on X",
        xp: "+500P",
        arrow: ">",
        lastClaimed: null,
        isClaimable: null,
        isClaimed: null,
        url: "https://www.x.com"
    },
    {
        id: 4,
        icon: questIcon,
        task: "RT and Like our X POST!",
        taskDetails: "Retweet and Like our X post",
        xp: "+200P",
        arrow: ">",
        lastClaimed: null,
        isClaimable: null,
        isClaimed: null,
        url: "https://www.x.com"
    },
];

export const invites = [
    {
        id: 1,
        icon: inviteIcon,
        name: "Name",
        points: "624,000P",
        rank: "PLATINUM",
        earnedXp: "+ 4,000P",
    },
    {
        id: 2,
        icon: inviteIcon,
        name: "Name",
        points: "624,000P",
        rank: "PLATINUM",
        earnedXp: "+ 4,000P",
    },
    {
        id: 3,
        icon: inviteIcon,
        name: "Name",
        points: "624,000P",
        rank: "PLATINUM",
        earnedXp: "+ 4,000P",
    },
    {
        id: 4,
        icon: inviteIcon,
        name: "Name",
        points: "624,000P",
        rank: "PLATINUM",
        earnedXp: "+ 4,000P",
    },
    {
        id: 5,
        icon: inviteIcon,
        name: "Name",
        points: "624,000P",
        rank: "PLATINUM",
        earnedXp: "+ 4,000P",
    },
];

export const inviteRewards = [
    {
        id: 1,
        invite: "1 invite: 10 points per person,  no bonus",
    },
    {
        id: 2,
        invite: "5 invites: 50 points + 10 point bonus (10% increase)",
    },
    {
        id: 3,
        invite: "10 invites: 100 points + 50 point bonus (50% increase)",
    },
    {
        id: 4,
        invite: "25 invites: 250 points + 150 point bonus (150% increase)",
    },
    {
        id: 5,
        invite: "50 invites: 500 points + 400 point bonus (400% increase)",
    },
    {
        id: 6,
        invite: "100 invites: 1,000 points + 1,000 point bonus (1,000% increase)",
    },
    {
        id: 7,
        invite: "Base points: 10 per invited user Bonuses increase with invites",
    },
];

export const rankings = [
    {
        id: 1,
        icon: userIcon,
        name: "Name",
        rank: "180,203,223",
    },
    {
        id: 2,
        icon: userIcon,
        name: "Name",
        rank: "180,203,223",
    },
    {
        id: 3,
        icon: userIcon,
        name: "Name",
        rank: "180,203,223",
    },
    {
        id: 4,
        icon: userIcon,
        name: "Name",
        rank: "180,203,223",
    },
    {
        id: 5,
        icon: userIcon,
        name: "Name",
        rank: "180,203,223",
    },
    {
        id: 6,
        icon: userIcon,
        name: "Name",
        rank: "180,203,223",
    },
    {
        id: 7,
        icon: userIcon,
        name: "Name",
        rank: "180,203,223",
    },
    {
        id: 8,
        icon: userIcon,
        name: "Name",
        rank: "180,203,223",
    },
    {
        id: 9,
        icon: userIcon,
        name: "Name",
        rank: "180,203,223",
    },
    {
        id: 10,
        icon: userIcon,
        name: "Name",
        rank: "180,203,223",
    },
];

export const rankPageButtons = [
    {
        page: 1
    },
    {
        page: 2
    },
    {
        page: 3
    },
    {
        page: 4
    },
    {
        page: 5
    },
]

export const backgrounds = [
    {
        id: 1,
        img: purpleBg,
        modalImg: purpleBgModal,
        name: "Purple",
        info: "Equip this skin to send 2 extra chat messages daily",
        price: "100P",
    },
    {
        id: 2,
        img: blueBg,
        modalImg: blueBgModal,
        name: "Blue",
        info: "Equip this skin to increase affection 20% faster",
        price: "500P",
    },
    {
        id: 3,
        img: greenBg,
        modalImg: greenBgModal,
        name: "Green",
        info: "Equip this skin to slow battery drain by 20%",
        price: "1,000P",
    },
    {
        id: 4,
        img: yellowBg,
        modalImg: yellowBgModal,
        name: "Yellow",
        info: "Equip this skin to boost other equipped items' effects by 10%",
        price: "2,000P",
    },
];

export const headgears = [
    {
        id: 1,
        img: musicHg,
        modalImg: musicHgModal,
        name: "Music",
        info: "Wanna chat about music?",
        price: "1,000P",
    },
    {
        id: 2,
        img: birdHg,
        modalImg: birdHgModal,
        name: "Bird",
        info: "A bird's nest on your head!",
        price: "5,000P",
    },
    {
        id: 3,
        img: milliHg,
        modalImg: milliHgModal,
        name: "Milly",
        info: "How about a Soul in military style?",
        price: "10,000P",
    },
    {
        id: 4,
        img: sleepyHg,
        modalImg: sleepyHgModal,
        name: "Night",
        info: "Struggling with insomnia? Let's chat and help you drift off to a deep sleep.",
        price: "20,000P",
    },
];

export const facewears = [
    {
        id: 1,
        img: glassesFw,
        modalImg: glassesFwModal,
        name: "Glasses",
        info: "Calling all nerds! This item's for you.",
        price: "20,000P",
    },
    {
        id: 2,
        img: blushFw,
        modalImg: blushFwModal,
        name: "Blush",
        info: "In the mood for a heart-fluttering chat?",
        price: "10,000P",
    },
    {
        id: 3,
        img: blackFw,
        modalImg: blackFwModal,
        name: "Black",
        info: "Are you into hip-hop?",
        price: "5,000P",
    },
    {
        id: 4,
        img: lv100,
        modalImg: lv100Modal,
        name: "Lv100",
        info: "Ultimate level up! Be the strongest Soul",
        price: "2,000P",
    },
];

export const tapBoosts = [
    {
        img: popsicle,
        modalImg: popsicleModal,
        name: "Popsicle",
        info: "Double tap points for 30 minutes Purchasable once every 24 hours",
        price: "1,000P",
        arrow: ">"
    },
    {
        img: mushroom,
        modalImg: mushroomModal,
        name: "Mushroom",
        info: "Earn +5 extra points per tap for 30 minutes Purchasable once every 24 hours",
        price: "10,000P",
        arrow: ">"
    },
]

export const chatRechargePotions = [
    {
        img: bubble,
        modalImg: bubbleModal,
        name: "Bubble",
        info: "Recharge 2 chat sessions Purchasable once every 24 hours",
        price: "1,000P",
        arrow: ">"
    },
    {
        img: loveBubble,
        modalImg: loveBubbleModal,
        name: "Love Bubble",
        info: "Recharge 24 chat sessions Purchasable once every 24 hours",
        price: "10,000P",
        arrow: ">"
    },
]

export const love = [
    {
        id: 1,
        img: emptyHeart
    },
    {
        id: 2,
        img: emptyHeart
    },
    {
        id: 3,
        img: emptyHeart
    },
    {
        id: 4,
        img: emptyHeart
    },
    {
        id: 5,
        img: emptyHeart
    }
]

export const dropdownItems = [
    {
        
    }
]