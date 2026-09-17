// ---------------------------------------------------------------------------
// All project content lives here. To add / edit a project, only touch this
// file + drop your media in src/assets/projects/<project>/...
//
// media.images -> array of { src, alt }
// media.videos -> array of { src, poster?, caption? }
// media.gifs -> array of { src, alt }
// Import assets at the top so Vite bundles them correctly.
// ---------------------------------------------------------------------------

// --- Swipe Clean --------------------------------------------------
import swipecleanLogo from '../assets/projects/swipe-clean/images/logo_transparant.png'
import swipe1Logo from '../assets/projects/swipe-clean/images/1.png'
import swipe2Logo from '../assets/projects/swipe-clean/images/2.png'
import swipe3Logo from '../assets/projects/swipe-clean/images/3.png'
import swipe4Logo from '../assets/projects/swipe-clean/images/4.png'
import swipeVideo from '../assets/projects/swipe-clean/videos/presentation.mp4'

// --- Modern Edge ----------------------------------------------------------
import modernEdge1 from '../assets/projects/modern-edge/images/1watchface.png'
import modernEdge2 from '../assets/projects/modern-edge/images/2watchface.png'
import modernEdge3 from '../assets/projects/modern-edge/images/3watchface.png'
import modernEdge4 from '../assets/projects/modern-edge/images/4watchface.png'
import modernEdge5 from '../assets/projects/modern-edge/images/5watchface.png'
import modernEdge6 from '../assets/projects/modern-edge/images/6watchface.png'
import modernEdgeLogo from '../assets/projects/modern-edge/images/modernedgeLogo.png'
import modernEdgeMockup from '../assets/projects/modern-edge/images/mockup-1.png'

// --- Radar Time -------------------------------------------------------------
// import radarTimeBlue from '../assets/projects/radar-time/images/blue.png'

// --- Pharma delivery --------------------------------------------------------
import deliveryScreen1 from '../assets/projects/pharma-delivery/figma/delivery.png'
import deliveryScreen2 from '../assets/projects/pharma-delivery/figma/deliveries.png'
import deliveryScreen3 from '../assets/projects/pharma-delivery/figma/scan.png'
import deliveryScreen4 from '../assets/projects/pharma-delivery/figma/profile.png'
import deliveryLogo from '../assets/projects/pharma-delivery/figma/deliveryLogo.png'

// --- Madic pump --------------------------------------------------------------
import madicGif1 from '../assets/projects/madic-pump/gifs/insert.gif'
import madicGif2 from '../assets/projects/madic-pump/gifs/remove.gif'
import madicGif3 from '../assets/projects/madic-pump/gifs/problem.gif'
import madicGif4 from '../assets/projects/madic-pump/gifs/cashok.gif'
import billsLogo from '../assets/projects/madic-pump/icons/bills.png'
import madicProjectLogo from '../assets/projects/madic-pump/icons/payment_cash_logo.png'



