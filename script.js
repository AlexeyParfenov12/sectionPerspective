let section = document.querySelectorAll('.section');
let test = document.querySelector('.test')



section.forEach(element => {
    document.addEventListener('mousemove', (e) => {
        if(element.getBoundingClientRect().x > window.innerWidth/2){
            let clientX = e.clientX * 0.03;
            let clientY = e.clientY * 0.03;
            let prClientX = e.clientX * 0.0000013;
            let prClientY = e.clientY * 0.0000013;
            let matrixValue = [
                                0, 1, 0, prClientY, 
                                1, 0, 0, prClientX, 
                                0, 0, 1, 0, 
                                clientX, clientY, 0, 1
            ];
            element.style.transform = `matrix3d(${matrixValue.join(', ')})`;
        }else if(element.getBoundingClientRect().x < window.innerWidth/2){
            let clientX = e.clientX * 0.03 - 0.01;
            let clientY = e.clientY * 0.03 - 0.01;
            let prClientX = e.clientX * 0.0000013 - 0.0007;
            let prClientY = e.clientY * 0.0000013;
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