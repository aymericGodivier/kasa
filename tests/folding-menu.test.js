const { processContent } = require('../components/folding-menu');

 
describe('creating teh content of the folding menu', () => {
    it('should return the same string as the input if input type is a string', () => {
        const expectedState = 'content of my menu'
        expect(processContent('content of my menu')).toEqual(expectedState)
    })

    it('should return a string of concatenated items with line breaks if input type is an array', () => {
        const inputArray = ['item1', 'item2', 'item3'];
        const expectedState = '<span>item1<br /></span><span>item2<br /></span><span>item3<br /></span>';
        expect(processContent(inputArray)).toEqual(expectedState);
    })

    it('should return an empty string if the input neither string nor array', () => {
        const input = null;
        const expectedState = '';
        expect(processContent(input)).toEqual(expectedState);
    })

})