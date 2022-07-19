import { AiOutlineComment, AiOutlineDelete } from "react-icons/ai";
import { RoundedButton } from "../Button";
import { CommentField } from "../CommentField";
import { CardHeader, CardMain, Comment, Wrapper } from "./style";

interface CommentType {
    name: string,
    urlImage: string,
    comment: string
}

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
        comments: CommentType[],
    },
    ref: {
        "@ref": {
            id: string
        }
    }
} 

interface CardDescriptionProps {
    addNewCommentOnDescription: (ref: string, comments: CommentType[]) => void,
    deleteDescription?: (ref: string) => void,
    desc: DescriptionsListType,
}

export function CardDescription ({ desc, addNewCommentOnDescription, deleteDescription }: CardDescriptionProps) {
    return (
        <Wrapper>
            <CardHeader>
                <img src={desc.data.url} />
                {deleteDescription && 
                <RoundedButton onClick={() => {
                    deleteDescription(desc.ref["@ref"].id)}}
                >
                    <AiOutlineDelete />
                </RoundedButton>}
            </CardHeader>
            <CardMain>
                <h4>{desc.data.nickName}</h4>
                <div>
                    <p>Who: {desc.data.who}</p>
                    <p>What: {desc.data.what}</p>
                    <p>When: {desc.data.when}</p>
                    <p>Where: {desc.data.where}</p>
                    <p>Why: {desc.data.why}</p>
                </div>
                <h4>Comentários</h4>
                <div>
                    {
                        desc.data.comments.length > 0
                        ? desc.data.comments.map((comment, i) => (
                            <Comment key={i}>
                                <img src={comment.urlImage}/>
                                <h5>{comment.name}</h5>
                                <p>{comment.comment}</p>
                            </Comment>
                            ))
                            : (<p>Que tal incluir um comentário?</p>)
                        }
                </div>
            </CardMain>    
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
        </Wrapper>
    )
}