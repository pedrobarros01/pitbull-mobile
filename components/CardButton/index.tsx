import { Box, Button, CheckCircleIcon, Heading, Icon, Pressable, SlashIcon } from "@gluestack-ui/themed";
import { useState } from "react";

export interface CardButtonProps{
    id: string;

}

export function CardButton({id}: CardButtonProps){
    const [ligado, setLigado] = useState<boolean>(false)
    function changeTurnOn(){
        setLigado(!ligado)
    }
    return (
        <Pressable 
            w={390} 
            bg={!ligado ? '$red700' : '$green700'} 
            h={110} 
            rounded='$lg' 
            borderWidth={2} 
            borderColor={!ligado ? '$red700' : '$green700'} 
            flexDirection="column" 
            justifyContent="center"
            onPress={changeTurnOn}
            >
            <Box w={380} h={40} flexDirection="row" alignItems="center" justifyContent="space-between">
                <Heading marginLeft={12} color="$white" size='xl'>LED {id}</Heading>
                {
                    ligado ? 
                    <Icon  as={CheckCircleIcon} w='$10' h='$10' color="$white" /> 
                    : 
                    <Icon  as={SlashIcon} w='$10' h='$10' color="$white" />
                }
                
            </Box>
            
            <Box w={380}  h={40} justifyContent="flex-end" alignItems="flex-end">
                <Heading color="$white" size="md" >{ligado ? 'ON' : 'OFF'}</Heading>
            </Box>
        </Pressable>
    );
}
