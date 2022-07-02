import Link from 'next/link'
import {Flex,Box,Text,Badge} from '@chakra-ui/react'
import defaultImage from '../assets/images/default.jpg'


// const Article = ({article : {link,media,title,summary,}})=>{
//     return (
//     <Link href={link} passHref>
//         <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor='pointer' >
//             <Box>
//                 <img src={media} width={350} height={200} alt="news" />
//             </Box>
//             <Box w="full">
//             <Text fontSize='larger' fontStyle='italic' fontWeight='bold'>
//                     {title.length > 150 ? `${title.substring(0,150)}...`:title}
//             </Text>
//             <Text fontSize='lg' >
//                     {summary.length > 200 ? `${summary.substring(0,200)}...`:summary}
//             </Text>
//             </Box>
//         </Flex>
//     </Link>
// )
// }
const Article = ({article : {link,media,title,summary,published_date,author}})=>{
    return (
    <Link href={link} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent='flex-start' cursor='pointer' >
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box >
                <img src={media} height='100%' width='100%' alt={defaultImage} />
            </Box>
            <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            {published_date}
                        </Badge>
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                        >
                            {author?`author : ${author}`:``}
                        </Box>
                    </Box>

                    <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={3}
                    >
                    {title}
                    </Box>

                    <Box>
                
                    <Box as='span' color='gray.600' fontSize='sm'>
                    {summary.length > 200 ? `${summary.substring(0,200)}...`:summary}
                    </Box>
                    </Box>

            </Box>
        </Box>
        </Flex>
    </Link>
)
}

export default Article