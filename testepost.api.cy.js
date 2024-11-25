
describe ('Cadastar Produto', () => {
  
    it('Cadastrar Produto', () => {


      cy.request({
        method: 'POST',
        url:'https://api.restful-api.dev/objects',
          failOnStatusCode: false, //Caso o teste seja para validar falha, necessário está true  
          body: {
            "name": "testeaa",
            "data": {
            "year": 2024,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"}                 
                }
                }).as('ResultadoCadastro')

                        //validação de retorno
                        cy.get('@ResultadoCadastro').then((response) => {
                        expect(response.status).equal(200)
                        expect(response.body.id).not.empty
                })
})
    
   })






