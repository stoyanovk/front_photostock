import React from "react";
import PageWrapper from "../../Components/PageWrapper";
import Container from "@material-ui/core/Container";
import Tabs from './Tabs'

export default function Home() {
    return (
        <PageWrapper>
            <Container maxWidth='lg'>
                <Tabs/>
            </Container>
        </PageWrapper>
    );
}