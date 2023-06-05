import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import MakePost from './MakePost';
import Sidebar from './Sidebar';

interface BodyProps {
    makePost: boolean,
    sidebar: boolean,
    children: JSX.Element | JSX.Element[]
}

export default function Body({makePost, sidebar, children}: BodyProps) {
    return (
        <Container>
            <Stack direction="horizontal">
            {sidebar && <Sidebar />}
            <Container>
                {makePost && <MakePost />}
                {children}
                </Container>
        </Stack>
        </Container>
    )
}