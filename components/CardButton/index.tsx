import { Box, Button, CheckCircleIcon, Heading, Icon, SlashIcon } from "@gluestack-ui/themed";

export interface CardButtonProps{
    status: 'ligado' | 'desligado' | 'loading'
    id: string;

}

export function CardButton({status, id}: CardButtonProps){
    return (
        <Box 
            w={390} 
            bg={status === 'desligado' ? '$red700' : '$green700'} 
            h={110} 
            rounded='$lg' 
            borderWidth={2} 
            borderColor={status === 'desligado' ? '$red700' : '$green700'} 
            flexDirection="column" 
            justifyContent="center">
            <Box w={380} h={40} flexDirection="row" alignItems="center" justifyContent="space-between">
                <Heading marginLeft={12} color="$white" size='xl'>LED {id}</Heading>
                {status === 'ligado' ? <Icon  as={CheckCircleIcon} w='$10' h='$10' color="$white" /> : <Icon  as={SlashIcon} w='$10' h='$10' color="$white" />}
                
            </Box>
            
            <Box w={380}  h={40} justifyContent="flex-end" alignItems="flex-end">
                <Heading color="$white" size="md" >{status == 'ligado' ? 'ON' : 'OFF'}</Heading>
            </Box>
        </Box>
    );
}
