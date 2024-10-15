import { Center, Heading } from "@gluestack-ui/themed";
interface TitleProps {
     title: string;
}
export default function Title({title}: TitleProps){
    return (
        <Center bg='$white' marginTop='$12' w='$full'>
            <Heading color="$borderDark500" bold size='xl'>
                {title}
            </Heading>
        </Center>
    );
}