import { gql } from "graphql-tag";

export const QUERY_ME = gql`
{
    me {
        _id
        username
        savedVideoGames {
            videoGameId
            creators
            image
            description
            title
            link
        }
    }
}
`;