//import Hattara from '../media/hattara.png'; here for testing purposes
import Drillcom from '../media/drillcom.png';
import Ravenous from '../media/ravenous.gif';
import Jammming from '../media/jammming.gif';
import VicJS from '../media/vicjs.png';
import BossMachine from '../media/boss.png';

const projects = [
    {
        id: 1,
        name: 'Ravenous',
        description: 'A React app that searches for restaurants based off ratings.',
        liveUrl: 'https://ravenousfood-vic.surge.sh/',
        repo: 'https://github.com/vicontiveros00/Ravenous',
        src: Ravenous
    },
    {
        id: 2,
        name: 'Jammming',
        description: 'Use the Spotify API to quickly make playlists in your library.',
        liveUrl: 'https://jammmingvic.surge.sh/',
        repo: 'https://github.com/vicontiveros00/Jamming-Spotify',
        src: Jammming
    },
    {
        id: 3,
        name: 'vic.js',
        description: 'My own npm library that\'s constantly expanding.',
        liveUrl: '',
        repo: 'https://github.com/vicontiveros00/vics-library',
        src: VicJS
    },
    {
        id: 4,
        name: 'Drillcom',
        description: 'Drillcom Oy\'s official website made with Bootstrap.',
        liveUrl: 'https://www.drillcom.fi/',
        repo: '',
        src: Drillcom
    },
    {
        id: 5,
        name: 'Boss Machine',
        description: 'API written with Express.js',
        repo: 'https://github.com/vicontiveros00/boss-machine-project',
        src: BossMachine
    }
]

export default projects;