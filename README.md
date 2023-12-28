# api-inventory
API de Controle de Estoque é uma solução eficiente para gerenciar o inventário de produtos. Desenvolvida em Node.js, ela oferece endpoints para adicionar/remover itens, verificar o status do estoque e atualizar quantidades.

## Rotas do estoque

****Para utlizar qualquer rota é necessário estar logado com um usuário autenticado***

### **POST**
      
  - para add novos itens ao estoque deve ser usada a rota **/inventory** com as seguintes informações no body:
    - productName
    - productDescription
    - productQuantity
    - productType
    - productPrice
         
### **GET** de todos os itens
  - Utilizar a rota **/inventory**
    
### **GET** pelo id do produto
  - Utilizar a rota **/inventory/id**

### **DELETE** de itens do estoque
  - Utilizar a rota **/inventory/id**

### **PATCH** para atualizar estoques
  - Utilizar a rota **/inventory/id** e enviar o item a ser alterado no body da requisição 
