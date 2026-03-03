let section = document.querySelectorAll('.section');
let test = document.querySelector('.test')



section.forEach(element => {
    document.addEventListener('mousemove', (e) => {
        if(element.getBoundingClientRect().x > 150){
            let clientX = e.clientX * 0.04;
            let clientY = e.clientY * 0.04;
            let prClientX = e.clientX * 0.000001;
            let prClientY = e.clientY * 0.000001;
            // console.log(prClientY)
            console.log(element.getBoundingClientRect().x)
            let matrixValue = [
                                0, 1, 0, prClientY, 
                                1, 0, 0, prClientX, 
                                0, 0, 1, 0, 
                                clientX, clientY, 0, 1
            ];
            element.style.transform = `matrix3d(${matrixValue.join(', ')})`;
        }else if(element.getBoundingClientRect().x < 50){
            let clientX = e.clientX * 0.04 - 0.01;
            let clientY = e.clientY * 0.04 - 0.01;
            let prClientX = e.clientX * 0.000001 - 0.0007;
            let prClientY = e.clientY * 0.000001;
            // console.log(prClientY)
            // console.log(element.getBoundingClientRect().x)
            let matrixValue = [
                0, 1, 0, prClientY, 
                1, 0, 0, prClientX, 
                0, 0, 1, 0, 
                clientX, clientY, 0, 1
            ];
            element.style.transform = `matrix3d(${matrixValue.join(', ')})`
        }else{
            let clientX = e.clientX * 0.01;
            let clientY = e.clientY * 0.01;
            let prClientX = e.clientX * 0.0000001;
            let prClientY = e.clientY * 0.0000001;
            // console.log(prClientY)
            // console.log(element.getBoundingClientRect().x)
            let matrixValue = [
                0, 1, 0, prClientY, 
                1, 0, 0, prClientX, 
                0, 0, 1, 0, 
                clientX, clientY, 0, 1
            ];
            element.style.transform = `matrix3d(${matrixValue.join(', ')})`
        }
});

});