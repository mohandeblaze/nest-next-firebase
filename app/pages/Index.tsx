import * as React from 'react';
import Head from 'next/head';

const Index = () => {
    return (
        <div>
            <Head>
                <link href='/static/index.css' rel='stylesheet' />
            </Head>
            <div>Hello, from Nest.js + Next.js + Firebase!</div>
        </div>
    );
};

export default Index;
