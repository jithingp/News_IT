import Link from 'next/link'
import { Menu,MenuButton,MenuList,MenuItem,IconButton,Flex,Box,Spacer } from '@chakra-ui/react'
import {FcMenu} from 'react-icons/fc'
import {MdBusinessCenter} from 'react-icons/md'
import {SiPicpay} from 'react-icons/si'
import {GiNewspaper} from 'react-icons/gi'
import {BsCurrencyBitcoin} from 'react-icons/bs'
import {MdSportsCricket} from 'react-icons/md'
import { useMediaQuery } from '@chakra-ui/react'

const Desk =()=>(
    <>
        <Box fontSize='2xl' color='GrayText' fontWeight='normal' marginRight='8'  fontStyle='oblique'>
            <Link href='/' paddingLeft='2'>General</Link>
        </Box>
        <Box fontSize='2xl' color='GrayText' fontWeight='normal' marginRight='8' fontStyle='oblique'>
            <Link href='/business' paddingLeft='2'>Business</Link>
        </Box>
        <Box fontSize='2xl' color='GrayText' fontWeight='normal' marginRight='8' fontStyle='oblique'>
            <Link href='/politics' paddingLeft='2'>Politics</Link>
        </Box>
        <Box fontSize='2xl' color='GrayText' fontWeight='normal' marginRight='8' fontStyle='oblique'>
            <Link href='/crypto' paddingLeft='2'>Crypto</Link>
        </Box>
        <Box fontSize='2xl' color='GrayText' fontWeight='normal' marginRight='8' fontStyle='oblique'>
            <Link href='/sports' paddingLeft='2'>Sports</Link>
        </Box>
    </>
)

const Mobile=()=>(
    <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} variant='outlined' color='red.400'/>
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<GiNewspaper/>}>General</MenuItem>
                    </Link>
                    <Link href='/business' passHref>
                        <MenuItem icon={<MdBusinessCenter/>}>Business</MenuItem>
                    </Link>
                    <Link href='/politics' passHref>
                        <MenuItem icon={<SiPicpay/>}>Politics</MenuItem>
                    </Link>
                    <Link href='/crypto' passHref>
                        <MenuItem icon={<BsCurrencyBitcoin/>}>Crypto</MenuItem>
                    </Link>
                    <Link href='/sports' passHref>
                        <MenuItem icon={<MdSportsCricket/>}>Sports</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
)

const Navbar = ()=>{
    const [isLargerThan500] = useMediaQuery('(min-width: 750px)')
    
    return (
    <Flex p='2' borderBottom='1px' borderColor='gray.500'  >
        <Box fontSize='3xl' fontWeight='bold' marginLeft='8' fontStyle='italic'>
            <Link href='/' paddingLeft='2'>NewsIT</Link>
        </Box>
        <Spacer/>
        {isLargerThan500?<Desk/>:<Mobile/>}

    </Flex>
)
            }

export default Navbar