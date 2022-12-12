const express = require("express");
const { productos, Producto } = require("./products");

const router = express.Router();
const contenedorProductos = new Producto;


router.get("/", (req, res) => {
    const productosObtenidos = contenedorProductos.getAll();
    if (productosObtenidos) {
        res.json({
            productos
        });
    } else {
        res.json({
            msg: "No hay productos. Por favor cree uno"
        })
    }
});

router.get('/:id', (req, res) => {
    const id = (req.params.id)
    const producto = contenedorProductos.getById(parseInt(id));
    if (isNaN(id)) {
        res.json({
            error: "El parametro no es un numero"
        });
    } else {
        res.json({
            producto
        })
    }
});

router.post('/', (req, res) => {
    let producto = req.body
    productos.push(producto)
    productos.forEach((item), id => {
        item.id = id + 1;
    })
});

router.put('/:id', (req, res) => {
    let id = parseInt((req.params.id));
    let { title, price, thumbnail, } = req.body;
    if (id <= productos.length) {
        if (title && price && thumbnail) {
            let index = productos.findIndex(producto => producto.id === id)
            contenedorProductos.deleteById(id);
            let producto = ({ title, price, thumbnail, id })
            productos.splice(index, 0, producto)
            res.json({
                msg: "Se actualizo el producto"
            })
        } else {
            res.json({
                msg: "Por favor ingresa todos los campos: 'title, price, thumbnail'"
            })
        }
    } else {
        res.json({
            msg: "El id no es correcto"
        })
    }
});

router.delete('/:id', (req, res) => {
    const id = (req.params.id)
    if (id > productos - this.length) {
        res.json({
            msj: `Se elimino el producto con el id ${id}`,
        })
    }
});


module.exports = router;
