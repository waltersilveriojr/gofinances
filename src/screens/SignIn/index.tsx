import React, { useContext } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { Alert } from 'react-native';

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

  const { signInWithGoogle } = useAuth()

  async function handleSignInWithGoogle(){
    try {
      await signInWithGoogle(); 
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar conta google') 
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
          <SignSocialButton 
            title='Entrar com Apple'
            svg={AppleSvg}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  )
}
