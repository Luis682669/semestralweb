// JS/catalogo.js
export const IMG_PLACEHOLDER = "img/placeholder.png"; // si no tienes, crea una imagen simple o cambia ruta

export const IMAGE_MAP = {
  // DESPENSA
  "Arroz Del Oro 2kg": "img/imgProductos/deloro.png",
  "Frijoles Negros 500g": "img/imgDespensa/frijoles.jpg",
  "Azúcar Morena 1kg": "img/imgProductos/azucar.png",
  "Lentejas 500g": "img/imgDespensa/lentejas.png",

  // BEBIDAS
  "Jugo Cifrut 3L": "img/imgProductos/juguito.png",
  "Coca Cola 2L": "img/imgBebidas/cocacola.png",
  "Té frío limón": "img/imgBebidas/te.png",
  "Agua Purificada 2L": "img/imgBebidas/agua.png",
  "Jugo Natural 1L": "img/imgBebidas/jugo.png",
  "Soda Sabor a Cola 2L": "img/imgBebidas/soda.png",

  // ASEO
  "Ariel 900g": "img/imgProductos/ariel.png",
  "Jabón Líquido 1L": "img/imgProductos/jabon.png",
  "Cloro Multiusos": "img/imgProductos/cloro.png",
  "Esponja Multiusos": "img/imgAseo/esponja.png",

  // CONGELADOS
  "Pollo Congelado 1kg": "img/imgProductos/pollo.png",
  "Filete de Pescado": "img/imgCongelados/filete.jpg",
  "Helado Vainilla 500g": "img/imgCongelados/helado.png",
  "Nuggets de Pollo 400g": "img/imgCongelados/nuggets.png",
  "Papas Congeladas 500g": "img/imgCongelados/papas.png",

  // FARMACIA
  "Acetaminofén 500mg": "img/imgProductos/acetaminofen.png",
  "Antialérgico 12h": "img/imgProductos/alergial.png",
  "Vitamina C 1000mg": "img/imgProductos/vitaminas.png",
  "Alcohol Gel 250ml": "img/imgFarmacia/alcohol.png",
  "Jarabe para la Tos 120ml": "img/imgFarmacia/jarabe.png",

  // HOGAR
  "Escoba Deluxe": "img/imgProductos/escoba.png",
  "Cubeta 10L": "img/imgProductos/cubeta.png",
  "Velas Aromáticas": "img/imgProductos/velas.png",
  "Trapo de Microfibra": "img/imgHogar/trapo.png",
  "Balde con Tapa 20L": "img/imgHogar/balde.png",

  // COMIDAS
  "Sopa Instantánea": "img/imgProductos/comida1.png",
  "Atún en Agua": "img/imgProductos/comida2.png",
  "Salsa de Tomate": "img/imgProductos/comida3.png",
  "Hamburguesa Congelada": "img/imgComidas/hamburguesa.png",
  "Hot Dog de Carne 400g": "img/imgComidas/hotdog.png",
  "Pizza Congelada Pepperoni": "img/imgComidas/pizza.png",

  // TECNOLOGÍA
  "Audífonos Bluetooth": "img/imgTecnologia/audifonos.png",
  "Teclado Gamer RGB": "img/imgTecnologia/teclado.png",
  "Mouse Inalámbrico": "img/imgTecnologia/mouse.png"
};

export const CATEGORY_MAP = {
  despensa: [
    "Arroz Del Oro 2kg",
    "Frijoles Negros 500g",
    "Azúcar Morena 1kg",
    "Lentejas 500g",
  ],
  bebidas: [
    "Jugo Cifrut 3L",
    "Coca Cola 2L",
    "Té frío limón",
    "Agua Purificada 2L",
    "Jugo Natural 1L",
    "Soda Sabor a Cola 2L",
  ],
  aseo: [
    "Ariel 900g",
    "Jabón Líquido 1L",
    "Cloro Multiusos",
    "Esponja Multiusos",
  ],
  congelados: [
    "Pollo Congelado 1kg",
    "Filete de Pescado",
    "Helado Vainilla 500g",
    "Nuggets de Pollo 400g",
    "Papas Congeladas 500g",
  ],
  farmacia: [
    "Acetaminofén 500mg",
    "Antialérgico 12h",
    "Vitamina C 1000mg",
    "Alcohol Gel 250ml",
    "Jarabe para la Tos 120ml",
  ],
  hogar: [
    "Escoba Deluxe",
    "Cubeta 10L",
    "Velas Aromáticas",
    "Trapo de Microfibra",
    "Balde con Tapa 20L",
  ],
  comida: [
    "Sopa Instantánea",
    "Atún en Agua",
    "Salsa de Tomate",
    "Hamburguesa Congelada",
    "Hot Dog de Carne 400g",
    "Pizza Congelada Pepperoni",
  ],
  tecnologia: [
    "Audífonos Bluetooth",
    "Teclado Gamer RGB",
    "Mouse Inalámbrico",
  ],
};
export const CATEGORIES = Object.keys(CATEGORY_MAP);