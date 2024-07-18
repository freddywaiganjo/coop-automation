describe('Navbar tests', ()=>{
    it('navigate naav bar test', ()=>{
        cy.get("[id='menu-item-757'] >a").click();
        cy.get("[id=' menu-item-1255'] >a").click();
    })
})