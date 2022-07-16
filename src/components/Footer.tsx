import Image from 'next/image';
import { Flex } from './base/Flex';

/**
 * Footer
 * 
 * @returns {JSX.Element}
 */
export default function Footer(): JSX.Element {

    return (
        <Flex
            maxWidth={1000}
            width={'100%'}
            height={40}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            margin={'0px auto'}>
            
            <h6>© 2022 David Gaspar. All rights reserved.</h6>

            <Flex
                flexDirection={'row'}>
                
                <Image
                    width={24}
                    height={24}
                    src={'/static/images/svg/icon-share-twitter.svg'}/>
                
                <Image
                    width={24}
                    height={24}
                    src={'/static/images/svg/icon-share-github.svg'}/>

            </Flex>
            
        </Flex>
    );
}