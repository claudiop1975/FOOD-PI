import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const SimpleCardRecipe = ({ recipe }) => {
    const idRecipe = recipe.idRecipe;

    return (
        <CardSimple>
            <CardImage>
                <Link to={`/detail/${idRecipe}`}>
                    <Image src={recipe.image} alt={recipe.name} />
                </Link>
            </CardImage>
            <CardContent>
                <Title>{recipe.name}</Title>
                <hr style={{ margin: "0px" }}></hr>
                <TitleDiet>Diets Types</TitleDiet>
                <ContentDiv>
                    <Lista>
                        {recipe.diets?.map((diet) => (
                            <ListItem key={diet}>{diet}, </ListItem>
                        ))}
                    </Lista>
                </ContentDiv>
            </CardContent>
        </CardSimple>
    );
};
export default SimpleCardRecipe;
const CardSimple = styled.div`
        border: .3rem solid #f2f9bdd3;
        border-radius: 1rem;
        width: 16vw;
        height: 50vh;
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        `
const CardImage = styled.div`
        width: 90%;
        max-width: 15rem; /* set a maximum width if necessary */
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        `
const Image = styled.img`
    width:100%; 
    height:auto;
    border-radius:4%;
    `
const CardContent = styled.div`
        position: relative;
        width: 100%;
        height: 9rem; /* or any desired height */
        text-decoration: none;
        text-align: center;
        `
const ContentDiv = styled.div`
        position: relative;
        width: 90%;
        height: 9rem; /* or any desired height */
        text-decoration: none;
        text-align: justify;
        
        @media screen {
            font-size: .7em;
            padding: 0;
        }
        `
const Title = styled.h2`
    font-size: small;
    color: #a7a704c5;
    margin: auto;
    `
const TitleDiet = styled.h3`
color: darkkhaki;
text-decoration-line: underline;
margin: auto;
font-size: x-small;
`
const Lista = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`
const ListItem = styled.li`
color: darksalmon;
display: inline-flex;
flex-direction: row;
margin: 0em;
padding: 4px;
`