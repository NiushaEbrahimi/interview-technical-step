import { Box, ProgressCircle } from "@chakra-ui/react"


export default function Loading() {
  return (
    <Box minWidth={"80vw"} minHeight={"90vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <ProgressCircle.Root value={null} size="lg">
            <ProgressCircle.Circle>
                <ProgressCircle.Track stroke={"gray.100"}/>
                <ProgressCircle.Range  stroke={"#3ab684"} strokeLinecap={"round"}/>
            </ProgressCircle.Circle>
        </ProgressCircle.Root>
    </Box>
  )
}