const projects = [
  {
    id: 'swipe-clean',
    title: 'Swipe Clean',
    subtitle: 'Mobile app for cleaning up photo galleries',
    year: '2025 • ongoing',
    role: 'Solo developer (concept, dev, design)',
    tags: ['Android', 'Dart', 'Flutter', 'Mobile', 'UX/UI', 'Figma'],
    color: 'primary',
    links: {
      github: 'https://github.com/nathan-real/Swipe-Clean',
      googlePlay: null,
    },
    problem:
      "Smartphone galleries pile up thousands of photos, which makes sorting tedious and fills up storage. Native apps often struggle to process large volumes of images, and can even crash on hybrid systems like HyperOS that mix local files and cloud thumbnails.",
    solution:
      "Swipe Clean makes cleaning your gallery easy. The app scans local storage and groups images by year and month. Users then sort their photos with a fluid swipe interface, send unwanted items to an internal trash bin, and see the total storage space freed up.",
    media: {
      logo: { src: swipecleanLogo, alt: 'Swipe Clean Logo' },
      images: [
        { src: swipe1Logo, alt: 'Swipe Clean screen 1' },
        { src: swipe2Logo, alt: 'Swipe Clean screen 2' },
        { src: swipe3Logo, alt: 'Swipe Clean screen 3' },
        { src: swipe4Logo, alt: 'Swipe Clean screen 4' },
      ],
      videos: [
        { src: swipeVideo, caption: 'Swipe Clean Presentation' },
      ],
    },
  },
  {
    id: 'modern-edge',
    title: 'Modern Edge',
    subtitle: 'Wear OS watch face, design and development',
    year: '2026',
    featured: false,
    role: 'Design (Figma) + build (Watch Face Studio)',
    tags: ['Wear OS', 'Figma', 'Watch Face Studio', 'UI Design'],
    color: 'secondary',
    links: { github: null, googlePlay: 'https://play.google.com/store/apps/details?id=com.watchfacestudio.modernedge' },
    features: [
      '6 color variants',
      'Time, day and month',
      'Steps, heart rate, battery',
      'Fully designed in Figma then exported ',
      'Build in Watch Face Studio'
    ],
    media: {
      logo: {
        src: modernEdgeLogo, alt: 'Modern Edge Logo'
      },
      images: [
        { src: modernEdgeMockup, alt: 'Modern Edge mockup' },
        { src: modernEdge1, alt: 'Modern Edge Color 1' },
        { src: modernEdge2, alt: 'Modern Edge Color 2' },
        { src: modernEdge3, alt: 'Modern Edge Color 3' },
        { src: modernEdge4, alt: 'Modern Edge Color 4' },
        { src: modernEdge5, alt: 'Modern Edge Color 5' },
        { src: modernEdge6, alt: 'Modern Edge Color 6' },
      ],
    },
  },
  {
    id: 'delivery-app',
    title: 'Delivery App for couriers',
    subtitle: 'Figma prototype for delivery drivers',
    year: '2025',
    role: 'UI/UX design, i2c student entreprise project for SNS Solutions',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    color: 'accent',
    links: { github: null, googlePlay: null },
    problem:
      "SNS Solutions needed a simple, efficient app to help medicine delivery drivers manage their rounds without wasting time or making delivery mistakes.",
    solution:
      "I designed this prototype as part of i2c, ENSC's student enterprise, commissioned by SNS Solutions. The app has 4 main screens and animations designed to make navigating deliveries intuitive for drivers on the move.",
    features: [
      '4 main screens',
      'Designed for quick, one-handed, on-the-go use',
      'Delivered as an interactive Figma prototype',
    ],
    media: {
      logo: { src: deliveryLogo, alt: 'Delivery app Logo', shape: 'circle' },
      images: [
        { src: deliveryScreen3, alt: 'Scanning page', transparent: true },
        { src: deliveryScreen2, alt: 'Deliveies page', transparent: true },
        { src: deliveryScreen1, alt: 'Delivey example page', transparent: true },
        { src: deliveryScreen4, alt: 'Profile page', transparent: true },
      ],
      mockups: [],
    },
  },
  {
    id: 'madic-pump',
    title: 'Payment Terminal Interface, Madic',
    subtitle: 'Motion design for gas station terminals',
    year: '2025',
    role: 'Motion design, student Entreprise project for Madic',
    tags: ['Figma', 'UI/UX', 'Jitter', 'Motion design'],
    color: 'primary',
    links: { github: null, googlePlay: null },
    problem:
      "Madic wanted clear interfaces to guide drivers through card/cash payment at gas pump terminals, with clear visual handling of edge cases.",
    solution:
      "For the i2c student enterprise, I illustrated and animated (Figma + Jitter) the interface of a cash-payment terminal, with 4 animations: insert bill, take your bill, incident with the bill, and payment successful.",
    features: [
      '4 GIF animations made with Jitter',
      'Custom payment illustrations and icons',
      'Flow designed to reduce user error',
    ],
    media: {
      logo: { src: madicProjectLogo, alt: 'Payment Interface Logo'},
      gifs: [
        { src: madicGif1, alt: 'Insert bill' },
        { src: madicGif2, alt: 'Remove bill' },
        { src: madicGif3, alt: 'Problem with the bill' },
        { src: madicGif4, alt: 'Payement with cash OK' },
      ],
      images: [
        { src: billsLogo, alt: 'Euro bills'},
      ],
    },
  },
  {
    id: 'radar-time',
    title: 'Radar Time',
    subtitle: 'Wear OS watch face, design and development',
    year: '2025',
    role: 'Design (Figma) + build (Watch Face Studio)',
    tags: ['Wear OS', 'Figma', 'Watch Face Studio', 'UI Design'],
    color: 'secondary',
    links: { github: null, googlePlay: 'https://play.google.com/store/apps/details?id=com.watchfacestudio.radartime' },
    problem:
      "My first watch face: learning the full design and packaging process for a Wear OS watch face, from Figma to Watch Face Studio.",
    solution:
      "Radar Time displays the time, day, month, steps, heart rate and battery, and offers 2 customizable complications, with 7 color variants.",
    features: [
      '7 color variants',
      '2 customizable complications',
      'Time, day, month, steps, heart rate, battery',
    ],
    media: {
      images: [],
      mockups: [],
    },
  },
]

export default projects
