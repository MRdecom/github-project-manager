import React from 'react';
import {RepoData} from "../../../../types/RepoData";
type Props = {

} & RepoData
const RepoBlock = (props :Props) => {
    return <div className='repo-block'>
                <p><strong>Repo Name : </strong> {props.name}</p>
                <p><strong>Repo Link : </strong> <a href={props.link}>{props.link}</a></p>
                <p><strong>Language : </strong> {props.language}</p>
           </div>
}

export default RepoBlock;