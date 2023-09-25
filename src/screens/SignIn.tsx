import { Center, Heading, ScrollView, Text, VStack } from "native-base";

import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function SignIn() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        {/* <Image
          source={backgroundImg}
          defaultSource={backgroundImg}
          alt="Background com pessoa treinando em uma academia"
          resizeMode="contain"
          position="absolute"
        /> */}

        <Center my={24}>
          {/* <LogoSvg /> */}
          <Text color="gray.100" fontSize="sm" fontFamily="body">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center flex={1}>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Input
            placeholder="Senha"
            secureTextEntry
            returnKeyType="send"
          />

          <Button title="Acessar" />
        </Center>

        <Center my={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  )
}