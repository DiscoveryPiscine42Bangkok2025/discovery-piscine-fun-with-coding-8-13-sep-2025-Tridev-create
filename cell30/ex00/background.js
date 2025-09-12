function changeDivColor() {
    const bg = document.getElementById('bg');
    const r = Math.floor(Math.random() * 10);
    const hexCharacters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexCharacters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    // document.body.style.backgroundColor = 'lightblue';

    console.log('f' + r + 'a6dd');

        // box.style.display = 'block';
        // box.classList.add('pink-bg');


        // box.classList.toggle('pink-bg');
        // box.classList.toggle('blue-bg');
}
