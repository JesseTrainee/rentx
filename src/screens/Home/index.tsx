import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { StringLiteral } from 'typescript';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
   Container,
   Header,
   TotalCars,
   HeaderContent,
   CarList
} from './styles';


export function Home() {
   const navigation = useNavigation<any>();

   const carData = {
      brand: 'AUDI',
      name: 'RS 5 Coupé',
      rent: {
         period: 'AO DIA',
         price: 120,
      },
      thumbnail: '' ,
   }

   function handleCarDetails() {
      navigation.navigate('CarDetails');
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

      <CarList
      data={[1,2,3]}
      keyExtractor={item => String(item)}
      renderItem={({ item }) => <Car data={carData} onPress={handleCarDetails}/>}
      />
   </Container>
   )
}