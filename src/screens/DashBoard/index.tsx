import React from "react";
import { FlatList } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps} from "../../components/TransactionCard"

import { 
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton
} from "./styles";

 export interface DataListProps extends TransactionCardProps {
   id: string;
 } 


export function DashBoard() {

  const data: DataListProps[] = [
    {  
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category:  { 
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: "13/04/2020"
    },
    {
      id: "2",
      type: 'negative',
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category:  { 
        name: 'Alimentacao',
        icon: 'coffee'
      },
      date: "10/04/2020"
    },
    {
      id: "3",
      type: 'negative',
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      category:  { 
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date: "10/04/2020"
    }
  ]

  return(
    <Container>
      <Header>
        
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri : 'https://avatars.githubusercontent.com/u/79536968?v=4'}} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Rodrigo</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name="power"/>
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard type="up" title="Entradas" amount="R$ 17.400,00" lastTransaction="Última entrada dia 13 de abril"></HighlightCard>
        <HighlightCard type="down" title="Saidas" amount="R$ 1.259,00" lastTransaction="Última entrada dia 3 de abril"></HighlightCard>
        <HighlightCard type="total" title="Total" amount="R$ 16.141,00" lastTransaction="01 a 16 de abril"></HighlightCard>
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList 
          data={data}
          keyExtractor={ item => item.id }
          renderItem={({ item }) => <TransactionCard data={item} />}                  
        />        
      </Transactions>
    </Container>
  )

}