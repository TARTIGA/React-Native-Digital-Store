import React from 'react'
import styled from 'styled-components/native';
//Use Context here
import theme from 'app/theme'
import { Text } from 'react-native'

// TODO: REFACTOR THIS ?//

const Button = ({ children, bgColor, width, handler, disabled, textColor, label, icon }) => {
    return (
        <ButtonContainer bgColor={bgColor} width={width} disabled={disabled}>
            <ButtonInside onPress={handler} disabled={disabled}>
                {icon ?
                    (
                        <BtnContainerWithIcon>
                            {icon}
                            <ButtonText textColor={textColor}>{label}</ButtonText>
                            <Text />
                        </BtnContainerWithIcon>)
                    :
                    <ButtonText textColor={textColor}>{label}</ButtonText>}
            </ButtonInside>
        </ButtonContainer>
    )
}
Button.defaultProps = {
    event: null,
    bgColor: theme.palette.secondary.main,
    width: '100%',
    disabled: false,
    textColor: theme.palette.primary.main,
    icon: null,
    label: null
}

const ButtonContainer = styled.View`
    background:${props => props.bgColor};
    height:48px;
    border-radius:4px;
    width:${props => props.width};
    margin-top:20px;
    opacity:${props => props.disabled ? 0.5 : 1};
`;

const ButtonInside = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`;

const BtnContainerWithIcon = styled.View`
    width:100%;
    justify-content:space-around;
    flex-direction:row;
`;

const ButtonText = styled.Text`
    color:${props => props.textColor};;
    font-weight:500;
    font-size:18px;
`;

export default Button;
