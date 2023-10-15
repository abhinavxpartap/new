import React from 'react'

import appLogo from '../images/amplichat_iphones_two.png'

import coverImage from '../images/amplichat_iphones_two.png'

// endorsement images
import dreamhub_filled from '../images/dreamhub_filled.png'
import voiceqna_filled from '../images/voiceqna_fill_v2_gradient.png'
import voicemirror_filled from '../images/voice_mirror_v_1024.png'
import bazipaipai_unfilled from '../images/bazipaipai_64.png'
import spindrifthome_filled from '../images/sh_unfill_1024.png'




export const initialState = {
    

    appLogo: appLogo,
    appName: 'MOBCODERS',

    coverTitle: 'You’re like a style guide … you add consistency to my life.',
    coverText: 'You must be an SEO expert, because you rank #1 on my list',
    coverImage: coverImage,

    endorsementTitle: `Strive not to be a success, but rather to be of value.`,
    endorsementText: `MOBCODERS powers conversations within DreamHubs, VoiceQn, VoiceMirrorz, BaZiPai, and Spindrift.`,
    endorsementList: [
        {
            title: `DreamHubs: Visualized Stories into Reality`,
            titleColor: `orangeRed`,
            image: dreamhub_filled,
            URL: '#',
        },
        {
            title: `VoiceQn: Speak a New Language`,
            titleColor: `forestGreen`,
            image: voiceqna_filled,
            URL: `#`,
        },
        {
            title: `VoiceMirrorz: Travel with pocket Translator`,
            titleColor: `blue`,
            image: voicemirror_filled,
            URL: `#`,
        },
        {
            title: `BaZiPai: Know Your Destiny`,
            titleColor: `black`,
            image: bazipaipai_unfilled,
            URL: `#`,
        },
        {
            title: `Spindrift: HOA Management`,
            titleColor: `orangeRed`,
            image: spindrifthome_filled,
            URL: `#`,
        },
    ],

    sectionList: [
        {
            'title': `Travelling Made Easy with Our new AIMap`,
            'text': `Tired of shouting over the music to talk to your friends at Road trips ? Our app makes it easy to chat with others in real-time, so you can enjoy the experience without missing out on Roadtrips as Only Looking at maps and all.`,
            'image': "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            'title': `Expand Your Community`,
            'text': `Meet like-minded people and share your excitement for the latest Trips and concerts. `,
            'image': `https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=600`,
        },
        {
            'title': `Enhance Love Experience`,
            'text': `Get instant access to a community of passionate like-minded People with our app! Chat with others  during, and after to enhance your experience and create memories that last a lifetime.`,
            'image': "https://images.pexels.com/photos/6833567/pexels-photo-6833567.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            'title': `Chat with Attendees`,
            'text': `Don't let social anxiety get in the way of enjoying ! With our app, you can chat with others and make new friends in a safe, welcoming environment.`,
            'image': "https://images.pexels.com/photos/8284723/pexels-photo-8284723.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            'title': `Discover Learn and Trade`,
            'text': `Our app is the perfect way to enhance your experience at events! Connect with others, share your thoughts and opinions, and discover new Trade triks.`,
            'image': "https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ],

}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)
