//import Hattara from '../media/hattara.png'; //placeholder image
import Drillcom from '../media/drillcom.png';
import Ravenous from '../media/ravenous.gif';
import Jammming from '../media/jammming.gif';
//import VicJS from '../media/vicjs.png';
import BossMachine from '../media/boss.png';
import PikkuUrl from '../media/pikkuurl.gif';
//import Cards from '../media/cards.gif';
import Note from '../media/note.PNG';
import Bike from '../media/bikes.gif';
import Pokedex from '../media/pokedex.gif';

const projects = [
    {
        id: 0,
        name: 'React.js Pokédex',
        description: "Using the PokéAPI, quickly view stats and weakness for any Pokémon",
        liveUrl: 'vics-pokedex.surge.sh',
        repo: 'https://github.com/vicontiveros00/Pokedex',
        src: Pokedex
    },
    {
        id: 1,
        name: 'Helsinki Bike App',
        description: 'View and get info about all bike rental stations in HEL. Full stack project.',
        liveUrl: 'https://helbikeapp.surge.sh/',
        repo: 'https://github.com/vicontiveros00/Helsinki-City-Bike-App',
        src: Bike
    },
    {
        id: 2,
        name: 'Post It',
        description: 'Live message board written in Next.js with a REST API in Pocketbase',
        liveUrl: 'https://post-it-topaz.vercel.app/',
        repo: 'https://github.com/vicontiveros00/post-it',
        src: Note
    },
    {
        id: 3,
        name: 'pikkuURL',
        description: 'Link shortener and QR code generator in React and Vite',
        liveUrl: 'https://pikkuurl.surge.sh/',
        repo: 'https://github.com/vicontiveros00/pikkuurl',
        src: PikkuUrl
    },
    {
        id: 4,
        name: 'Ravenous',
        description: 'A React app that searches for restaurants based off ratings.',
        liveUrl: 'https://ravenousfood-vic.surge.sh/',
        repo: 'https://github.com/vicontiveros00/Ravenous',
        src: Ravenous
    },
    {
        id: 5,
        name: 'Jammming',
        description: 'Use the Spotify API to quickly make playlists in your library.',
        liveUrl: 'https://jammmingvic.surge.sh/',
        repo: 'https://github.com/vicontiveros00/Jamming-Spotify',
        src: Jammming
    },
    {
        id: 6,
        name: 'Boss Machine',
        description: 'An API for evil masterminds written with Express.js',
        repo: 'https://github.com/vicontiveros00/boss-machine-project',
        src: BossMachine
    },
    /*{
        id: 7,
        name: 'Pushing my CSS Skills',
        description: 'Lots of animations and use of bezier curves',
        liveUrl: 'http://cool-rabbit-cards.surge.sh/',
        repo: 'https://github.com/vicontiveros00/cool-rabbit-cards',
        src: Cards
    },
    {
        id: 8,
        name: 'vic.js',
        description: 'My own npm library that\'s constantly expanding.',
        liveUrl: '',
        repo: 'https://github.com/vicontiveros00/vics-library',
        src: VicJS
    },*/
    {
        id: 9,
        name: 'Drillcom',
        description: 'Drillcom Oy\'s official website made with Bootstrap.',
        liveUrl: 'https://www.drillcom.fi/',
        repo: '',
        src: Drillcom
    },
]

export default projects;