import { Box, Button, CheckCircleIcon, Heading, Icon, Pressable, SlashIcon, Toast, useToast, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import Loading from "../Loading";
import { api } from "../../services/api";
import { AppError } from "../../utils/AppError";
import { ToastTitle } from "@gluestack-ui/themed";
import { ToastDescription } from "@gluestack-ui/themed";

export interface CardButtonProps{
    id: string;

}

export function CardButton({id}: CardButtonProps){
    const [ligado, setLigado] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const toast = useToast();
    async function changeTurnOn(){
        try {
            //setLoading(true);
            //let id_number = Number.parseInt(id);
            //const response = await api.get(`/led/${id_number - 1}`);
            //throw new AppError("Deu Erro");
            setLigado(!ligado);
        }catch(error){
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.mensagem : "Não foi possível ligar o LED";
            
            toast.show({
                placement: "bottom",
                render: ({ id }) => {
                  const toastId = "toast-" + id
                  return (
                    <Toast nativeID={toastId} action="error" variant="accent">
                        <ToastTitle>{title}</ToastTitle>
                    </Toast>
                  )
                },
              })
        }finally{
            setLoading(false);
        }
    }
    if(loading){
        return <Loading />
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
