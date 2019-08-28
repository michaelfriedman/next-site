const categories = ['All', 'Finance', 'News', 'E-commerce', 'Creative', 'Entertainment'];
const categoriesShort = ['All', 'Finance', 'News', 'E-comm', 'Creative', 'Entertainment'];

const frontSortOrder = [
  'ticketmaster',
  'invision',
  'marvel',
  'magic-leap',
  'nike',
  'netflix-jobs',
  'uber'
];

const sortOrder = [
  'marvel',
  'uber',
  'invision',
  'magic-leap',
  'nike',
  'netflix-jobs',
  'hulu',
  'audible',
  'boosted-boards',
  'elton-john',
  'binance',
  'ticketmaster',
  'scale',
  'open-collective',
  'styled-components',
  'auth0-careers',
  'iota',
  'twitch',
  'eaze',
  'zeit',
  'a24',
  'avocode',
  'expo',
  'att',
  'sumup',
  'hashnode',
  'jet',
  'weedmaps',
  'ticketswap',
  'ign',
  'dicefm',
  'giveindia',
  'allvoices',
  'sanity',
  'aenetworks',
  'blendle',
  'tencent-news',
  'idean',
  'repl.it',
  'satoshis.place',
  'givecrypto',
  'fontbase',
  'square-enix-games',
  'midrive',
  'stv',
  'hyper',
  'typeform',
  'deliveroo',
  'colorbox',
  'hollar',
  'suburbia',
  'docker',
  'verge',
  'nteract',
  'institchu',
  'lego',
  'syntax.fm',
  'design-better',
  'pusher',
  'staples',
  'worldpopulationreview',
  'bitscreener',
  'starbucksreserve',
  'underbelly',
  'heramerica',
  'lightningdesignsystem',
  'nilefmonline',
  'yicaiglobal',
  'tvpublica',
  'piesync',
  'inflect',
  'eurostar',
  'plotly',
  'artsmia',
  'onuniverse',
  'garticio',
  'trip',
  'material-ui',
  'framer',
  'friday-digital',
  'supervielle',
  'theculturetrip',
  'carbon',
  'vogue',
  'bang-olufsen',
  'futurism',
  'nubank',
  'ferrari',
  'movietickets',
  'mesalva',
  'ohtuleht',
  'stargatecommand',
  'shakeshack',
  'coop',
  'mprnews',
  'thehhub'
];

