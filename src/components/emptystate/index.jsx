import { Container, Message } from "./style";


export default function EmptyState({
    message
}) {

    return (

        <Container>

            <Message>

                {message}

            </Message>

        </Container>

    );

}
