import React, { useContext, useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { ActivityIndicator, Alert, Platform } from 'react-native';
import  { useTheme } from 'styled-components/native';


import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth'
 
import { SignSocialButton } from '../../components/SignSocialButton'

import { 
  Container,
  Header,
  TitleWrapper,
  Title,
  SignTitle,
  Footer,
  FooterWrapper
 } from './styles';

export function SignIn(){

  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth()

  const theme = useTheme();

  async function handleSignInWithGoogle(){
    try {
      setIsLoading(true);
      return await signInWithGoogle(); 
    } catch (error) {
      console.log(error)
      setIsLoading(false);
      Alert.alert('Não foi possível conectar conta google') 
    } 
  }

  async function handleSignInWithApple(){
    try {
      setIsLoading(true);
      return await signInWithApple(); 
    } catch (error) {
      console.log(error)
      setIsLoading(false);
      Alert.alert('Não foi possível conectar conta apple') 
    }
  }
  return(
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg 
            width={RFValue(120)}
            height={RFValue(68)}
          />
          <Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples
          </Title>
        </TitleWrapper>
        <SignTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </SignTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignSocialButton onPress={handleSignInWithGoogle} 
            title="Entrar com Google"
            svg={GoogleSvg}
          />
          { Platform.OS === 'ios' &&

            <SignSocialButton onPress={handleSignInWithApple}
            title='Entrar com Apple'
            svg={AppleSvg}
            />
          }
        </FooterWrapper>
        { isLoading && <ActivityIndicator 
           color={theme.colors.shape} 
           style={{ marginTop: 18}}
           />
       }
      </Footer>
    </Container>
  )
}
