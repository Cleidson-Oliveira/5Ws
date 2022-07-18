import { AiOutlineComment, AiOutlineDelete } from "react-icons/ai";
import { RoundedButton } from "../Button";
import { CommentField } from "../CommentField";
import { Wrapper } from "./style";

interface DescriptionsListType {
    data: {
        roomName: string,
        nickName: string,
        url: string,
        who: string,
        what: string,
        when: string,
        where: string,
        why: string,
        comments: string[],
    },
    ref: {
        "@ref": {
            id: string
        }
    }
} 

interface CardDescriptionProps {
    addNewCommentOnDescription: (ref: string, comments: string[]) => void,
    deleteDescription?: (ref: string) => void,
    desc: DescriptionsListType,
}

export function CardDescription ({ desc, addNewCommentOnDescription, deleteDescription }: CardDescriptionProps) {
    return (
        <Wrapper>
            <img src={desc.data.url} />
            <h4>{desc.data.nickName}</h4>
            <div>
                <p>Who: {desc.data.who}</p>
                <p>What: {desc.data.what}</p>
                <p>When: {desc.data.when}</p>
                <p>Where: {desc.data.where}</p>
                <p>Why: {desc.data.why}</p>
            </div>
            <div>
                <h4>Comentários</h4>
                {
                desc.data.comments.length > 0
                ? desc.data.comments.map((comment, i) => (
                    <p key={i}>{comment}</p>
                ))
                : (<p>Que tal incluir um comentário?</p>)
                }
            </div>
            <CommentField>
                <input 
                    id={`comment-${desc.ref["@ref"].id}`}
                    placeholder="Adicione um comentário"
                />                                        
                <RoundedButton
                    onClick={() => addNewCommentOnDescription(desc.ref["@ref"].id, desc.data.comments)}
                >
                    <AiOutlineComment />
                </RoundedButton>
            </CommentField>
            {/* <RoundedButton onClick={() => {
                deleteDescription(desc.ref["@ref"].id)}}
            >
                <AiOutlineDelete />
            </RoundedButton> */}
                
        </Wrapper>
    )
}