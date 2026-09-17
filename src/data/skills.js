import reactLogo from '../assets/logo/react-svgrepo-com.svg'
import javascriptLogo from '../assets/logo/javascripticon.svg'
import htmlLogo from '../assets/logo/htmlicon.svg'
import cssLogo from '../assets/logo/cssicon.svg'
import flutterLogo from '../assets/logo/flutter-svgrepo-com.svg'
import csharpLogo from '../assets/logo/csharp-svgrepo-com.svg'
import gitLogo from '../assets/logo/git-svgrepo-com.svg'
import figmaLogo from '../assets/logo/figmaicon.svg'
import watchFaceStudioLogo from '../assets/logo/watchfacestudio.png'
import jitterLogo from '../assets/logo/jitter.svg'
import pythonLogo from '../assets/logo/python-svgrepo-com.svg'
import photoshopLogo from '../assets/logo/photoshop.svg'
import viteLogo from '../assets/logo/vite.svg'
import dartLogo from '../assets/logo/dart.svg'

const skills = [
  {
    category: 'Design & Prototyping',
    type: 'mixed',
    tags: ['UI/UX', 'Motion Design', 'User-Centered Design'],
    items: [
      { name: 'Figma', logo: figmaLogo },
      { name: 'Watch Face Studio', logo: watchFaceStudioLogo },
      { name: 'Jitter', logo: jitterLogo },
      { name: 'Photoshop', logo: photoshopLogo },
    ],
  },
  {
    category: 'Development',
    type: 'logos',
    items: [
      { name: 'React', logo: reactLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Flutter', logo: flutterLogo },
      { name: 'Dart', logo: dartLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C#', logo: csharpLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'Vite', logo: viteLogo },
    ],
  },
  {
    category: 'Tools & Methods',
    type: 'text',
    items: ['Project management', 'Teamwork', 'Human-Computer Interaction (HCI)'],
  },
  {
    category: 'Languages',
    type: 'text',
    items: ['French (native)', 'English', 'Japanese (basic)'],
  },
]

export default skills