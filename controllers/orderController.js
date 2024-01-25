const Order = require('../models/orderModel');
const Product = require('../models/productModel');

getOrders = async (req, res) => {
  const { name, createdAt } = req.query;
  let orders;

  try {
    if (name && createdAt) {
      orders = await Order.find( { name, createdAt });
    } else if (name) {
      orders = await Order.find( { name });
    } else if (createdAt) {
      orders = await Order.find( { createdAt });
    } else {
      orders = await Order.find()
    }

    res.json({ orders });
  } catch (error) {
    console.log("Error while loading orders", error);
      res.status(500).json({ error: "Error while loading orders" });
  }
}

// Recupera i dettagli di un singolo ordine
getSingleOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ order });
  } catch (error) {
    console.log('Error while retrieving order', error);
    res.status(500).json({ error: 'Error while retrieving order' });
  }
};

// Aggiunge un nuovo corso al database
addOrder = async (req, res) => {
  const { name, createdAt, products } = req.body
  const newOrder = new Order({ name, createdAt, products }) // Crea una nuova istanza del modello di corso con i dati forniti

  try {
      const savedOrder = await newOrder.save();
      await Product.updateProduct(
          { _id: { $in: products } },
          { $push: { orders: savedOrder._id } }
      );

      res.json(savedOrder);
  } catch (error) {
      console.log('Error while uploading order to DB', error);
      res.status(500).json({ error: 'Error while uploading order to DB' });
  }
}

// Aggiorna un corso esistente nel database
updateOrder = async (req, res) => {
  const { id } = req.params
  const { name, createdAt, products } = req.body

  await Order.findByIdAndUpdate(id, {name, createdAt, products}) // Cerca il corso con l'ID specificato e aggiorna i campi desiderati
  .then(order => res.json(order)) // Restituisce un oggetto JSON rappresentante il corso aggiornato
  .catch(err => res.status(500).json({error: 'Error while updating order', err})) // Restituisce un messaggio JSON di errore se si verifica un errore durante l'aggiornamento
}

// Elimina un corso esistente dal database
deleteOrder = async (req, res) =>{
  const { id } = req.params
  
  await Order.findByIdAndDelete(id) // Cerca e elimina il corso con l'ID specificato
  .then(order => {
      if(!order){
          return res.status(404).json({error: "Order not found"}) // Restituisce un messaggio JSON di errore se il corso non viene trovato
      }
      res.json({message: "Order deleted successfully"}) // Restituisce un messaggio JSON indicando che il corso è stato eliminato correttamente
  })
  .catch(err => res.status(500).json({error: 'Error while deleting order', err})) // Restituisce un messaggio JSON di errore se si verifica un errore durante l'eliminazione
}

// Esporta le funzioni per consentirne l'utilizzo da altre parti del codice
module.exports = {getOrders, getSingleOrder, addOrder, updateOrder, deleteOrder}