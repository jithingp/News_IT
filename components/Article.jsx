import Link from 'next/link'
import {Flex,Box,Text} from '@chakra-ui/react'
import defaultImage from '../assets/images/house.jpg'


const Article = ({article : {link,media,title,summary}})=>{
    return (
    <Link href={link} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor='pointer' >
            <Box>
                <img src={media} width={350} height={200} alt="news" />
            </Box>
            <Box w="full">
            <Text fontSize='larger' fontStyle='italic' fontWeight='bold'>
                    {title.length > 150 ? `${title.substring(0,150)}...`:title}
            </Text>
            <Text fontSize='lg' >
                    {summary.length > 200 ? `${summary.substring(0,200)}...`:summary}
            </Text>
            </Box>
        </Flex>
    </Link>
)
}

export default Article