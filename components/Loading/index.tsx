import { Center, Spinner } from "@gluestack-ui/themed";



export default function Loading(){
    return (
        <Center 
        w={390}  
        h={110} 
        rounded='$lg' 
        borderWidth={2} 
        borderColor="$coolGray700"
        bg='$coolGray300'
        >

            <Spinner size="large" color="$coolGray700"  />
        </Center>
    );
}