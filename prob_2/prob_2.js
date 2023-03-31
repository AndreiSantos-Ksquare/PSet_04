"use strict";
class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.elements = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
    }
    getRows() {
        return this.rows;
    }
    getCols() {
        return this.cols;
    }
    fillMatrix(matrix) {
        for (let posx = 0; posx < matrix.getRows(); posx++) {
            for (let posy = 0; posy < matrix.getCols(); posy++) {
                const value = Math.floor(Math.random() * 20) + 1;
                matrix.setElementsOnMatrix(posx, posy, value);
            }
        }
    }
    setElementsOnMatrix(row, col, value) {
        this.elements[row][col] = value;
    }
    addMatrix(matrix) {
        if (this.rows !== matrix.getRows()) {
            console.log("NOOP");
            return null;
        }
        if (this.cols !== matrix.getCols()) {
            console.log("NOOP");
            return null;
        }
        const matrixAdd = new Matrix(this.rows, this.cols);
        for (let posx = 0; posx < this.rows; posx++) {
            for (let posy = 0; posy < this.cols; posy++) {
                let value = matrix.elements[posx][posy] + this.elements[posx][posy];
                matrixAdd.setElementsOnMatrix(posx, posy, value);
            }
        }
        return matrixAdd;
    }
    multMatrix(matrix) {
        if (this.cols !== matrix.getRows()) {
            console.log("NOOP");
            return null;
        }
        const newMatrix = new Matrix(this.rows, matrix.getCols());
        for (let posx = 0; posx < newMatrix.getRows(); posx++) {
            for (let posy = 0; posy < newMatrix.getCols(); posy++) {
                let value = 0;
                for (let pos = 0; pos < newMatrix.getCols(); pos++) {
                    value += this.elements[posx][pos] * matrix.elements[pos][posy];
                }
                newMatrix.setElementsOnMatrix(posx, posy, value);
            }
        }
        return newMatrix;
    }
}
const matrix1 = new Matrix(3, 4);
matrix1.fillMatrix(matrix1);
const matrix2 = new Matrix(3, 4);
matrix2.fillMatrix(matrix2);
const matrix3 = new Matrix(4, 4);
matrix3.fillMatrix(matrix3);
const resultAdd = matrix1.addMatrix(matrix2);
const resultMult = matrix1.multMatrix(matrix3);
const resultAddWrong = matrix1.addMatrix(matrix3);
console.log(resultAdd);
console.log(resultMult);
console.log(resultAddWrong);
