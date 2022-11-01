const fs = require('fs');
for(let i = 0; i <= 100; i++){
    const fileName = `${i}.txt`
    const contet = `Lista 1 - Cálculo 1 - Exercicio ${i}`
    fs.writeFileSync(fileName, contet);
}