import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { StringLiteral } from 'typescript';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import {
   Container,
   Header,
   TotalCars,
   HeaderContent
} from './styles';

export function Home() {
   const carData = {
      brand: 'AUDI',
      name: 'RS 5 Coupé',
      rent: {
         period: 'AO DIA',
         price: 120,
      },
      thumbnail: '' ,
   }

   return(
   <Container>
      <Header>
         <HeaderContent>
            <Logo
               width={RFValue(108)}
               height={RFValue(12)}
            />
            <TotalCars>
               Total de 12 carros
            </TotalCars>
         </HeaderContent>
      </Header>
      <Car data={carData}/>
   </Container>
   )
}