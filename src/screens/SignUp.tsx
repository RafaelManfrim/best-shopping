import { VStack, Text, Center, Heading, ScrollView } from "native-base"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>


        <Center my={24}>

          <Text color="gray.100" fontSize="sm" fontFamily="body">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center flex={1}>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Input
            placeholder="Nome"
          />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Input
            placeholder="Senha"
            secureTextEntry
          />

          <Input
            placeholder="Confirme a senha"
            secureTextEntry
            returnKeyType="send"
          />

          <Button title="Criar e acessar" />
        </Center>

        <Button title="Voltar para o login" variant="outline" my={24} />
      </VStack>
    </ScrollView>
  )
}