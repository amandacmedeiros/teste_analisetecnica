describe('RealizarCompra', () => {

    it('Compra realizada com sucesso', () => {
        //acessando site
        cy.visit('/')
        
        //buscando menu para clicar
        cy.get('.shop-menu.pull-right')
        .contains('Products')
        .click()
        
         
            //buscar uma peça no menu feminino e adicionando ao carrinho
            cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa')
            .click()
                cy.get('#Women > .panel-body > ul > :nth-child(1) > a')
                .click()

                cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
                .click()

                cy.get(':nth-child(5) > .btn')
                .click()
                cy.screenshot('Print1')

                    //clicando para verificar o carrinho
                 cy.get('u')
                   .click()
                   cy.screenshot('Print2')
                   
                    //processando checkout
                    cy.get('.col-sm-6 > .btn')
                    .click()

                        //acessando tela de login e criação de conta
                        cy.get('.modal-body > :nth-child(2) > a > u')
                        .click()
                        
                         //preenchendo forms e clicando em inscrever-se
             cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)')
             .type('Joaquim Nogueira')
                    //necessario alterar email para realizar novo cadastro
             cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)')
             .type('JoNog1231@email.com')
             cy.screenshot('Print3')

              cy.get('#form > div > div > div:nth-child(3) > div > form > button')
              .click()
              
              //preenchimentos de campos
              cy.get('#password.form-control')
              .type('Password@1234')

                cy.get('#first_name.form-control')
                .type('Joa2quimm')

                    cy.get('#last_name.form-control')
                    .type('Nogueeira')

                    cy.get('#address1.form-control')
                    .type('Avenida Bernardo Manuel, 13670, Casa 02')
                                  
                        cy.get('#country').select('Singapore'); // Abre o dropdown
                        //contains('#country > option:nth-child(7)').click(); // Seleciona a opção

                        cy.get('#state.form-control')
                        .type('CE')
                            
                        cy.get('#city.form-control')
                        .type('Fortaleza')
                            
                            cy.get('#zipcode.form-control')
                            .type('60760-312')
                            
                            cy.get('#mobile_number.form-control')
                            .type('81999090987')
                            cy.screenshot('Print4')

                            //Criando Conta

                            cy.get('#form > div > div > div > div.login-form > form > button')
                            .click()

                            //Clicando em continuar após criação do cadastro
                            cy.get('[data-qa="continue-button"]')
                            .click()
                            
                                //acessando carrinho
                                cy.get('.shop-menu > .nav > :nth-child(3) > a')
                                .click()

                                    //clicando para finalizar checkout
                                    cy.get('.col-sm-6 > .btn')
                                    .click()

                                    cy.get(':nth-child(7) > .btn')
                                    .click()
                                    

                   //preenchendo dados de pagamento
                   cy.get('[data-qa="name-on-card"]')
                   .type('Nome do cartao de credito')       
                   
                   cy.get('[data-qa="card-number"]')
                   .type('123456789653254')

                   cy.get('[data-qa="cvc"]')
                   .type('542')

                   cy.get('[data-qa="expiry-month"]')
                   .type('12')
                   
                   cy.get('[data-qa="expiry-year"]')
                   .type('2029')
                   cy.screenshot('Print5')

                    //finalizando pagamento //
                    cy.get('[data-qa="pay-button"]')
                    .click()
                    cy.screenshot('Print6')
                    
                                 
                    //validando pedido realizado e status:
                    cy.get('.col-sm-9 > .btn-default')
                    .click()

                    //validando arquivo invoice

                    cy.readFile('cypress/downloads/invoice.txt')
                    .should('exist')
                    cy.screenshot('Print7-Testefinalizado')
            
    })
})