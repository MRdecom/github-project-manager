import React from 'react';
import {RepoData} from "../../../types/RepoData";
import {RepoBlock} from "./RepoBlock";

type Props = {
    repoList: any[]
}

const RepoInformation = (props: Props) => {
    return (
        <div className='repo-information-block'>
            <h3>Repo Information</h3>
            {props.repoList &&
                props.repoList.map((rep: RepoData, i: React.Key) => {
                    return <RepoBlock
                        link={rep.link}
                        name={rep.name}
                        language={rep.language}
                        key={i}/>
                })
            }
        </div>
    )
}

export default RepoInformation;
