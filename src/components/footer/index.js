import React from 'react';
import { Container, Wrapper, Row, Column, Link, Title } from './styles/footer';

export const Footer = ({children, ...restProps}) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Footer.Wrapper = ({ children, ...restProps}) => {
    return (
        <Wrapper {...restProps}>
            {children}
        </Wrapper>
    )
}

Footer.Column = ({ children, ...restProps}) => {
    return (
        <Column {...restProps}>
            {children}
        </Column>
    )
}

Footer.Row = ({ children, ...restProps}) => {
    return (
        <Row {...restProps}>
            {children}
        </Row>
    )
}

Footer.Link = ({ children, ...restProps}) => {
    return (
        <Link {...restProps}>
            {children}
        </Link>
    )
}

Footer.Title = ({ children, ...restProps}) => {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    )
}
