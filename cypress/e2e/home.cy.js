describe('Home Page test',()=>{
    it('Check The Input field',()=>{
        cy.visit('http://localhost:3000/');
        cy.get('input').type('Cindrella')
        cy.get('button').click();
        cy.contains('Welcome Cindrella')
       
    })
})