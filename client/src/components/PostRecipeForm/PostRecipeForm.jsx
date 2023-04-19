import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { postRecipe } from '../../redux/actions.js';

// import './PostRecipeForm.css';
import Button from "../Button/Button";
import styled from 'styled-components';
const Title = styled.h1`font-size: 2em; text-align: center; color: #83ea7b93; margin-top: .1rem; margin-bottom: .3rem; text-decoration: underline;width: inherit;`;
const Form = styled.form`display: flex;flex-direction: column;-ms-flex-align: center;-ms-flex-pack: center;margin: 0 auto;width: 50%;height: 100%;background-color: #107c06a6;    border-radius: 10px;box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);padding: 3rem;margin-top: 3rem;align-items: center;justify-content: flex-start;`;
const Label = styled.label`font-size: 1em;color: #ffffff7c;-webkit-text-stroke-color: #000000;margin: .5em;`;
const DivDiet = styled.div`display: -ms-flexbox;display: flex;-ms-flex-direction: row-reverse;flex-direction: row-reverse;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center;width: initial;height: fit-content;background-color: #7beac594;border-radius: 10px;box-shadow: 0 0 10px 0 rgb(0 0 0 / 84%);padding: 1.5rem;margin-top: .5rem;margin-bottom: 3 rem;flex-wrap: wrap;align-content: baseline;`;
const TextArea = styled.textarea`font-size: 1em;color: #0000007d;-webkit-text-stroke-color: #000000;margin: .5em;height:5rem;width: inherit;`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.imageUrl})`};
`;

const images = [
    "https://wallpaperscute.com/wp-content/uploads/2020/09/HD-Food-Backgrounds.jpg",
    "https://getwallpapers.com/wallpaper/full/4/5/c/1184388-beautiful-healthy-food-wallpaper-1920x1080.jpg",
    "http://www.wallpapers4u.org/wp-content/uploads/cheese_wine_meat_food_vegetables_fruits_70077_1920x1080.jpg",
    "https://wallpapercave.com/wp/wp5853656.jpg",
];







const PostRecipeForm = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const currentImage = images[currentImageIndex];
    
    const changeImage = () => {
      const nextImageIndex =
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(nextImageIndex);
    };
    
    // call changeImage to change image after some time
    setTimeout(changeImage, 3000);




    const dispatch = useDispatch();
    //const diets = useSelector(state => state.diets);
    const [checked, setChecked] = useState([]);
    const [input, setInput] = useState({
        name: '',
        recipeSummary: '',
        healthScore: 0,
        stepByStep: [],
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
        // console.log(errors);
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
        // console.log(errors);
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {

            dispatch(postRecipe(input));
            setInput({
                name: '',
                recipeSummary: '',
                healthScore: 0,
                stepByStep: [],
                image: '',
                diets: []
            });
            alert('Recipe created successfully!');
        } else {
            alert('Please fill all the fields correctly');
        }
    }

    const validate = (data) => {
        console.log(data.stepByStep);
        let errors = {};

        if (!data.name) {
            errors.name = 'Name is required';
        } else if (data.name.length < 3) {
            errors.name = 'Name must contain at least 3 characters';
        }
        if (!data.recipeSummary) {
            errors.recipeSummary = 'Summary is required';
        } else if (data.recipeSummary.length < 120) {
            errors.recipeSummary = 'Summary must contain at least 120 characters';
        }
        if (!data.healthScore) {
            errors.healthScore = 'Health Score is required';
        } else if (data.healthScore < 0 || input.healthScore > 100) {
            errors.healthScore = 'Health Score must be between 0 and 100';
        }
        if (data.stepByStep.length < 1) {
            errors.stepByStep = 'Steps is required';
        } else if (data.stepByStep.length < 3) {
            errors.stepByStep = 'Steps must contain at least 3 steps';
        } 
        if (!data.image) {
            errors.image = 'Image is required';
        } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(data.image)) {
            errors.image = 'Image must be a valid URL';
        }
        if (data.diets.length < 1) {
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
        setErrors(validate({
            ...input,
            stepByStep:[...steps, stepInput]
        }));
        setStepInput('')
    }
    function handleStep(e) {

        setStepInput(e.target.value)
    }

    return (

        <ImageContainer imageUrl={currentImage}>
            <Link to='/home'>
                <Button text='Home' />
            </Link>
            <Title>Recipe Creator</Title>
            <Form onSubmit={handleSubmit}>

                <Label>Recipe Name</Label>
                <input type='text' name='name' value={input.name} onChange={handleInputChange} />
                {errors.name && <p>{errors.name}</p>}

                <Label>Recipe Summary</Label>
                <TextArea type='text' name='recipeSummary' value={input.recipeSummary} onChange={handleInputChange} />
                {errors.recipeSummary && <p>{errors.recipeSummary}</p>}

                <Label>Health Score</Label>
                <input type='number' name='healthScore' value={input.healthScore} onChange={handleInputChange} />
                {errors.healthScore && <p>{errors.healthScore}</p>}

                {/* <Label>Steps</Label>
                <TextArea type='text' name='stepByStep' value={input.stepByStep} onChange={handleInputChange} />
                 */}


                <input type="text" value={stepInput} onChange={handleStep} id="steps" />
                <button type='button' onClick={addToSteps}>Add Create Steps</button>
                <ul id="StepList">{steps.map((step, index) => <li key={index}>{`Paso ${index + 1}`} - {step}</li>)}</ul>
                {errors.stepByStep && <p>{errors.stepByStep}</p>}


                <Label>Recipe Image</Label>
                <input type='text' name='image' value={input.image} onChange={handleInputChange} />
                {errors.image && <p>{errors.image}</p>}

                <Label>Diets:</Label>
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
                <Button text={"Create Recipe"} handleClick={null} type='submit' disable={!(Object.keys(errors).length === 0)}>Create Recipe</Button>

            </Form>
        </ImageContainer>
    )
}
export default PostRecipeForm;