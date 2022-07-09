import Link from 'next/link'
import {Flex,Box,Image,Badge} from '@chakra-ui/react'



const Article = ({article : {link,media,title,summary,published_date,author}})=>{
    return (
    <Link href={link} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent='flex-start' cursor='pointer' overflow='hidden' >
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box >
                <Image src={media&&media.length>0?media:`/images/default.jpg`} boxSize='300px' objectFit='cover' width='378px' alt='Article' />
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