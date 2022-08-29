import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
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
   Accessories,
   Footer,
   RentalPeriod,
   CalendarIcon,
   DateInfo,
   DateTitle,
   DateValue,
   RentalPrice,
   RentalPriceLabel,
   RentalPriceDetails,
   RentalPriceQuota,
   RentalPriceTotal,
} from './styles';

export function SchedulingDetails() {
   const theme = useTheme();
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

         <RentalPeriod>
            <CalendarIcon>
               <Feather
                  name="calendar"
                  size={RFValue(24)}
                  color={theme.colors.shape}
               />
            </CalendarIcon>

            <DateInfo>
               <DateTitle>DE</DateTitle>
               <DateValue>18/06/2022</DateValue>
            </DateInfo>
            <Feather
               name="chevron-right"
               size={RFValue(10)}
               color={theme.colors.text}
            />
             <DateInfo>
               <DateTitle>DE</DateTitle>
               <DateValue>18/06/2022</DateValue>
            </DateInfo>
         </RentalPeriod>

         <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
               <RentalPriceQuota>R$ 580 3x diárias</RentalPriceQuota>
               <RentalPriceTotal>R$2.900</RentalPriceTotal>
            </RentalPriceDetails>
         </RentalPrice>
      </Content>
      <Footer>
         <Button title="Confirmar"/>
      </Footer>

   </Container>
   )
}