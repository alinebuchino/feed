import React from "react";
import { Box, Image, Text, Heading, Icon } from "native-base";
import { Feather } from '@expo/vector-icons'

export default function Feed({ data }) {
    return (
        <Box flex={1}
            flexDirection="column"
            marginBottom={4}
            backgroundColor="#fff"
            padding={2}
            borderRadius={4}
        >
            <Box>
                <Image
                    source={{ uri: data.avatarUrl }}
                    alt="Post Feed"
                    h={120}
                    w="100%"
                />
            </Box>

            <Box marginY={3}>
                <Heading size={"sm"}>Conceitos Native-Base</Heading>
                <Text numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
            </Box>

            <Box
                marginY={1}
                flexDir="row"
                backgroundColor="rgba(226, 232, 420, 0.4)"
                alignSelf={"flex-start"}
                borderRadius={6}
                paddingX={3}
                paddingY={1}
            >
                <Icon
                    as={Feather}
                    name="user"
                    size={5}
                    color="#000"
                    marginRight={2}
                />
                <Text>
                    {data.fullName}
                </Text>
            </Box>
        </Box>
    )
}