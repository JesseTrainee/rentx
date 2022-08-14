import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Accessory } from '../../components/Accessory';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';



import {
   Container,
   Header,
   CarImages,
   Content,
   Details,
   Description,
   Brand,
   Name,
   Rent,
   Period,
   Price,
   About,
   Accessories,
   Footer
} from './styles';

export function CarDetails() {
   return(
   <Container>
      <Header>
         <BackButton onPress={() => {}}/>
      </Header>

      <CarImages>
         <ImageSlider
            imagesUrl={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5H5U2JjXeQ3ENnUP6E6nTVmV01zgE4VJ9w&usqp=CAU']}
         />
      </CarImages>

      <Content>
         <Details>
            <Description>
               <Brand>Lamborghini</Brand>
               <Name>Huracan</Name>
            </Description>

            <Rent>
               <Period>Ao dia</Period>
               <Price>R$ 450</Price>
            </Rent>
         </Details>
         <Accessories>
            <Accessory name="380km" icon={SpeedSvg}/>
            <Accessory name="3.2s" icon={AccelerationSvg}/>
            <Accessory name="800 HP" icon={ForceSvg}/>
            <Accessory name="Gasolina" icon={GasolineSvg}/>
            <Accessory name="Auto" icon={ExchangeSvg}/>
            <Accessory name="2 pessoas" icon={PeopleSvg}/>

         </Accessories>
         <About>
            Et mollit aliqua ex mollit nulla eiusmod cupidatat incididunt velit nulla sunt. Velit id commodo in velit ex amet nisi dolor nisi laborum. Consectetur sunt ea velit esse sint sit veniam eiusmod irure. Officia minim voluptate consequat culpa incididunt labore tempor minim et deserunt.
         </About>
      </Content>
      <Footer>
         <Button title="Confirmar"/>
      </Footer>

   </Container>
   )
}