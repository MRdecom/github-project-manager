import React from 'react';

type Props = {
    randomText: string
}

const RandomTextBlock = (props: Props) => {
    return <p><strong>Some GitHub Words : </strong>{props.randomText}</p>
}

export default RandomTextBlock;