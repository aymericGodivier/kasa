import Carrousel from "../components/carrousel"
import { describe, it, expect } from 'vitest'
import React from 'react'
import { render } from '@testing-library/react'

const inputImages = [
    './src/assets/eric-muhr-unspah.jpg',
    './src/assets/kalen-emsley-Bkci-unsplash.jpg'
]

const inputOneImage = ['./src/assets/eric-muhr-unspah.jpg']

describe('testing creating the carrousel correctcly whith multiple images', ()=>{
    it('should display the first image from the inputImages array', ()=>{

        const { getByAltText } = render(<Carrousel images={inputImages} />);
        const firstImage = getByAltText('Slide 1');
        expect(firstImage).toBeInTheDocument();
        expect(firstImage).toHaveAttribute('src', inputImages[0]);
    });

    it('should display navigation arrows for multiple images', () => {
        const { getByTestId } = render(<Carrousel images={inputImages} />);
        const prevArrow = getByTestId('leftArrow');
        const nextArrow = getByTestId('rightArrow');
        expect(prevArrow).toBeInTheDocument();
        expect(nextArrow).toBeInTheDocument();
    });

    it('should display a span indicating the number of images', () => {
        const { getByTestId } = render(<Carrousel images={inputImages} />);
        const counter = getByTestId('counter');
        const counterContent = counter.textContent;
        expect(counter).toBeInTheDocument();
        expect(counterContent).toEqual(`1/${inputImages.length}`);
    });

})

describe('creating the carrousel correctly with only one image', ()=>{
    it('should not display navigation arrows if there is only one image', () => {
        const { queryByTestId } = render(<Carrousel images={inputOneImage} />);
        const prevArrow = queryByTestId('leftArrow');
        const nextArrow = queryByTestId('rightArrow');
        expect(prevArrow).not.toBeInTheDocument();
        expect(nextArrow).not.toBeInTheDocument();
    });
    it('should not display a span indicating the number of images if there is only one image', () => {
        const {queryByTestId } = render(<Carrousel images={inputOneImage} />);
        const counter = queryByTestId('counter');
        expect(counter).not.toBeInTheDocument();
    });
})