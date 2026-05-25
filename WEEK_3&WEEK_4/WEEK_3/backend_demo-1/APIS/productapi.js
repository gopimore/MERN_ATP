import exp from 'express'
export const productApp=exp.Router()
let products=[]
productApp.get('/products',(req,res)=>{
    //send resonse to client
    res.status(200).json({message:'All products',payload:products});
    //console.log(users)
})
//get req handling route(Read uers)
productApp.post('/products',(req,res)=>{
   let newProd=req.body;
   products.push(newProd) //pushing new product int products array
   res.status(201).json({message:"Product Created",payload:newProd})
})
//post req 
productApp.put('/products', (req, res) => {
    let modifyProd = req.body
    let index = products.findIndex(ele => ele.id === modifyProd.id)
    if (index === -1) {
        return res.status(404).json({ message: "Product Not Found" })
    }
    // update user
    products[index] = modifyProd
    res.status(202).json({
        message: "Product modified",
        payload: modifyProd
    })
})

// delete product
productApp.delete('/products/:id',(req,res)=>{
    // get product id from req params
    console.log(req.params)
    // get product id from req params
    let productId=Number(req.params.id) 
    let ProductIndex=products.find((productObj)=>productObj.id===productId)
    // if product found, delete product
    if(ProductIndex){
        let deletedUser=products.splice(ProductIndex,1)
        res.status(200).json({message:"product deleted"})
    }
    // if product not found, send 404 response
    else{
        res.status(404).json({message:"product not found"})
    }
    
})
//read product by id
productApp.get('/products-id/:id', (req, res) => {
    let productId = Number(req.params.id)
    // find product
    let product = products.find(prodObj => prodObj.id === productId)
    if (!product) {
        return res.status(404).json({ message: "Product Not Found" })
    }
    res.status(200).json({message: "Product Found",payload: product})
})
//read product by brand
productApp.get('products-brand//:brand', (req, res) => {
    let productBrand = Number(req.params.brand)
    // find user
    let brand = products.find(brandObj => brandObj.id === productBrand)
    if (!brand) {
        return res.status(404).json({ message: "Brand Not Found" })
    }
    res.status(200).json({ message: "Brand found",payload: brand})
})