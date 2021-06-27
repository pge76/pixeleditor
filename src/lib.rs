use wasm_bindgen::prelude::*;

#[derive(Clone, Copy)]
struct Rgb {
    r: u8,
    g: u8,
    b: u8
}

#[wasm_bindgen]
pub struct Image {
    width: usize,
    height: usize,
    cells: Vec<Rgb>
}

#[wasm_bindgen]
impl Image {
    #[wasm_bindgen(constructor)]
    pub fn new(width: usize, height: usize) -> Image {
        let mut cells = Vec::new();
        cells.resize(width * height, Rgb { r: 200, g: 200, b:255 });
        Image { width, height, cells }
    }

    pub fn width(&self) -> usize { self.width }
    pub fn height(&self) -> usize { self.height }
    
    pub fn cells(&self) -> Vec<u8> {
        self.cells
            .iter()  // iterate over all Rgb structs in vector
            .map(|&rgb| vec![rgb.r, rgb.g, rgb.b])  // map every struct to a vector
            .collect::<Vec<Vec<u8>>>() // collect the vectors together
            .concat() // and concat them all into a single one
    }

}