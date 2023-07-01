import Box, { BoxProps } from "./Box";
import React from "react";
import Text from "./Text";
import TouchableOpacity from "./TouchableOpacity";
import { Alert } from "react-native";
import Button from "./Button";
import Row from "./Row";
import { Icon, Input } from "@rneui/themed";

type Props = {
  children: React.ReactNode;
  isUserLogged: boolean;
  titleIfNotConnected?: string;
  subTitleIfNotConnected: string;
  loggedIn: () => void;
} & Partial<BoxProps>;

type ComponentUserNotLoggedProps = {
  title?: string;
  subTitle: string;
  loggedIn: () => void;
};

const ComponentUserNotLogged = ({
  title,
  subTitle,
  loggedIn,
}: ComponentUserNotLoggedProps) => {
  return (
    <Box paddingVertical="m" backgroundColor="mainBackground">
      {title && <Text variant="bigTitle">{title}</Text>}
      <Row marginBottom="m">
        <Text variant="title" color="secondary">
          {subTitle}
        </Text>
      </Row>
      <Input
        placeholder="Numéro télépone"
        leftIcon={<Icon name="person" color={"#b03043"} />}
      />
      <Input
        placeholder="Mot de passe"
        leftIcon={<Icon name="lock" color={"#b03043"} />}
      />
      <Button label="Connexion" onPress={loggedIn} />
      <Row marginVertical="s">
        <Text variant="tertiary">Vous n'avez pas de compte ?</Text>
        <TouchableOpacity>
          <Text variant="link">Inscription</Text>
        </TouchableOpacity>
      </Row>
    </Box>
  );
};

const CheckUserConnected: React.FC<Props> = ({
  children,
  isUserLogged,
  titleIfNotConnected,
  subTitleIfNotConnected,
  loggedIn,
  ...props
}) => {
  return (
    <Box flex={1} backgroundColor="mainBackground" {...props}>
      {isUserLogged ? (
        children
      ) : (
        <ComponentUserNotLogged
          loggedIn={loggedIn}
          title={titleIfNotConnected}
          subTitle={subTitleIfNotConnected}
        />
      )}
    </Box>
  );
};

export default CheckUserConnected;
