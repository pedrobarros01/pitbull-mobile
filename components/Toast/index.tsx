import { useToast, Toast, VStack, ToastTitle, ToastDescription } from '@gluestack-ui/themed';



export default function Toast({id}){
    return (
        <Toast nativeID={id} action="attention" variant="solid">
            <VStack space="xs" flex={1}>
            <ToastTitle>New Message</ToastTitle>
            <ToastDescription>
                Hey, just wanted to touch base and see how you're doing.
                Let's catch up soon!
            </ToastDescription>
            </VStack>
      </Toast>
    );
}