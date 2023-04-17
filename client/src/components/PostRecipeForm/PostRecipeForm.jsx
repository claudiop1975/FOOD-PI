import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { postRecipe } from '../../redux/actions.js';

// import './PostRecipeForm.css';
import Button from "../Button/Button";
import styled from 'styled-components';
const Title = styled.h1`font-size: 2.5em; text-align: center; color: #83ea7b93; margin-top: 3rem; margin-bottom: 3rem; text-decoration: underline;width: inherit;`;
const Form = styled.form`display: flex;flex-direction: column;-ms-flex-align: center;-ms-flex-pack: center;margin: 0 auto;width: 50%;height: 100%;background-color: #107c06a6;    border-radius: 10px;box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);padding: 3rem;margin-top: 3rem;align-items: center;justify-content: flex-start;`;
const Label = styled.label`font-size: 1em;color: #ffffff7c;-webkit-text-stroke-color: #000000;margin: .5em;`;
const DivDiet = styled.div`display: -ms-flexbox;display: flex;-ms-flex-direction: row-reverse;flex-direction: row-reverse;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center;width: initial;height: fit-content;background-color: #7beac594;border-radius: 10px;box-shadow: 0 0 10px 0 rgb(0 0 0 / 84%);padding: 1.5rem;margin-top: .5rem;margin-bottom: 3 rem;flex-wrap: wrap;align-content: baseline;`;
const TextArea = styled.textarea`font-size: 1em;color: #0000007d;-webkit-text-stroke-color: #000000;margin: .5em;height:5rem;width: inherit;`;

const PostRecipeForm = () => {

    const dispatch = useDispatch();
    //const diets = useSelector(state => state.diets);
    const [checked, setChecked] = useState([]);
    const [input, setInput] = useState({
        name: '',
        recipeSummary: '',
        healthScore: 0,
        stepsByStep: [],
        image: '',
        diets: []
    });
    const [errors, setErrors] = useState({});

    const [steps, setSteps] = useState([]);
    const [stepInput, setStepInput] = useState("");

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        console.log(errors);
    }

    const handleCheckboxChange = (e) => {
        // console.log(checked);
       const cosoquedijoclaudio =(e)=>{
         if (e.target.checked) {
            setChecked([...checked, e.target.value]);
            return [...checked, e.target.value]
        } else {
            setChecked(checked.filter(diet => diet !== e.target.value));
         return checked.filter(diet => diet !== e.target.value)
        }
       }
       
        setInput({
            ...input,
            diets: cosoquedijoclaudio(e)
        });
         setErrors(validate({
            ...input,
            diets:cosoquedijoclaudio(e)
        })); 
        console.log(errors);
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {

            dispatch(postRecipe(input));
            setInput({
                name: '',
                recipeSummary: '',
                healthScore: 0,
                stepsByStep: [],
                image: '',
                diets: []
            });
            alert('Recipe created successfully!');
        } else {
            alert('Please fill all the fields correctly');
        }
    }

    const validate = (input) => {

        let errors = {};

        if (!input.name) {
            errors.name = 'Name is required';
        } else if (input.name.length < 3) {
            errors.name = 'Name must contain at least 3 characters';
        }
        if (!input.recipeSummary) {
            errors.recipeSummary = 'Summary is required';
        } else if (input.recipeSummary.length < 120) {
            errors.recipeSummary = 'Summary must contain at least 120 characters';
        }
        if (!input.healthScore) {
            errors.healthScore = 'Health Score is required';
        } else if (input.healthScore < 0 || input.healthScore > 100) {
            errors.healthScore = 'Health Score must be between 0 and 100';
        }
  /*       if (!input.stepByStep.length) {
            errors.stepByStep = 'Steps is required';
        } else if (input.stepByStep.length < 3) {
            errors.stepByStep = 'Steps must contain at least 3 steps';
        } */
        if (!input.image) {
            errors.image = 'Image is required';
        } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(input.image)) {
            errors.image = 'Image must be a valid URL';
        }
        if (input.diets.length < 1) {
            errors.diets = 'The recipe must have at least one type of diet';
        }

        return errors;
    };


    function addToSteps() {

        setSteps([...steps, stepInput])
        setInput({
            ...input,
            stepByStep: [...steps, stepInput]
        })
        setStepInput('')
    }
    function handleStep(e) {

        setStepInput(e.target.value)
    }

    return (

        <>
            <Link to='/home'>
                <Button text='Home' />
            </Link>
            <Title>Post Recipe</Title>
            <Form onSubmit={handleSubmit}>

                <Label>Name</Label>
                <input type='text' name='name' value={input.name} onChange={handleInputChange} />
                {errors.name && <p>{errors.name}</p>}

                <Label>Summary</Label>
                <TextArea type='text' name='recipeSummary' value={input.recipeSummary} onChange={handleInputChange} />
                {errors.recipeSummary && <p>{errors.recipeSummary}</p>}

                <Label>Health Score</Label>
                <input type='number' name='healthScore' value={input.healthScore} onChange={handleInputChange} />
                {errors.healthScore && <p>{errors.healthScore}</p>}

                {/* <Label>Steps</Label>
                <TextArea type='text' name='stepByStep' value={input.stepByStep} onChange={handleInputChange} />
                 */}


                <input type="text" value={stepInput} onChange={handleStep} id="steps" />
                <button type='button' onClick={addToSteps}>Add Step</button>
                <ul id="StepList">{steps.map((step, index) => <li>{`Paso ${index + 1}`} - {step}</li>)}</ul>
                {errors.stepByStep && <p>{errors.stepByStep}</p>}


                <Label>Image</Label>
                <input type='text' name='image' value={input.image} onChange={handleInputChange} />
                {errors.image && <p>{errors.image}</p>}

                <Label>Diets</Label>
                <DivDiet>
                    <Label >Gluten Free</Label>
                    <input type="checkbox" name="diets" value="gluten free" onChange={handleCheckboxChange} />
                    <Label >Ketogenic</Label>
                    <input type="checkbox" name="diets" value="ketogenic" onChange={handleCheckboxChange} />
                    <Label >Vegetarian</Label>
                    <input type="checkbox" name="diets" value="vegetarian" onChange={handleCheckboxChange} />
                    <Label >Lacto Ovo Vegetarian</Label>
                    <input type="checkbox" name="diets" value="lacto ovo vegetarian" onChange={handleCheckboxChange} />
                    <Label>Vegan</Label>
                    <input type="checkbox" name="diets" value="vegan" onChange={handleCheckboxChange} />
                    <Label>Pescetarian</Label>
                    <input type="checkbox" name="diets" value="pescetarian" onChange={handleCheckboxChange} />
                    <Label>Paleolithic</Label>
                    <input type="checkbox" name="diets" value="paleolithic" onChange={handleCheckboxChange} />
                    <Label>Primal</Label>
                    <input type="checkbox" name="diets" value="primal" onChange={handleCheckboxChange} />
                    <Label>Whole 30</Label>
                    <input type="checkbox" name="diets" value="whole 30" onChange={handleCheckboxChange} />
                    <Label>Fodmap Friendly</Label>
                    <input type="checkbox" name="diets" value="fodmap friendly" onChange={handleCheckboxChange} />
                    {errors.diets && <p>{errors.diets}</p>}
                </DivDiet>
                <br />
                <button type='submit' disable={!(Object.keys(errors).length === 0)}>Create Recipe</button>

            </Form>
        </>
    )
}
export default PostRecipeForm;