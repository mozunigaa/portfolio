import Icon2 from '../../images/componentsProject/logo-b.JPG'
import Icon3 from '../../images/project2/logo-c.JPG'
import Icon4 from '../../images//patternsProject/logo-a.png'

import Image1_1 from '../../images/project2/c-1.JPG' 
import Image1_2 from '../../images/project2/c-2.JPG'
import Image1_3 from '../../images/project2/c-3.JPG'
import Image1_4 from '../../images/project2/c-4.JPG'
import Image2_1 from '../../images/componentsProject/c-1.JPG' 
import Image2_2 from '../../images/componentsProject/c-2.JPG'
import Image2_3 from '../../images/componentsProject/c-3.JPG' 
import Image2_4 from '../../images/componentsProject/c-4.JPG'
import Image3_1 from '../../images/patternsProject/a-1.png' 
import Image3_2 from '../../images/patternsProject/a-2.png' 
import Image3_3 from '../../images/patternsProject/a-3.png' 
import Image3_4 from '../../images/patternsProject/a-4.png' 
import Image5_1 from '../../images/squidProject/1SQUID.png' 
import Image5_2 from '../../images/squidProject/2SQUID.png' 
import Image5_3 from '../../images/squidProject/3SQUID.png' 
import Image5_4 from '../../images/squidProject/4SQUID.png' 


export const images = [
    {
      id: 1,
      title: 'Angular | Spring Boot',
      project: 'Web application: Squid',
      width: '25%',
      description: 'Final project of the Project 3 course at Cenfotec University. Appointment management and vehicle maintenance application. ',
      tags : ['Angular', 'Java', 'Spring Boot', 'MySQL', 'JHipster'],
      photos: [Image5_1,Image5_2,Image5_3,Image5_4]
    },
    {
      id: 2,
      url: Icon2,
      title: 'Flask | Vue JS',
      project: 'Web application: Monjosh',
      width: '25%',
      description: 'Final project of the course “Componentes” (Components) in Universidad Cenfotec The languages and technologies were used: Flask web framework, C #, docker, Cosmos database, Azure pipelines and Vue JS.',
      tags : ['Flask', 'Python', 'C#', 'Docker', 'Vue JS', 'Cosmos'],
      photos: [Image2_1, Image2_2, Image2_3, Image2_4],
    },
    {
      id: 3,
      url: Icon3,
      title: '.NET | Jquery',
      project: 'Web application: Foodie',
      width: '25%',
      description: 'Final project of the Project 2 course at Cenfotec University. Application for the sale and delivery of food.',
      tags : ['.NET web', 'Jquery'],
      photos: [Image1_1, Image1_2, Image1_3, Image1_4],
    },
    {
      id: 4,
      url: Icon4,
      title: 'Java | Boostrap',
      project: 'Web application: CenfoHR',
      width: '25%',
      description: 'Final project of the course “Programación con Patrones” (Programming with Patterns) in Universidad Cenfotec. It was an application for the management of human resources of a company.',
      tags : ['Java', 'Spring boot', 'Boostrap', 'MySQL'],
      photos: [Image3_2, Image3_1, Image3_3, Image3_4],
    },
  ];