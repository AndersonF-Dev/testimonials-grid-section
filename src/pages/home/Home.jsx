// import React from 'react';

// const imageDaniel = '/assets/image-daniel.jpg';
// const imageJeanette = '/assets/image-jeanette.jpg';
// const imageJonathan = '/assets/image-jonathan.jpg';
// const imagePatrick = '/assets/image-patrick.jpg';
// const imageKira = '/assets/image-kira.jpg';
// const imageBackground = '/assets/bg-pattern-quotation.svg';



// import Usuario  from '../../components/Usuario/Usuario.jsx';
// import { 
//     Container, 
//     GridDepoimento, 
//     DepoimentoPosition,
//     DepoimentoTitle,
//     DepoimentoParagraph,
//     GridDepoimento2,
//     Depoimento2Title,
//     Depoimento2Paragraph, 
//     GridDepoimento3,
//     Depoimento3Title,
//     Depoimento3Paragraph, 
//     GridDepoimento4,
//     Depoimento4Title, 
//     Depoimento4Paragraph,
//     GridDepoimento5,
//     Depoimento5Title,
//     Depoimento5Paragraph 

// } from './styles.js';

// const Home = () => {
//   return (
//     <Container>
    
//         <GridDepoimento>
//             <DepoimentoPosition>
//                 <Usuario imagem={imageDaniel} nome="Daniel Clifford" />
               
//                 <img src={imageBackground} alt="image-Background" />
            
//             </DepoimentoPosition>    
//         <DepoimentoTitle>
            
//             I received a job offer mid-course, and the subjects I learned were current, if not more so,
//             in the company I joined. I honestly feel I got every penny’s worth.
        
//         </DepoimentoTitle>    

//         <DepoimentoParagraph>
//             “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
//             transition and have heard some people who had an amazing experience here. I signed up
//             for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
//             The next 12 weeks was the best - and most grueling - time of my life. Since completing
//             the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
//         </DepoimentoParagraph>
//         </GridDepoimento>

//         <GridDepoimento2>
//             <Usuario imagem={imageJonathan} nome="Jonathan Walters" />
        
//             <Depoimento2Title>The team was very supportive and kept me motivated</Depoimento2Title>

//             <Depoimento2Paragraph>
//                 “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
//                 for a big company. This was one of the best investments I’ve made in myself. ”
//             </Depoimento2Paragraph>
//         </GridDepoimento2>

//         <GridDepoimento3>
//         <Usuario imagem={imageKira} nome="Kira Whittle" destaque={true} corSpan={false}/>
        
//             <Depoimento3Title>Such a life-changing experience. Highly recommended!</Depoimento3Title>

//             <Depoimento3Paragraph>
//                 “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
//                 professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
//                 student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
//                 did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
//                 project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
//                 could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
//                 experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
//                 100% recommend! ”
//             </Depoimento3Paragraph>
//         </GridDepoimento3>

//         <GridDepoimento4>
//             <Usuario imagem={imageJeanette} nome="Jeanette Harmon" destaque={true} corSpan={false}/>

//             <Depoimento4Title>
//                 An overall wonderful and rewarding experience
//             </Depoimento4Title>

//             <Depoimento4Paragraph>
//                 “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
//                 while doing something I love. ”
//             </Depoimento4Paragraph>
            
//         </GridDepoimento4>

//         <GridDepoimento5>
//             <Usuario imagem={imagePatrick} nome="Patrick Star" />

//             <Depoimento5Title>
//                 Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
//                 learning from their experiences was easy.
//             </Depoimento5Title>

//             <Depoimento5Paragraph>
//                 “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
//                 gave me the confidence necessary to be able to go out in the world and present myself as a capable 
//                 junior developer. The standard is above the rest. You will get the personal attention you need from 
//                 an incredible community of smart and amazing people. ”
//             </Depoimento5Paragraph>
            
//         </GridDepoimento5>
        
//     </Container>
//   )
// }

// export default Home

import React from 'react';
import { Container } from './styles';
import Daniel from '../../components/Depoimentos/Daniel';
import Jonathan from '../../components/Depoimentos/Jonathan';
import Kira from '../../components/Depoimentos/Kira';
import Jeanette from '../../components/Depoimentos/Jeanette';
import Patrick from '../../components/Depoimentos/Patrick';

const Home = () => {
  return (
    <Container>
        <Daniel />
        <Jonathan />
        <Kira />
        <Jeanette />
        <Patrick />
    </Container>
  )
}

export default Home;
