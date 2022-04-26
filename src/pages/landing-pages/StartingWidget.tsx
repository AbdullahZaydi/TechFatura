import {
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    chakra,
    keyframes,
    ImageProps,
    forwardRef,
    usePrefersReducedMotion
} from "@chakra-ui/react"
import logo from "../../assets/images/logo.svg";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = forwardRef<ImageProps, "img">((props, ref) => {
    const prefersReducedMotion = usePrefersReducedMotion()

    const animation = prefersReducedMotion
        ? undefined
        : `${spin} infinite 20s linear`

    return <chakra.img animation={animation} src={logo} ref={ref} {...props} />
})

export default function StartingWidget() {
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <VStack spacing={8}>
                    <Logo h="40vmin" pointerEvents="none" />
                    <Text>
                        Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
                    </Text>
                    <Link
                        color="teal.500"
                        href="https://chakra-ui.com"
                        fontSize="2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Chakra
                    </Link>
                </VStack>
            </Grid>
        </Box>
    )
}
