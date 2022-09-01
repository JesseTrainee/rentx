import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg';
import Button from '../../components/Button';

import {
   Container,
   Header,
   Title,
   RentalPeriod,
   DateInfo,
   DateTitle,
   DateValue,
   Content,
   Footer
} from './styles';
import { Calendar } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';

export function Scheduling() {
   const theme = useTheme();

   const navigation = useNavigation<any>();

   function handleConfirmRental() {
      navigation.navigate('SchedulingDetails');
   }

   return(
   <Container>
            <Header>
         <BackButton onPress={() => {}} color={theme.colors.shape}/>
         <Title>
            Escolha uma {'\n'}
            data de ínicio e {'\n'}
            fim do aluguel
         </Title>

         <RentalPeriod>
            <DateInfo>
               <DateTitle>DE</DateTitle>
               <DateValue selected={false}>18/02/11</DateValue>
            </DateInfo>

            <ArrowSvg/>

            <DateInfo>
               <DateTitle>ATÉ</DateTitle>
               <DateValue selected={false}>18/02/11</DateValue>
            </DateInfo>
         </RentalPeriod>

      </Header>
      <Content>

      <Calendar/>
      </Content>
      <Footer>
         <Button title="Confirmar" onPress={handleConfirmRental}/>
      </Footer>
   </Container>
   )
}