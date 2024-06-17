function calculateLove() {
    var name1 = document.getElementById('name-1').value.trim();
    var name2 = document.getElementById('name-2').value.trim();

    if (name1 === '' || name2 === '') {
        alert('Please enter both names.');
        return;
    }

    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;

    var result = `Love Score: ${loveScore}%`;
    document.getElementById('popup-result').textContent = result;
    document.getElementById('popup-names').textContent = `${name1} & ${name2}`;

    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    popup.style.animation = 'popup-appear 0.3s ease-out forwards';

    document.body.style.overflow = 'hidden'; // Prevent scrolling background
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

function shareResult() {
    var name1 = document.getElementById('name-1').value.trim();
    var name2 = document.getElementById('name-2').value.trim();
    var loveScoreText = document.getElementById('popup-result').textContent;

    // Encode names and result for URL
    var encodedName1 = encodeURIComponent(name1);
    var encodedName2 = encodeURIComponent(name2);
    var encodedLoveScore = encodeURIComponent(loveScoreText);

    // Construct the shareable URL
    var shareURL = window.location.origin + '/result.html' +
                  '?name1=' + encodedName1 +
                  '&name2=' + encodedName2 +
                  '&loveScore=' + encodedLoveScore;

    // Open the URL in a new tab or window
    window.open(shareURL, '_blank');

    // Close the popup after sharing
    closePopup();
}
