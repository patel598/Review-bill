import { Helmet } from 'react-helmet-async'

type Props = {
title: string;
name: string;
content: string;
}

const HelmetComponent = ({title, name, content}: Props) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name={name} content={content} />
        </Helmet>
    )
}

export default HelmetComponent