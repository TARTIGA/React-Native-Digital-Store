import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import { Link, Dots } from '../../components'
import { AuthContext } from '../../context'
const PromoImg = require('../../assets/img/Price.png')


const PriceScreen = ({ navigation }) => {
    const { signIn } = useContext(AuthContext)
    return (
        <Container >
            <ImageView>
                <Image
                    style={{ width: 216, height: 216 }}
                    source={PromoImg}
                />
            </ImageView>
            <PromoTextBlock>
                <PromoLabel>Price</PromoLabel>
            </PromoTextBlock>
            <Dots checkedIndex={2} />
            <SkipLinkView>
                <Link text="next" fontSize={'18px'} handler={() => navigation.push('AutorizationScreen')} />
            </SkipLinkView>
        </Container>
    );
}

const Container = styled.View`
        flex:1;
        align-items:center;
        justify-content:center;
        `;

const PromoTextBlock = styled.View`
text-align:center;
align-items:center;
margin-top:72px;
`;

const PromoLabel = styled.Text`
font-size: 24px;
color:#fff;
`;

const SkipLinkView = styled.View`
text-align:center;
align-items:center;
margin-top:40px;
`;

const ImageView = styled.View`
     align-items:center;
     justify-content:center;
     margin-top:68;
`;


export default PriceScreen
