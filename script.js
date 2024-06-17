function calculateLove() {
    var name1 = document.getElementById('name-1').value.trim();
    var name2 = document.getElementById('name-2').value.trim();

    if (name1 === '' || name2 === '') {
        alert('Please enter both names.');
        return;
    }

    var loader = document.getElementById('loader');
    loader.style.display = 'block'; // Show loader while calculating

    setTimeout(function() {
        var loveScore = Math.random() * 100;
        loveScore = Math.floor(loveScore) + 1;

        var result = `Love Score: ${loveScore}%`;
        document.getElementById('popup-result').textContent = result;
        document.getElementById('popup-names').textContent = `${name1} & ${name2}`;

        var popup = document.getElementById('popup');
        popup.style.display = 'block';
        popup.style.animation = 'popup-appear 0.3s ease-out forwards';

        loader.style.display = 'none'; // Hide loader after calculation
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }, 2000); // Simulate a delay for loading
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';

    document.body.style.overflow = 'auto'; // Enable scrolling again
}

function tryAgain() {
    closePopup();
    document.getElementById('loveForm').reset(); // Reset form fields
}
