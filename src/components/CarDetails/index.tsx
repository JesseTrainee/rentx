import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../ImageSlider';

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
      </Content>

   </Container>
   )
}