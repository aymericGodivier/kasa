import LocationCard from "../components/location-card";
import { describe, it, expect } from 'vitest'
import React from 'react'
import { render } from '@testing-library/react'

describe('creating a card with the location title', () => {
    it('should render the title correctly', () => {
        // Données de test
        const id = 123;
        const title = 'Test Location';

        // Rendu du composant
        const { getByText } = render(<LocationCard id={id} title={title} />);

        // Vérification
        const titleElement = getByText(title);
        expect(titleElement).toBeTruthy();
    });

})