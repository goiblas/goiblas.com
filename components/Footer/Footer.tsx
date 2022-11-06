import styled from '@emotion/styled';
import React from 'react'
import { Logo } from '../Logo';
import { SocialLinks } from "./SocialLinks";

const Layout = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 92px 0 48px;
    flex-wrap: wrap;
    gap: 24px;

`
const Footer = () => {
    return (
        <Layout>
            <Logo position="end" />
            <SocialLinks />
        </Layout>
    );
};

export default Footer