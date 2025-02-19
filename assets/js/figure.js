document.getElementById('btn').addEventListener('click', function() {
    const figureType = document.getElementById('figureType').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const color = document.getElementById('color').value;
    const figureContainer = document.getElementById('figure');
    const OutpuutCSS = document.getElementById('css-code');

    // Clear previous figure
    figureContainer.innerHTML = '';

    if (figureType === 'square' || figureType === 'squareRounded' || figureType === 'circle') {
        if (!width || !height) {
            alert('Please enter width and height.');
            return;
        }

        if (figureType === 'circle' && width !== height) {
            alert('Width and height must be the same for a circle.');
            return;
        }

        if (width > 100 || height > 100) {
            alert('Width and height must be less than 100.');
            return;
        } else if (width < 10 || height < 10) {
            alert('Width and height must be greater than 10.');
            return;
        }
        
        const figure = document.createElement('div');
        figure.className = figureType;
        figure.style.width = width + 'px';
        figure.style.height = height + 'px';
        figure.style.backgroundColor = color;
        figureContainer.appendChild(figure);
        
        const preElement = document.createElement('pre');

        if (figureType === 'square') {
            preElement.innerHTML = `.example-class { // You can change the class name
    width: ${width}px;
    height: ${height}px;
    background-color: ${color};
}`;
        } else if (figureType === 'squareRounded') {
            preElement.innerHTML = `.example-class { // You can change the class name
width: ${width}px;
height: ${height}px;
background-color: ${color};
border-radius: 30%;
        }`;
        } else {
            preElement.innerHTML = `.example-class { // You can change the class name
    width: ${width}px;
    height: ${height}px;
    background-color: ${color};
    border-radius: 50%;
}`;
        }
        OutpuutCSS.innerHTML = preElement.outerHTML;
    } else {
        alert('Please select a valid figure type.');
    }
});

function secretFunction() {
    alert("Why did you click me?");
    document.getElementById('title').innerHTML = 'You have been rickrolled!';
    document.getElementById('icon').href = 'https://yt3.googleusercontent.com/K2ecE5j90a_DFzugHo0bW98vFlIQ1JJgs9mbcav7RGy1t7adJRnd2jaIv-oc6XzTRvDdWlFCAfc=s160-c-k-c0x00ffffff-no-rj';
    document.body.innerHTML = '';
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    document.body.style.textAlign = 'center';
    const h1 = document.createElement('h1');
    h1.innerHTML = 'You have been rickrolled!';
    for (let i = 0; i < 100; i++) {
        document.body.appendChild(h1.cloneNode(true));
    }
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}