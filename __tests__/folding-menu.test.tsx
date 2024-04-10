import  FoldingMenu  from '../components/folding-menu'
import { describe, it, expect } from 'vitest'
import React from 'react'
import { render } from '@testing-library/react'

const inputTitle = "My Title"

describe('creating the folding menu ', () => {
    it('should return the same string as input', () => {
        // Données de test
        const inputContent = "This is a description"

        // Rendu du composant
        const { getByText } = render(<FoldingMenu menuTitle={inputTitle} content={inputContent}/>);

        // Vérification
        const contentElement = getByText(inputContent);
        //expect(contentElement).toBeInTheDocument();
        expect(contentElement).toBeTruthy();
    });

    it('should return multiples spans if input type is an array', () => {
        // Données de test
        const inputContent = ["Item 1", "Item 2", "Item 3"];

        // Rendu du composant
        const { container } = render(<FoldingMenu menuTitle={inputTitle} content={inputContent}/>);

        // Vérification
        const spanElements = container.querySelectorAll('.menu-content p span');
        expect(spanElements).toHaveLength(inputContent.length); // Vérifie qu'il y a 3 éléments <span>
    });

    it('should return an empty content if the input is neither a string nor an array', () => {
        // Données de test
        const inputContent = null;

        // Rendu du composant
        const { getByText } = render(<FoldingMenu menuTitle={inputTitle} content={inputContent}/>);

        // Vérification
        const contentElement = getByText('', { selector: '.menu-content p' });
        //expect(contentElement).toBeInTheDocument();
        expect(contentElement).toBeTruthy();
    });

})