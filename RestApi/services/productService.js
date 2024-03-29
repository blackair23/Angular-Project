const Listing = require("../models/Listing")

async function getAll() {
    return Listing.find({}); 
}

async function getByUserId(userId) {
    return Listing.find({_ownerId: userId})
}

async function getById(id) {
    return Listing.findById(id).populate('_ownerId');
} 

async function createProduct(listing) {
    console.log('createProduce >>>', listing);
    return Listing.create(listing);
    
}
// title: ,
//     location:  ,
//     price: 1,
//     description:  , 
//     imgFile:  ,
//     service1: ,
//     service2: ,
//     service3: ,
//     service4: ,
//     _ownerId:
async function editProduct(id, listing) {
    
    const existing = await getById(id);

    // console.log(id, existing, '\n product>>>> \n', product)

    existing.title = listing.title;
    existing.location = listing.location;
    existing.price = listing.price;
    existing.description = listing.description;
    existing.imgFile = listing.imgFile;
    existing.service1 = listing.service1;
    existing.service2 = listing.service2;
    existing.service3 = listing.service3;
    existing.service4 = listing.service4;
    
    return existing.save();
}

async function deleteProduct(id) {
    return Listing.findByIdAndRemove(id)
}



module.exports = {
    getAll,
    getById,
    createProduct,
    editProduct,
    deleteProduct,
    getByUserId, 
}