const mapping = {
  typeform: {
    title: 'Typeform',
    link: 'https://www.typeform.com',
    src: '/static/images/showcases/typeform.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'typeform',
    tags: ['creative']
  },
  blendle: {
    title: 'Blendle',
    link: 'https://blendle.com',
    src: '/static/images/showcases/blendle.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'blendle',
    tags: ['news']
  },
  hollar: {
    title: 'Hollar',
    link: 'https://www.hollar.com',
    src: '/static/images/showcases/hollar.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'hollar',
    tags: ['e-commerce']
  },
  yicaiglobal: {
    title: 'Yicai Global',
    link: 'https://yicaiglobal.com',
    src: '/static/images/showcases/yicaiglobal.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'yicaiglobal',
    tags: ['news']
  },
  artsmia: {
    title: 'Minneapolis Institute of Art',
    link: 'https://new.artsmia.org',
    src: '/static/images/showcases/artsmia.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'artsmia',
    tags: []
  },
  tvpublica: {
    title: 'Televisión Pública Argentina',
    link: 'https://www.tvpublica.com.ar',
    src: '/static/images/showcases/tvpublica.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'tvpublica',
    tags: ['news']
  },
  suburbia: {
    title: 'Suburbia',
    link: 'https://www.suburbia.com.mx',
    src: '/static/images/showcases/suburbia.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'suburbia',
    tags: ['e-commerce']
  },
  att: {
    title: 'AT&T',
    link: 'https://www.att.com',
    src: '/static/images/showcases/att.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'att',
    tags: []
  },
  ticketswap: {
    title: 'TicketSwap',
    link: 'https://www.ticketswap.uk',
    src: '/static/images/showcases/ticketswap.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'ticketswap',
    tags: ['e-commerce']
  },
  ign: {
    title: 'IGN',
    link: 'https://www.ign.com',
    src: '/static/images/showcases/ign.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'ign',
    tags: ['entertainment']
  },
  audible: {
    title: 'Audible',
    link: 'https://www.audible.com/about/',
    src: '/static/images/showcases/audible.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'audible',
    tags: ['entertainment']
  },
  dicefm: {
    title: 'DICE',
    link: 'https://dice.fm',
    src: '/static/images/showcases/dicefm.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'dicefm',
    tags: ['e-commerce']
  },
  nilefmonline: {
    title: 'NileFM',
    link: 'http://nilefmonline.com',
    src: '/static/images/showcases/nilefmonline.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'nilefmonline',
    tags: ['entertainment']
  },
  giveindia: {
    title: 'GiveIndia',
    link: 'https://www.giveindia.org',
    src: '/static/images/showcases/giveindia.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'giveindia',
    tags: []
  },
  allvoices: {
    title: 'AllVoices',
    link: 'https://allvoices.co',
    src: '/static/images/showcases/allvoices.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'allvoices',
    tags: []
  },
  onuniverse: {
    title: 'Universe',
    link: 'https://onuniverse.com',
    src: '/static/images/showcases/onuniverse.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'onuniverse',
    tags: ['creative']
  },
  theculturetrip: {
    title: 'Culture Trip',
    link: 'https://theculturetrip.com',
    src: '/static/images/showcases/theculturetrip.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'theculturetrip',
    tags: ['e-commerce']
  },
  supervielle: {
    title: 'Supervielle',
    link: 'https://www.supervielle.com.ar/personas/tarjetas/credito/mastercard-black',
    src: '/static/images/showcases/supervielle.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'supervielle',
    tags: []
  },
  twitch: {
    title: 'Twitch',
    link: 'https://m.twitch.tv',
    src: '/static/images/showcases/twitch.jpg',
    width: 3836,
    height: 2200,
    highlighted: 1,
    internalUrl: 'twitch',
    tags: ['entertainment']
  },
  lego: {
    title: 'LEGO for Kids',
    link: 'https://www.lego.com/en-us/kids',
    src: '/static/images/showcases/lego.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'lego',
    tags: ['entertainment', 'creative']
  },
  uber: {
    title: 'Uber Marketplace',
    link: 'https://marketplace.uber.com',
    src: '/static/images/showcases/uber.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'uber',
    tags: []
  },
  starbucksreserve: {
    title: 'Starbucks Reserve',
    link: 'https://starbucksreserve.com',
    src: '/static/images/showcases/starbucksreserve.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'starbucksreserve',
    tags: ['e-commerce']
  },
  'material-ui': {
    title: 'Material-UI',
    link: 'https://material-ui.com',
    src: '/static/images/showcases/material-ui.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'material-ui',
    tags: ['creative']
  },
  framer: {
    title: 'Framer Store',
    link: 'https://store.framer.com',
    src: '/static/images/showcases/framer.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'framer',
    highlighted: 2,
    tags: ['creative']
  },
  garticio: {
    title: 'Gartic.io',
    link: 'https://gartic.io',
    src: '/static/images/showcases/garticio.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'garticio',
    tags: ['entertainment', 'creative']
  },
  trip: {
    title: 'Trip.com',
    link: 'https://www.trip.com/travel-guide',
    src: '/static/images/showcases/trip.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'trip',
    tags: ['e-commerce']
  },
  colorbox: {
    title: 'ColorBox',
    link: 'https://www.colorbox.io',
    src: '/static/images/showcases/colorbox.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'colorbox',
    highlighted: 1,
    tags: ['creative']
  },
  inflect: {
    title: 'Inflect Global Marketplace',
    link: 'https://inflect.com',
    src: '/static/images/showcases/inflect.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'inflect'
  },
  piesync: {
    title: 'PieSync',
    link: 'https://www.piesync.com',
    src: '/static/images/showcases/piesync.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'piesync'
  },
  lightningdesignsystem: {
    title: 'Salesforce Lightning Design System',
    link: 'https://www.lightningdesignsystem.com',
    src: '/static/images/showcases/lightningdesignsystem.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'lightningdesignsystem',
    tags: ['creative']
  },
  heramerica: {
    title: 'Her America',
    link: 'https://www.heramerica.com',
    src: '/static/images/showcases/heramerica.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'heramerica'
  },
  bitscreener: {
    title: 'Bitscreener',
    link: 'https://bitscreener.com',
    src: '/static/images/showcases/bitscreener.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'bitscreener',
    tags: ['finance']
  },
  staples: {
    title: 'Staples',
    link: 'https://m.staples.com',
    src: '/static/images/showcases/staples.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'staples',
    highlighted: 2,
    tags: ['e-commerce']
  },
  ticketmaster: {
    title: 'Ticketmaster',
    link: 'https://www.ticketmaster.com/new',
    src: '/static/images/showcases/ticketmaster.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'ticketmaster',
    tags: ['e-commerce']
  },
  verge: {
    title: 'Verge',
    link: 'https://vergecurrency.com',
    src: '/static/images/showcases/verge.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'verge',
    tags: ['finance']
  },
  binance: {
    title: 'Binance',
    link: 'https://www.binance.com',
    src: '/static/images/showcases/binance.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'binance',
    highlighted: 2,
    tags: ['finance']
  },
  pusher: {
    title: 'Pusher',
    link: 'https://pusher.com',
    src: '/static/images/showcases/pusher.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'pusher',
    tags: ['creative']
  },
  aenetworks: {
    title: 'A+E Networks',
    link: 'https://www.aenetworks.com',
    src: '/static/images/showcases/aenetworks.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'aenetworks',
    tags: ['news']
  },
  worldpopulationreview: {
    title: 'World Population Review',
    link: 'http://worldpopulationreview.com',
    src: '/static/images/showcases/worldpopulationreview.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'worldpopulationreview',
    tags: ['news']
  },
  underbelly: {
    title: 'Underbelly',
    link: 'https://underbelly.is',
    src: '/static/images/showcases/underbelly.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'underbelly',
    tags: ['e-commerce', 'creative']
  },
  'syntax.fm': {
    title: 'Syntax',
    link: 'https://syntax.fm',
    src: '/static/images/showcases/syntax.fm.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'syntax.fm',
    tags: ['creative']
  },
  institchu: {
    title: 'InStitchu',
    link: 'https://www.institchu.com',
    src: '/static/images/showcases/institchu.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'institchu',
    tags: ['e-commerce']
  },
  nteract: {
    title: 'nteract',
    link: 'https://nteract.io',
    src: '/static/images/showcases/nteract.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'nteract',
    tags: ['creative']
  },
  'square-enix-games': {
    title: 'Square Enix',
    link: 'https://square-enix-games.com/en_US',
    src: '/static/images/showcases/square-enix-games.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'square-enix-games',
    highlighted: 1,
    tags: ['entertainment']
  },
  docker: {
    title: 'Docker',
    link: 'https://success.docker.com',
    src: '/static/images/showcases/docker.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'docker',
    tags: ['dev']
  },
  plotly: {
    title: 'Plotly',
    link: 'https://plot.ly',
    src: '/static/images/showcases/plotly.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'plotly',
    tags: ['creative']
  },
  deliveroo: {
    title: 'Deliveroo',
    link: 'https://deliveroo.co.uk',
    src: '/static/images/showcases/deliveroo.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'deliveroo',
    tags: ['e-commerce']
  },
  eurostar: {
    title: 'Eurostar',
    link: 'https://hotels.eurostar.com/uk-en/paris',
    src: '/static/images/showcases/eurostar.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'eurostar',
    tags: ['e-commerce']
  },
  stv: {
    title: 'STV',
    link: 'https://stv.tv',
    src: '/static/images/showcases/stv.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'stv',
    tags: ['entertainment']
  },
  midrive: {
    title: 'Midrive',
    link: 'https://midrive.com',
    src: '/static/images/showcases/midrive.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'midrive',
    tags: ['e-commerce']
  },
  fontbase: {
    title: 'FontBase',
    link: 'https://fontba.se',
    src: '/static/images/showcases/fontbase.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'fontbase',
    tags: ['creative']
  },
  givecrypto: {
    title: 'GiveCrypto',
    link: 'https://www.givecrypto.org',
    src: '/static/images/showcases/givecrypto.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'givecrypto',
    tags: ['finance']
  },
  'satoshis.place': {
    title: "Satoshi's Place",
    link: 'https://satoshis.place',
    src: '/static/images/showcases/satoshis.place.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'satoshis.place',
    tags: ['finance']
  },
  'repl.it': {
    title: 'repl.it',
    link: 'https://repl.it',
    src: '/static/images/showcases/repl.it.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'repl.it',
    tags: ['dev']
  },
  'styled-components': {
    title: 'styled-components',
    link: 'https://www.styled-components.com',
    src: '/static/images/showcases/styled-components.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'styled-components',
    tags: ['dev']
  },
  'tencent-news': {
    title: 'Tencent News',
    link: 'https://xw.qq.com',
    src: '/static/images/showcases/tencentnews.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'tencent-news',
    highlighted: 2,
    tags: ['news']
  },
  jet: {
    title: 'Jet',
    link: 'https://jet.com',
    src: '/static/images/showcases/jet.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'jet',
    highlighted: 1,
    tags: ['e-commerce']
  },
  idean: {
    title: 'Idean',
    link: 'https://www.idean.com',
    src: '/static/images/showcases/idean.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'idean',
    tags: ['creative']
  },
  'magic-leap': {
    title: 'Magic Leap',
    link: 'https://magicleap.com',
    src: '/static/images/showcases/showcases-00.jpg',
    width: 1280,
    height: 734,
    internalUrl: 'magic-leap',
    highlighted: 1,
    tags: ['entertainment']
  },
  marvel: {
    title: 'Marvel',
    link: 'https://www.marvel.com',
    src: '/static/images/showcases/marvel.jpg',
    width: 3840,
    height: 2204,
    internalUrl: 'marvel',
    tags: ['entertainment']
  },
  nike: {
    title: 'Nike',
    link: 'https://www.nike.com/help',
    src: '/static/images/showcases/nike.jpg',
    width: 3840,
    height: 2206,
    internalUrl: 'nike'
  },
  'boosted-boards': {
    title: 'Boosted Boards',
    link: 'http://boostedboards.com',
    src: '/static/images/showcases/boosted.jpg',
    width: 3840,
    height: 2206,
    internalUrl: 'boosted-boards',
    tags: ['e-commerce']
  },
  eaze: {
    title: 'Eaze',
    link: 'https://www.eaze.com',
    src: '/static/images/showcases/showcases-01.jpg',
    width: 3832,
    height: 2198,
    internalUrl: 'eaze',
    tags: ['e-commerce']
  },
  'netflix-jobs': {
    title: 'Netflix Jobs',
    link: 'https://jobs.netflix.com',
    src: '/static/images/showcases/showcases-02.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'netflix-jobs',
    tags: ['entertainment']
  },
  'auth0-careers': {
    title: 'Auth0 Careers',
    link: 'https://auth0.com/careers',
    src: '/static/images/showcases/showcases-03.jpg',
    width: 3828,
    height: 2184,
    internalUrl: 'auth0-careers',
    tags: ['creative']
  },
  scale: {
    title: 'Scale',
    link: 'https://scale.ai',
    src: '/static/images/showcases/showcases-04.jpg',
    width: 3836,
    height: 2198,
    internalUrl: 'scale',
    tags: ['creative']
  },
  'elton-john': {
    title: 'Elton John',
    link: 'https://www.eltonjohn.com',
    src: '/static/images/showcases/showcases-05.jpg',
    width: 3840,
    height: 2206,
    internalUrl: 'elton-john',
    tags: ['creative', 'entertainment']
  },
  'open-collective': {
    title: 'Open Collective',
    link: 'https://opencollective.com',
    src: '/static/images/showcases/showcases-06.jpg',
    width: 3836,
    height: 2206,
    internalUrl: 'open-collective',
    tags: ['creative']
  },
  a24: {
    title: 'A24',
    link: 'https://www.a24.com',
    src: '/static/images/showcases/showcases-07.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'a24',
    tags: ['news']
  },
  hyper: {
    title: 'Hyper',
    link: 'https://hyper.is',
    src: '/static/images/showcases/showcases-08.jpg',
    width: 3828,
    height: 2198,
    internalUrl: 'hyper',
    tags: ['dev']
  },
  zeit: {
    title: 'ZEIT',
    link: 'https://zeit.co',
    src: '/static/images/showcases/showcases-09.jpg',
    width: 3836,
    height: 2198,
    internalUrl: 'zeit',
    tags: ['creative']
  },
  avocode: {
    title: 'Avocode',
    link: 'https://avocode.com',
    src: '/static/images/showcases/avocode.jpg',
    width: 3836,
    height: 2204,
    internalUrl: 'avocode',
    tags: ['creative']
  },
  iota: {
    title: 'IOTA',
    link: 'https://www.iota.org',
    src: '/static/images/showcases/iota.jpg',
    width: 3832,
    height: 2200,
    internalUrl: 'iota',
    tags: ['dev', 'finance']
  },
  expo: {
    title: 'Expo',
    link: 'https://expo.io',
    src: '/static/images/showcases/showcases-13.jpg',
    width: 3830,
    height: 2196,
    internalUrl: 'expo',
    tags: ['dev', 'creative']
  },
  sumup: {
    title: 'Sumup',
    link: 'https://sumup.com',
    src: '/static/images/showcases/showcases-14.jpg',
    width: 3830,
    height: 2194,
    internalUrl: 'sumup',
    tags: ['finance']
  },
  hashnode: {
    title: 'Hashnode',
    link: 'https://hashnode.com',
    src: '/static/images/showcases/showcases-15.jpg',
    width: 3830,
    height: 2194,
    internalUrl: 'hashnode',
    tags: ['dev']
  },
  invision: {
    title: 'Invision',
    link: 'https://www.invisionapp.com',
    src: '/static/images/showcases/showcases-16.jpg',
    width: 3830,
    height: 2200,
    internalUrl: 'invision',
    tags: ['dev', 'creative']
  },
  hulu: {
    title: 'Hulu',
    link: 'https://www.hulu.com',
    src: '/static/images/showcases/showcases-17.jpg',
    width: 3832,
    height: 2198,
    internalUrl: 'hulu',
    tags: ['entertainment']
  },
  'design-better': {
    title: 'DesignBetter.co',
    link: 'https://www.designbetter.co',
    src: '/static/images/showcases/showcases-18.jpg',
    width: 3832,
    height: 2194,
    internalUrl: 'design-better',
    tags: ['dev', 'creative']
  },
  weedmaps: {
    title: 'Weedmaps',
    link: 'https://weedmaps.com',
    src: '/static/images/showcases/showcases-19.jpg',
    width: 1920,
    height: 1081,
    internalUrl: 'weedmaps',
    tags: ['e-commerce']
  },
  sanity: {
    title: 'Sanity.io',
    link: 'https://sanity.io',
    src: '/static/images/showcases/showcases-20.jpg',
    width: 3840,
    height: 2162,
    internalUrl: 'sanity',
    tags: ['dev', 'creative']
  },
  'friday-digital': {
    title: 'FRIDAY DIGITAL',
    link: 'https://friday.kodansha.co.jp',
    src: '/static/images/showcases/friday-digital.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'friday-digital',
    tags: ['news', 'entertainment']
  },
  carbon: {
    title: 'Carbon',
    link: 'https://carbon.now.sh',
    src: '/static/images/showcases/carbon.jpg',
    width: 2880,
    height: 1800,
    internalUrl: 'carbon',
    tags: ['dev', 'creative']
  },
  vogue: {
    title: 'Vogue Fashion Shows',
    link: 'https://www.vogue.de/fashion-shows',
    src: '/static/images/showcases/vogue-fashion-shows.png',
    width: 2560,
    height: 1282,
    internalUrl: 'vogue',
    tags: ['news', 'creative']
  },
  'bang-olufsen': {
    title: 'BANG & OLUFSEN',
    link: 'https://www.bang-olufsen.com',
    src: '/static/images/showcases/bang-olufsen.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'bang-olufsen',
    tags: ['e-commerce']
  },
  futurism: {
    title: 'Futurism',
    link: 'https://www.futurism.com',
    src: '/static/images/showcases/futurism.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'futurism',
    tags: ['news']
  },
  nubank: {
    title: 'Nubank',
    link: 'https://nubank.com.br',
    src: '/static/images/showcases/nubank.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'nubank',
    tags: ['finance']
  },
  ferrari: {
    title: 'Ferrari',
    link: 'https://www.ferrari.com',
    src: '/static/images/showcases/ferrari.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'ferrari',
    tags: ['entertainment'],
    highlighted: 1
  },
  movietickets: {
    title: 'MovieTickets',
    link: 'https://www.movietickets.com',
    src: '/static/images/showcases/movietickets.jpg',
    width: 3840,
    height: 2159,
    internalUrl: 'movietickets',
    tags: ['e-commerce', 'entertainment']
  },
  mesalva: {
    title: 'Me Salva!',
    link: 'https://www.mesalva.com',
    src: '/static/images/showcases/mesalva.png',
    width: 3840,
    height: 2159,
    internalUrl: 'mesalva',
    tags: ['education']
  },
  ohtuleht: {
    title: 'Õhtuleht',
    link: 'https://www.ohtuleht.ee',
    src: '/static/images/showcases/ohtuleht.jpg',
    width: 3840,
    height: 2159,
    internalUrl: 'ohtuleht',
    tags: ['news']
  },
  stargatecommand: {
    title: 'Stargate Command',
    link: 'https://www.stargatecommand.co',
    src: '/static/images/showcases/stargatecommand.jpg',
    width: 3840,
    height: 2159,
    internalUrl: 'stargatecommand',
    tags: ['entertainment']
  },
  shakeshack: {
    title: 'Shake Shack',
    link: 'https://order.shakeshack.com/',
    src: '/static/images/showcases/shakeshack.jpg',
    width: 3840,
    height: 2159,
    internalUrl: 'shakeshack',
    tags: ['e-commerce']
  },
  coop: {
    title: 'Co-op Shop',
    link: 'https://shop.coop.co.uk',
    src: '/static/images/showcases/coop.png',
    width: 3840,
    height: 2159,
    internalUrl: 'coop',
    tags: ['e-commerce']
  },
  mprnews: {
    title: 'MPR News',
    link: 'https://www.mprnews.org',
    src: '/static/images/showcases/mprnews.jpg',
    width: 3840,
    height: 2159,
    internalUrl: 'mprnews',
    tags: ['news']
  },
  thehhub: {
    title: 'TheHHub',
    link: 'https://www.thehhub.com',
    src: '/static/images/showcases/thehhub.jpg',
    width: 3836,
    height: 2200,
    internalUrl: 'thehhub',
    tags: ['creative']
  }
};

module.exports = {
  categories,
  categoriesShort,
  sortOrder,
  frontSortOrder,
  mapping
};
