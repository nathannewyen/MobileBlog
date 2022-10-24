import React, { useState, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { useMutation, gql } from "@apollo/client";
import { card, button, fonts, colors, spacing, borders } from "../styles/index";
const LIKE_POST = gql`
  mutation Mutation($likePostId: Int!) {
    likePost(id: $likePostId)
  }
`;

const Card = (props) => {
  const {
    id,
    title,
    description,
    author,
    likes,
    createdAt,
    image,
    index,
    posts,
  } = props;
  const [likePost] = useMutation(LIKE_POST, {
    variables: {
      likePostId: id,
    },
    onCompleted: (data) => {
      // console.log(data);
    },
  });

  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 4);
  }, []);

  return (
    <View
      style={[
        styles.cardContainer,
        index === posts.length - 1 ? styles.noBorder : "",
      ]}
    >
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.author}>{author}</Text>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 4}
        style={fonts.xsmall}
      >
        {description}
      </Text>
      {lengthMore ? (
        <Text
          style={[fonts.xsmall, spacing.marginVerticalSmall]}
          onPress={toggleNumberOfLines}
        >
          {textShown ? "Read less" : "Read more"}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    ...borders.borderPrimary,
    ...card.cardContainer,
    ...spacing.paddingVerticalSmall,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  author: {
    textAlign: "right",
    paddingVertical: 5,
    ...fonts.xxsmall,
    ...colors.textSecondary,
  },
  cardHeader: {
    ...card.cardHeader,
    ...borders.borderSecondary,
  },
  cardContent: {
    ...card.cardContent,
  },
  title: {
    ...card.title,
  },
  image: {
    ...card.image,
    ...spacing.marginVerticalNormal,
  },
  primaryButton: {
    ...button.primary,
  },
  secondaryButton: {
    ...button.secondary,
  },
});

export default Card;
