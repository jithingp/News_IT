import { Flex,Box, Text } from "@chakra-ui/react"
import axios from "axios"
import Article from "../components/Article"

const fetchApi = async (url)=>{
  const {data} = await axios.get((url),{
    headers: {
      'X-RapidAPI-Key': process.env.SMITH,
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
    }
  })
  return data;
}

export default function Crypto({allNews}) {
  return (
   <Box>
        <Text fontSize='2xl' p='4' fontWeight='bold' >
            Crypto
        </Text>
        <Flex flexWrap="wrap" marginTop='3'>
            {allNews.articles.map((article)=> <Article article={article} key={article._id}/>)}
        </Flex>
   </Box>
  )
}

export async function getStaticProps(){
  const allNews = await fetchApi('https://free-news.p.rapidapi.com/v1/search?q=cryptocurrency&lang=en');
  return {
    props: {
      allNews
    }
  }
}